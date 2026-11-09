(function () {
  const { R, YT, PHASES, DAYS, ROLES } = window.SPRINT_DATA;
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
        lab.innerHTML = `<span>${ph.key} — ${ph.label}</span><span class="phase-progress">${done}/${total} days</span>`;
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
      <div class="resources"><h3>Free Resources</h3>${resHtml}</div>
      <div class="btn-row">
        <button class="btn ghost" id="prevDay">← Day ${Math.max(1, current)}</button>
        <span class="kbd-hint">Use <kbd>←</kbd> <kbd>→</kbd> to navigate &middot; <kbd>/</kbd> to search</span>
        <button class="btn" id="nextDay">${current < 44 ? `Day ${current + 2} →` : 'Finish ✓'}</button>
      </div>`;

    document.querySelectorAll('#detail input[type=checkbox]').forEach(cb => {
      cb.onchange = () => { if (cb.checked) state[cb.dataset.key] = true; else delete state[cb.dataset.key]; save(); renderDetail(); };
    });
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
      <div class="resources"><h3>Curated free resources</h3>${r.resources.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join('')}</div>`;
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

  renderStats(); renderList(); renderDetail();
})();
