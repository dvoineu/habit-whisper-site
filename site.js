(function () {
  var root = document.documentElement;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // Theme: follows the system until the visitor picks one.
  var themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store('hw-theme', next);
  });

  // Language: swaps text blocks and localized screenshots.
  function applyShots() {
    var lang = root.dataset.lang === 'ru' ? 'ru' : 'en';
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var src = 'assets/screens/' + lang + '/' + img.dataset.shot + '.webp';
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    });
  }
  var langBtn = document.querySelector('.lang-btn');
  if (langBtn) langBtn.addEventListener('click', function () {
    var next = root.dataset.lang === 'ru' ? 'en' : 'ru';
    root.dataset.lang = next;
    root.lang = next;
    store('hw-lang', next);
    applyShots();
  });
  applyShots();

  // Header border once scrolled.
  var header = document.querySelector('.header');
  function onScroll() { if (header) header.classList.toggle('scrolled', scrollY > 8); }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Heat map tile.
  var heat = document.getElementById('heat');
  if (heat) {
    var pattern = [.9,.6,1,.3,.8,1,.5,.7,1,.9,.2,.8,1,.6,1,.8,.4,1,.9,.7,1,.5,1,.9,.8,.3,1,1];
    pattern.forEach(function (o, i) {
      var c = document.createElement('i');
      c.style.setProperty('--o', o);
      c.style.transitionDelay = (i * 25) + 'ms';
      heat.appendChild(c);
    });
  }

  // Reveal on scroll.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    // Sticky phone story: highlight the step in the middle of the viewport.
    var steps = document.querySelectorAll('.step');
    var shots = document.querySelectorAll('.story .sticky img');
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target.dataset.step;
        steps.forEach(function (s) { s.classList.toggle('on', s === e.target); });
        shots.forEach(function (img) { img.classList.toggle('on', img.dataset.step === n); });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (s) { so.observe(s); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();
