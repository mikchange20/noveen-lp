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

// Partner offer modal
(() => {
  const dlg = document.getElementById('partner-form');
  if (!dlg || !dlg.showModal) return;
  const form = dlg.querySelector('form');
  const status = dlg.querySelector('.modal__status');
  document.querySelectorAll('[data-open-form]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault(); status.textContent = ''; dlg.showModal();
  }));
  dlg.querySelector('[data-close-form]').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.classList.remove('is-error'); status.textContent = (window.noveenMsg || {}).sending || 'Sending...';
    try {
      // FormSubmit (GitHub Pages has no form backend); first request triggers an activation email to the recipient
      const r = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || String(data.success) === 'false') throw new Error(data.message || r.status);
      form.reset(); status.textContent = (window.noveenMsg || {}).ok || 'Thank you! We will get back to you shortly.';
    } catch (err) {
      status.classList.add('is-error'); status.textContent = (window.noveenMsg || {}).err || 'Something went wrong. Please try again.';
    }
  });
})();
