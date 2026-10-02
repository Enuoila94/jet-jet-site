const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuButton.querySelector('use').setAttribute('href', isOpen ? '#i-close' : '#i-menu');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    menuButton.querySelector('use').setAttribute('href', '#i-menu');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const homePreview = document.querySelector('.app-shot');
const previewLabel = document.querySelector('.home-shot-grid');

if (homePreview && previewLabel) {
  window.setInterval(() => {
    if (document.hidden) return;
    const isDark = homePreview.classList.toggle('app-shot-dark');
    homePreview.classList.toggle('app-shot-light', !isDark);
    homePreview.setAttribute('aria-label', `Accueil ${isDark ? 'sombre' : 'clair'}, données de démonstration`);
    previewLabel.setAttribute('aria-label', `Aperçu de l'accueil ${isDark ? 'sombre' : 'clair'} JET-JET`);
  }, 7000);
}
