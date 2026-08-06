const CATEGORIES = [
  {
    "id": "boardgames",
    "label": "Board Games",
    "subtitle": "Assistants de jeu, rôles et tablettes",
    "icon": "🎲",
    "color": "#f97316",
    "soft": "#ffedd5"
  },
  {
    "id": "soundboards",
    "label": "Soundboards",
    "subtitle": "Soundboards jouables + générateur",
    "icon": "🔊",
    "color": "#2563eb",
    "soft": "#dbeafe"
  },
  {
    "id": "music",
    "label": "Music",
    "subtitle": "Outils pour musiciens & créateurs",
    "icon": "🎵",
    "color": "#8b5cf6",
    "soft": "#ede9fe"
  },
  {
    "id": "plongee",
    "label": "Plongée",
    "subtitle": "MN90, profils, Nitrox et simulateurs",
    "icon": "🌊",
    "color": "#0891b2",
    "soft": "#cffafe"
  },
  {
    "id": "gaming",
    "label": "Gaming",
    "subtitle": "Retrogaming, consoles & homebrew",
    "icon": "🎮",
    "color": "#db2777",
    "soft": "#fce7f3"
  },
  {
    "id": "photo",
    "label": "Photo / Média",
    "subtitle": "Tri, doublons et visualisation de médias",
    "icon": "📷",
    "color": "#6366f1",
    "soft": "#e0e7ff"
  },
  {
    "id": "securite",
    "label": "Sécurité",
    "subtitle": "Cyber, mots de passe & contrôle",
    "icon": "🛡️",
    "color": "#059669",
    "soft": "#d1fae5"
  },
  {
    "id": "quizz",
    "label": "Quiz",
    "subtitle": "Expériences interactives & gamification",
    "icon": "❔",
    "color": "#ca8a04",
    "soft": "#fef3c7"
  },
  {
    "id": "tools",
    "label": "Tools",
    "subtitle": "Productivité, HSE & utilitaires",
    "icon": "🛠️",
    "color": "#e11d48",
    "soft": "#ffe4e6"
  }
];

const PROJECTS = [
  {
    "category": "boardgames",
    "title": "😊 Smile Life Tracker",
    "type": "Board Game · Tracker",
    "url": "https://soaresden.github.io/smilelifetracker/",
    "desc": "Compteur de smiles pour Smile Life et ses extensions. Inventaire des cartes par joueur, en-têtes figés, timer et export JSON.",
    "accent": "#EC407A",
    "tags": [
      "tracker",
      "score",
      "mobile"
    ],
    "art": "smile"
  },
  {
    "category": "boardgames",
    "title": "TimeBomb GUI",
    "type": "Board Game · Assistant",
    "url": "https://soaresden.github.io/TimeBombGUI/",
    "desc": "Interface de gestion pour parties de TimeBomb : scores, rôles, tours et actions en temps réel. Ambiance sabotage Cold War.",
    "accent": "#f97316",
    "tags": [
      "roles",
      "party game",
      "timer"
    ],
    "art": "timebomb"
  },
  {
    "category": "boardgames",
    "title": "🧠 Insider Tablet Version",
    "type": "Board Game · Tablet App",
    "url": "https://soaresden.github.io/insidertabletversion/",
    "desc": "Version tablette pour Insider : attribution des rôles, écran anti-spoil, révélation discrète du mot, timer court avec bips et changement de mot intégré.",
    "accent": "#8b5cf6",
    "tags": [
      "tablet",
      "insider",
      "roles"
    ],
    "new": true,
    "art": "insider"
  },
  {
    "category": "boardgames",
    "title": "⚖️ Gauche ou Droite ?",
    "type": "Board Game · Party Game",
    "url": "https://soaresden.github.io/GaucheDroiteGame/",
    "desc": "Party game de débat : glisse les prénoms dans les camps ✊ Gauche ou 💼 Droite, l'IA rend son verdict. Leaderboard, historique et profils persistants.",
    "accent": "#e11d48",
    "tags": [
      "party game",
      "IA",
      "débat"
    ],
    "new": true,
    "art": "gauchedroite"
  },
  {
    "category": "soundboards",
    "title": "🛠️ SoundBoardHTMLMaker",
    "type": "Soundboard · Generator",
    "url": "https://github.com/soaresden/SoundBoardHTMLMaker",
    "desc": "Template open-source pour générer des soundboards HTML autonomes depuis un dossier de MP3. Éditeur web, drag & drop, thèmes et build all-in-one.",
    "accent": "#0891b2",
    "tags": [
      "generator",
      "soundboard",
      "open-source"
    ],
    "github": true,
    "art": "maker"
  },
  {
    "category": "soundboards",
    "title": "🐺 Board LoupGarou",
    "type": "Soundboard · Board Game",
    "url": "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/Loup%20Garou%20by%20Denis/",
    "desc": "Soundboard immersive pour MJ Loup-Garou : musiques par phase et effets sonores par rôle. Optimisée mobile/tablette.",
    "accent": "#5174db",
    "tags": [
      "soundboard",
      "MJ",
      "ambiance"
    ],
    "art": "wolf"
  },
  {
    "category": "soundboards",
    "title": "🐍 Metal Gear Board Game",
    "type": "Soundboard · MGS",
    "url": "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/Metal%20Gear%20Board%20Game%20by%20Soaresden/",
    "desc": "Soundboard Metal Gear Solid : 14 stages, musiques originales et SFX classés. Interface tactique inspirée codec/radar.",
    "accent": "#2563eb",
    "tags": [
      "MGS",
      "soundboard",
      "boss"
    ],
    "art": "mgs"
  },
  {
    "category": "music",
    "title": "🎧 WeMeetMusik",
    "type": "Music · Social Discovery",
    "url": "https://soaresden.github.io/WeMeetMusik/",
    "desc": "Expérience web autour de la découverte musicale et du partage de goûts. Une interface légère pour connecter les personnes par la musique.",
    "accent": "#22c55e",
    "tags": [
      "music",
      "social",
      "discovery"
    ],
    "new": true,
    "art": "wemeet"
  },
  {
    "category": "music",
    "title": "Suno Tempo Boost",
    "type": "Music · Suno AI",
    "url": "https://soaresden.github.io/SunoBypassMp3/",
    "desc": "Accélérateur de tempo MP3 par lot. Modifie temporairement la vitesse du fichier avant réajustement dans l’éditeur Suno.",
    "accent": "#8b5cf6",
    "tags": [
      "mp3",
      "tempo",
      "batch"
    ],
    "art": "tempo"
  },
  {
    "category": "music",
    "title": "Web MuseScore Player",
    "type": "Music · Partitions",
    "url": "https://soaresden.github.io/WebMuseScorePlayer/",
    "desc": "Lecteur de partitions MuseScore dans le navigateur. Visualisation et lecture audio sans logiciel tiers.",
    "accent": "#a855f7",
    "tags": [
      "score",
      "player",
      "browser"
    ],
    "art": "score"
  },
  {
    "category": "music",
    "title": "📱 Mobile Player",
    "type": "Music · Web Player",
    "url": "https://soaresden.github.io/MobilePlayer/",
    "desc": "Lecteur audio mobile façon Spotify : playlists, lecture aléatoire, pochettes et téléchargements, le tout dans le navigateur.",
    "accent": "#22c55e",
    "tags": [
      "player",
      "mobile",
      "playlist"
    ],
    "new": true,
    "art": "player"
  },
  {
    "category": "plongee",
    "title": "MN90Mobile · Accueil",
    "type": "Plongée · Suite MN90",
    "url": "https://soaresden.github.io/MN90Mobile/index.html",
    "desc": "Page d’accueil de la suite MN90Mobile : point d’entrée vers les outils de planification, Nitrox, profils et simulateurs.",
    "accent": "#0891b2",
    "tags": [
      "MN90",
      "index",
      "mobile"
    ],
    "art": "mn90"
  },
  {
    "category": "plongee",
    "title": "MN90Mobile · Tables",
    "type": "Plongée · Tables MN90",
    "url": "https://soaresden.github.io/MN90Mobile/",
    "desc": "Application mobile de planification de plongée : paliers, autonomie bouteille, groupes successifs et intervalles de surface.",
    "accent": "#0891b2",
    "tags": [
      "MN90",
      "paliers",
      "mobile"
    ],
    "art": "tables"
  },
  {
    "category": "plongee",
    "title": "Remontée Assistée 3D",
    "type": "Plongée · Simulateur 3D",
    "url": "https://soaresden.github.io/MN90Mobile/3dassist/index.html",
    "desc": "Simulateur immersif de sauvetage en plongée : stabs, poumon-ballast, vitesse de remontée et sites d’entraînement.",
    "accent": "#0891b2",
    "tags": [
      "3D",
      "RIFAP",
      "simulation"
    ],
    "art": "assist3d"
  },
  {
    "category": "plongee",
    "title": "Dessin de Profil de Plongée",
    "type": "Plongée · Profil",
    "url": "https://soaresden.github.io/MN90Mobile/decomp.html",
    "desc": "Dessinez un profil de plongée et obtenez une analyse temps/profondeur avec saturation N₂ et gradient factors.",
    "accent": "#0891b2",
    "tags": [
      "profil",
      "N₂",
      "GF"
    ],
    "art": "profile"
  },
  {
    "category": "plongee",
    "title": "DTR · Plongée",
    "type": "Plongée · DTR",
    "url": "https://soaresden.github.io/MN90Mobile/dtr.html",
    "desc": "Outil dédié à la DTR / durée totale de remontée dans la suite MN90Mobile.",
    "accent": "#0e7490",
    "tags": [
      "DTR",
      "remontée",
      "MN90"
    ],
    "art": "dtr"
  },
  {
    "category": "plongee",
    "title": "Calculateur Nitrox",
    "type": "Plongée · Nitrox",
    "url": "https://soaresden.github.io/MN90Mobile/nitrox.html",
    "desc": "MOD, profondeur équivalente air et Nitrox optimal. Formules pédagogiques et tableau de référence EAN.",
    "accent": "#059669",
    "tags": [
      "nitrox",
      "MOD",
      "EAD"
    ],
    "art": "nitrox"
  },
  {
    "category": "plongee",
    "title": "Dive — Le Jeu du Plongeur",
    "type": "Plongée · Jeu",
    "url": "https://soaresden.github.io/MN90Mobile/dive.html",
    "desc": "Mini-jeu de plongée : contrôlez votre plongeur, évitez les obstacles et gérez votre réserve d’oxygène.",
    "accent": "#0891b2",
    "tags": [
      "game",
      "oxygen",
      "arcade"
    ],
    "art": "dive"
  },
  {
    "category": "plongee",
    "title": "📒 Carnet de Plongée",
    "type": "Plongée · Carnet numérique",
    "url": "https://github.com/soaresden/PlongeeJournal",
    "desc": "Carnet de plongée local, sans compte ni cloud : un simple JSON sur ton disque. Saisie mobile, import .fit (Suunto/Garmin/Shearwater), faune & flore par lieu via iNaturalist, carte, calendrier et PWA hors connexion.",
    "accent": "#0891b2",
    "tags": [
      "carnet",
      "fit",
      "PWA"
    ],
    "new": true,
    "github": true,
    "art": "carnet"
  },
  {
    "category": "photo",
    "title": "🗂️ TriPhoto",
    "type": "Photo · Desktop App",
    "url": "https://github.com/soaresden/photoorganizer",
    "desc": "App Python/Qt pour ranger et dédoublonner des milliers de photos et vidéos. Comparaison de contenu réel (dHash, taille, durée, vidéos image par image), tri chronologique fiable et visualiseur avec frise interactive.",
    "accent": "#6366f1",
    "tags": [
      "doublons",
      "dHash",
      "PySide6"
    ],
    "new": true,
    "github": true,
    "art": "triphoto"
  },
  {
    "category": "photo",
    "title": "🎬 Video Thumbnail Changer",
    "type": "Média · Desktop App",
    "url": "https://github.com/soaresden/Video-Thumbnail-Changer",
    "desc": "Réécriture Python d'un outil VB.NET pour embarquer une miniature personnalisée dans une vidéo. Extraction de 10 frames, lecteur VLC intégré, montage 2×2, texte en surimpression avec aperçu live et accélération GPU.",
    "accent": "#6366f1",
    "tags": [
      "ffmpeg",
      "thumbnail",
      "VLC"
    ],
    "new": true,
    "github": true,
    "art": "thumbnail"
  },
  {
    "category": "gaming",
    "title": "🎮 RETROLauncher · exFAT PS2",
    "type": "Gaming · Fork PS2 · Homebrew",
    "url": "https://github.com/soaresden/RETROLauncher",
    "desc": "Fork du launcher retro PS2 en Lua (Enceladus) avec support exFAT : bibliothèques de ROMs lancées via RetroArch, POPStarter, Neutrino, OPL et wLaunchELF ISR, dans une interface rétrowave.",
    "accent": "#db2777",
    "tags": [
      "PS2",
      "exFAT",
      "fork"
    ],
    "new": true,
    "github": true,
    "art": "retro"
  },
  {
    "category": "securite",
    "title": "Google Dark Web Checker for Bitwarden",
    "type": "Sécurité · Dark Web",
    "url": "https://soaresden.github.io/GoogleDarkWebCheckerforBitwarden/",
    "desc": "Vérifie les mots de passe Bitwarden contre des bases de fuites. Compatible export Bitwarden.",
    "accent": "#059669",
    "tags": [
      "password",
      "Bitwarden",
      "breach"
    ],
    "art": "security"
  },
  {
    "category": "quizz",
    "title": "Quality Inspector — EDF 2025",
    "type": "Quiz · Gamification · EDF",
    "url": "https://soaresden.github.io/EDF-QualityWeekGame2025/",
    "desc": "Jeu de quiz pour la Quality Week 2025 d’EDF Renouvelables. Leaderboard temps réel et questions qualité.",
    "accent": "#ca8a04",
    "tags": [
      "quiz",
      "quality",
      "Supabase"
    ],
    "art": "quiz"
  },
  {
    "category": "tools",
    "title": "EDF No Drop No Harm",
    "type": "Tools · HSE · EDF",
    "url": "https://soaresden.github.io/EDF-NoDropNoHarm/",
    "desc": "Outil de suivi HSE : inspections, signalements de risques et actions correctives de sécurité.",
    "accent": "#e11d48",
    "tags": [
      "HSE",
      "inspection",
      "actions"
    ],
    "art": "hse"
  }
];
