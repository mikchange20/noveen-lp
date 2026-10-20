(() => {
  const COPY = window.LUNCHEE_COPY;
  const AUDS = ['rentals', 'crews', 'drivers', 'stores'];
  const LANGS = ['en', 'pl', 'is'];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Translations of the shared (static) sections, keyed by data-i18n (see content.js). English lives in the HTML.
  const SHARED = window.LUNCHEE_SHARED || {};

  // A language counts as ready once it has any copy; until then its button stays hidden.
  const ready = (l) => l === 'en' || Object.keys(SHARED[l] || {}).length > 0 || Object.keys(COPY[l] || {}).length > 0;

  // Outline icons (24×24, stroke = currentColor)
  const ICON = {
    coins: '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>',
    tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/><path d="M5 5l4 4"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    flame: '<path d="M12 21a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8a7 7 0 0 0 7 7z"/><path d="M12 21a3 3 0 0 0 3-3c0-2-1.5-3-3-5-1.5 2-3 3-3 5a3 3 0 0 0 3 3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z"/><circle cx="6" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
    plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>',
    wallet: '<path d="M4 7h15a1 1 0 0 1 1 1v11H5a1 1 0 0 1-1-1z"/><path d="M4 7l11-3v3"/><path d="M15 12h5v4h-5a2 2 0 0 1 0-4z"/>',
    gift: '<path d="M4 10h16v11H4zM3 7h18v3H3zM12 7v14"/><path d="M12 7c-2-4-6-4-6-1.5S9 7 12 7c3 0 6-.5 6-1.5S14 3 12 7z"/>',
    box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
    bus: '<rect x="4" y="3" width="16" height="15" rx="2"/><path d="M4 11h16M8 7h8"/><circle cx="8" cy="14.5" r="1"/><circle cx="16" cy="14.5" r="1"/><path d="M6.5 18v2.5M17.5 18v2.5"/>',
    taxi: '<path d="M3 17v-4l2-5h14l2 5v4z"/><path d="M3 13h18M9 8l.5-3h5l.5 3"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    tree: '<path d="M12 3 7 9h3l-4 5h4l-5 6h14l-5-6h4l-4-5h3z"/><path d="M12 20v2"/>',
    flake: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2M4 10.5l3.5-.5L6 7M18 14l-1.5 3 3.5-.5M4 13.5l3.5.5L6 17M18 10l-1.5-3 3.5.5"/>'
  };
  const icon = (n, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ''}</svg>`;

  const COLOURS = [['pearl', 'Pearl'], ['nature', 'Nature'], ['city', 'City'], ['glamour', 'Glamour']];
  const placeholder = (label, ui) => `<figure class="ph" role="img" aria-label="${ui.placeholder}: ${label}">${icon('camera')}<b>${ui.placeholder}</b><span>${label}</span></figure>`;

  // Scroll reveal. After a tile/language swap the new content shows at once (the person is already looking at it).
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let swapping = false;
  const io = 'IntersectionObserver' in window && !reduce ? new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  const watchReveals = () => $$('.reveal:not(.is-in)').forEach((el) => {
    if (io && !(swapping && el.closest('[data-dyn]'))) io.observe(el); else el.classList.add('is-in');
  });

  // ---------- Falling snow (stores / Christmas only) ----------
  const snow = (() => {
    let cv, ctx, flakes = [], raf = 0, active = false, userOn = true;
    const make = () => {
      const w = innerWidth, h = innerHeight, n = Math.min(90, Math.round(w * h / 14000));
      flakes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 1 + Math.random() * 3, s: .3 + Math.random() * .9, d: Math.random() * Math.PI * 2 }));
    };
    const size = () => { const dpr = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); make(); };
    const tick = () => {
      const w = innerWidth, h = innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.shadowColor = 'rgba(0,60,120,.35)'; ctx.shadowBlur = 3;
      for (const f of flakes) {
        f.y += f.s; f.d += .01; f.x += Math.sin(f.d) * .4;
        if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w; }
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf || reduce) return;
      if (!cv) {
        cv = document.createElement('canvas'); cv.className = 'snow'; cv.setAttribute('aria-hidden', 'true');
        document.body.appendChild(cv); ctx = cv.getContext('2d');
        addEventListener('resize', () => cv && size());
      }
      cv.hidden = false; size(); raf = requestAnimationFrame(tick);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; if (cv) cv.hidden = true; };
    document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (active && userOn) start(); });
    return {
      get on() { return userOn; },
      enable(v) { active = v; if (active && userOn) start(); else stop(); },
      toggle() { userOn = !userOn; this.enable(active); }
    };
  })();

  const goToForm = (e) => {
    e.preventDefault();
    $('#contact').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => $('.form [name="name"]').focus({ preventScroll: true }), 600);
  };

  let lang = 'en';
  let aud = 'rentals';
  const t = () => Object.assign({}, COPY.en[aud], (COPY[lang] || {})[aud]);
  const ui = () => Object.assign({}, COPY.en.ui, (COPY[lang] || {}).ui);

  // ---------- Dynamic sections ----------
  const mock = (m) => `<div class="mock" aria-hidden="true"><p class="mock__title">${m.title}</p>
    ${m.rows.map((r, i) => `<p class="mock__row mock__row--${m.type}${i === m.rows.length - 1 ? ' is-on' : ''}"><span class="box"></span>${r}</p>`).join('')}</div>`;

  const renderHow = (h, u) => {
    let body = '';
    if (h.kind === 'rentals') {
      body = `<div class="models__grid">${h.cards.map((c) => `
        <article class="model-card reveal"><h3>${c.h}</h3><p>${c.p}</p>${mock(c.mock)}</article>`).join('')}</div>`;
    } else if (h.kind === 'crews') {
      body = `<div class="models__grid">
        <article class="model-card reveal">
          <ol class="timeline">${h.timeline.map(([time, txt], i) => `<li${i === h.timeline.length - 1 ? ' class="is-on"' : ''}><b>${time}</b><span>${txt}</span></li>`).join('')}</ol>
          <p>${h.p}</p>
          <ul class="names" aria-hidden="true">${COLOURS.map(([f], i) => `<li><img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy"><span>${h.names[i]}</span></li>`).join('')}</ul>
        </article>
        ${placeholder(h.photo, u)}
      </div>`;
    } else if (h.kind === 'drivers') {
      body = `<div class="models__grid models__grid--3">${h.cards.map(([ic, ttl, p]) => `
        <article class="model-card reveal">${icon(ic)}<h3>${ttl}</h3><p>${p}</p></article>`).join('')}</div>
        ${placeholder(h.photo, u)}`;
    } else if (h.kind === 'stores') {
      body = `<div class="models__grid">
        <article class="model-card reveal"><h3>${h.shelf}</h3>
          <div class="mock shelf" aria-hidden="true">
            <span class="shelf__tag">${h.badge} · Lunchee</span>
            <div class="shelf__row">${COLOURS.map(([f]) => `<img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy">`).join('')}</div>
            <div class="shelf__plank"></div>
          </div>
        </article>
        <article class="model-card reveal"><h3>${h.online}</h3>
          <div class="mock shop" aria-hidden="true">
            <div class="shop__img"><img src="assets/img/city.jpg" alt="" width="900" height="900" loading="lazy"><span class="shop__badge">${h.badge}</span></div>
            <div class="shop__info"><b>${h.product}</b><small>${h.productSub}</small>
              <span class="shop__dots">${COLOURS.map(([f]) => `<i class="dot dot--${f}"></i>`).join('')}</span>
              <span class="shop__stock">${h.stock}</span></div>
          </div>
        </article>
      </div>`;
    }
    return `<div class="how__head reveal"><h2>${h.h}</h2></div>${body}`;
  };

  // Christmas gift campaign (stores) – test version
  const daysToXmas = () => {
    const now = new Date();
    let eve = new Date(now.getFullYear(), 11, 24);
    if (now > new Date(now.getFullYear(), 11, 26)) eve = new Date(now.getFullYear() + 1, 11, 24);
    return Math.max(0, Math.ceil((eve - now) / 864e5));
  };
  const renderXmas = (x) => `
    <div class="xmas__inner">
      <div class="xmas__head reveal">
        <p class="pill pill--xmas">${icon('tree')}${x.pill}</p>
        <h2>${twoTone(x.h)}</h2>
        <p class="lead">${x.lead}</p>
      </div>
      <div class="xmas__count reveal" aria-live="off">
        <b>${daysToXmas()}</b><span>${x.countdown}</span><em>${x.greeting}</em>
      </div>
      <h3 class="xmas__sub reveal">${x.guideH}</h3>
      <ul class="guide">${x.guide.map(([f, h, p]) => `
        <li class="reveal"><span class="guide__tag">${icon('gift')}</span><img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy"><b>${h}</b><p>${p}</p></li>`).join('')}</ul>
      <div class="xmas__grid">
        <div class="xmas__kit reveal"><h3 class="xmas__sub">${x.kitH}</h3>
          <ul>${x.kit.map(([ic, h, p]) => `<li>${icon(ic)}<div><b>${h}</b><p>${p}</p></div></li>`).join('')}</ul></div>
        <div class="xmas__plan reveal"><h3 class="xmas__sub">${x.planH}</h3>
          <ol>${x.plan.map(([d, p]) => `<li><b>${d}</b><span>${p}</span></li>`).join('')}</ol>
          <a class="btn btn--yellow" href="#contact" data-cta-xmas>${x.cta}</a>
          <button type="button" class="snow-toggle" data-snow-toggle aria-pressed="true">${icon('flake')}<span>${x.snowOn}</span></button>
        </div>
      </div>
    </div>`;

  // Brand headline: first part blue, the rest white ("Twój czas na / ciepły posiłek")
  const twoTone = (txt) => {
    const m = txt.match(/^(.+?)\s*\|\s*(.+)$/) || txt.match(/^(.+?[.?!])\s+(.+)$/) || txt.match(/^(.+?\s[–—])\s+(.+)$/);
    return m ? `<span class="tt-blue">${m[1]}</span> <span class="tt-white">${m[2]}</span>` : `<span class="tt-blue">${txt}</span>`;
  };

  const renderField = (f) => {
    if (f.type === 'choice') {
      const type = f.multiple ? 'checkbox' : 'radio';
      return `<fieldset class="form__full choice"><legend>${f.label}</legend>${f.options.map((o) =>
        `<label><input type="${type}" name="${f.name}${f.multiple ? '[]' : ''}" value="${o}"><span>${o}</span></label>`).join('')}</fieldset>`;
    }
    return `<label><span>${f.label}</span><input name="${f.name}" type="text" inputmode="numeric" placeholder="${f.placeholder || ''}"></label>`;
  };

  const render = () => {
    const c = t();
    const u = ui();
    const tile = $(`.tile[data-aud="${aud}"] b`);

    $('[data-dyn="why"]').innerHTML = `
      <div class="why__head reveal"><p class="pill">${tile ? tile.textContent : ''}</p><h2>${twoTone(c.why.h)}</h2><p class="lead">${c.why.lead}</p></div>
      <ul class="why__list">${c.why.items.map(([ic, h, p]) => `<li class="reveal">${icon(ic)}<h3>${h}</h3><p>${p}</p></li>`).join('')}</ul>`;
    $('[data-dyn="how"]').innerHTML = renderHow(c.how, u);
    const xm = $('[data-dyn="xmas"]');
    const x = c.form.xmas;
    xm.hidden = !x;
    xm.innerHTML = x ? renderXmas(x) : '';
    const tag = $('[data-xmas-tag]');
    tag.hidden = !x;
    tag.innerHTML = x ? `${icon('gift')}<span>${c.how.badge}</span>` : '';
    if (x) {
      $('[data-cta-xmas]').addEventListener('click', goToForm);
      const tg = $('[data-snow-toggle]');
      const syncToggle = () => { tg.setAttribute('aria-pressed', String(snow.on)); tg.querySelector('span').textContent = snow.on ? x.snowOn : x.snowOff; };
      syncToggle();
      tg.addEventListener('click', () => { snow.toggle(); syncToggle(); });
    }
    snow.enable(!!x);
    $('[data-dyn="faq"]').innerHTML = `<div class="faq__head reveal"><h2>${u.faq}</h2></div>
      <div class="faq__list reveal">${c.faq.map(([q, a]) => `<details class="qa"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
    $('[data-dyn="cta"]').innerHTML = `<h2>${c.form.h}</h2><p>${c.form.lead}</p>`;

    // Form: keep what the person already typed in the shared fields, swap only the audience-specific ones
    $('[data-dyn="fields"]').innerHTML = c.form.fields.map(renderField).join('');
    const form = $('.form');
    form.segment.value = aud;
    form._subject.value = `Lunchee Iceland: new offer request (${aud})`;
    $$('[data-ui]', form).forEach((el) => { el.textContent = u[el.dataset.ui]; });
    if (c.form.companyLabel) $('[data-ui="company"]', form).textContent = c.form.companyLabel;
    $('[data-submit]').textContent = c.form.button;

    $$('[data-cta]').forEach((a) => { a.textContent = c.cta; });
    $$('.tile').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.aud === aud)));
    document.title = `${c.title} – ${u.tagline}`;
    document.documentElement.dataset.aud = aud;
    watchReveals();
  };

  // ---------- Routing: /rentals, /crews, /drivers, /stores (stub folders redirect to ?for=…) ----------
  const base = location.pathname.replace(/[^/]*$/, '').replace(new RegExp(`/(${AUDS.join('|')})/$`), '/');
  const fromUrl = () => {
    const q = new URLSearchParams(location.search).get('for');
    const h = location.hash.slice(1);
    const p = location.pathname.split('/').filter(Boolean).pop();
    return [q, h, p].find((x) => AUDS.includes(x));
  };
  const setUrl = () => {
    const params = new URLSearchParams(location.search);
    params.delete('for');
    const qs = params.toString();
    const hash = AUDS.includes(location.hash.slice(1)) ? '' : location.hash;
    history.replaceState(null, '', `${base}${aud}${qs ? `?${qs}` : ''}${hash}`);
  };

  const initial = fromUrl();
  if (initial) { aud = initial; setUrl(); }

  $$('.tile').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    if (el.dataset.aud === aud) return;
    aud = el.dataset.aud;
    document.body.classList.add('is-swapping');
    swapping = true;
    render();
    swapping = false;
    setUrl();
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('is-swapping')));
  }));

  // ---------- Language (EN / IS) ----------
  const originals = new Map();
  const applyShared = () => {
    const d = SHARED[lang] || {};
    $$('[data-i18n]').forEach((el) => {
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      el.innerHTML = d[el.dataset.i18n] || originals.get(el);
    });
    $$('[data-i18n-alt]').forEach((el) => {
      const k = `alt:${el.dataset.i18nAlt}`;
      if (!originals.has(k)) originals.set(k, el.alt);
      el.alt = d[el.dataset.i18nAlt] || originals.get(k);
    });
  };
  const setLang = (l) => {
    if (!LANGS.includes(l) || !ready(l)) l = 'en';
    lang = l;
    document.documentElement.lang = l;
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    try { localStorage.setItem('lunchee-lang', l); } catch (e) { /* storage blocked */ }
    applyShared();
    swapping = started;
    render();
    swapping = false;
    started = true;
  };
  let started = false;
  $$('.lang button').forEach((b) => {
    if (!ready(b.dataset.lang)) b.hidden = true;
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  let saved = null;
  try { saved = localStorage.getItem('lunchee-lang'); } catch (e) { /* storage blocked */ }
  // ?lang=pl in a link wins over the remembered choice
  setLang(new URLSearchParams(location.search).get('lang') || saved || 'en');

  // ---------- Header CTA → form ----------
  $$('[data-cta]').forEach((a) => a.addEventListener('click', goToForm));

  // Header shadow after scrolling
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Form (FormSubmit; GitHub Pages has no form backend. First request triggers an activation email.) ----------
  const form = $('.form');
  const status = $('.form__status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const u = ui();
    const btn = $('[data-submit]');
    status.classList.remove('is-error', 'is-ok');
    status.textContent = u.sending;
    btn.disabled = true;
    try {
      const r = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || String(data.success) === 'false') throw new Error(data.message || r.status);
      form.reset();
      form.segment.value = aud;
      status.classList.add('is-ok');
      status.textContent = u.ok;
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = u.err;
    } finally {
      btn.disabled = false;
    }
  });
})();
