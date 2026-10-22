(() => {
  const profiles = { weak30: ['Podstawy', 30], average50: ['Systematyczny', 50], good70: ['Dobry', 70], ambitious90: ['Ambitny', 90], focus: ['Koncentracja', 50], compact: ['Mały ekran', 70] };
  const params = new URLSearchParams(location.search);
  const requested = params.get('qaProfile');
  const activeKey = 'smartE8QAActiveProfile';
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  let active = read(activeKey);
  const profile = Object.hasOwn(profiles, requested) ? requested : Object.hasOwn(profiles, active) ? active : 'average50';
  const backup = id => {
    const progress = read('smartE8Progress');
    if (progress && id) localStorage.setItem(`smartE8QAProfile:${id}`, progress);
  };
  try {
    if (active !== profile) {
      backup(active);
      const stored = read(`smartE8QAProfile:${profile}`);
      localStorage.setItem('smartE8Progress', stored || JSON.stringify({ studentName: `Tester ${profiles[profile][0]}`, scoreGoal: profiles[profile][1] }));
      localStorage.setItem(activeKey, profile);
    }
    window.addEventListener('pagehide', () => backup(profile));
  } catch (error) { console.warn('QA profile storage unavailable', error.name); }
  window.SMART_E8_QA = { profile, target: profiles[profile][1], version: 'qa-1' };
  const bar = document.createElement('details');
  bar.id = 'qaTools';
  bar.innerHTML = `<summary>QA · ${profiles[profile][0]}</summary><a href="../">Zmień profil</a><button type="button">Eksportuj postęp</button><a href="https://github.com/smarttutoringpolska/smart-e8-qa/issues/new?template=bug_report.yml" target="_blank" rel="noopener">Zgłoś błąd</a><small>Postęp tylko w tej przeglądarce. Jeden profil w jednej karcie. Eksport to kopia zapasowa; raporty agenta są w GitHub Issues.</small>`;
  const style = document.createElement('style');
  style.textContent = '#qaTools{position:fixed;right:12px;bottom:12px;z-index:10000;max-width:min(320px,calc(100vw - 24px));font:13px/1.5 system-ui;color:#fff;background:#2b163f;border:1px solid #a99cc3;border-radius:12px;box-shadow:0 4px 18px #0002}#qaTools summary{cursor:pointer;padding:7px 12px;font-weight:650}#qaTools a,#qaTools button{display:block;box-sizing:border-box;width:calc(100% - 20px);margin:6px 10px;padding:9px;border:1px solid #c4b5fd;border-radius:7px;background:#fff;color:#35175c;text-align:center;text-decoration:none;font:inherit}#qaTools small{display:block;margin:10px;color:#e0d7ed}';
  document.head.append(style);
  document.body.append(bar);
  bar.querySelector('button').addEventListener('click', () => {
    backup(profile);
    const data = { schemaVersion: 1, profile, exportedAt: new Date().toISOString(), progress: JSON.parse(read('smartE8Progress') || '{}') };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `smart-e8-${profile}-${Date.now()}.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
