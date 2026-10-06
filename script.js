
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

document.querySelectorAll('[data-flip]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    btn.closest('.price-card')?.classList.toggle('flipped');
  });
});

document.querySelectorAll('[data-package]').forEach(link => {
  link.addEventListener('click', () => {
    const pkg = link.dataset.package;
    try { sessionStorage.setItem('emigraphixPackage', pkg); } catch (_) {}
  });
});


// Health package cards: tap/click card to flip; action links keep their own behaviour.
document.querySelectorAll('.health-flip').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    card.classList.toggle('flipped');
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
  card.querySelectorAll('[data-health-flip]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      card.classList.toggle('flipped');
    });
  });
});

// Package card back: tapping empty space returns to the front; links/buttons keep their own actions.
document.querySelectorAll('.price-card').forEach(card => {
  const back = card.querySelector('.price-back');
  if (!back) return;
  back.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    card.classList.remove('flipped');
  });
});
