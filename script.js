const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuButton.querySelector('use').setAttribute('href', isOpen ? '#i-close' : '#i-menu');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.querySelector('use').setAttribute('href', '#i-menu');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const englishCopy = {
  'JET-JET — Un geste simple, un impact durable': 'JET-JET — A simple gesture, lasting impact',
  'Navigation principale': 'Main navigation',
  'JET-JET, retour en haut': 'JET-JET, back to top',
  'Ouvrir le menu': 'Open menu',
  'Fermer le menu': 'Close menu',
  'Reproduction de l’écran d’accueil JET-JET': 'JET-JET home screen preview',
  "Aperçu de l'accueil clair JET-JET": 'Light JET-JET home preview',
  'Accueil clair, données de démonstration': 'Light home screen, demonstration data',
  'Le concept': 'The concept',
  'Collecte en temps réel': 'Real-time collection',
  'Fonctionnalités': 'Features',
  'Comment ça marche': 'How it works',
  'FAQ': 'FAQ',
  "Rejoindre la liste d'attente": 'Join the waiting list',
  'UNE NOUVELLE FAÇON DE FAIRE LA DIFFÉRENCE': 'A NEW WAY TO MAKE A DIFFERENCE',
  'Moins de déchets.': 'Less waste.',
  'Plus de demain': 'More tomorrow',
  'Demandez une collecte quand vous en avez besoin. JET-JET vous met en relation avec un collecteur disponible près de chez vous et vous permet de suivre chaque étape en temps réel.': 'Request a pickup whenever you need one. JET-JET connects you with an available collector nearby and lets you track every step in real time.',
  'Découvrir la collecte': 'Discover collection',
  'Une application pensée pour un quotidien plus responsable.': 'An app designed for a more responsible everyday life.',
  'Bonjour 👋': 'Hello 👋',
  'Utilisateur JET-JET': 'JET-JET user',
  '+ NOUVELLE DEMANDE': '+ NEW REQUEST',
  'Planifiez': 'Schedule',
  'votre collecte': 'your pickup',
  'En moins de 2 minutes': 'In less than 2 minutes',
  'Total': 'Total',
  'Terminées': 'Completed',
  'Attente': 'Pending',
  'En cours': 'In progress',
  'Accès rapide': 'Quick access',
  'Carte': 'Map',
  'Points proches': 'Nearby points',
  'Don · Troc · Réemploi': 'Donate · Trade · Reuse',
  'Boutique': 'Store',
  'Historique': 'History',
  'Mes demandes': 'My requests',
  'Récentes': 'Recent',
  'Voir tout →': 'See all →',
  'Accueil': 'Home',
  'Profil': 'Profile',
  '01 / UN QUOTIDIEN PLUS VERT': '01 / A GREENER EVERYDAY LIFE',
  'DÉFILER POUR EXPLORER ↓': 'SCROLL TO EXPLORE ↓',
  'COLLECTER': 'COLLECT',
  'RECYCLER': 'RECYCLE',
  'RÉUTILISER': 'REUSE',
  'AGIR ENSEMBLE': 'ACT TOGETHER',
  'LE CONCEPT / 01': 'THE CONCEPT / 01',
  "La planète n'attend pas.": 'The planet cannot wait.',
  'Et si on commençait ici ?': 'What if we started here?',
  "JET-JET rassemble les outils dont vous avez besoin pour mieux gérer vos déchets au quotidien. Demandez un passage à la demande, trouvez un point de dépôt, suivez vos actions et découvrez de nouvelles façons de consommer.": 'JET-JET brings together the tools you need to manage waste better every day. Request a pickup, find a drop-off point, track your actions and discover new ways to consume.',
  "L'INNOVATION JET-JET / 02": 'JET-JET INNOVATION / 02',
  'La collecte devient': 'Collection becomes',
  'à la demande.': 'on demand.',
  "Comme une marketplace, JET-JET connecte votre besoin à un collecteur disponible. Vous publiez une demande, un opérateur l'accepte et vous suivez l'intervention au fil des mises à jour.": 'Like a marketplace, JET-JET connects your need with an available collector. You post a request, an operator accepts it and you follow the service as it updates.',
  '1. Vous publiez': '1. You post',
  '2. Un collecteur accepte': '2. A collector accepts',
  '3. Vous suivez en direct': '3. You track it live',
  'L’APPLICATION / 03': 'THE APP / 03',
  'Tout ce qu’il faut': 'Everything you need',
  'pour': 'to',
  'passer à l’action.': 'take action.',
  'Une seule application, plein de façons de faire la différence. Explorez ce que JET-JET vous réserve.': 'One app, many ways to make a difference. Explore what JET-JET has in store for you.',
  '01 / COLLECTE À DOMICILE': '01 / AT-HOME COLLECTION',
  'Vos déchets,': 'Your waste,',
  'notre mission.': 'our mission.',
  'Comment ça marche': 'How it works',
  'Nouvelle collecte': 'New collection',
  'Déchets': 'Waste',
  'Adresse': 'Address',
  'Planning': 'Schedule',
  'Quels déchets ?': 'Which waste?',
  'Sélectionnez les types à collecter': 'Select the types to collect',
  'Plastique': 'Plastic',
  'Papier': 'Paper',
  'Verre': 'Glass',
  'Continuer': 'Continue',
  '02 / CARTE INTERACTIVE': '02 / INTERACTIVE MAP',
  'Points de collecte': 'Collection points',
  'Tous': 'All',
  'Déchets ménagers': 'Household waste',
  'Déchets recyclables': 'Recyclable waste',
  '5 points': '5 points',
  'Le bon endroit, tout près.': 'The right place, close by.',
  '03 / SUIVI & NOTIFICATIONS': '03 / TRACKING & NOTIFICATIONS',
  'En attente': 'Pending',
  'Terminées': 'Completed',
  'Demande de collecte': 'Collection request',
  'Suivez son statut dans l’historique': 'Track its status in your history',
  'Notifications': 'Notifications',
  'Les nouveautés de vos demandes': 'Updates about your requests',
  'Gardez le fil, simplement.': 'Stay in the loop, simply.',
  '04 / ÉCONOMIE CIRCULAIRE': '04 / CIRCULAR ECONOMY',
  'Faites circuler, pas jeter': 'Keep things moving, do not throw them away',
  'Annonces': 'Listings',
  'Mes annonces': 'My listings',
  'Dons': 'Donations',
  'Troc': 'Trade',
  'Vente': 'Sale',
  'Une nouvelle vie pour chaque objet': 'A new life for every item',
  'Donner · Échanger · Réparer': 'Donate · Trade · Repair',
  '+ Publier une annonce': '+ Post a listing',
  'Une seconde vie': 'A second life',
  'pour vos objets.': 'for your items.',
  '05 / JETSTORE': '05 / JETSTORE',
  'Équipement zéro déchet': 'Zero-waste equipment',
  '♻ ZÉRO DÉCHET': '♻ ZERO WASTE',
  'Équipez-vous pour un': 'Equip yourself for a',
  'monde plus propre.': 'cleaner world.',
  '⭐ En vedette': '⭐ Featured',
  'Tous les produits →': 'All products →',
  'Consommer autrement.': 'Consume differently.',
  '06 / MESSAGERIE & PROFIL': '06 / MESSAGING & PROFILE',
  'Messages': 'Messages',
  'Vos conversations circulaires': 'Your circular conversations',
  'Votre profil': 'Your profile',
  'On avance ensemble.': 'Moving forward together.',
  'EN PRATIQUE / 04': 'IN PRACTICE / 04',
  'Changer ses habitudes,': 'Change your habits,',
  'pas son emploi du temps.': 'not your schedule.',
  'Des questions ?': 'Questions?',
  'Publiez votre demande': 'Post your request',
  'Un collecteur prend la course': 'A collector takes the job',
  'Suivez jusqu’à la fin': 'Track it to the end',
  'POUR LES COLLECTEURS / 05': 'FOR COLLECTORS / 05',
  'Transformez vos trajets en': 'Turn your routes into',
  'opportunités.': 'opportunities.',
  'S’inscrire comme collecteur': 'Sign up as a collector',
  'Demandes à proximité': 'Nearby requests',
  'Deux offres simples': 'Two simple offers',
  'Un impact concret': 'A tangible impact',
  'UN PETIT GESTE, UN GRAND MOUVEMENT': 'ONE SMALL GESTURE, A BIG MOVEMENT',
  'Une ville plus propre': 'A cleaner city',
  'commence': 'starts',
  'avec nous.': 'with us.',
  'BON À SAVOIR / 06': 'GOOD TO KNOW / 06',
  'On vous répond.': 'We have answers.',
  'Questions fréquentes': 'Frequently asked questions',
  'Retour en haut ↑': 'Back to top ↑',
  'Contact': 'Contact',
  'Réseaux sociaux': 'Social media',
  'Tous droits réservés.': 'All rights reserved.',
  'Fait pour un monde plus vert': 'Made for a greener world'
};

function replaceCopy(value) {
  const trimmed = value.trim();
  const translated = englishCopy[trimmed];
  if (!translated) return value;
  return value.replace(trimmed, translated);
}

function translatePage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => { node.nodeValue = replaceCopy(node.nodeValue); });

  document.querySelectorAll('[aria-label], [title], [alt], [placeholder]').forEach((element) => {
    ['aria-label', 'title', 'alt', 'placeholder'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, replaceCopy(element.getAttribute(attribute)));
    });
  });
  document.documentElement.lang = 'en';
  document.title = englishCopy[document.title] || 'JET-JET — A simple gesture, lasting impact';
  document.querySelector('#language-toggle').textContent = 'FR';
  document.querySelector('#language-toggle').setAttribute('aria-label', 'Passer en français');
}

const languageToggle = document.querySelector('#language-toggle');
if (localStorage.getItem('jetjet-language') === 'en') translatePage();
languageToggle.addEventListener('click', () => {
  const isEnglish = localStorage.getItem('jetjet-language') === 'en';
  localStorage.setItem('jetjet-language', isEnglish ? 'fr' : 'en');
  window.location.reload();
});

const homePreview = document.querySelector('.app-shot');
const previewLabel = document.querySelector('.home-shot-grid');

if (homePreview && previewLabel) {
  window.setInterval(() => {
    if (document.hidden) return;
    const isDark = homePreview.classList.toggle('app-shot-dark');
    homePreview.classList.toggle('app-shot-light', !isDark);
    const language = localStorage.getItem('jetjet-language') === 'en';
    const home = language ? 'Home' : 'Accueil';
    const dark = language ? (isDark ? 'dark' : 'light') : (isDark ? 'sombre' : 'clair');
    homePreview.setAttribute('aria-label', `${home} ${dark}, ${language ? 'demonstration data' : 'données de démonstration'}`);
    previewLabel.setAttribute('aria-label', `${language ? 'JET-JET' : 'Aperçu de l'}${language ? ' ' + dark + ' home preview' : 'accueil ' + dark + ' JET-JET'}`);
  }, 7000);
}
