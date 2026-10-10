// Source unique du portfolio : tout le site est généré depuis ce fichier.
//
// Projet :
//   cat        id de la catégorie (CATEGORIES)
//   title      nom affiché
//   kind       petite ligne au-dessus du titre
//   desc       2-3 phrases max
//   url        lien principal (site en ligne, sinon le dépôt)
//   repo       nom du dépôt github.com/soaresden/<repo> (optionnel)
//   apk        lien direct vers l'APK (optionnel)
//   links      sous-liens [{label, url}] (optionnel)
//   platforms  web · android · wear · ps2 · switch · pc · handheld
//   shot       image dans shots/ (900×337) ; sinon art = clé d'illustration SVG (art.js)
//   wide       carte large (le projet phare de la catégorie)
//   new        badge « Nouveau »
//   accent     couleur de la carte (sinon celle de la catégorie)
//
// ARCHIVES : vieux petits outils, affichés en liste compacte en bas de page.

const CATEGORIES = [
  { id: "plongee", label: "Plongée", short: "Plongée", icon: "🌊", color: "#0284c7",
    blurb: "Construits au fil de mes formations FFESSM, avec et pour mon club, l'OGN." },
  { id: "musique", label: "Musique", short: "Musique", icon: "🎻", color: "#7c3aed",
    blurb: "Partitions, violon, groupe de potes et créations Suno." },
  { id: "jeux", label: "Jeux de société", short: "Jeux", icon: "🎲", color: "#ea580c",
    blurb: "Assistants de partie, party games et soundboards pour le maître du jeu." },
  { id: "retro", label: "Retrogaming", short: "Rétro", icon: "🕹️", color: "#db2777",
    blurb: "Homebrew PS2, Switch et consoles portables : lanceurs, sauvegardes, rétro-ingénierie." },
  { id: "route", label: "Sur la route", short: "Route", icon: "🛵", color: "#059669",
    blurb: "Carburant, trottinette et dashcam : des applis pour ce qui roule." },
  { id: "media", label: "Photo & vidéo", short: "Média", icon: "📷", color: "#4f46e5",
    blurb: "Ranger, dédoublonner et habiller des milliers de fichiers." },
  { id: "outils", label: "Outils & boulot", short: "Outils", icon: "🛠️", color: "#be123c",
    blurb: "Sécurité des mots de passe, et des jeux sérieux faits pour EDF Renouvelables." }
];

const PROJECTS = [
  // ── Plongée ──────────────────────────────────────────────
  {
    cat: "plongee", wide: true, new: true,
    title: "MN90Mobile",
    kind: "Suite d'outils de plongée",
    desc: "Planificateur MN90 complet (paliers, autonomie, successives), profil à dessiner avec saturation et gradient factors, Nitrox, DTR, briefing et procédures, simulateur de remontée assistée et mini-jeu. Une appli Wear OS au poignet. PWA hors ligne, 6 langues.",
    url: "https://soaresden.github.io/MN90Mobile/",
    repo: "MN90Mobile",
    links: [
      { label: "Planificateur", url: "https://soaresden.github.io/MN90Mobile/planner/" },
      { label: "Profil", url: "https://soaresden.github.io/MN90Mobile/decomp/" },
      { label: "Saturation & GF", url: "https://soaresden.github.io/MN90Mobile/saturation/" },
      { label: "Nitrox", url: "https://soaresden.github.io/MN90Mobile/nitrox/" },
      { label: "DTR", url: "https://soaresden.github.io/MN90Mobile/dtr/" },
      { label: "Briefing", url: "https://soaresden.github.io/MN90Mobile/briefing/" },
      { label: "Procédures", url: "https://soaresden.github.io/MN90Mobile/procedures/" },
      { label: "⌚ Montre", url: "https://soaresden.github.io/MN90Mobile/watch/" }
    ],
    platforms: ["web", "android", "wear"],
    art: "mn90scene"
  },
  {
    cat: "plongee",
    title: "Remontée assistée 3D",
    kind: "Simulateur · RIFAP / N3",
    desc: "Sauve ton binôme : stab, poumon-ballast, vitesse de remontée et palier, sur quatre sites d'entraînement en 3D.",
    url: "https://soaresden.github.io/MN90Mobile/3dassist/",
    repo: "MN90Mobile",
    platforms: ["web"],
    shot: "assist3d"
  },
  {
    cat: "plongee",
    title: "Diver Flap",
    kind: "Mini-jeu",
    desc: "Le jeu du plongeur : évite les obstacles, gère ta réserve d'air et affronte l'hippocampe maléfique.",
    url: "https://soaresden.github.io/MN90Mobile/diverflap/",
    repo: "MN90Mobile",
    platforms: ["web"],
    shot: "dive"
  },
  {
    cat: "plongee", new: true,
    title: "Carnet de plongée",
    kind: "Carnet numérique · PWA",
    desc: "Sans compte ni cloud : un simple JSON sur ton disque. Import .fit (Suunto, Garmin, Shearwater), faune et flore du site via iNaturalist, carte et calendrier.",
    url: "https://github.com/soaresden/PlongeeJournal",
    repo: "PlongeeJournal",
    platforms: ["web"],
    art: "carnet"
  },

  // ── Musique ──────────────────────────────────────────────
  {
    cat: "musique", wide: true, new: true,
    title: "Partoche and Friends 🐶",
    kind: "Partitions en groupe",
    desc: "Une seule bibliothèque MuseScore pour toute la bande : chacun garde ses .mscz dans son pCloud, les autres les lisent. Un calque d'annotations par ami, chat dans la partition, statuts par morceau et présence en direct. Sans serveur.",
    url: "https://soaresden.github.io/Partoche-and-Friends/",
    repo: "Partoche-and-Friends",
    apk: "https://github.com/soaresden/Partoche-and-Friends/releases/latest/download/Partoche-and-Friends.apk",
    links: [{ label: "Tuto", url: "https://soaresden.github.io/Partoche-and-Friends/tuto.html" }],
    platforms: ["web", "android"],
    shot: "paf"
  },
  {
    cat: "musique", new: true,
    title: "Partoche",
    kind: "Élève ⇄ prof",
    desc: "Mes partitions MuseScore sur tablette, annotées avec ma prof de violon : elle dépose ses traits depuis sa page web (FR · EN · 한국어), synchro pCloud, deux calques séparés.",
    url: "https://soaresden.github.io/Partoche/",
    repo: "Partoche",
    apk: "https://github.com/soaresden/Partoche/releases/latest/download/Partoche.apk",
    platforms: ["android", "web"],
    art: "partoche", accent: "#7c3aed"
  },
  {
    cat: "musique", new: true,
    title: "SUNODLAA",
    kind: "Suno · favori + Android Auto",
    desc: "Ta bibliothèque Suno rangée par espace de travail : sur suno.com via un favori qui se met à jour tout seul, sur le téléphone, et dans la voiture.",
    url: "https://soaresden.github.io/SunoDLAA/",
    repo: "SunoDLAA",
    platforms: ["web", "android"],
    shot: "sunodlaa"
  },
  {
    cat: "musique",
    title: "Suno Tempo Boost",
    kind: "Suno · MP3 par lot",
    desc: "Accélère le tempo de tes MP3 avant import dans Suno ; le nom du fichier garde la vitesse à rétablir dans l'éditeur.",
    url: "https://soaresden.github.io/SunoBypassMp3/",
    repo: "SunoBypassMp3",
    platforms: ["web"],
    shot: "tempo"
  },
  {
    cat: "musique",
    title: "Mobile Player",
    kind: "Lecteur audio web",
    desc: "Lecteur façon Spotify dans le navigateur : playlists, aléatoire, pochettes et téléchargements.",
    url: "https://soaresden.github.io/MobilePlayer/",
    repo: "MobilePlayer",
    platforms: ["web"],
    shot: "player"
  },

  // ── Jeux de société ──────────────────────────────────────
  {
    cat: "jeux", wide: true,
    title: "Soundboard Loup-Garou",
    kind: "Soundboard + Maître du Jeu",
    desc: "Ambiances jour/nuit, bruitages par rôle et un Maître du Jeu complet : sélection des rôles, nuits guidées, votes. Fonctionne hors ligne sur la tablette.",
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/loup-garou/",
    repo: "SoundBoardHTMLMaker",
    platforms: ["web"],
    shot: "wolf"
  },
  {
    cat: "jeux", new: true,
    title: "Metal Gear Solid · le jeu de plateau",
    kind: "Soundboard + assistant de partie",
    desc: "Musiques et voix de mission, assistant de partie (mise en place, règles et errata, tour par tour guidé, phase ennemie pas à pas), 14 scènes d'aide animées et un guide : leçons, 14 missions + VR 60, FAQ.",
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/metal-gear/",
    repo: "SoundBoardHTMLMaker",
    links: [{ label: "📖 Guide & missions", url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/metal-gear/guide.html" }],
    platforms: ["web"],
    shot: "mgs"
  },
  {
    cat: "jeux",
    title: "SoundBoardHTMLMaker",
    kind: "Créateur de soundboards",
    desc: "L'interface de ton jeu de société sans coder : tes MP3 dans un dossier, un éditeur web pour ranger et colorer, un export qui marche hors ligne sur tablette (léger ou tout-en-un).",
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/",
    repo: "SoundBoardHTMLMaker",
    platforms: ["web", "pc"],
    shot: "maker"
  },
  {
    cat: "jeux", new: true,
    title: "Gauche ou Droite ?",
    kind: "Party game",
    desc: "Glisse les prénoms dans le camp ✊ Gauche ou 💼 Droite, l'IA rend son verdict. Leaderboard, historique et profils.",
    url: "https://soaresden.github.io/GaucheDroiteGame/",
    repo: "GaucheDroiteGame",
    platforms: ["web"],
    shot: "gauchedroite"
  },
  {
    cat: "jeux", new: true,
    title: "Le Jeu des Secrets",
    kind: "Party game",
    desc: "Chacun écrit un secret anonyme, puis on devine qui a écrit quoi. Points visibles et cachés 😈, journal de partie.",
    url: "https://soaresden.github.io/SocialSecretGame/",
    repo: "SocialSecretGame",
    platforms: ["web"],
    shot: "secrets"
  },
  {
    cat: "jeux",
    title: "Insider · version tablette",
    kind: "Assistant de partie",
    desc: "Attribution des rôles, écran anti-spoil, mot caché, timer à bips et changement de mot intégré.",
    url: "https://soaresden.github.io/insidertabletversion/",
    repo: "insidertabletversion",
    platforms: ["web"],
    shot: "insider"
  },
  {
    cat: "jeux",
    title: "Smile Life Tracker",
    kind: "Compteur de score",
    desc: "Les smiles de chaque joueur pour Smile Life et ses extensions, avec inventaire des cartes, timer et export JSON.",
    url: "https://soaresden.github.io/smilelifetracker/",
    repo: "smilelifetracker",
    platforms: ["web"],
    shot: "smile"
  },
  {
    cat: "jeux",
    title: "TimeBomb GUI",
    kind: "Assistant de partie",
    desc: "Rôles, tours, câbles coupés et scores pour TimeBomb, ambiance sabotage Guerre froide.",
    url: "https://soaresden.github.io/TimeBombGUI/",
    repo: "TimeBombGUI",
    platforms: ["web"],
    art: "timebomb"
  },

  // ── Retrogaming ──────────────────────────────────────────
  {
    cat: "retro", wide: true, new: true,
    title: "Prism PS2 Launcher",
    kind: "Homebrew PS2 · Lua",
    desc: "Un seul lanceur pour toute la ludothèque : disque exFAT interne, clé USB ou MMCE, et chaque fichier part dans le bon émulateur (RetroArch, POPStarter, Neutrino, OPL). Jaquettes, descriptions et emplacement des sauvegardes.",
    url: "https://github.com/soaresden/PrismPS2Launcher",
    repo: "PrismPS2Launcher",
    platforms: ["ps2"],
    shot: "prism"
  },
  {
    cat: "retro", new: true,
    title: "bigben8mcps2",
    kind: "Rétro-ingénierie PS2",
    desc: "Ressusciter la carte mémoire Datel Mega Memory 8 sans son CD : gestionnaire XMEM2 qui ouvre les archives Datel, et un pilote résident qui joue le rôle du disque.",
    url: "https://github.com/soaresden/bigben8mcps2",
    repo: "bigben8mcps2",
    platforms: ["ps2"],
    shot: "bigben"
  },
  {
    cat: "retro", new: true,
    title: "MPW Switch Save Editor",
    kind: "Éditeur de sauvegarde",
    desc: "Peace Walker (Master Collection, Switch) dans le navigateur : déchiffrement, soldats, véhicules, ZEKE, rangs S. Rien n'est envoyé nulle part.",
    url: "https://soaresden.github.io/MPW-Switch-Save-Editor/",
    repo: "MPW-Switch-Save-Editor",
    platforms: ["web", "switch"],
    art: "mpw", accent: "#b7791f"
  },
  {
    cat: "retro", new: true,
    title: "Walkthrough Overlay",
    kind: "Overlay Switch · C++",
    desc: "Lire une soluce par-dessus n'importe quel jeu : textes, images et pages PDF, plus un outil PC pour convertir les guides. Réécriture complète de la v1.",
    url: "https://github.com/soaresden/WalkthroughOverlay",
    repo: "WalkthroughOverlay",
    platforms: ["switch", "pc"],
    shot: "walkthrough"
  },
  {
    cat: "retro",
    title: "LED Retroid 5",
    kind: "Batocera · Python",
    desc: "Pilote les LED des sticks du Retroid Pocket 5 : couleurs par bouton gardées au redémarrage, ou niveau de batterie en couleur.",
    url: "https://github.com/soaresden/Retroid5_Led_Batocera",
    repo: "Retroid5_Led_Batocera",
    platforms: ["handheld"],
    art: "retroid", accent: "#a855f7"
  },

  // ── Sur la route ─────────────────────────────────────────
  {
    cat: "route", wide: true, new: true,
    title: "FuelTrajetMap",
    kind: "Carburant · trajet optimisé",
    desc: "Les prix officiels des ~9 800 stations françaises sur une carte, et surtout l'optimiseur de pleins : où s'arrêter sur ton trajet et combien de litres mettre, selon ton véhicule. Mode pénurie, écran Android Auto, sans backend.",
    url: "https://soaresden.github.io/FuelTrajetMap/",
    repo: "FuelTrajetMap",
    platforms: ["web", "android"],
    shot: "fuel"
  },
  {
    cat: "route", new: true,
    title: "Ride Companion · iX7 Pro",
    kind: "Trottinette connectée",
    desc: "Remplace l'appli officielle de la trottinette iX7 Pro : tableau de bord personnalisable, modes et réglages, trajets enregistrés avec la carte, suivi batterie, et la montre au poignet.",
    url: "https://github.com/soaresden/Ix7Companion",
    repo: "Ix7Companion",
    platforms: ["android", "wear"],
    art: "ix7"
  },
  {
    cat: "route",
    title: "DashCam Player",
    kind: "Lecteur dashcam Yantop",
    desc: "Remplace GXPlayer depuis la carte SD : décode la trace GPS cachée dans les vidéos, reconstruit les trajets et signale les chocs pendant les stationnements.",
    url: "https://github.com/soaresden/YantopDashcamViewer",
    repo: "YantopDashcamViewer",
    platforms: ["pc"],
    art: "dashcam", accent: "#0284c7"
  },

  // ── Photo & vidéo ────────────────────────────────────────
  {
    cat: "media",
    title: "TriPhoto",
    kind: "Python · Qt",
    desc: "Range et dédoublonne des milliers de photos et vidéos en comparant leur contenu réel (dHash, durée, image par image). Tri chronologique fiable et frise interactive.",
    url: "https://github.com/soaresden/photoorganizer",
    repo: "photoorganizer",
    platforms: ["pc"],
    art: "triphoto"
  },
  {
    cat: "media",
    title: "Video Thumbnail Changer",
    kind: "Python · ffmpeg",
    desc: "Incruste une miniature dans une vidéo : 10 images extraites, lecteur VLC intégré, montage 2×2, texte en surimpression et accélération GPU.",
    url: "https://github.com/soaresden/Video-Thumbnail-Changer",
    repo: "Video-Thumbnail-Changer",
    platforms: ["pc"],
    art: "thumbnail"
  },

  // ── Outils & boulot ──────────────────────────────────────
  {
    cat: "outils",
    title: "Dark Web Checker for Bitwarden",
    kind: "Sécurité",
    desc: "Vérifie ton export Bitwarden contre les fuites repérées sur le dark web, pour savoir quels mots de passe changer en priorité.",
    url: "https://soaresden.github.io/GoogleDarkWebCheckerforBitwarden/",
    repo: "GoogleDarkWebCheckerforBitwarden",
    platforms: ["web"],
    shot: "security"
  },
  {
    cat: "outils",
    title: "Quality Inspector",
    kind: "Jeu sérieux · EDF Renouvelables",
    desc: "Le quiz de la Quality Week 2025 : dilemmes d'inspection, chrono et classement en temps réel.",
    url: "https://soaresden.github.io/EDF-QualityWeekGame2025/",
    repo: "EDF-QualityWeekGame2025",
    platforms: ["web"],
    shot: "quiz"
  },
  {
    cat: "outils",
    title: "No Drop No Harm",
    kind: "Sécurité HSE · EDF Renouvelables",
    desc: "Simulateur pédagogique de chute d'objets : hauteur, masse et énergie d'impact, pour sensibiliser aux risques.",
    url: "https://soaresden.github.io/EDF-NoDropNoHarm/",
    repo: "EDF-NoDropNoHarm",
    platforms: ["web"],
    shot: "hse"
  }
];

const ARCHIVES = [
  { title: "idotMatrix GIF Converter", year: 2025, platform: "pc",
    desc: "Vidéo → GIF optimisé pour les écrans pixel iDotMatrix.",
    url: "https://github.com/soaresden/idotMatrixViewer-Gif-Converter" },
  { title: "Live-Pipette", year: 2024, platform: "pc",
    desc: "Pipette de couleur à l'écran, sans lancer Photoshop.",
    url: "https://github.com/soaresden/Live-Pipette" },
  { title: "GifCarBootanimAndroid", year: 2023, platform: "pc",
    desc: "Un GIF ⇄ une animation de démarrage pour autoradio Android.",
    url: "https://github.com/soaresden/GifCarBootanimAndroid" }
];
