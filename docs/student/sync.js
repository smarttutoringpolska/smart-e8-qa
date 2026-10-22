(function () {
  const storageKey = "smartE8Progress";
  const eventQueueKey = "smartE8EventQueue";
  const ownerKey = "smartE8ProgressOwner";
  const scriptRoot = new URL("./", window.location.href).pathname;
  const cloud = window.smartMaturaCloud;
  let saveTimer = null;
  let pendingProgress = null;
  let currentAccount = null;

  function startEntryAnimation() {
    const splash = document.querySelector("#entrySplash");
    if (!splash) return;
    let seen = false;
    try { seen = sessionStorage.getItem("smartE8IntroSeen") === "1"; } catch {}
    if (seen) {
      splash.remove();
      return;
    }
    document.body.classList.add("entry-active");
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem("smartE8IntroSeen", "1"); } catch {}
      splash.classList.add("leaving");
      document.body.classList.remove("entry-active");
      setTimeout(() => splash.remove(), 650);
    };
    document.querySelector("#entrySkip")?.addEventListener("click", finish);
    window.addEventListener("keydown", (event) => { if (event.key === "Escape") finish(); }, { once: true });
    setTimeout(finish, 2450);
  }

  startEntryAnimation();

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  function authShell(content) {
    let gate = document.querySelector("#authGate");
    if (!gate) {
      gate = document.createElement("section");
      gate.id = "authGate";
      gate.className = "auth-gate";
      document.body.appendChild(gate);
    }
    gate.hidden = false;
    gate.innerHTML = `<div class="auth-card">${content}</div>`;
    return gate;
  }

  function setupRequired() {
    authShell(`<div class="auth-state"><div class="auth-state-icon">⚙</div><span class="auth-eyebrow">KONFIGURACJA</span><h1>Podłącz bazę uczniów</h1><p class="auth-message">Panel kont jest już gotowy. Uzupełnij adres projektu i klucz publiczny Supabase w pliku <b>config.js</b>.</p></div>`);
  }

  function pendingAccess(account) {
    const gate = authShell(`<div class="auth-state"><div class="auth-state-icon">⌛</div><span class="auth-eyebrow">KONTO UTWORZONE</span><h1>Czekasz na aktywację</h1><p class="auth-message">Administrator musi zatwierdzić dostęp dla <b>${escapeHtml(account?.user?.email || "Twojego konta")}</b>. Gdy to zrobi, odśwież stronę.</p><button class="auth-submit" id="checkAccess">Sprawdź ponownie</button><button class="auth-secondary" id="authLogout">Wyloguj się</button></div>`);
    gate.querySelector("#checkAccess")?.addEventListener("click", () => location.reload());
    gate.querySelector("#authLogout")?.addEventListener("click", async () => { await cloud.signOut(); location.reload(); });
  }

  function showAuthForm() {
    return new Promise((resolve) => {
      const gate = authShell(`<div class="auth-brand"><span class="auth-mark">E8</span>SMART E8</div><span class="auth-eyebrow">PANEL UCZNIA</span><h1>Zaloguj się do nauki</h1><p>Twój postęp, wyniki i powtórki będą dostępne na każdym urządzeniu.</p><div class="auth-tabs"><button class="auth-tab active" data-auth-tab="login">Logowanie</button><button class="auth-tab" data-auth-tab="signup">Utwórz konto</button></div><form class="auth-form" id="loginForm"><div class="auth-field"><label for="loginEmail">Adres e-mail</label><input id="loginEmail" name="email" type="email" autocomplete="email" required /></div><div class="auth-field"><label for="loginPassword">Hasło</label><input id="loginPassword" name="password" type="password" autocomplete="current-password" minlength="8" required /></div><p class="auth-error" id="loginError"></p><button class="auth-submit" type="submit">Zaloguj się</button></form><form class="auth-form" id="signupForm" hidden><div class="auth-field"><label for="signupName">Imię i nazwisko</label><input id="signupName" name="name" autocomplete="name" required /></div><div class="auth-field"><label for="signupEmail">Adres e-mail</label><input id="signupEmail" name="email" type="email" autocomplete="email" required /></div><div class="auth-field"><label for="signupPassword">Hasło — minimum 8 znaków</label><input id="signupPassword" name="password" type="password" autocomplete="new-password" minlength="8" required /></div><p class="auth-error" id="signupError"></p><button class="auth-submit" type="submit">Załóż konto</button></form><p class="auth-note">Dostęp do kursów aktywuje administrator po potwierdzeniu płatności.</p>`);
      const switchTab = (name) => {
        gate.querySelectorAll("[data-auth-tab]").forEach((button) => button.classList.toggle("active", button.dataset.authTab === name));
        gate.querySelector("#loginForm").hidden = name !== "login";
        gate.querySelector("#signupForm").hidden = name !== "signup";
      };
      gate.querySelectorAll("[data-auth-tab]").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.authTab)));
      gate.querySelector("#loginForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const submit = form.querySelector("button[type=submit]");
        const error = form.querySelector("#loginError");
        submit.disabled = true;
        error.textContent = "";
        try {
          await cloud.signIn(form.email.value, form.password.value);
          const account = await cloud.currentUser();
          if (!account?.profile?.active) pendingAccess(account);
          else { gate.remove(); resolve(account); }
        } catch (reason) {
          error.textContent = reason.message === "Invalid login credentials" ? "Nieprawidłowy e-mail lub hasło." : reason.message;
        } finally { submit.disabled = false; }
      });
      gate.querySelector("#signupForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const submit = form.querySelector("button[type=submit]");
        const error = form.querySelector("#signupError");
        submit.disabled = true;
        error.textContent = "";
        try {
          await cloud.signUp(form.email.value, form.password.value, form.name.value);
          authShell(`<div class="auth-state"><div class="auth-state-icon">✉</div><span class="auth-eyebrow">PRAWIE GOTOWE</span><h1>Potwierdź swój e-mail</h1><p class="auth-message">Jeśli otrzymasz wiadomość od Smart E8, kliknij link potwierdzający. Następnie wróć tutaj i zaloguj się.</p><button class="auth-submit" id="backToLogin">Wróć do logowania</button></div>`).querySelector("#backToLogin")?.addEventListener("click", () => location.reload());
        } catch (reason) { error.textContent = reason.message; submit.disabled = false; }
      });
    });
  }

  async function requireAccount() {
    if (!cloud?.configured()) { setupRequired(); return null; }
    const existing = await cloud.currentUser().catch(() => null);
    if (!existing) return showAuthForm();
    if (!existing.profile?.active) { pendingAccess(existing); return null; }
    return existing;
  }

  function readLocal() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  }

  function readEventQueue() {
    try {
      const queue = JSON.parse(localStorage.getItem(eventQueueKey) || "[]");
      return Array.isArray(queue) ? queue.slice(-100) : [];
    } catch {
      return [];
    }
  }

  function eventId(prefix) {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function queueEvent(event) {
    const queue = readEventQueue();
    if (!queue.some((item) => item.eventId === event.eventId)) queue.push(event);
    localStorage.setItem(eventQueueKey, JSON.stringify(queue.slice(-100)));
  }

  async function sendEvent(event) {
    if (!currentAccount) throw new Error("event failed");
    await cloud.saveEvent(currentAccount.user.id, event);
  }

  async function flushEvents() {
    const queue = readEventQueue();
    if (!queue.length) return;
    const remaining = [];
    for (const event of queue) {
      try {
        await sendEvent(event);
      } catch {
        remaining.push(event);
      }
    }
    localStorage.setItem(eventQueueKey, JSON.stringify(remaining.slice(-100)));
  }

  function track(type, payload, stableId) {
    const event = {
      eventId: stableId || eventId(type),
      type,
      payload: payload && typeof payload === "object" ? payload : {},
      createdAt: new Date().toISOString(),
    };
    queueEvent(event);
    sendEvent(event)
      .then(() => {
        const remaining = readEventQueue().filter((item) => item.eventId !== event.eventId);
        localStorage.setItem(eventQueueKey, JSON.stringify(remaining));
      })
      .catch(() => {});
  }

  function setSyncStatus(label, state) {
    const status = document.querySelector("#syncStatus");
    if (!status) return;
    status.textContent = label;
    status.dataset.state = state || "";
  }

  async function saveRemote(progress) {
    setSyncStatus("Zapisywanie…", "saving");
    try {
      if (!currentAccount) throw new Error("save failed");
      await cloud.saveProgress(currentAccount.user.id, progress);
      setSyncStatus("Postęp zapisany", "saved");
    } catch {
      setSyncStatus("Zapisano na urządzeniu", "offline");
    }
  }

  function schedule(progress) {
    pendingProgress = JSON.parse(JSON.stringify(progress));
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      const next = pendingProgress;
      pendingProgress = null;
      if (next) saveRemote(next);
    }, 650);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${scriptRoot}${src}?v=e8-20260930-layout-fix`;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function configureAccount(user) {
    const label = document.querySelector("#accountName");
    const email = document.querySelector("#accountEmail");
    const button = document.querySelector("#accountButton");
    const menu = document.querySelector("#accountMenu");
    const qualityLink = document.querySelector("#qualityLink");
    const signOut = document.querySelector("#signOutButton");
    const storageNote = document.querySelector("#accountStorageNote");
    if (label) label.textContent = user.fullName || user.displayName || "Uczeń";
    if (email) email.textContent = user.email || "";
    if (storageNote) storageNote.textContent = "Postęp zapisuje się automatycznie online.";
    if (qualityLink && user.isOwner) qualityLink.hidden = false;
    button?.addEventListener("click", () => menu?.classList.toggle("open"));
    signOut?.addEventListener("click", async () => {
      await cloud.signOut();
      localStorage.removeItem(storageKey);
      localStorage.removeItem(eventQueueKey);
      localStorage.removeItem(ownerKey);
      location.reload();
    });
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element) || !event.target.closest(".account-wrap")) {
        menu?.classList.remove("open");
      }
    });
  }

  async function start() {
    if (!cloud?.configured()) {
      window.smartMaturaUser = {
        id: "local-student",
        email: "",
        fullName: "Uczeń",
        displayName: "Uczeń",
        isOwner: false,
      };
      window.smartMaturaSync = {
        schedule(progress) {
          localStorage.setItem(storageKey, JSON.stringify(progress || {}));
          setSyncStatus("Postęp na tym urządzeniu", "offline");
        },
        saveNow(progress) {
          localStorage.setItem(storageKey, JSON.stringify(progress || {}));
          return Promise.resolve();
        },
        track() {},
      };
      document.querySelector("#authGate")?.remove();
      const accountName = document.querySelector("#accountName");
      const accountEmail = document.querySelector("#accountEmail");
      const accountButton = document.querySelector("#accountButton");
      const accountMenu = document.querySelector("#accountMenu");
      const signOut = document.querySelector("#signOutButton");
      const storageNote = document.querySelector("#accountStorageNote");
      if (accountName) accountName.textContent = "Uczeń";
      if (accountEmail) accountEmail.textContent = "Postęp zapisuje się na tym urządzeniu";
      if (storageNote) storageNote.textContent = "Postęp zapisuje się w tej przeglądarce.";
      if (signOut) signOut.hidden = true;
      accountButton?.addEventListener("click", () => accountMenu?.classList.toggle("open"));
      document.addEventListener("click", (event) => {
        if (!(event.target instanceof Element) || !event.target.closest(".account-wrap")) accountMenu?.classList.remove("open");
      });
      setSyncStatus("Postęp na tym urządzeniu", "offline");
      for (const script of ["more-courses.js", "e8-learning-engine.js", "diagnostic.js", "knowledge.js", "e8-data.js", "e8-more-data.js", "e8-textbook-data.js", "e8-curriculum.js", "e8-program-final.js", "e8-visual-system.js", "e8-visual-system-v2.js", "e8-visual-premium.js", "e8-task-visuals.js", "e8-open-work.js", "e8-open-work-more.js", "e8-open-work-extra.js", "e8-self-work.js", "app.js"]) {
        await loadScript(script);
      }
      return;
    }
    setSyncStatus("Synchronizacja…", "saving");
    currentAccount = await requireAccount();
    if (!currentAccount) return;
    const previousOwner = localStorage.getItem(ownerKey);
    if (previousOwner && previousOwner !== currentAccount.user.id) {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(eventQueueKey);
    }
    localStorage.setItem(ownerKey, currentAccount.user.id);
    let local = readLocal();
    try {
      const data = await cloud.getProgress(currentAccount.user.id);
      const profile = currentAccount.profile;
      window.smartMaturaUser = {
        id: currentAccount.user.id,
        email: profile.email || currentAccount.user.email,
        fullName: profile.full_name || currentAccount.user.user_metadata?.full_name || "Uczeń",
        displayName: profile.full_name || currentAccount.user.email?.split("@")[0] || "Uczeń",
        isOwner: profile.role === "admin",
      };

      const remote = data?.progress && typeof data.progress === "object" && !Array.isArray(data.progress) ? data.progress : null;
      const localStamp = Date.parse(local.syncUpdatedAt || "") || 0;
      const remoteStamp = Date.parse(remote?.syncUpdatedAt || data?.updated_at || "") || 0;
      if (remote && remoteStamp >= localStamp) {
        local = remote;
      }

      const suggestedName = window.smartMaturaUser.fullName || window.smartMaturaUser.displayName;
      if (!local.studentName) local.studentName = suggestedName;
      localStorage.setItem(storageKey, JSON.stringify(local));

      if (!remote || localStamp > remoteStamp) await saveRemote(local);
      else setSyncStatus("Postęp zsynchronizowany", "saved");
      configureAccount(window.smartMaturaUser);
    } catch {
      setSyncStatus("Tryb lokalny", "offline");
    }

    window.smartMaturaSync = { schedule, saveNow: saveRemote, track };
    flushEvents().catch(() => {});
    window.addEventListener("pagehide", () => {
      const progress = readLocal();
      const session = progress.dailySession;
      if (!session || session.version !== 3 || session.completedAt || !session.telemetryStartedAt) return;
      const current = Number(session.current) || 0;
      const event = {
        eventId: `abandon-${session.date}-${current}`,
        type: "daily_session_abandoned",
        payload: {
          sessionDate: session.date,
          questionIndex: current,
          answeredCount: Array.isArray(session.answers) ? session.answers.filter(Boolean).length : 0,
          courseId: session.courseId || "unknown",
        },
        createdAt: new Date().toISOString(),
      };
      queueEvent(event);
    });
    for (const script of ["more-courses.js", "e8-learning-engine.js", "diagnostic.js", "knowledge.js", "e8-data.js", "e8-more-data.js", "e8-textbook-data.js", "e8-curriculum.js", "e8-program-final.js", "e8-visual-system.js", "e8-visual-system-v2.js", "e8-visual-premium.js", "e8-task-visuals.js", "e8-open-work.js", "e8-open-work-more.js", "e8-open-work-extra.js", "e8-self-work.js", "app.js"]) {
      await loadScript(script);
    }
  }

  start().catch(() => setSyncStatus("Odśwież stronę", "offline"));
})();
