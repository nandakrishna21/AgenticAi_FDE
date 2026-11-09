(function () {
  const { R, YT, PHASES, DAYS, ROLES, PHASE_GUIDE, SYLLABUS } = window.SPRINT_DATA;
  const STORAGE_KEY = 'sprint45v2';
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  let current = 0;
  let filter = '';

  const keysOf = (d, i) => [
    ...d.ai.map((_, j) => `${i}-ai-${j}`),
    ...d.fde.map((_, j) => `${i}-fde-${j}`),
    ...d.dsa.map((_, j) => `${i}-dsa-${j}`),
    ...d.int.map((_, j) => `${i}-int-${j}`)
  ];
  const taskKeys = DAYS.flatMap(keysOf);
  const totalTasks = taskKeys.length;
  const dayComplete = i => keysOf(DAYS[i], i).every(k => state[k]);
  const dayDoneCount = i => keysOf(DAYS[i], i).filter(k => state[k]).length;
  const phaseFor = i => PHASES.find(p => i < p.until);
  const phaseRange = p => {
    let prev = 0;
    for (const ph of PHASES) { if (ph === p) break; prev = ph.until; }
    return { start: prev, end: p.until };
  };

  const save = () => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderStats(); renderList(); };

  function renderList() {
    const el = document.getElementById('dayList');
    el.innerHTML = '';
    let lastPhase = null, matches = 0;
    DAYS.forEach((d, i) => {
      if (filter && !`${d.t} ${d.d} ${d.ai.join(' ')} ${d.fde.join(' ')} ${d.dsa.join(' ')} ${d.int.join(' ')}`.toLowerCase().includes(filter)) return;
      matches++;
      const ph = phaseFor(i);
      if (ph !== lastPhase) {
        const { start, end } = phaseRange(ph);
        const total = end - start, done = Array.from({ length: total }, (_, k) => start + k).filter(dayComplete).length;
        const lab = document.createElement('div');
        lab.className = 'phase-label';
        lab.innerHTML = `<span>${ph.key} — ${ph.label}</span><span class="phase-progress">${done}/${total} days</span><div class="phase-bar"><div style="width:${(done / total) * 100}%"></div></div>`;
        el.appendChild(lab);
        lastPhase = ph;
      }
      const b = document.createElement('button');
      b.className = 'day-btn' + (i === current ? ' active' : '') + (dayComplete(i) ? ' done' : '');
      b.innerHTML = `<span class="dot">${dayComplete(i) ? '✓' : i + 1}</span><span class="day-title">Day ${i + 1} — ${d.t}</span>`;
      b.onclick = () => { current = i; renderList(); renderDetail(); };
      el.appendChild(b);
    });
    if (!matches) el.innerHTML = '<div class="no-results">No days match your search.</div>';
  }

  function group(arr, type, title, cls) {
    return `<div class="card ${cls}"><h3>${title}</h3>` + arr.map((t, j) => {
      const key = `${current}-${type}-${j}`, c = !!state[key];
      return `<label class="task${c ? ' checked' : ''}"><input type="checkbox" data-key="${key}" ${c ? 'checked' : ''}><span>${t}</span></label>`;
    }).join('') + '</div>';
  }

  function renderDetail() {
    const d = DAYS[current];
    const ph = phaseFor(current);
    const doneCount = dayDoneCount(current), dayTotal = keysOf(d, current).length;
    const pct = Math.round(doneCount / dayTotal * 100);
    const C = 2 * Math.PI * 26, offset = C * (1 - pct / 100);
    const resHtml = d.res.map(k => {
      const r = R[k] || YT[k]; if (!r) return '';
      return `<a class="${YT[k] ? 'yt' : ''}" href="${r[1]}" target="_blank" rel="noopener">${r[0]}</a>`;
    }).join('');

    const phaseIndex = PHASES.findIndex(p => current < p.until);
    const pg = PHASE_GUIDE[phaseIndex];
    const notes = getNotes()[current] || '';
    document.getElementById('detail').innerHTML = `
      <div class="detail-top">
        <div>
          <span class="phase-tag">${ph.full}</span>
          <h2>Day ${current + 1} — ${d.t}</h2>
          <div class="topic">${d.d}</div>
        </div>
        <div class="day-ring">
          <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label="${pct}% of day complete">
            <defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#5b9dff"/><stop offset="1" stop-color="#2ee6a8"/>
            </linearGradient></defs>
            <circle class="ring-bg" cx="36" cy="36" r="26" stroke-width="7" fill="none"/>
            <circle class="ring-fg" cx="36" cy="36" r="26" stroke-width="7" fill="none"
              stroke-dasharray="${C}" stroke-dashoffset="${offset}"/>
            <text x="36" y="41" text-anchor="middle" fill="#e8ecf8" font-size="16" font-weight="700">${pct}%</text>
          </svg>
          <div class="ring-label"><b>${doneCount}</b>/${dayTotal} tasks</div>
        </div>
      </div>
      <div class="cols">
        ${group(d.ai, 'ai', 'AI + Agentic Engineering', 'ai')}
        ${group(d.fde, 'fde', 'FDE — Customer & Delivery', 'fde')}
        ${group(d.dsa, 'dsa', 'DSA', 'dsa')}
        ${group(d.int, 'int', 'Interview Prep', 'int')}
      </div>
      <div class="syllabus-block">
        <h3><span>Detailed day syllabus</span> — study in this exact order</h3>
        <ol>${SYLLABUS[current].map(item => `<li>${item}</li>`).join('')}</ol>
      </div>
      <details class="phase-guide">
        <summary><b>Phase focus, checkpoint &amp; pitfalls</b></summary>
        <div class="pg-row"><b>Focus</b><span>${pg.focus}</span></div>
        <div class="pg-row"><b>Checkpoint</b><span>${pg.checkpoint}</span></div>
        <ul>${pg.pitfalls.map(p => `<li>${p}</li>`).join('')}</ul>
        <div class="pg-tip">Study tip: ${pg.studyTip}</div>
      </details>
      <div class="resources"><h3>Free Resources</h3>${resHtml}</div>
      <div class="notes-block">
        <label for="dayNotes">Day ${current + 1} notes — write what confused you, what you built, what to revisit</label>
        <textarea id="dayNotes" placeholder="e.g. 'Cosine similarity clicked when I visualized it. Still stuck on hybrid BM25 weighting…'">${notes.replace(/</g, '&lt;')}</textarea>
      </div>
      <div class="btn-row">
        <button class="btn ghost" id="prevDay">← Day ${Math.max(1, current)}</button>
        <span class="kbd-hint">Use <kbd>←</kbd> <kbd>→</kbd> to navigate &middot; <kbd>/</kbd> to search</span>
        <button class="btn" id="nextDay">${current < 44 ? `Day ${current + 2} →` : 'Finish ✓'}</button>
      </div>`;

    document.querySelectorAll('#detail input[type=checkbox]').forEach(cb => {
      cb.onchange = () => {
        const wasComplete = dayComplete(current);
        if (cb.checked) state[cb.dataset.key] = true; else delete state[cb.dataset.key];
        touchStreak();
        save();
        if (!wasComplete && dayComplete(current)) fireConfetti();
        renderDetail();
      };
    });
    document.getElementById('dayNotes').addEventListener('input', e => { const n = getNotes(); n[current] = e.target.value; saveNotes(n); });
    document.getElementById('nextDay').onclick = () => { if (current < 44) { current++; renderList(); renderDetail(); window.scrollTo(0, 0); } };
    document.getElementById('prevDay').onclick = () => { if (current > 0) { current--; renderList(); renderDetail(); window.scrollTo(0, 0); } };
  }

  function renderStats() {
    const done = taskKeys.filter(k => state[k]).length;
    document.getElementById('taskCount').textContent = done;
    document.getElementById('taskTotal').textContent = totalTasks;
    document.getElementById('dayCount').textContent = DAYS.filter((_, i) => dayComplete(i)).length;
    const pct = Math.round(done / totalTasks * 100);
    document.getElementById('pct').textContent = pct + '%';
    document.getElementById('bar').style.width = pct + '%';
    if (document.getElementById('levelName')) { renderLevel(); renderBadges(); updateSprintBanner(); }
  }

  document.getElementById('search').addEventListener('input', e => { filter = e.target.value.trim().toLowerCase(); renderList(); });
  document.getElementById('resetBtn').onclick = () => { if (confirm('Reset ALL progress? This cannot be undone.')) { Object.keys(state).forEach(k => delete state[k]); save(); renderDetail(); } };

  let tSec = 0, tInt = null;
  const timerEl = document.getElementById('timer');
  document.getElementById('timerBtn').onclick = function () {
    if (tInt) { clearInterval(tInt); tInt = null; this.textContent = 'Start'; return; }
    this.textContent = 'Pause';
    tInt = setInterval(() => {
      tSec++;
      const h = String(Math.floor(tSec / 3600)).padStart(2, '0'), m = String(Math.floor(tSec / 60) % 60).padStart(2, '0'), s = String(tSec % 60).padStart(2, '0');
      timerEl.textContent = `${h}:${m}:${s}`;
    }, 1000);
  };

  document.addEventListener('keydown', e => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' && e.key !== 'Escape') return;
    if (e.key === 'ArrowRight' && current < 44) { current++; renderList(); renderDetail(); }
    else if (e.key === 'ArrowLeft' && current > 0) { current--; renderList(); renderDetail(); }
    else if (e.key === '/') { e.preventDefault(); document.getElementById('search').focus(); }
    else if (e.key === 'Escape') { e.target.blur && e.target.blur(); }
  });

  /* ===== Notes, streak, theme, confetti, export, print, compare ===== */
  const getNotes = () => JSON.parse(localStorage.getItem('sprint45-notes') || '{}');
  const saveNotes = n => localStorage.setItem('sprint45-notes', JSON.stringify(n));

  const getActiveDates = () => JSON.parse(localStorage.getItem('sprint45-active') || '[]');
  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const dates = getActiveDates();
    if (!dates.includes(today)) { dates.push(today); localStorage.setItem('sprint45-active', JSON.stringify(dates)); }
    renderStreak();
  }
  function renderStreak() {
    const dates = new Set(getActiveDates());
    let streak = 0;
    const d = new Date();
    // if today not active yet, streak can still count from yesterday
    if (!dates.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (dates.has(d.toISOString().slice(0, 10))) { streak++; d.setDate(d.getDate() - 1); }
    document.getElementById('streakCount').textContent = streak;
  }

  const themeBtn = document.getElementById('themeBtn');
  const applyTheme = t => { document.documentElement.dataset.theme = t; localStorage.setItem('sprint45-theme', t); };
  applyTheme(localStorage.getItem('sprint45-theme') || 'dark');
  themeBtn.onclick = () => applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');

  document.getElementById('exportBtn').onclick = () => {
    const payload = { exportedAt: new Date().toISOString(), completedTasks: taskKeys.filter(k => state[k]), notes: getNotes(), activeDates: getActiveDates() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'sprint45-progress.json'; a.click(); URL.revokeObjectURL(a.href);
  };

  document.getElementById('printBtn').onclick = () => {
    let sheet = document.getElementById('printSheet');
    if (!sheet) { sheet = document.createElement('div'); sheet.id = 'printSheet'; document.body.appendChild(sheet); }
    sheet.innerHTML = '<h1>45-Day AI Engineer + Agentic + FDE Sprint — Full Plan</h1>' + DAYS.map((d, i) => `
      <section class="ps-day">
        <h2>Day ${i + 1} — ${d.t}</h2>
        <p class="ps-topic">${d.d}</p>
        <div class="ps-cols">
          <div><b>AI + Agentic</b><ul>${d.ai.map(t => `<li>${t}</li>`).join('')}</ul></div>
          <div><b>FDE</b><ul>${d.fde.map(t => `<li>${t}</li>`).join('')}</ul></div>
          <div><b>DSA</b><ul>${d.dsa.map(t => `<li>${t}</li>`).join('')}</ul></div>
          <div><b>Interview</b><ul>${d.int.map(t => `<li>${t}</li>`).join('')}</ul></div>
        </div>
      </section>`).join('');
    window.print();
  };

  const compareRows = [
    ['What you own', r => r.whatYouOwn],
    ['Hard part', r => r.hardPart],
    ['Judged on', r => r.judgedOn],
    ['Travel / context', r => r.travel],
    ['Best if', r => r.bestIf],
    ['Roadmap focus', r => r.roadmap.find(s => s.focus.includes('CORE'))?.focus || r.roadmap[2].focus]
  ];
  function renderCompare() {
    document.getElementById('roleCompare').innerHTML = `
      <table class="compare-table">
        <thead><tr><th></th>${ROLES.map(r => `<th>${r.name}</th>`).join('')}</tr></thead>
        <tbody>${compareRows.map(([label, fn]) => `<tr><th>${label}</th>${ROLES.map(r => `<td>${fn(r)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>`;
  }
  document.getElementById('compareToggle').onclick = function () {
    const el = document.getElementById('roleCompare');
    el.hidden = !el.hidden;
    if (!el.hidden && !el.innerHTML) renderCompare();
    this.textContent = el.hidden ? '⇄ Compare all three roles side-by-side' : '× Hide comparison';
  };

  function fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = innerWidth; canvas.height = innerHeight;
    const colors = ['#5b9dff', '#2ee6a8', '#ffc94d', '#c792ea', '#ff7b7b'];
    const parts = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.3,
      w: 6 + Math.random() * 6, h: 8 + Math.random() * 10,
      vy: 2 + Math.random() * 3, vx: -1.5 + Math.random() * 3,
      color: colors[(Math.random() * colors.length) | 0], rot: Math.random() * Math.PI, vr: -0.05 + Math.random() * 0.1
    }));
    const start = performance.now();
    (function frame(now) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(p => { p.y += p.vy; p.x += p.vx; p.rot += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore(); });
      if (now - start < 2200) requestAnimationFrame(frame); else canvas.remove();
    })(start);
  }

  /* ===== XP, levels, badges, sprint banner ===== */
  const XP_PER = { ai: 10, fde: 15, dsa: 20, int: 10 };
  const LEVELS = [[0, 'Rookie'], [150, 'Explorer'], [350, 'Builder'], [600, 'Engineer'], [900, 'Agent Tamer'], [1200, 'FDE Material'], [1550, 'Offer Ready'], [1950, 'Legend']];
  const totalXp = () => Object.keys(state).reduce((sum, k) => sum + (XP_PER[k.split('-')[1]] || 0), 0);
  const tasksDone = () => Object.keys(state).length;

  function renderLevel() {
    const xp = totalXp();
    let li = 0;
    for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i][0]) li = i;
    const [floor, name] = LEVELS[li];
    const ceil = li + 1 < LEVELS.length ? LEVELS[li + 1][0] : floor + 400;
    const fill = Math.min(100, Math.round(((xp - floor) / (ceil - floor)) * 100));
    document.getElementById('levelName').textContent = name;
    document.getElementById('xpCount').textContent = xp;
    document.getElementById('levelFill').style.width = fill + '%';
  }

  const BADGES = [
    { id: 'first', glyph: '★', name: 'First Blood', desc: 'Complete your first task', test: () => tasksDone() >= 1 },
    { id: 'd1', glyph: 'I', name: 'Day One Down', desc: 'Complete Day 1', test: () => dayComplete(0) },
    { id: 'p1', glyph: 'II', name: 'Foundation Set', desc: 'Finish Phase 1', test: () => [0,1,2,3,4,5,6].every(dayComplete) },
    { id: 'rag', glyph: 'III', name: 'RAG Runner', desc: 'Finish Phase 2', test: () => [7,8,9,10,11,12,13].every(dayComplete) },
    { id: 'agent', glyph: 'IV', name: 'Agent Tamer', desc: 'Finish Phase 3', test: () => [14,15,16,17,18,19,20].every(dayComplete) },
    { id: 'prod', glyph: 'V', name: 'Production Hardened', desc: 'Finish Phase 4', test: () => [21,22,23,24,25,26,27].every(dayComplete) },
    { id: 'ship', glyph: 'VI', name: 'Shipper', desc: 'Finish Phase 5 — flagship deployed', test: () => [28,29,30,31,32,33,34].every(dayComplete) },
    { id: 'offer', glyph: 'VII', name: 'Offer Ready', desc: 'Finish all 45 days', test: () => DAYS.every((_, i) => dayComplete(i)) },
    { id: 'centurion', glyph: 'C', name: 'Centurion', desc: 'Complete 100 tasks', test: () => tasksDone() >= 100 },
    { id: 'streak3', glyph: 'S3', name: 'On Fire', desc: '3-day streak', test: () => currentStreak() >= 3 },
    { id: 'streak7', glyph: 'S7', name: 'Unstoppable', desc: '7-day streak', test: () => currentStreak() >= 7 }
  ];
  function currentStreak() {
    const dates = new Set(getActiveDates());
    let streak = 0;
    const d = new Date();
    if (!dates.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (dates.has(d.toISOString().slice(0, 10))) { streak++; d.setDate(d.getDate() - 1); }
    return streak;
  }
  function renderBadges() {
    const earned = BADGES.filter(b => b.test()).length;
    const counter = document.getElementById('badgeCount');
    if (counter) counter.textContent = earned;
    document.getElementById('badgesStrip').innerHTML = BADGES.map(b => {
      const got = b.test();
      return `<div class="badge ${got ? 'earned' : ''}" title="${b.desc}"><span class="badge-glyph">${b.glyph}</span><span class="badge-name">${b.name}</span></div>`;
    }).join('');
  }

  function updateSprintBanner() {
    const start = localStorage.getItem('sprint45-start');
    const banner = document.getElementById('sprintBanner');
    const input = document.getElementById('startDate');
    banner.hidden = false;
    if (start) input.value = start;
    if (!start) { document.getElementById('sbDay').textContent = 'Not started'; document.getElementById('sbPace').textContent = 'Pick your start date — Day 1 begins now'; return; }
    const dayNum = Math.floor((Date.now() - new Date(start + 'T00:00:00')) / 86400000) + 1;
    const clamped = Math.max(1, Math.min(45, dayNum));
    const done = DAYS.filter((_, i) => dayComplete(i)).length;
    const delta = done - (clamped - 1);
    const pace = delta >= 0 ? `On track — ${delta} day(s) ahead` : `Behind by ${-delta} day(s) — double down today`;
    document.getElementById('sbDay').textContent = dayNum > 45 ? 'Sprint complete — go get the offer' : `Day ${clamped} of 45`;
    document.getElementById('sbPace').textContent = pace;
  }
  document.getElementById('startDate').addEventListener('change', e => { localStorage.setItem('sprint45-start', e.target.value); updateSprintBanner(); });

  /* ===== Roles & Roadmaps view ===== */
  let activeRole = 0;

  function renderRolePicker() {
    const el = document.getElementById('rolePicker');
    const order = ['Recommended first', 'Learn second — depth', 'Target third — senior move'];
    el.innerHTML = ROLES.map((r, i) => `
      <button class="role-card ${i === activeRole ? 'active' : ''} role-${r.id}" role="tab" aria-selected="${i === activeRole}" data-i="${i}">
        <span class="role-order">${order[i]}</span>
        <span class="role-name">${r.name}</span>
        <span class="role-tagline">${r.tagline}</span>
        <span class="role-meta"><span>🧳 ${r.travel}</span><span>⚖ Judged on: ${r.judgedOn}</span></span>
      </button>`).join('');
    el.querySelectorAll('.role-card').forEach(btn => btn.onclick = () => { activeRole = +btn.dataset.i; renderRolePicker(); renderRoleDetail(); });
  }

  function renderRoleDetail() {
    const r = ROLES[activeRole];
    document.getElementById('roleDetail').innerHTML = `
      <div class="role-detail-head">
        <h3>${r.name}</h3>
        <p class="role-owns">${r.whatYouOwn}</p>
        <div class="role-facts">
          <div class="role-fact"><b>Hard part</b>${r.hardPart}</div>
          <div class="role-fact"><b>Travel / context</b>${r.travel}</div>
          <div class="role-fact"><b>Best if</b>${r.bestIf}</div>
        </div>
      </div>
      <div class="role-cols">
        <div class="role-col">
          <h4>Full syllabus</h4>
          <ol class="syllabus-list">${r.syllabus.map(s => `<li>${s}</li>`).join('')}</ol>
        </div>
        <div class="role-col">
          <h4>Roadmap inside this 45-day plan</h4>
          <div class="roadmap-list">${r.roadmap.map(step => `
            <button class="roadmap-step" data-phase="${step.phase}">
              <span class="roadmap-days">${step.days}</span>
              <span class="roadmap-focus">${step.focus}</span>
              <span class="roadmap-go">→ open day</span>
            </button>`).join('')}</div>
          <h4 style="margin-top:18px">Interview focus</h4>
          <ul class="interview-list">${r.interviewFocus.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
      ${r.playbook ? `<div class="playbook"><h4>FDE Playbook — the complete field manual</h4><div class="playbook-grid">${r.playbook.map(section => `
        <div class="playbook-card"><h5>${section.h}</h5><ul>${section.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div></div>` : ''}
      <div class="resources"><h3>YouTube roadmap (free, in order)</h3><div class="yt-roadmap">${r.youtube.map(([n, u]) => `<a class="yt-item" href="${u}" target="_blank" rel="noopener"><span class="yt-play">▶</span><span>${n}</span></a>`).join('')}</div></div>
      <div class="resources"><h3>Further reading &amp; docs</h3>${r.resources.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join('')}</div>`;
    document.querySelectorAll('.roadmap-step').forEach(btn => {
      btn.onclick = () => { switchView('plan'); jumpToPhase(+btn.dataset.phase); };
    });
  }

  function jumpToPhase(phaseIdx) {
    current = phaseIdx > 1 ? PHASES[phaseIdx - 2].until : 0;
    renderList(); renderDetail(); window.scrollTo(0, 0);
  }

  function switchView(view) {
    const plan = document.getElementById('planView');
    const roles = document.getElementById('rolesView');
    const yt = document.getElementById('yt');
    const tPlan = document.getElementById('tabPlan'), tRoles = document.getElementById('tabRoles');
    const showPlan = view === 'plan';
    plan.hidden = !showPlan; roles.hidden = showPlan; yt.style.display = showPlan ? '' : 'none';
    tPlan.classList.toggle('active', showPlan); tRoles.classList.toggle('active', !showPlan);
    tPlan.setAttribute('aria-selected', showPlan); tRoles.setAttribute('aria-selected', !showPlan);
    if (!showPlan) { renderRolePicker(); renderRoleDetail(); }
    window.scrollTo(0, 0);
  }

  document.getElementById('tabPlan').onclick = () => switchView('plan');
  document.getElementById('tabRoles').onclick = () => switchView('roles');

  renderStats(); renderList(); renderDetail(); renderStreak();
})();
