(function () {
  var root = document.documentElement;
  function lang() {
    return root.dataset.lang === 'ru' ? 'ru' : 'en';
  }

  // Lab 1: 66-day automaticity multi-parameter simulator
  var labAuto = document.getElementById('lab-automaticity');
  if (labAuto) {
    var slipsEl = document.getElementById('auto-slips');
    var partialEl = document.getElementById('auto-partial');
    var cadenceEl = document.getElementById('auto-cadence');
    var slipsVal = document.getElementById('auto-slips-val');
    var partialVal = document.getElementById('auto-partial-val');
    var outFinal = document.getElementById('auto-out-final');
    var outDays = document.getElementById('auto-out-days');
    var outPhase = document.getElementById('auto-out-phase');
    var curveHw = document.getElementById('auto-curve-hw');
    var curveStrict = document.getElementById('auto-curve-strict');

    function phaseName(score, l) {
      if (score >= 0.85) return l === 'ru' ? 'Автопилот' : 'Autopilot';
      if (score >= 0.60) return l === 'ru' ? 'Закрепление' : 'Locking in';
      if (score >= 0.25) return l === 'ru' ? 'Ритм' : 'Rhythm';
      return l === 'ru' ? 'Старт' : 'Start';
    }

    function renderAutomaticity() {
      var l = lang();
      var opt7 = cadenceEl.querySelector('option[value="7"]');
      var opt5 = cadenceEl.querySelector('option[value="5"]');
      if (opt7) opt7.textContent = l === 'ru' ? '7 дней в неделю' : '7 days / week';
      if (opt5) opt5.textContent = l === 'ru' ? '5 будних дней' : '5 workdays / week';
      var slipCount = parseInt(slipsEl.value, 10);
      var partialPct = parseInt(partialEl.value, 10);
      var cadence = parseInt(cadenceEl.value, 10); // 7 or 5 days/week
      slipsVal.textContent = l === 'ru' ? (slipCount + ' проп.') : (slipCount + ' slips');
      partialVal.textContent = partialPct + '%';

      var totalDays = 84;
      var score = 0;
      var strictStreak = 0;
      var hwPts = [];
      var strictPts = [];
      var first85 = null;

      // Spread slips deterministically across the 84-day window
      var slipSet = {};
      if (slipCount > 0) {
        var step = Math.floor(totalDays / (slipCount + 1));
        for (var k = 1; k <= slipCount; k++) {
          slipSet[Math.min(totalDays, k * step + 2)] = true;
        }
      }

      for (var d = 0; d <= totalDays; d++) {
        if (d > 0) {
          var isScheduled = cadence === 7 || (d % 7 !== 6 && d % 7 !== 0);
          if (isScheduled) {
            if (slipSet[d]) {
              if (partialPct > 0 && d % 2 === 0) {
                var f = partialPct / 100;
                score = score + (0.015 + 0.020 * f) * (1 - score);
              } else {
                score = score * 0.965;
              }
              strictStreak = 0;
            } else {
              score = score + 0.045 * (1 - score);
              strictStreak += 1;
            }
          }
          if (first85 === null && score >= 0.85) first85 = d;
        }
        var x = 44 + (d / totalDays) * 532;
        var yHw = 216 - score * 184;
        var yStrict = 216 - Math.min(strictStreak / 66, 1) * 184;
        hwPts.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + yHw.toFixed(1));
        strictPts.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + yStrict.toFixed(1));
      }

      curveHw.setAttribute('d', hwPts.join(' '));
      curveStrict.setAttribute('d', strictPts.join(' '));

      var pct = Math.round(score * 100);
      outFinal.textContent = pct + '%';
      outPhase.textContent = phaseName(score, l);
      if (first85 !== null) {
        outDays.textContent = l === 'ru' ? (first85 + '-й день') : ('Day ' + first85);
      } else {
        outDays.textContent = l === 'ru' ? '> 84 дней' : '> 84 days';
      }
    }

    slipsEl.addEventListener('input', renderAutomaticity);
    partialEl.addEventListener('input', renderAutomaticity);
    cadenceEl.addEventListener('change', renderAutomaticity);
    document.addEventListener('hw:langchange', renderAutomaticity);
    renderAutomaticity();
  }

  // Lab 2: Elastic Habits 30-day simulator (Rigid vs Elastic Min/Norm/Challenge)
  var labElastic = document.getElementById('lab-elastic');
  if (labElastic) {
    var toughEl = document.getElementById('elastic-tough-days');
    var toughVal = document.getElementById('elastic-tough-val');
    var outRigid = document.getElementById('elastic-out-rigid');
    var outHw = document.getElementById('elastic-out-hw');
    var outMins = document.getElementById('elastic-out-mins');
    var curveRigid = document.getElementById('elastic-curve-rigid');
    var curveHw = document.getElementById('elastic-curve-hw');

    function renderElastic() {
      var l = lang();
      var toughDays = parseInt(toughEl.value, 10);
      toughVal.textContent = l === 'ru' ? (toughDays + ' из 30 дн.') : (toughDays + ' / 30 days');

      var rigidActiveDays = 0;
      var elasticActiveDays = 0;
      var elasticMinutes = 0;
      var rigidScore = 0;
      var elasticScore = 0;
      var rigidPts = [];
      var elasticPts = [];

      // Deterministic pseudo-distribution of fatigued/poor-sleep days across 30 days
      var toughSet = {};
      if (toughDays > 0) {
        for (var k = 0; k < toughDays; k++) {
          var dayIdx = Math.min(30, Math.floor((k * 30) / toughDays) + 1);
          toughSet[dayIdx] = true;
        }
      }

      for (var d = 0; d <= 30; d++) {
        if (d > 0) {
          if (toughSet[d]) {
            // Rigid 20-min goal triggers avoidance & "what-the-hell effect" after consecutive fatigue
            rigidScore = Math.max(0, rigidScore * 0.90);
            // Elastic minimum (3 min) keeps cue-action neural link alive
            elasticActiveDays += 1;
            elasticMinutes += 3;
            elasticScore = elasticScore + 0.032 * (1 - elasticScore);
          } else {
            // High energy days let rigid work only when momentum wasn't shattered
            var rigidFollows = d <= 3 || !toughSet[d - 1];
            if (rigidFollows) {
              rigidActiveDays += 1;
              rigidScore = rigidScore + 0.045 * (1 - rigidScore);
            } else {
              rigidScore = Math.max(0, rigidScore * 0.95);
            }
            elasticActiveDays += 1;
            elasticMinutes += 20;
            elasticScore = elasticScore + 0.045 * (1 - elasticScore);
          }
        }
        var x = 44 + (d / 30) * 532;
        var yR = 216 - Math.min(rigidScore * 1.25, 1) * 184;
        var yE = 216 - Math.min(elasticScore * 1.25, 1) * 184;
        rigidPts.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + yR.toFixed(1));
        elasticPts.push((d === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + yE.toFixed(1));
      }

      curveRigid.setAttribute('d', rigidPts.join(' '));
      curveHw.setAttribute('d', elasticPts.join(' '));
      outRigid.textContent = l === 'ru' ? (rigidActiveDays + ' / 30 дн.') : (rigidActiveDays + ' / 30 days');
      outHw.textContent = l === 'ru' ? (elasticActiveDays + ' / 30 дн.') : (elasticActiveDays + ' / 30 days');
      outMins.textContent = l === 'ru' ? (elasticMinutes + ' мин') : (elasticMinutes + ' min');
    }

    toughEl.addEventListener('input', renderElastic);
    document.addEventListener('hw:langchange', renderElastic);
    renderElastic();
  }

  // Lab 3: 90-Second Urge Wave & Physiological Sigh Live Trainer
  var labUrge = document.getElementById('lab-urge');
  if (labUrge) {
    var btnStart = document.getElementById('urge-start');
    var btnReset = document.getElementById('urge-reset');
    var orb = document.getElementById('urge-orb');
    var phaseText = document.getElementById('urge-phase');
    var urgeLevelOut = document.getElementById('urge-intensity');
    var progressMarker = document.getElementById('urge-marker');
    var urgeCurve = document.getElementById('urge-curve');

    var timerId = null;
    var elapsed = 0;
    var totalSeconds = 90;
    var cycleLength = 10; // 1.5s inhale 1 + 0.5s pause + 1.5s inhale 2 + 6.5s long exhale

    // Precompute physiological urge wave (rises rapidly to ~18s, subsides by 90s)
    function urgeIntensityAt(sec) {
      if (sec <= 18) return 0.25 + 0.72 * Math.sin((sec / 18) * (Math.PI / 2));
      var decay = Math.exp(-(sec - 18) / 28);
      return Math.max(0.06, 0.97 * decay);
    }

    var pts = [];
    for (var s = 0; s <= totalSeconds; s += 2) {
      var px = 44 + (s / totalSeconds) * 532;
      var py = 216 - urgeIntensityAt(s) * 176;
      pts.push((s === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1));
    }
    urgeCurve.setAttribute('d', pts.join(' '));

    function renderUrge() {
      var l = lang();
      var remaining = Math.max(0, totalSeconds - elapsed);
      orb.textContent = remaining + (l === 'ru' ? ' с' : 's');

      var intensityPct = Math.round(urgeIntensityAt(elapsed) * 100);
      urgeLevelOut.textContent = intensityPct + '%';

      var mx = 44 + (elapsed / totalSeconds) * 532;
      var my = 216 - urgeIntensityAt(elapsed) * 176;
      progressMarker.setAttribute('cx', mx.toFixed(1));
      progressMarker.setAttribute('cy', my.toFixed(1));

      if (elapsed === 0) {
        phaseText.textContent = l === 'ru' ? 'Нажмите «Старт» на пике тяги' : 'Press Start when an urge hits';
        orb.style.setProperty('--orb-scale', '1');
        btnStart.textContent = l === 'ru' ? 'Старт · 90 сек' : 'Start · 90s';
      } else if (elapsed >= totalSeconds) {
        phaseText.textContent = l === 'ru' ? 'Волна импульса спала — вы сохранили контроль' : 'Urge wave subsided — control restored';
        orb.style.setProperty('--orb-scale', '1');
        btnStart.textContent = l === 'ru' ? 'Повторить' : 'Restart';
      } else {
        var mod = elapsed % cycleLength;
        var scale = 1;
        if (mod < 2) {
          phaseText.textContent = l === 'ru' ? '1. Глубокий вдох через нос' : '1. Deep nasal inhale';
          scale = 1.12;
        } else if (mod < 3.5) {
          phaseText.textContent = l === 'ru' ? '2. Довдох (раскрыть альвеолы)' : '2. Top-off second inhale';
          scale = 1.22;
        } else {
          phaseText.textContent = l === 'ru' ? '3. Длинный медленный выдох' : '3. Long slow exhale';
          scale = 0.94;
        }
        orb.style.setProperty('--orb-scale', String(scale));
        btnStart.textContent = timerId ? (l === 'ru' ? 'Пауза' : 'Pause') : (l === 'ru' ? 'Продолжить' : 'Resume');
      }
    }

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    btnStart.addEventListener('click', function () {
      if (elapsed >= totalSeconds) elapsed = 0;
      if (timerId) {
        stopTimer();
        renderUrge();
        return;
      }
      timerId = setInterval(function () {
        elapsed = Math.min(totalSeconds, elapsed + 1);
        if (elapsed >= totalSeconds) stopTimer();
        renderUrge();
      }, 1000);
      renderUrge();
    });

    btnReset.addEventListener('click', function () {
      stopTimer();
      elapsed = 0;
      renderUrge();
    });

    document.addEventListener('hw:langchange', renderUrge);
    renderUrge();
  }
})();
