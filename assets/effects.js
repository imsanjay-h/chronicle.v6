/* ═══════════════════════════════════════════════════════════
   EFFECTS — cursor, dust, page transitions, sound
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ─── CUSTOM CURSOR ─────────────────────────────
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));

  // Hover state for interactive elements
  function attachHover() {
    document.querySelectorAll('a, button, .poster, .door, .connect-card, .tab, .currently-card, .tool-btn').forEach(el => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = '1';
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
  attachHover();
  window.attachHover = attachHover;

  // ─── DUST PARTICLES ────────────────────────────
  const canvas = document.getElementById('dust');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const count = window.innerWidth < 800 ? 30 : 70;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15 - 0.05,
        a: Math.random() * 0.5 + 0.1
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,185,109,${p.a * 0.6})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ─── PAGE TRANSITIONS ──────────────────────────
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) return;
    if (link.target === '_blank') return;

    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = href;
    }, 320);
  });

  window.addEventListener('pageshow', () => {
    overlay.classList.remove('active');
  });

  // ─── SCROLL PROGRESS ───────────────────────────
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);

  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = (window.scrollY / h) * 100;
    progress.style.width = p + '%';
  }, { passive: true });

  // ─── NAV SCROLL STATE ──────────────────────────
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ─── BACK TO TOP ───────────────────────────────
  const toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.innerHTML = '↑';
  toTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(toTop);

  window.addEventListener('scroll', () => {
    toTop.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── TOGGLE BUTTONS (scanlines) ────────────────
  const scanBtn = document.getElementById('toggle-scanlines');
  if (scanBtn) {
    scanBtn.addEventListener('click', () => {
      document.body.classList.toggle('scanlines-on');
      scanBtn.classList.toggle('active');
    });
  }

  // ─── SOUND (subtle WebAudio clicks) ────────────
  let audioCtx = null;
  let soundOn = false;

  const soundBtn = document.getElementById('toggle-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundOn = !soundOn;
      soundBtn.classList.toggle('active');
      soundBtn.textContent = soundOn ? '♪' : '♪';
      if (soundOn && !audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playTone(soundOn ? 660 : 440, 0.08, 0.05);
    });
  }

  function playTone(freq, dur, gain) {
    if (!soundOn || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      g.gain.value = gain;
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch(e) {}
  }

  // Play subtle hover/click sounds
  document.addEventListener('mouseenter', () => {}, true);
  document.addEventListener('click', (e) => {
    if (soundOn && e.target.closest('a, button, .poster')) {
      playTone(880, 0.06, 0.03);
    }
  }, true);

  // ─── MAGNETIC HOVER on buttons ─────────────────
  document.querySelectorAll('.door, .connect-card, .tool-btn').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', x + '%');
      el.style.setProperty('--my', y + '%');
    });
  });

  // Poster glow follows cursor
  document.addEventListener('mousemove', (e) => {
    const poster = e.target.closest('.poster .plate');
    if (poster) {
      const rect = poster.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      poster.style.setProperty('--mx', x + '%');
      poster.style.setProperty('--my', y + '%');
    }
  });

})();
