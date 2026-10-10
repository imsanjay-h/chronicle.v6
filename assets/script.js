/* ═══════════════════════════════════════════════════════════
   SCRIPT — nav, reveal, modal, tabs, utilities
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── CREATE ATMOSPHERE LAYERS ──────────────────
  if (!document.querySelector('.grain')) {
    const grain = document.createElement('div');
    grain.className = 'grain';
    document.body.appendChild(grain);
  }
  if (!document.querySelector('.scanlines')) {
    const scan = document.createElement('div');
    scan.className = 'scanlines';
    document.body.appendChild(scan);
  }
  if (!document.getElementById('dust')) {
    const dust = document.createElement('canvas');
    dust.id = 'dust';
    document.body.appendChild(dust);
  }

  // ─── NAV ACTIVE STATE ──────────────────────────
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a.navlink').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ─── SCROLL REVEAL ─────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  function attachReveal() {
    document.querySelectorAll('.reveal:not(.observed)').forEach(r => {
      r.classList.add('observed');
      revealObserver.observe(r);
    });
  }
  attachReveal();
  window.attachReveal = attachReveal;

  // ─── MODAL ─────────────────────────────────────
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    const modal = overlay.querySelector('.modal');

    function openModal(data) {
      modal.querySelector('h3').textContent = data.title || '';
      modal.querySelector('.modal-meta').textContent = [data.year, data.director].filter(Boolean).join(' · ');
      const starsEl = modal.querySelector('.stars');
      if (data.stars) {
        starsEl.textContent = data.stars;
        starsEl.style.display = 'block';
      } else {
        starsEl.style.display = 'none';
      }
      const reviewEl = modal.querySelector('.review');
      if (data.note && data.note.trim()) {
        reviewEl.textContent = data.note;
        reviewEl.style.display = 'block';
      } else {
        reviewEl.style.display = 'none';
      }
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal]');
      if (trigger) {
        try {
          const data = JSON.parse(trigger.getAttribute('data-modal'));
          openModal(data);
        } catch(err) {}
      }
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    modal.querySelector('.close').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ─── TABS ──────────────────────────────────────
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('[data-panel]').forEach(p => {
          p.style.display = p.getAttribute('data-panel') === target ? 'block' : 'none';
        });
      });
    });
  });

  // ─── STAR HELPER ───────────────────────────────
  window.starStr = function(rating) {
    if (!rating) return '';
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return '★'.repeat(full) + (half ? '½' : '');
  };

  // ─── PROJECTOR BEAM ON HERO ────────────────────
  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.beam')) {
    const beam = document.createElement('div');
    beam.className = 'beam';
    hero.appendChild(beam);
  }

});
