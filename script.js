let state = {
  domain: '',
  videocaption: { variants: [], order: [], pos: 0 },
  caption: { variants: [], order: [], pos: 0 },
  comment: { variants: [], order: [], pos: 0 }
};

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadState() {
  // Show defaults immediately so the UI is never blank.
  state.videocaption.variants = DEFAULTS.videocaption.slice();
  state.videocaption.order = shuffle(state.videocaption.variants.map((_, i) => i));
  state.caption.variants = DEFAULTS.caption.slice();
  state.caption.order = shuffle(state.caption.variants.map((_, i) => i));
  state.comment.variants = DEFAULTS.comment.slice();
  state.comment.order = shuffle(state.comment.variants.map((_, i) => i));

  // Then load any previously saved data from localStorage and overwrite if present.
  try {
    const raw = localStorage.getItem('copyhub-state');
    if (raw) {
      const parsed = JSON.parse(raw);
      state.domain = parsed.domain || '';
      if (parsed.videocaption && parsed.videocaption.variants && parsed.videocaption.variants.length) state.videocaption = parsed.videocaption;
      if (parsed.caption && parsed.caption.variants && parsed.caption.variants.length) state.caption = parsed.caption;
      if (parsed.comment && parsed.comment.variants && parsed.comment.variants.length) state.comment = parsed.comment;
    }
  } catch (e) {
    // storage unavailable — defaults already set in memory
  }

  document.getElementById('domain-input').value = state.domain;
  render('videocaption');
  render('caption');
  render('comment');
}

function persist() {
  try {
    localStorage.setItem('copyhub-state', JSON.stringify(state));
  } catch (e) {
    console.error('save failed', e);
  }
}

function ensureOrder(type) {
  const s = state[type];
  if (!s.order || s.order.length !== s.variants.length || s.pos >= s.order.length) {
    s.order = shuffle(s.variants.map((_, i) => i));
    s.pos = 0;
  }
}

function displayText(type, raw) {
  if (type === 'comment') {
    return raw.split('{domain}').join(state.domain || '{domain}');
  }
  return raw;
}

function render(type) {
  const s = state[type];
  const preview = document.getElementById(type + '-preview');
  const status = document.getElementById(type + '-status');
  const textarea = document.getElementById(type + '-textarea');

  if (document.activeElement !== textarea) {
    textarea.value = s.variants.join('\n');
  }

  if (s.variants.length === 0) {
    preview.textContent = 'No variants yet — add some below.';
    status.textContent = '';
    return;
  }

  ensureOrder(type);
  const nextIdx = s.order[s.pos];
  preview.textContent = displayText(type, s.variants[nextIdx]);
  status.textContent = `${s.pos + 1} of ${s.variants.length} in this rotation`;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1400);
}

async function copyCurrent(type) {
  const s = state[type];
  if (s.variants.length === 0) {
    showToast('Add some variants first');
    return;
  }
  ensureOrder(type);
  const idx = s.order[s.pos];
  const text = displayText(type, s.variants[idx]);
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  s.pos += 1;
  if (s.pos >= s.order.length) {
    s.order = shuffle(s.variants.map((_, i) => i));
    s.pos = 0;
  }
  persist();
  render(type);
  showToast('Copied — next one queued');
}

function setupType(type) {
  document.getElementById(type + '-copy-btn').addEventListener('click', () => copyCurrent(type));

  document.getElementById(type + '-edit-toggle').addEventListener('click', () => {
    const ed = document.getElementById(type + '-editor');
    ed.classList.toggle('open');
  });

  document.getElementById(type + '-save-btn').addEventListener('click', () => {
    const textarea = document.getElementById(type + '-textarea');
    const lines = textarea.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    state[type].variants = lines;
    state[type].order = shuffle(lines.map((_, i) => i));
    state[type].pos = 0;
    persist();
    render(type);
    showToast('Variants saved');
  });
}

document.getElementById('domain-input').addEventListener('input', (e) => {
  state.domain = e.target.value;
  persist();
  render('comment');
});

setupType('videocaption');
setupType('caption');
setupType('comment');
loadState();
