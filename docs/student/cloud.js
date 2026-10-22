(function () {
  const config = window.SMART_MATURA_CONFIG || {};
  const sessionKey = "smartMaturaCloudSession";

  function configured() {
    return /^https:\/\/.+\.supabase\.co$/i.test(config.supabaseUrl || "")
      && typeof config.supabaseAnonKey === "string"
      && config.supabaseAnonKey.length > 30
      && !config.supabaseAnonKey.includes("PASTE_");
  }

  function readSession() {
    try { return JSON.parse(localStorage.getItem(sessionKey) || "null"); }
    catch { return null; }
  }

  function saveSession(value) {
    if (!value) {
      localStorage.removeItem(sessionKey);
      return null;
    }
    const session = {
      access_token: value.access_token,
      refresh_token: value.refresh_token,
      expires_in: value.expires_in,
      token_type: value.token_type || "bearer",
      user: value.user || null,
      expires_at_ms: Date.now() + Math.max(30, Number(value.expires_in || 3600) - 30) * 1000,
    };
    localStorage.setItem(sessionKey, JSON.stringify(session));
    return session;
  }

  async function authFetch(path, options = {}) {
    const response = await fetch(`${config.supabaseUrl}/auth/v1/${path}`, {
      method: options.method || "GET",
      headers: {
        apikey: config.supabaseAnonKey,
        "content-type": "application/json",
        ...(options.token ? { authorization: `Bearer ${options.token}` } : {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.msg || data.message || data.error_description || "Nie udało się połączyć z kontem.");
    return data;
  }

  async function refreshSession() {
    const current = readSession();
    if (!current?.refresh_token) return null;
    try {
      return saveSession(await authFetch("token?grant_type=refresh_token", {
        method: "POST",
        body: { refresh_token: current.refresh_token },
      }));
    } catch {
      saveSession(null);
      return null;
    }
  }

  async function validSession() {
    let session = readSession();
    if (!session) return null;
    if (!session.expires_at_ms || session.expires_at_ms <= Date.now()) session = await refreshSession();
    return session;
  }

  async function rest(path, options = {}) {
    let session = options.session || await validSession();
    if (!session?.access_token) throw new Error("Zaloguj się ponownie.");
    const run = (token) => fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
      method: options.method || "GET",
      headers: {
        apikey: config.supabaseAnonKey,
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
        ...(options.prefer ? { prefer: options.prefer } : {}),
      },
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
    let response = await run(session.access_token);
    if (response.status === 401) {
      session = await refreshSession();
      if (!session) throw new Error("Sesja wygasła. Zaloguj się ponownie.");
      response = await run(session.access_token);
    }
    const data = response.status === 204 ? null : await response.json().catch(() => null);
    if (!response.ok) throw new Error(data?.message || data?.hint || "Nie udało się zapisać danych.");
    return data;
  }

  async function signIn(email, password) {
    return saveSession(await authFetch("token?grant_type=password", {
      method: "POST",
      body: { email: email.trim(), password },
    }));
  }

  async function signUp(email, password, fullName) {
    const data = await authFetch("signup", {
      method: "POST",
      body: { email: email.trim(), password, data: { full_name: fullName.trim() } },
    });
    if (data.access_token) saveSession(data);
    return data;
  }

  async function signOut() {
    const session = readSession();
    if (session?.access_token) {
      await authFetch("logout", { method: "POST", token: session.access_token }).catch(() => {});
    }
    saveSession(null);
  }

  async function currentUser() {
    const session = await validSession();
    if (!session) return null;
    const user = await authFetch("user", { token: session.access_token }).catch(async () => {
      const renewed = await refreshSession();
      return renewed ? authFetch("user", { token: renewed.access_token }) : null;
    });
    if (!user) return null;
    const rows = await rest(`profiles?id=eq.${encodeURIComponent(user.id)}&select=id,email,full_name,role,active,created_at&limit=1`);
    return { session: await validSession(), user, profile: rows?.[0] || null };
  }

  async function getProgress(userId) {
    const rows = await rest(`student_progress?user_id=eq.${encodeURIComponent(userId)}&select=progress,updated_at&limit=1`);
    return rows?.[0] || null;
  }

  async function saveProgress(userId, progress) {
    return rest("student_progress?on_conflict=user_id", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: { user_id: userId, progress, updated_at: new Date().toISOString() },
    });
  }

  async function saveEvent(userId, event) {
    return rest("learning_events?on_conflict=event_id", {
      method: "POST",
      prefer: "resolution=ignore-duplicates,return=minimal",
      body: {
        event_id: event.eventId,
        user_id: userId,
        event_type: event.type,
        payload: event.payload || {},
        created_at: event.createdAt,
      },
    });
  }

  async function listStudents() {
    return rest("profiles?role=eq.student&select=id,email,full_name,role,active,created_at,student_progress(progress,updated_at)&order=created_at.desc");
  }

  async function setStudentAccess(id, active) {
    return rest(`profiles?id=eq.${encodeURIComponent(id)}&role=eq.student`, {
      method: "PATCH",
      prefer: "return=representation",
      body: { active },
    });
  }

  window.smartMaturaCloud = {
    configured,
    signIn,
    signUp,
    signOut,
    currentUser,
    getProgress,
    saveProgress,
    saveEvent,
    listStudents,
    setStudentAccess,
  };
})();
