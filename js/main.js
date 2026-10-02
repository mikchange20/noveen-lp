(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav background after scrolling
  const nav = document.getElementById('nav');
  const onScrollNav = () => nav.classList.toggle('is-scrolled', scrollY > 20);

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Route: progress follows scroll through the "How it works" section
  const route = document.getElementById('route');
  const steps = [...route.querySelectorAll('.step')];
  const updateRoute = () => {
    const r = route.getBoundingClientRect();
    const vh = innerHeight;
    // 0 when the route enters the lower third, 1 when it reaches the upper third
    let p = (vh * 0.8 - r.top) / (r.height + vh * 0.35);
    p = Math.min(1, Math.max(0, p));
    route.style.setProperty('--p', p.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle('is-on', p >= i / (steps.length - 1) - 0.02));
  };

  // Hero landscape parallax
  const layers = document.querySelectorAll('.scene__land .layer');
  const updateParallax = () => {
    if (reduce || scrollY > innerHeight) return;
    layers.forEach((l) => {
      const k = l.classList.contains('l1') ? 0.04 : l.classList.contains('l2') ? 0.08 : 0.13;
      l.style.transform = `translateY(${scrollY * k}px)`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScrollNav(); updateRoute(); updateParallax(); ticking = false; });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  // Colour swatches → tell the 3D model
  const swatches = [...document.querySelectorAll('.swatch')];
  const pick = (btn) => {
    swatches.forEach((s) => s.setAttribute('aria-checked', String(s === btn)));
    window.dispatchEvent(new CustomEvent('lunchbox:colour', { detail: btn.dataset.colour }));
  };
  swatches.forEach((s, i) => {
    s.addEventListener('click', () => {
      pick(s);
      document.getElementById('explorer').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
    s.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      const next = swatches[(i + d + swatches.length) % swatches.length];
      next.focus(); pick(next);
    });
  });
})();
