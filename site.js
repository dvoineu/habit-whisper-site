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

  // Language: swaps text blocks, metadata, aria-labels and localized screenshots.
  function applyLanguageMeta() {
    var lang = root.dataset.lang === 'ru' ? 'ru' : 'en';
    var titleAttr = root.getAttribute('data-title-' + lang);
    if (titleAttr) document.title = titleAttr;
    var descAttr = root.getAttribute('data-desc-' + lang);
    var descMeta = document.querySelector('meta[name="description"]');
    if (descAttr && descMeta) descMeta.setAttribute('content', descAttr);
    document.querySelectorAll('[data-en][data-ru]').forEach(function (el) {
      el.setAttribute('aria-label', el.getAttribute('data-' + lang));
    });
  }

  function applyShots() {
    var lang = root.dataset.lang === 'ru' ? 'ru' : 'en';
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var prefix = img.dataset.root || '';
      var src = prefix + 'assets/screens/' + lang + '/' + img.dataset.shot + '.webp';
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
    applyLanguageMeta();
    document.dispatchEvent(new CustomEvent('hw:langchange', { detail: { lang: next } }));
  });
  applyShots();
  applyLanguageMeta();

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

  // Range input fallback progress custom property.
  function syncRangeProgress(input) {
    var min = parseFloat(input.min || '0');
    var max = parseFloat(input.max || '100');
    var val = parseFloat(input.value || '0');
    var pct = max > min ? ((val - min) / (max - min)) * 100 : 0;
    input.style.setProperty('--progress', pct.toFixed(1) + '%');
  }
  document.querySelectorAll('input[type="range"].lab-range').forEach(function (input) {
    syncRangeProgress(input);
    input.addEventListener('input', function () { syncRangeProgress(input); });
  });

  // Landing page 66-day consolidation interactive simulator.
  var landingLab = document.getElementById('landing-lab');
  if (landingLab) {
    var slipSlider = document.getElementById('landing-slip-day');
    var slipLabel = document.getElementById('landing-slip-val');
    var outStreak = document.getElementById('landing-out-streak');
    var outHw = document.getElementById('landing-out-hw');
    var pathHw = document.getElementById('landing-curve-hw');
    var pathStreak = document.getElementById('landing-curve-streak');
    var slipMarker = document.getElementById('landing-slip-marker');

    function renderLandingLab() {
      var slipDay = parseInt(slipSlider.value, 10);
      var lang = root.dataset.lang === 'ru' ? 'ru' : 'en';
      slipLabel.textContent = lang === 'ru' ? (slipDay + '-й день') : ('Day ' + slipDay);
      var t85 = document.getElementById('landing-label-target');
      var ld0 = document.getElementById('landing-label-d0');
      var ld35 = document.getElementById('landing-label-d35');
      var ld70 = document.getElementById('landing-label-d70');
      if (t85) t85.textContent = lang === 'ru' ? '85% Автопилот' : '85% Autopilot';
      if (ld0) ld0.textContent = lang === 'ru' ? 'День 0' : 'Day 0';
      if (ld35) ld35.textContent = lang === 'ru' ? 'День 35' : 'Day 35';
      if (ld70) ld70.textContent = lang === 'ru' ? 'День 70' : 'Day 70';

      var totalDays = 70;
      var score = 0;
      var streak = 0;
      var ptsHw = [];
      var ptsStreak = [];
      var scoreAtSlip = 0;

      for (var d = 0; d <= totalDays; d++) {
        if (d > 0) {
          if (d === slipDay) {
            score = score * 0.965;
            streak = 0;
            scoreAtSlip = score;
          } else {
            score = score + 0.045 * (1 - score);
            streak += 1;
          }
        }
        var x = 44 + (d / totalDays) * 532;
        var yHw = 216 - score * 184;
        var streakPct = Math.min(streak / 66, 1);
        var ySt = 216 - streakPct * 184;
        ptsHw.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + yHw.toFixed(1));
        ptsStreak.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + ySt.toFixed(1));
      }

      pathHw.setAttribute('d', ptsHw.join(' '));
      pathStreak.setAttribute('d', ptsStreak.join(' '));
      var mx = 44 + (slipDay / totalDays) * 532;
      var my = 216 - scoreAtSlip * 184;
      slipMarker.setAttribute('cx', mx.toFixed(1));
      slipMarker.setAttribute('cy', my.toFixed(1));

      outStreak.textContent = lang === 'ru' ? '0 дней (сброс)' : '0 days (reset)';
      outHw.textContent = Math.round(scoreAtSlip * 100) + '%';
    }

    slipSlider.addEventListener('input', renderLandingLab);
    document.addEventListener('hw:langchange', renderLandingLab);
    renderLandingLab();
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
