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
    requestAnimationFrame(() => { onScrollNav(); updateParallax(); ticking = false; });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
