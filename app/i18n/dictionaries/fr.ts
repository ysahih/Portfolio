import type { Dictionary } from './en';

/* Dictionnaire français (langue par défaut du site).
   Typographie : espace insécable ( ) avant « : ? ; » et à l'intérieur des guillemets.
   Dans les paragraphes, **texte** est rendu en couleur d'accent. */

const fr: Dictionary = {
  meta: {
    title: 'Youssef Sahih — Développeur logiciel — React, TypeScript, tests',
    description:
      'Développeur logiciel avec trois ans d’expérience en production sur React et TypeScript, responsable des tests end-to-end autant que des fonctionnalités. 138 pull requests fusionnées, 109 specs Cypress et une suite Playwright de 133 tests.',
    ogLocale: 'fr_FR',
    jobTitle: 'Développeur logiciel',
  },

  nav: {
    items: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      contact: 'Contact',
    },
    homeAria: 'Youssef Sahih — retour en haut',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    toLight: 'Passer en mode clair',
    toDark: 'Passer en mode sombre',
    langSwitch: { label: 'EN', aria: 'Read in English', href: '/en', hrefLang: 'en' },
  },

  hero: {
    title: 'Développeur logiciel — React, TypeScript, tests',
    availability: 'Recherche une alternance de 24 mois · rentrée de janvier 2027 · Paris / Île-de-France',
    headline:
      'Développeur logiciel avec trois ans d’expérience en production sur React et TypeScript, responsable des tests end-to-end autant que des fonctionnalités.',
    stats: [
      { value: '138', label: 'Pull requests fusionnées' },
      { value: '109', label: 'Specs Cypress' },
      { value: '133', label: 'Tests Playwright' },
    ],
    viewWork: 'Voir mes projets',
    resume: 'CV',
  },

  about: {
    title: 'À propos',
    paragraphs: [
      'Développeur logiciel avec trois ans d’expérience en production sur React et TypeScript, responsable des tests end-to-end autant que des fonctionnalités : 138 pull requests fusionnées en 26 mois sur une même base de code en production, 109 specs Cypress et une suite Playwright de 133 tests. Côté backend et systèmes, Node, NestJS et C++, à travers des projets personnels et ceux du réseau 42. Développeur frontend chez **Im’enSe** d’août 2024 à octobre 2026, sur des applications web pour le secteur QHSE en React 18 et TypeScript.',
      'Formé à **1337** (réseau 42) de 2022 à octobre 2026 : programmation système, algorithmique, architecture réseau et apprentissage entre pairs, sans cours magistraux ni formateurs. Depuis novembre 2026, je prépare à **42 Paris** le titre RNCP 39774 « Expert en architecture informatique » (niveau 7). Basé à Paris 17e, je recherche un contrat d’apprentissage de 24 mois à partir de la rentrée de janvier 2027, en développement frontend, fullstack ou automatisation QA.',
    ],
    stats: [
      { value: '3+', label: 'Ans d’expérience' },
      { value: '138', label: 'Pull requests fusionnées' },
      { value: '7', label: 'Langues i18n en production' },
    ],
  },

  skills: {
    title: 'Compétences',
    categories: [
      { label: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS', 'SCSS', 'Tailwind CSS', 'Design tokens', 'Redux Toolkit', 'RTK Query', 'Formik', 'Yup', 'react-i18next'] },
      { label: 'Bibliothèques', skills: ['React Router v6', 'TanStack Table', 'Recharts', 'Framer Motion', 'react-dnd', 'dayjs'] },
      { label: 'Backend & systèmes', skills: ['Node.js', 'NestJS', 'Express.js', 'Conception d’API REST', 'WebSockets', 'Socket.io', 'Python', 'C', 'C++98'] },
      { label: 'Authentification & sécurité', skills: ['JWT', 'OAuth 2.0', '2FA', 'Rotation des refresh tokens', 'Gestion de sessions', 'Rate limiting', 'Middleware'] },
      { label: 'Bases de données', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Prisma ORM', 'Modélisation relationnelle'] },
      { label: 'DevOps & CI/CD', skills: ['Git', 'CI/CD', 'Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'Vercel', 'Railway', 'Déploiement sur VPS'] },
      { label: 'IA & LLM', skills: ['Claude Code', 'Claude API', 'whisper.cpp', 'AssemblyAI', 'Intégration de LLM'] },
      { label: 'Tests & outils', skills: ['Cypress', 'Playwright', 'Jest', 'Vitest', 'React Testing Library', 'Mock réseau', 'Fixtures de test', 'Postman', 'Vite', 'Electron', 'Jira', 'Agile/Scrum'] },
    ],
  },

  experience: {
    title: 'Expérience professionnelle',
    subtitle: 'Mon parcours professionnel et mes principales réalisations.',
    achievementsLabel: 'Réalisations clés :',
    logoAlt: 'logo',
    items: {
      imense: {
        position: 'Développeur frontend',
        company: 'Im’enSe',
        location: 'Tanger, Maroc',
        period: 'août 2024 – oct. 2026',
        description: 'Développement d’applications web pour le secteur QHSE en React 18 et TypeScript.',
        scale: '138 pull requests fusionnées en 26 mois, sur environ 1 500 fichiers.',
        achievements: [
          'Responsable de la suite de tests end-to-end : 109 specs Cypress couvrant environ un millier d’assertions, exécutées à la fois sur un réseau mocké et sur un backend de développement réel, ainsi qu’une suite Playwright de 133 tests avec mock des routes et sélecteurs par rôle',
          'Fiabilisation du workflow CI Cypress grâce à un groupe de concurrence, pour que les exécutions parallèles ne corrompent plus le backend de test partagé',
          'Conception de la couche de données RTK Query : 13 modules d’API avec invalidation du cache par tags, répartis sur 17 fichiers',
          'Introduction de design tokens en variables CSS dans la configuration Tailwind, devenus le système de couleurs de plus de 450 fichiers de composants',
          'Création d’un ensemble de composants métier à partir de maquettes Figma, sur la base du design system interne — champs de formulaire, badges de statut, cartes KPI et cartes de données — présentés dans une route playground de l’application. Le badge de statut a été intégré à la bibliothèque partagée et repris par six écrans',
          'Développement et maintenance de plus de 30 modules React 18 en production avec TypeScript, Redux Toolkit et RTK Query',
          'Code splitting au niveau des routes, composant d’image en lazy loading avec placeholder flouté, et correction d’une clé de cache qui fusionnait des résultats filtrés en une seule entrée',
          'Résolution de bugs d’ordre d’exécution des hooks non déterministe et de problèmes de timing d’UI optimiste, par une gestion précise du cycle de vie du cache',
          'Travail sur environ 1 500 clés de traduction en 7 langues, 94 hooks personnalisés et 1 538 interfaces typées réparties sur 465 fichiers ; définition des contrats d’API REST et des payloads avec l’équipe backend',
        ],
      },
      freelance: {
        position: 'Développeur web freelance',
        company: 'Indépendant',
        location: 'À distance',
        period: 'déc. 2022 – août 2024',
        description:
          'Applications web pour des clients directs, en solo et à distance, en parallèle du cursus 1337. Du cadrage jusqu’au déploiement. Code propriété des clients, rien de public.',
        scale: '',
        achievements: [],
      },
    },
  },

  projects: {
    title: 'Projets',
    featured: 'À la une',
    filters: {
      all: 'Tous',
      personal: 'Projet personnel',
      web: 'Développement web',
      systems: 'Programmation système',
      devops: 'DevOps',
      graphics: 'Programmation graphique',
      security: 'Sécurité',
    },
    liveDemo: 'Démo en ligne',
    repo: 'GitHub',
    filterAria: 'Filtrer les projets par catégorie',
    items: {
      billing: {
        title: 'billing-service',
        impact: 'Facturation par abonnement Stripe, déployée',
        description:
          'Facturation pilotée par webhooks, où Stripe est la source de vérité et la base de données un modèle de lecture. Idempotence assurée par une contrainte d’unicité sur l’identifiant d’événement, écrite dans la même transaction que le changement d’état. La suite de tests envoie 8 copies du même webhook en parallèle et vérifie qu’une seule est traitée. Un test Playwright couvre le parcours complet, de la page de tarifs à un compte actif via Stripe Checkout.',
      },
      transcendence: {
        title: 'ft_transcendence — Plateforme multijoueur',
        impact: 'Plateforme de jeu multijoueur en temps réel',
        description:
          'Projet du réseau 42. Architecture full-stack de bout en bout : frontend Next.js, API REST NestJS, backend PostgreSQL/Prisma. Authentification JWT avec OAuth 2.0, 2FA, rotation des refresh tokens, rate limiting et guards. Multijoueur en temps réel avec Socket.io, matchmaking et chat complet avec canaux publics et privés. Conteneurisé avec Docker Compose.',
      },
      sentra: {
        title: 'Sentra — Intelligence de réunion',
        impact: 'Application desktop d’analyse de réunions par IA',
        description:
          'Application desktop Electron à double pipeline : inférence Whisper locale hors ligne et diarisation cloud via AssemblyAI. Backend Node.js pour le découpage audio, l’orchestration des modèles et le streaming de mises à jour JSON vers l’interface React. API Claude pour un chat de recherche ancré dans la transcription ; packagée avec Electron Builder et CI/CD GitHub Actions.',
      },
      irc: {
        title: 'Serveur IRC',
        impact: 'Implémentation d’un serveur IRC multi-clients',
        description:
          'Serveur IRC conforme au protocole, écrit en C++98 sans bibliothèque réseau : sockets bruts, I/O non bloquantes, gestion simultanée de plusieurs clients, état par canal, commandes opérateur et mise en tampon des messages partiels entre deux lectures.',
      },
      sash: {
        title: 'Sash — Shell Unix',
        impact: 'Shell de type Bash : pipes, redirections et signaux',
        description:
          'Shell Unix de type Bash écrit en C. Exécution de commandes, built-ins (cd, echo, pwd, export, exit), redirections d’entrée/sortie (<, >, >>, <<), pipelines, expansion des variables d’environnement et gestion des signaux Unix (Ctrl+C / Ctrl+\\ / Ctrl+D).',
      },
      cve: {
        title: 'CVE Vulnerability Analyzer',
        impact: 'Outil d’analyse des données CVE de la base NVD',
        description:
          'Outil Python qui récupère les données CVE (Common Vulnerabilities and Exposures) depuis la National Vulnerability Database (NVD), les filtre et les traite avec pandas, puis met en avant les descriptions de vulnérabilités pour analyse.',
      },
      inception: {
        title: 'Inception',
        impact: 'Infrastructure web conteneurisée',
        description:
          'Infrastructure multi-conteneurs Docker avec Nginx, WordPress et MariaDB. Uniquement des Dockerfiles écrits à la main, aucune image préconstruite. TLS via certificats auto-signés.',
      },
      cub3d: {
        title: 'Cub3D',
        impact: 'Moteur graphique 3D par raycasting',
        description:
          'Raycaster 3D à la première personne en C avec miniLibX. Algorithme DDA pour le rendu des murs, mapping de textures et détection des collisions du joueur.',
      },
    },
  },

  education: {
    title: 'Formation',
    subtitle: 'Mon parcours académique et les formations qui ont construit mes compétences.',
    items: [
      {
        school: '42 Paris',
        degree: 'Expert en architecture informatique — titre RNCP de niveau 7 (RNCP 39774)',
        period: 'Depuis nov. 2026',
        location: 'Paris, France',
        description:
          'Préparation du titre RNCP 39774 « Expert en architecture informatique ». Architecture logicielle, systèmes, réseaux, architecture des données. Niveau 14 atteint ; condition d’expérience professionnelle validée ; éligible à un contrat d’apprentissage de 24 mois.',
      },
      {
        school: '1337 Coding School — réseau 42',
        degree: 'Cursus en ingénierie logicielle',
        period: '2022 – oct. 2026',
        location: 'Khouribga, Maroc',
        description:
          'Programmation système et réseau en C/C++, algorithmique, architecture web, bases de données relationnelles. Apprentissage entre pairs, revue de code et évaluation par projets, sans cours magistraux.',
      },
      {
        school: 'Université Chouaïb Doukkali',
        degree: 'Associate’s Degree en études anglaises',
        period: '2022 – 2023',
        location: 'El Jadida, Maroc',
        description: '',
      },
    ],
  },

  contact: {
    title: 'Me contacter',
    subtitle: 'Vous recrutez un alternant pour la rentrée de janvier 2027 ? Échangeons.',
    sendEmail: 'M’envoyer un e-mail',
    infoTitle: 'Coordonnées',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    location: 'Paris 17e, France',
    languagesLabel: 'Langues',
    languages: [
      { name: 'Arabe', level: 'langue maternelle' },
      { name: 'Anglais', level: 'courant, langue de travail (C1)' },
      { name: 'Français', level: 'A2, en cours d’apprentissage' },
    ],
    fallback: {
      title: 'Par e-mail ou par téléphone',
      body: 'Le formulaire n’est pas disponible pour le moment. Le plus simple est de me joindre directement\u00a0:',
      call: 'M’appeler',
    },
    connect: 'Me retrouver en ligne',
    form: {
      title: 'Envoyez-moi un message',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'E-mail',
      emailPlaceholder: 'vous@exemple.fr',
      subject: 'Objet',
      subjectPlaceholder: 'Objet de votre message',
      message: 'Message',
      messagePlaceholder: 'Votre message…',
      send: 'Envoyer le message',
      sending: 'Envoi en cours…',
      sent: 'Message envoyé !',
      failed: 'Échec de l’envoi',
      errors: {
        nameRequired: 'Le nom est requis',
        emailRequired: 'L’e-mail est requis',
        emailInvalid: 'Adresse e-mail invalide',
        subjectRequired: 'L’objet est requis',
        messageRequired: 'Le message est requis',
      },
      toastFix: 'Merci de corriger les erreurs du formulaire',
      toastSuccess: 'Message envoyé, merci !',
      toastError: 'L’envoi a échoué. Réessayez ou écrivez-moi directement par e-mail.',
    },
  },

  footer: {
    tagline:
      'Développeur logiciel : des applications web en production avec React et TypeScript, et les suites de tests qui les accompagnent.',
    quickLinks: 'Liens rapides',
    contact: 'Contact',
    copyright: '© 2026 Youssef Sahih — Développeur logiciel',
    builtBy: 'Conçu et développé par Youssef Sahih',
    scrollTop: 'Revenir en haut',
  },

  notFound: {
    title: 'Perdu dans l’espace',
    body: 'La page que vous cherchez a peut-être été déplacée, supprimée, ou n’a jamais existé dans cet univers.',
    home: 'Retour à l’accueil',
  },
};

export default fr;
