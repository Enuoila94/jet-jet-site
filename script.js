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
  "L'APPLICATION / 03": 'THE APP / 03',
  'Tout ce qu’il faut': 'Everything you need',
  "Tout ce qu'il faut": 'Everything you need',
  'pour': 'to',
  'passer à l’action.': 'take action.',
  "passer à l'action.": 'take action.',
  'Une seule application, plein de façons de faire la différence. Explorez ce que JET-JET vous réserve.': 'One app, many ways to make a difference. Explore what JET-JET has in store for you.',
  '01 / COLLECTE À DOMICILE': '01 / AT-HOME COLLECTION',
  'Vos déchets,': 'Your waste,',
  'notre mission.': 'our mission.',
  'Choisissez vos déchets, indiquez votre adresse et publiez une demande. Un collecteur disponible peut l’accepter, puis vous recevez les mises à jour jusqu’à la collecte.': 'Choose your waste, enter your address and post a request. An available collector can accept it, and you receive updates until pickup.',
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
  'Repérez les points de collecte sur la carte et trouvez où déposer vos déchets.': 'Find collection points on the map and see where to drop off your waste.',
  '03 / SUIVI & NOTIFICATIONS': '03 / TRACKING & NOTIFICATIONS',
  'En attente': 'Pending',
  'Terminées': 'Completed',
  'Demande de collecte': 'Collection request',
  'Suivez son statut dans l’historique': 'Track its status in your history',
  'Notifications': 'Notifications',
  'Les nouveautés de vos demandes': 'Updates about your requests',
  'Gardez le fil, simplement.': 'Stay in the loop, simply.',
  'Consultez l’historique de vos demandes, filtrez par statut et recevez vos notifications.': 'Review your request history, filter by status and receive notifications.',
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
  'Découvrez des articles à réutiliser et partagez les vôtres au sein de la communauté.': 'Discover items to reuse and share your own with the community.',
  '05 / JETSTORE': '05 / JETSTORE',
  'Équipement zéro déchet': 'Zero-waste equipment',
  '♻ ZÉRO DÉCHET': '♻ ZERO WASTE',
  'Équipez-vous pour un': 'Equip yourself for a',
  'monde plus propre.': 'cleaner world.',
  '⭐ En vedette': '⭐ Featured',
  'Tous les produits →': 'All products →',
  'Consommer autrement.': 'Consume differently.',
  'Explorez la boutique, ajoutez vos favoris au panier et retrouvez vos commandes.': 'Explore the store, add your favorites to the cart and find your orders.',
  '06 / MESSAGERIE & PROFIL': '06 / MESSAGING & PROFILE',
  'Messages': 'Messages',
  'Vos conversations circulaires': 'Your circular conversations',
  'Échanges autour des annonces': 'Conversations about listings',
  'Retrouvez vos conversations ici': 'Find your conversations here',
  'Votre profil': 'Your profile',
  'On avance ensemble.': 'Moving forward together.',
  'Échangez par message, gérez votre profil et restez connecté à la communauté.': 'Chat with others, manage your profile and stay connected to the community.',
  'EN PRATIQUE / 04': 'IN PRACTICE / 04',
  'Changer ses habitudes,': 'Change your habits,',
  'pas son emploi du temps.': 'not your schedule.',
  'Une demande de collecte en trois étapes. Pas de complications, juste l’essentiel. Vous pouvez demander un passage dès maintenant ou choisir un créneau à l’avance.': 'A three-step collection request. No complications, just what matters. Request a pickup now or choose a time slot in advance.',
  'Des questions ?': 'Questions?',
  'Tout ce qu’il faut savoir pour découvrir l’univers JET-JET.': 'Everything you need to know to discover the JET-JET ecosystem.',
  'Qu’est-ce que JET-JET ?': 'What is JET-JET?',
  'JET-JET est une marketplace de collecte : l’application met en relation les habitants qui ont un besoin avec des collecteurs disponibles, puis centralise le suivi de l’intervention. Elle réunit aussi une carte des points de dépôt, l’économie circulaire et une boutique.': 'JET-JET is a collection marketplace: the app connects residents who need a pickup with available collectors, then centralizes service tracking. It also brings together a drop-off map, circular economy features and a store.',
  'La collecte se fait-elle en temps réel ?': 'Is collection tracked in real time?',
  'Oui. Vous publiez votre demande, un collecteur disponible peut l’accepter et vous recevez les changements de statut et les notifications au fur et à mesure. Si vous préférez anticiper, vous pouvez aussi choisir une date et un créneau.': 'Yes. You post your request, an available collector can accept it and you receive status changes and notifications as they happen. If you prefer to plan ahead, you can also choose a date and time slot.',
  'Comment demander une collecte ?': 'How do I request a pickup?',
  'Dans l’application, choisissez vos types de déchets, indiquez une adresse puis envoyez la demande. Vous pouvez demander une prise en charge dès que possible ou sélectionner une date et un créneau horaire.': 'In the app, choose your waste types, enter an address and submit the request. You can request the earliest possible pickup or select a date and time slot.',
  'Combien coûte une collecte ?': 'How much does a pickup cost?',
  'Le tarif dépend du type de déchets, de la distance et des modalités de la course. Le montant applicable vous sera communiqué avant la confirmation de la collecte.': 'The price depends on the waste type, distance and job details. The applicable amount will be shared before you confirm the pickup.',
  'Quels moyens de paiement sont acceptés ?': 'Which payment methods are accepted?',
  'Les moyens de paiement disponibles seront indiqués dans l’application avant la validation de la demande. JET-JET affichera toujours le récapitulatif avant confirmation.': 'Available payment methods will be shown in the app before you submit the request. JET-JET always displays a summary before confirmation.',
  'Dans quelles zones JET-JET est-il disponible ?': 'Where is JET-JET available?',
  'Le service démarre au Sénégal et se déploie progressivement selon la disponibilité des collecteurs et des points de collecte. La zone couverte est précisée lors de la demande.': 'The service starts in Senegal and will expand progressively based on collector and collection-point availability. Coverage is specified when you make a request.',
  'Comment les collecteurs sont-ils vérifiés ?': 'How are collectors verified?',
  'Les collecteurs sont intégrés au réseau après vérification de leur profil et de leurs informations. Les détails du processus et les éléments de confiance seront présentés avant le lancement de chaque course.': 'Collectors join the network after their profile and information have been checked. Process details and trust information are presented before each job begins.',
  'Comment ma sécurité est-elle protégée ?': 'How is my safety protected?',
  'Les informations de la demande sont partagées uniquement avec les personnes nécessaires à sa réalisation. Les notifications, le suivi et la messagerie permettent de garder un historique clair des échanges.': 'Request information is shared only with the people needed to complete it. Notifications, tracking and messaging keep a clear record of interactions.',
  'Peut-on trouver des points de dépôt ?': 'Can I find drop-off points?',
  'Oui. Une carte interactive permet de découvrir les points de collecte et de consulter leurs informations.': 'Yes. An interactive map lets you discover collection points and view their information.',
  'Que trouve-t-on dans l’espace circulaire ?': 'What is in the circular space?',
  'L’espace circulaire permet de découvrir des articles proposés par la communauté et de publier les vôtres pour leur donner une seconde vie.': 'The circular space lets you discover items shared by the community and post your own to give them a second life.',
  'Publiez votre demande': 'Post your request',
  'Un collecteur prend la course': 'A collector takes the job',
  'Suivez jusqu’à la fin': 'Track it to the end',
  'Indiquez les déchets et votre adresse : la demande devient visible par les collecteurs disponibles.': 'Enter your waste types and address: the request becomes visible to available collectors.',
  'Vous êtes notifié dès qu’un collecteur accepte et que la collecte passe en cours.': 'You are notified as soon as a collector accepts and the pickup starts.',
  "Vous êtes notifié dès qu'un collecteur accepte et que la collecte passe en cours.": 'You are notified as soon as a collector accepts and the pickup starts.',
  'Consultez le statut en temps réel, ou planifiez simplement un créneau qui vous convient.': 'Check the live status, or simply schedule a time slot that works for you.',
  "Suivez jusqu'à la fin": 'Track it to the end',
  'POUR LES COLLECTEURS / 05': 'FOR COLLECTORS / 05',
  'Transformez vos trajets en': 'Turn your routes into',
  'opportunités.': 'opportunities.',
  'Rejoignez le réseau JET-JET, recevez des demandes proches de vous et contribuez à une ville plus propre. Choisissez entre 10 % de commission par collecte ou un abonnement mensuel de 5 000 F CFA. Les 10 premières collectes sont gratuites, sans commission.': 'Join the JET-JET network, receive nearby requests and help build a cleaner city. Choose between a 10% fee per pickup or a monthly subscription of 5,000 CFA francs. Your first 10 pickups are free, with no commission.',
  'S’inscrire comme collecteur': 'Sign up as a collector',
  "S'inscrire comme collecteur": 'Sign up as a collector',
  'Demandes à proximité': 'Nearby requests',
  'Choisissez les courses qui vous correspondent.': 'Choose the jobs that suit you.',
  'Deux offres simples': 'Two simple offers',
  '10 % par collecte ou 5 000 F CFA par mois, après vos 10 premières collectes offertes.': '10% per pickup or 5,000 CFA francs per month after your first 10 free pickups.',
  'Un impact concret': 'A tangible impact',
  'Participez au réemploi et à la propreté locale.': 'Help reuse resources and improve local cleanliness.',
  'UN PETIT GESTE, UN GRAND MOUVEMENT': 'ONE SMALL GESTURE, A BIG MOVEMENT',
  'Une ville plus propre': 'A cleaner city',
  'commence': 'starts',
  'avec nous.': 'with us.',
  'Collecte, réemploi, partage : JET-JET vous accompagne dans chaque geste qui fait avancer les choses.': 'Collection, reuse, sharing: JET-JET supports every action that moves things forward.',
  'BON À SAVOIR / 06': 'GOOD TO KNOW / 06',
  'Des questions ?': 'Questions?',
  'On vous répond.': 'We have answers.',
  "Tout ce qu'il faut savoir pour découvrir l'univers JET-JET.": 'Everything you need to know to discover the JET-JET ecosystem.',
  "Qu'est-ce que JET-JET ?": 'What is JET-JET?',
  "JET-JET est une marketplace de collecte : l'application met en relation les habitants qui ont un besoin avec des collecteurs disponibles, puis centralise le suivi de l'intervention. Elle réunit aussi une carte des points de dépôt, l'économie circulaire et une boutique.": 'JET-JET is a collection marketplace: the app connects residents who need a pickup with available collectors, then centralizes service tracking. It also brings together a drop-off map, circular economy features and a store.',
  "La collecte se fait-elle en temps réel ?": 'Is collection tracked in real time?',
  "Oui. Vous publiez votre demande, un collecteur disponible peut l'accepter et vous recevez les changements de statut et les notifications au fur et à mesure. Si vous préférez anticiper, vous pouvez aussi choisir une date et un créneau.": 'Yes. You post your request, an available collector can accept it and you receive status changes and notifications as they happen. If you prefer to plan ahead, you can also choose a date and time slot.',
  "Comment demander une collecte ?": 'How do I request a pickup?',
  "Dans l'application, choisissez vos types de déchets, indiquez une adresse puis envoyez la demande. Vous pouvez demander une prise en charge dès que possible ou sélectionner une date et un créneau horaire.": 'In the app, choose your waste types, enter an address and submit the request. You can request the earliest possible pickup or select a date and time slot.',
  "Quels moyens de paiement sont acceptés ?": 'Which payment methods are accepted?',
  "Les moyens de paiement disponibles seront indiqués dans l'application avant la validation de la demande. JET-JET affichera toujours le récapitulatif avant confirmation.": 'Available payment methods will be shown in the app before you submit the request. JET-JET always displays a summary before confirmation.',
  "Que trouve-t-on dans l'espace circulaire ?": 'What is in the circular space?',
  "L'espace circulaire permet de découvrir des articles proposés par la communauté et de publier les vôtres pour leur donner une seconde vie.": 'The circular space lets you discover items shared by the community and post your own to give them a second life.',
  'Des gestes simples.': 'Simple actions.',
  'Un avenir qui change.': 'A future that changes.',
  'Découvrir': 'Discover',
  'En savoir plus': 'Learn more',
  'Retour en haut ↑': 'Back to top ↑',
  'Questions fréquentes': 'Frequently asked questions',
  'Contact': 'Contact',
  'Réseaux sociaux': 'Social media',
  'JET-JET. Tous droits réservés.': 'JET-JET. All rights reserved.',
  'Tous droits réservés.': 'All rights reserved.',
  'Fait pour un monde plus vert': 'Made for a greener world'
};

function replaceCopy(value) {
  const trimmed = value.trim();
  const normalized = trimmed.replaceAll('’', "'");
  const matchingKey = Object.keys(englishCopy).find(
    (key) => key.replaceAll('’', "'") === normalized,
  );
  const translated = matchingKey ? englishCopy[matchingKey] : undefined;
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
  const metadata = {
    description: 'JET-JET connects residents with available collectors for on-demand waste pickup, real-time tracking and circular economy services in Dakar.',
    keywords: 'JET-JET, on-demand waste pickup Dakar, real-time waste collection, recycling Senegal, JetCycle, circular economy',
    ogtitle: 'JET-JET — Waste collection and circular economy',
    ogdescription: 'Request an on-demand pickup, find an available collector and track every step in real time with JET-JET.',
    twitterdescription: 'On-demand waste pickup connected to an available collector and tracked in real time.',
  };
  document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata.keywords);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.ogtitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.ogdescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.ogtitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.twitterdescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', 'en_US');
  document.querySelector('script[type="application/ld+json"]')?.remove();
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
