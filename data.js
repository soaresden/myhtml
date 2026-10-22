// Source unique du portfolio : tout le site est généré depuis ce fichier.
//
// Projet :
//   cat        id de la catégorie (CATEGORIES)
//   also       autres catégories où le projet apparaît aussi (ex. ["android"])
//   game       id du jeu (GAMES) : les projets d'un même jeu sont regroupés sous une seule vignette
//   console    id de la console (CONSOLES) : dans « Outils consoles », regroupement par console
//   title      nom affiché
//   kind       petite ligne au-dessus du titre
//   desc       2-3 phrases max
//   en         { title?, kind, desc } : la version anglaise (bouton 🇬🇧 EN / 🇫🇷 FR)
//   url        lien principal (site en ligne, sinon le dépôt)
//   repo       nom du dépôt github.com/soaresden/<repo> (optionnel)
//   apk        lien direct vers l'APK (optionnel)
//   links      sous-liens [{label, en, url}] (optionnel)
//   platforms  clés de PLATFORMS (script.js)
//   shot       image dans shots/ (900×337) ; sinon art = clé d'illustration SVG (art.js)
//   wide       projet phare (affiché sur l'accueil)
//   new        badge « Nouveau »
//   accent     couleur de la carte (sinon celle de la catégorie)

const CATEGORIES = [
  { id: "plongee", label: "Plongée", short: "Plongée", icon: "🌊", color: "#0284c7",
    blurb: "Construits au fil de mes formations FFESSM, avec et pour mon club, l'OGN.",
    en: { label: "Scuba diving", short: "Diving", blurb: "Built along my FFESSM diving courses, with and for my club, the OGN." } },
  { id: "musique", label: "Musique", short: "Musique", icon: "🎻", color: "#7c3aed",
    blurb: "Partitions, violon, groupe de potes et créations Suno.",
    en: { label: "Music", short: "Music", blurb: "Sheet music, violin, playing with friends and Suno creations." } },
  { id: "jeux", label: "Jeux de société", short: "Jeux", icon: "🎲", color: "#ea580c",
    blurb: "Assistants de partie, party games et soundboards pour le maître du jeu.",
    en: { label: "Board games", short: "Board", blurb: "Game assistants, party games and soundboards for the game master." } },
  { id: "creation", label: "Création de jeux", short: "Créa", icon: "🎮", color: "#d97706",
    blurb: "Mes propres jeux, de l'idée à la publication.",
    en: { label: "My own games", short: "Games", blurb: "Games I made, from the idea to the release." } },
  { id: "mods", label: "Mods & traductions", short: "Mods", icon: "🕹️", color: "#db2777",
    blurb: "Je modifie les jeux eux-mêmes : ma voiture dedans, gameplay modernisé, versions françaises.",
    en: { label: "Mods & translations", short: "Mods", blurb: "I change the games themselves: my car inside, modern comfort, French versions." } },
  { id: "consoles", groupBy: "console", label: "Outils consoles", short: "Consoles", icon: "🧰", color: "#9333ea",
    blurb: "Autour des jeux : lanceurs, éditeurs de sauvegardes, rétro-ingénierie, overlays.",
    en: { label: "Console tools", short: "Consoles", blurb: "Around the games: launchers, save editors, reverse engineering, overlays." } },
  { id: "android", label: "Applis Android", short: "Android", icon: "🤖", color: "#16a34a",
    blurb: "Mes applis pour le téléphone, la montre et Android Auto.",
    en: { label: "Android apps", short: "Android", blurb: "My apps for the phone, the watch and Android Auto." } },
  { id: "route", label: "Sur la route", short: "Route", icon: "🛵", color: "#059669",
    blurb: "Carburant, trottinette et dashcam : des applis pour ce qui roule.",
    en: { label: "On the road", short: "Road", blurb: "Fuel, scooter and dashcam: apps for things on wheels." } },
  { id: "media", label: "Photo & vidéo", short: "Média", icon: "📷", color: "#4f46e5",
    blurb: "Ranger, dédoublonner et habiller des milliers de fichiers.",
    en: { label: "Photo & video", short: "Media", blurb: "Sort, deduplicate and dress up thousands of files." } },
  { id: "outils", label: "Outils & boulot", short: "Outils", icon: "🛠️", color: "#be123c",
    blurb: "Sécurité des mots de passe, jeux sérieux pour EDF Renouvelables, et de vieux petits outils.",
    en: { label: "Tools & work", short: "Tools", blurb: "Password security, serious games for EDF Renouvelables, and small older tools." } }
];

// Jeux vidéo : dès qu'un jeu a plusieurs projets, une seule vignette « jeu » les regroupe ;
// un clic ouvre la page du jeu avec tous ses projets.
const GAMES = [
  { id: "nfsmw", name: "Need for Speed Most Wanted", short: "NFS Most Wanted", icon: "🏁", color: "#65a30d", shot: "mx5",
    blurb: "La version Xbox 360 sur Switch (portage nfsmw-nx) : ma voiture, la VF et les sauvegardes.",
    en: { blurb: "The Xbox 360 version on Switch (nfsmw-nx port): my car, the French dub and the saves." } },
  { id: "nfsu1", name: "Need for Speed Underground", short: "NFS Underground", icon: "🌃", color: "#2563eb", shot: "mx5_nfsu1",
    blurb: "La version Xbox d'origine, portée sur Switch : ma voiture, la VF et des outils pour le port.",
    en: { blurb: "The original Xbox version, ported to Switch: my car, the French version and tools for the port." } },
  { id: "nfsu2", name: "Need for Speed Underground 2", short: "NFS Underground 2", icon: "🌆", color: "#ea580c", shot: "mx5_nfsu2",
    blurb: "La version Xbox d'origine, portée sur Switch : ma voiture, les langues et des outils pour le port.",
    en: { blurb: "The original Xbox version, ported to Switch: my car, the languages and tools for the port." } },
  { id: "gt1", name: "Gran Turismo", short: "Gran Turismo", icon: "🏎️", color: "#dc2626", shot: "mx5_gt1",
    blurb: "Gran Turismo 1 et 2 sur PlayStation (versions européennes) : ma voiture et des menus de triche.",
    en: { blurb: "Gran Turismo 1 and 2 on PlayStation (European versions): my car and cheat menus." } },
  { id: "pokemon", name: "Pokémon (hacks)", short: "Pokémon", icon: "⚡", color: "#ca8a04", shot: "dbz",
    blurb: "Des ROM hacks de Pokémon que j'ai traduits en français.",
    en: { name: "Pokémon (hacks)", blurb: "Pokémon ROM hacks I translated into French." } },
  { id: "mgs", name: "Metal Gear Solid", short: "Metal Gear", icon: "🐍", color: "#4d7c0f", shot: "mgs",
    blurb: "Le jeu de plateau, MGS1 en VOSTFR et Peace Walker sur Switch.",
    en: { blurb: "The board game, MGS1 with English voices and French text, and Peace Walker on Switch." } },
  { id: "re1", name: "Resident Evil", short: "Resident Evil", icon: "🧟", color: "#991b1b",
    blurb: "Resident Evil Director's Cut sur PlayStation.", en: { blurb: "Resident Evil Director's Cut on PlayStation." } },
  { id: "zelda", name: "Zelda Game Boy Color", short: "Zelda GBC", icon: "🗡️", color: "#15803d", shot: "zeldaoracles",
    blurb: "Oracle of Ages et Seasons réunis en une seule ROM, en 5 langues, sur Game Boy Color.",
    en: { blurb: "Oracle of Ages and Seasons combined into one ROM, in 5 languages, on Game Boy Color." } }
];

// Consoles : dans « Outils consoles », les outils d'une même console sont regroupés
// (même principe que GAMES ; un clic ouvre #/console/<id>).
const CONSOLES = [
  { id: "switch", name: "Nintendo Switch", short: "Switch", icon: "🕹️", color: "#e60012", art: "consoleswitch",
    blurb: "Éditeurs de sauvegardes et overlay pour la Switch.",
    en: { blurb: "Save editors and an overlay for the Switch." } },
  { id: "ps2", name: "PlayStation 2", short: "PS2", icon: "💿", color: "#1e40af", shot: "prism",
    blurb: "Homebrew et rétro-ingénierie sur PlayStation 2.",
    en: { blurb: "Homebrew and reverse engineering on PlayStation 2." } },
  { id: "retroid", name: "Retroid Pocket", short: "Retroid", icon: "🎮", color: "#a855f7",
    blurb: "Console portable sous Batocera.", en: { blurb: "A handheld running Batocera." } }
];

const MX5 = "https://soaresden.github.io/MazdaMx5-nd-rf-ingames/";

const PROJECTS = [
  // ── Plongée ──────────────────────────────────────────────
  {
    cat: "plongee", also: ["android"], wide: true, new: true,
    title: "MN90Mobile",
    kind: "Suite d'outils de plongée",
    desc: "Planificateur MN90 complet (paliers, autonomie, successives), profil à dessiner avec saturation et gradient factors, Nitrox, DTR, briefing et procédures, simulateur de remontée assistée et mini-jeu. Une appli Wear OS au poignet. PWA hors ligne, 6 langues.",
    en: { kind: "Scuba diving toolkit",
      desc: "A complete MN90 dive planner (stops, gas, repetitive dives), a profile you draw with saturation and gradient factors, Nitrox, ascent time, briefing and procedures, an assisted-ascent simulator and a mini-game. A Wear OS app on the wrist. Offline PWA, 6 languages." },
    url: "https://soaresden.github.io/MN90Mobile/",
    repo: "MN90Mobile",
    apk: "https://github.com/soaresden/MN90Mobile/releases/latest/download/MN90-Montre.apk",
    links: [
      { label: "Planificateur", en: "Planner", url: "https://soaresden.github.io/MN90Mobile/planner/" },
      { label: "Profil", en: "Profile", url: "https://soaresden.github.io/MN90Mobile/decomp/" },
      { label: "Saturation & GF", en: "Saturation & GF", url: "https://soaresden.github.io/MN90Mobile/saturation/" },
      { label: "Nitrox", en: "Nitrox", url: "https://soaresden.github.io/MN90Mobile/nitrox/" },
      { label: "DTR", en: "Ascent time", url: "https://soaresden.github.io/MN90Mobile/dtr/" },
      { label: "Briefing", en: "Briefing", url: "https://soaresden.github.io/MN90Mobile/briefing/" },
      { label: "Procédures", en: "Procedures", url: "https://soaresden.github.io/MN90Mobile/procedures/" },
      { label: "⌚ Montre", en: "⌚ Watch", url: "https://soaresden.github.io/MN90Mobile/watch/" }
    ],
    platforms: ["web", "android", "wear"],
    art: "mn90scene"
  },
  {
    cat: "plongee",
    title: "Remontée assistée 3D",
    kind: "Simulateur · RIFAP / N3",
    desc: "Sauve ton binôme : stab, poumon-ballast, vitesse de remontée et palier, sur quatre sites d'entraînement en 3D.",
    en: { title: "Assisted ascent 3D", kind: "Rescue simulator",
      desc: "Save your buddy: BCD, breathing control, ascent speed and safety stop, on four 3D training sites." },
    url: "https://soaresden.github.io/MN90Mobile/3dassist/",
    repo: "MN90Mobile",
    platforms: ["web"],
    shot: "assist3d"
  },
  {
    cat: "plongee", also: ["creation"],
    title: "Diver Flap",
    kind: "Mini-jeu",
    desc: "Le jeu du plongeur : évite les obstacles, gère ta réserve d'air et affronte l'hippocampe maléfique.",
    en: { kind: "Mini-game", desc: "The diver's game: dodge obstacles, watch your air supply and face the evil seahorse." },
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
    en: { title: "Dive log", kind: "Digital logbook · PWA",
      desc: "No account, no cloud: a plain JSON file on your disk. .fit import (Suunto, Garmin, Shearwater), the site's wildlife from iNaturalist, map and calendar." },
    url: "https://github.com/soaresden/PlongeeJournal",
    repo: "PlongeeJournal",
    platforms: ["web"],
    art: "carnet"
  },

  // ── Musique ──────────────────────────────────────────────
  {
    cat: "musique", also: ["android"], wide: true, new: true,
    title: "Partoche and Friends 🐶",
    kind: "Partitions en groupe",
    desc: "Une seule bibliothèque MuseScore pour toute la bande : chacun garde ses .mscz dans son pCloud, les autres les lisent. Un calque d'annotations par ami, chat dans la partition, statuts par morceau et présence en direct. Sans serveur.",
    en: { kind: "Sheet music with friends",
      desc: "One MuseScore library for the whole band: everyone keeps their .mscz in their own pCloud, the others read them. One annotation layer per friend, chat inside the score, status per piece and live presence. No server." },
    url: "https://soaresden.github.io/Partoche-and-Friends/",
    repo: "Partoche-and-Friends",
    apk: "https://github.com/soaresden/Partoche-and-Friends/releases/latest/download/Partoche-and-Friends.apk",
    links: [{ label: "Tuto", en: "Tutorial", url: "https://soaresden.github.io/Partoche-and-Friends/tuto.html" }],
    platforms: ["web", "android"],
    shot: "paf"
  },
  {
    cat: "musique", also: ["android"], new: true,
    title: "Partoche and Prof",
    kind: "Élève ⇄ prof",
    desc: "Mes partitions MuseScore sur tablette, annotées avec ma prof de violon : elle dépose ses traits depuis sa page web (FR · EN · 한국어), synchro pCloud, deux calques séparés.",
    en: { kind: "Student ⇄ teacher",
      desc: "My MuseScore scores on a tablet, annotated with my violin teacher: she adds her marks from her web page (FR · EN · 한국어), pCloud sync, two separate layers." },
    url: "https://soaresden.github.io/Partoche/",
    repo: "Partoche",
    apk: "https://github.com/soaresden/Partoche/releases/latest/download/Partoche.apk",
    platforms: ["android", "web"],
    art: "partoche", accent: "#7c3aed"
  },
  {
    cat: "musique", also: ["android"], new: true,
    title: "SUNODLAA",
    kind: "Suno · favori + Android Auto",
    desc: "Ta bibliothèque Suno rangée par espace de travail : sur suno.com via un favori qui se met à jour tout seul, sur le téléphone, et dans la voiture.",
    en: { kind: "Suno · bookmarklet + Android Auto",
      desc: "Your Suno library sorted by workspace: on suno.com through a self-updating bookmark, on the phone, and in the car." },
    url: "https://soaresden.github.io/SunoDLAA/",
    repo: "SunoDLAA",
    apk: "https://github.com/soaresden/SunoDLAA/tree/main/releases",
    platforms: ["web", "android"],
    shot: "sunodlaa"
  },
  {
    cat: "musique",
    title: "Suno Tempo Boost",
    kind: "Suno · MP3 par lot",
    desc: "Accélère le tempo de tes MP3 avant import dans Suno ; le nom du fichier garde la vitesse à rétablir dans l'éditeur.",
    en: { kind: "Suno · batch MP3", desc: "Speeds up your MP3s before importing them into Suno; the file name keeps the speed to restore in the editor." },
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
    en: { kind: "Web audio player", desc: "A Spotify-like player in the browser: playlists, shuffle, covers and downloads." },
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
    en: { title: "Werewolf soundboard", kind: "Soundboard + game master",
      desc: "Day/night ambience, sound effects per role and a full game master: role selection, guided nights, votes. Works offline on the tablet." },
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/loup-garou/",
    repo: "SoundBoardHTMLMaker",
    platforms: ["web"],
    shot: "wolf"
  },
  {
    cat: "jeux", game: "mgs", new: true,
    title: "Metal Gear Solid · le jeu de plateau",
    kind: "Soundboard + assistant de partie",
    desc: "Musiques et voix de mission, assistant de partie (mise en place, règles et errata, tour par tour guidé, phase ennemie pas à pas), 14 scènes d'aide animées et un guide : leçons, 14 missions + VR 60, FAQ.",
    en: { title: "Metal Gear Solid · the board game", kind: "Soundboard + game assistant",
      desc: "Mission music and voices, a game assistant (setup, rules and errata, guided turns, enemy phase step by step), 14 animated help scenes and a guide: lessons, 14 missions + VR 60, FAQ." },
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/metal-gear/",
    repo: "SoundBoardHTMLMaker",
    links: [{ label: "📖 Guide & missions", en: "📖 Guide & missions", url: "https://soaresden.github.io/SoundBoardHTMLMaker/FOLDERTOEXPORT/metal-gear/guide.html" }],
    platforms: ["web"],
    shot: "mgs"
  },
  {
    cat: "jeux",
    title: "SoundBoardHTMLMaker",
    kind: "Créateur de soundboards",
    desc: "L'interface de ton jeu de société sans coder : tes MP3 dans un dossier, un éditeur web pour ranger et colorer, un export qui marche hors ligne sur tablette (léger ou tout-en-un).",
    en: { kind: "Soundboard maker",
      desc: "Your board game's interface without coding: your MP3s in a folder, a web editor to sort and colour them, an export that works offline on a tablet (light or all-in-one)." },
    url: "https://soaresden.github.io/SoundBoardHTMLMaker/",
    repo: "SoundBoardHTMLMaker",
    platforms: ["web", "pc"],
    shot: "maker"
  },
  {
    cat: "jeux", new: true,
    title: "Pili Pili Helper 🌶️",
    kind: "Compagnon de table",
    desc: "Pour Pili Pili et l'extension Extra Spicy : la règle de chaque carte en un tap, les missions de manche, et les paris, plis et Pilis comptés pour vous. Historique, annulation de manche et revanche.",
    en: { kind: "Table companion",
      desc: "For Pili Pili and the Extra Spicy expansion: every card's rule in one tap, the round missions, and bets, tricks and Pilis counted for you. History, undo and rematch." },
    url: "https://soaresden.github.io/PiliPiliHelper/",
    repo: "PiliPiliHelper",
    platforms: ["web"],
    shot: "pilipili"
  },
  {
    cat: "jeux", new: true,
    title: "Gauche ou Droite ?",
    kind: "Party game",
    desc: "Glisse les prénoms dans le camp ✊ Gauche ou 💼 Droite, l'IA rend son verdict. Leaderboard, historique et profils.",
    en: { title: "Left or Right?", desc: "Drag names into the ✊ Left or 💼 Right camp, the AI gives its verdict. Leaderboard, history and profiles." },
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
    en: { title: "The Secrets Game", desc: "Everyone writes an anonymous secret, then you guess who wrote what. Visible and hidden points 😈, game log." },
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
    en: { title: "Insider · tablet version", kind: "Game assistant", desc: "Role assignment, anti-spoiler screen, hidden word, beeping timer and built-in word change." },
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
    en: { kind: "Score keeper", desc: "Each player's smiles for Smile Life and its expansions, with card inventory, timer and JSON export." },
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
    en: { kind: "Game assistant", desc: "Roles, rounds, cut wires and scores for TimeBomb, with a Cold War sabotage mood." },
    url: "https://soaresden.github.io/TimeBombGUI/",
    repo: "TimeBombGUI",
    platforms: ["web"],
    art: "timebomb"
  },

  // ── Création de jeux ─────────────────────────────────────
  {
    cat: "creation", also: ["android"], wide: true, new: true,
    title: "Xplosives Adventures",
    kind: "Jeu Android · itch.io",
    desc: "Un démineur-RPG : une Aventure de 50 niveaux avec monstres et boss, L'Ascension (fuir le feu, fouiller des maisons, désamorcer des bombes par déduction), un mode zombie au tour par tour, le démineur classique, des trophées et des thèmes à débloquer. En français et en anglais.",
    en: { kind: "Android game · itch.io",
      desc: "A minesweeper RPG: a 50-level Adventure with monsters and bosses, The Ascent (flee the fire, search houses, defuse bombs by deduction), a turn-based zombie mode, classic minesweeper, trophies and themes to unlock. In French and English." },
    url: "https://soaresden.itch.io/xplosives-adventures",
    platforms: ["android"],
    shot: "xplosives"
  },

  {
    cat: "creation", also: ["outils"], wide: true, new: true,
    title: "Pile Poil",
    kind: "Jeu web · parc éolien en mer du Calvados",
    desc: "Hisse les 64 éoliennes du parc éolien en mer du Calvados au bout d'une grue qui balance : pile au-dessus de la pièce précédente, c'est PARFAIT. Chaque éolienne porte le nom d'un navire du Débarquement et a ses éléments (nuit, orage, brouillard, neige, rafales, houle, goélands), de plus en plus nombreux jusqu'à la dernière, où tout se déchaîne.",
    en: { kind: "Web game · Calvados offshore wind farm",
      desc: "Raise the 64 turbines of the Calvados offshore wind farm from a swinging crane: right on top of the previous piece is PERFECT. Each turbine bears the name of a D-Day ship and has its own elements (night, thunderstorm, fog, snow, gusts, swell, gulls), more and more of them until the last one, where everything breaks loose." },
    url: "https://soaresden.github.io/EDF-COUGame/",
    repo: "EDF-COUGame",
    platforms: ["web"],
    shot: "pilepoil_game"
  },


  // ── Mods & traductions ───────────────────────────────────
  {
    cat: "mods", wide: true, new: true,
    title: "La MX-5 RF dans les jeux",
    kind: "Mod voiture · générateur en ligne",
    desc: "Ma Mazda MX-5 RF Deep Crystal Blue convertie dans les jeux de voitures que j'aime, de la PS1 à la Xbox 360 : Gran Turismo 1 et 2, NFS Underground 1 et 2, NFS Most Wanted. La voiture est fabriquée dans le navigateur à partir de ses propres fichiers.",
    en: { title: "The MX-5 RF in games", kind: "Car mod · online builder",
      desc: "My Deep Crystal Blue Mazda MX-5 RF converted into the car games I love, from the PS1 to the Xbox 360: Gran Turismo 1 and 2, NFS Underground 1 and 2, NFS Most Wanted. The car is built in the browser from your own files." },
    url: MX5,
    repo: "MazdaMx5-nd-rf-ingames",
    links: [
      { label: "Most Wanted", en: "Most Wanted", url: MX5 + "web/nfsmw.html" },
      { label: "Underground", en: "Underground", url: MX5 + "web/nfsu1.html" },
      { label: "Underground 2", en: "Underground 2", url: MX5 + "web/nfsu2.html" },
      { label: "Gran Turismo", en: "Gran Turismo", url: MX5 + "web/gt1.html" },
      { label: "Gran Turismo 2", en: "Gran Turismo 2", url: MX5 + "web/gt2.html" }
    ],
    platforms: ["ps1", "xbox", "xbox360", "switch", "web"],
    shot: "mx5_all"
  },
  {
    cat: "mods", game: "nfsmw", new: true,
    title: "La MX-5 dans Most Wanted",
    kind: "Mod voiture · générateur en ligne",
    desc: "La MX-5 RF à la place de la Lexus IS300 : toit fermé ou décapoté, son moteur, logo et performances au choix. La page fabrique le dossier à copier sur la carte SD à partir de ton image disque.",
    en: { title: "The MX-5 in Most Wanted", kind: "Car mod · online builder",
      desc: "The MX-5 RF instead of the Lexus IS300: hardtop up or down, engine sound, badge and performance to choose. The page builds the folder to copy to the SD card from your own disc image." },
    url: MX5 + "web/nfsmw.html",
    repo: "MazdaMx5-nd-rf-ingames",
    platforms: ["xbox360", "switch", "web"],
    shot: "mx5"
  },
  {
    cat: "mods", game: "nfsmw", new: true,
    title: "Doublage français de Most Wanted",
    kind: "VF · contribution acceptée",
    desc: "Transforme l'édition PAL anglaise en version française complète, textes, cinématiques et voix en jeu, à partir de son propre disque Xbox français. Intégré au portage Switch officiel nfsmw-nx.",
    en: { title: "Most Wanted French dub", kind: "French version · merged contribution",
      desc: "Turns the English PAL edition into a full French version, text, movies and in-game speech, from your own French Xbox disc. Merged into the official nfsmw-nx Switch port." },
    url: "https://github.com/StevensND/nfsmw-nx/tree/main/tools/french-dub",
    links: [{ label: "Pull request #28 (fusionnée)", en: "Pull request #28 (merged)", url: "https://github.com/StevensND/nfsmw-nx/pull/28" }],
    platforms: ["xbox360", "switch", "pc"],
    art: "mwdub", accent: "#65a30d"
  },
  {
    cat: "mods", game: "nfsu1", new: true,
    title: "La MX-5 dans Underground",
    kind: "Mod voiture · générateur en ligne",
    desc: "La MX-5 RF dans le premier Underground (Xbox, port Switch), fabriquée dans le navigateur à partir de ton disque.",
    en: { title: "The MX-5 in Underground", kind: "Car mod · online builder",
      desc: "The MX-5 RF in the first Underground (Xbox, Switch port), built in the browser from your own disc." },
    url: MX5 + "web/nfsu1.html",
    repo: "MazdaMx5-nd-rf-ingames",
    platforms: ["xbox", "switch", "web"],
    shot: "mx5_nfsu1"
  },
  {
    cat: "mods", game: "nfsu1", new: true,
    title: "Underground sur Switch : VF et outils",
    kind: "Port Switch · 3 pull requests",
    desc: "Pour le port Switch de NFS Underground : compatibilité avec les traductions (VF textes et voix), chargement automatique de la sauvegarde au démarrage, et un outil qui prépare le dossier de la carte SD depuis la release et le disque.",
    en: { title: "Underground on Switch: French & tools", kind: "Switch port · 3 pull requests",
      desc: "For the NFS Underground Switch port: translation compatibility (French text and voices), automatic loading of the save at boot, and a tool that prepares the SD card folder from the release and the disc." },
    url: "https://github.com/soaresden/nfsu1-sw",
    repo: "nfsu1-sw",
    links: [
      { label: "#8 Traductions", en: "#8 Translations", url: "https://github.com/antoxa2584x/nfsu1-sw/pull/8" },
      { label: "#9 Chargement auto", en: "#9 Autoload", url: "https://github.com/antoxa2584x/nfsu1-sw/pull/9" },
      { label: "#10 Carte SD", en: "#10 SD builder", url: "https://github.com/antoxa2584x/nfsu1-sw/pull/10" }
    ],
    platforms: ["xbox", "switch"],
    art: "nfsport", accent: "#2563eb"
  },
  {
    cat: "mods", game: "nfsu2", new: true,
    title: "La MX-5 dans Underground 2",
    kind: "Mod voiture · générateur en ligne",
    desc: "La MX-5 RF dans Underground 2 (Xbox, port Switch), avec son nom dans le menu, fabriquée dans le navigateur à partir de ton disque.",
    en: { title: "The MX-5 in Underground 2", kind: "Car mod · online builder",
      desc: "The MX-5 RF in Underground 2 (Xbox, Switch port), with its name in the menu, built in the browser from your own disc." },
    url: MX5 + "web/nfsu2.html",
    repo: "MazdaMx5-nd-rf-ingames",
    platforms: ["xbox", "switch", "web"],
    shot: "mx5_nfsu2"
  },
  {
    cat: "mods", game: "nfsu2", new: true,
    title: "Underground 2 sur Switch : langues et outils",
    kind: "Port Switch · 2 pull requests",
    desc: "Pour le port Switch de NFS Underground 2 : le français, l'allemand ou l'italien ajoutés à la version USA sans toucher au port, et l'outil qui prépare le dossier de la carte SD.",
    en: { title: "Underground 2 on Switch: languages & tools", kind: "Switch port · 2 pull requests",
      desc: "For the NFS Underground 2 Switch port: French, German or Italian added to the USA build without changing the port, and the tool that prepares the SD card folder." },
    url: "https://github.com/soaresden/nfsu2-sw",
    repo: "nfsu2-sw",
    links: [
      { label: "#35 Langues", en: "#35 Languages", url: "https://github.com/antoxa2584x/nfsu2-sw/pull/35" },
      { label: "#34 Carte SD", en: "#34 SD builder", url: "https://github.com/antoxa2584x/nfsu2-sw/pull/34" }
    ],
    platforms: ["xbox", "switch"],
    art: "nfsport", accent: "#ea580c"
  },
  {
    cat: "mods", game: "gt1", new: true,
    title: "La MX-5 dans Gran Turismo",
    kind: "Mod voiture · PS1",
    desc: "La MX-5 RF chez le concessionnaire Mazda du premier Gran Turismo, en trois versions, et sur la piste. L'image disque se reconstruit à partir de la tienne.",
    en: { title: "The MX-5 in Gran Turismo", kind: "Car mod · PS1",
      desc: "The MX-5 RF at the Mazda dealer of the first Gran Turismo, in three trims, and on the track. The disc image is rebuilt from yours." },
    url: MX5 + "web/gt1.html",
    repo: "MazdaMx5-nd-rf-ingames",
    platforms: ["ps1", "web"],
    shot: "mx5_gt1"
  },
  {
    cat: "mods", game: "gt1", new: true,
    title: "Gran Turismo · Overlay Cheat",
    kind: "Patch PS1 · menu de triche",
    desc: "Maintiens SELECT (ou L1 + R1 + L2 + R2, pratique dans Batocera) : un petit menu apparaît par-dessus le jeu pour figer le chrono des permis et changer les crédits en direct. Version européenne, patch .ppf / .xdelta, compatible avec un disque déjà modifié.",
    en: { kind: "PS1 patch · cheat menu",
      desc: "Hold SELECT (or L1 + R1 + L2 + R2, handy in Batocera): a small menu appears over the game to freeze the licence timer and change the credits live. European version, .ppf / .xdelta patch, works on an already modified disc." },
    url: "https://github.com/soaresden/GranTurismo1-OverlayCheat",
    repo: "GranTurismo1-OverlayCheat",
    links: [{ label: "Télécharger le patch (v1.1)", en: "Download the patch (v1.1)", url: "https://github.com/soaresden/GranTurismo1-OverlayCheat/releases/latest" }],
    platforms: ["ps1"],
    shot: "gt1cheat", accent: "#dc2626"
  },
  {
    cat: "mods", game: "gt1", new: true,
    title: "La MX-5 dans Gran Turismo 2",
    kind: "Mod voiture · PS1",
    desc: "La MX-5 RF, capotée ou décapotée, à la place des MX-5 de son choix dans Gran Turismo 2 : disque Simulation, disque combiné ou GT2 Plus. Option pour ajouter le menu de triche au passage. L'image disque se reconstruit à partir de la tienne.",
    en: { title: "The MX-5 in Gran Turismo 2", kind: "Car mod · PS1",
      desc: "The MX-5 RF, hardtop or open, in place of the MX-5s of your choice in Gran Turismo 2: Simulation disc, combined disc or GT2 Plus. An option adds the cheat menu along the way. The disc image is rebuilt from yours." },
    url: MX5 + "web/gt2.html",
    repo: "MazdaMx5-nd-rf-ingames",
    platforms: ["ps1"],
    shot: "mx5_gt2"
  },
  {
    cat: "mods", game: "gt1", new: true,
    title: "Gran Turismo 2 · Overlay Cheat",
    kind: "Patch PS1 · menu de triche",
    desc: "Le même menu que pour le premier (SELECT, ou L1 + R1 + L2 + R2) : figer le chrono des permis et changer les crédits en direct. Disque Simulation européen, disque combiné et GT2 Plus ; patch .ppf / .xdelta qui s'applique aussi sur un disque déjà modifié.",
    en: { kind: "PS1 patch · cheat menu",
      desc: "The same menu as for the first game (SELECT, or L1 + R1 + L2 + R2): freeze the licence timer and change the credits live. European Simulation disc, combined disc and GT2 Plus; a .ppf / .xdelta patch that also works on an already modified disc." },
    url: "https://github.com/soaresden/GranTurismo2-OverlayCheat",
    repo: "GranTurismo2-OverlayCheat",
    links: [{ label: "Télécharger le patch (v1.0)", en: "Download the patch (v1.0)", url: "https://github.com/soaresden/GranTurismo2-OverlayCheat/releases/latest" }],
    platforms: ["ps1"],
    shot: "gt2cheat"
  },
  {
    cat: "mods", game: "gt1", new: true,
    title: "Assetto → Gran Turismo",
    kind: "Convertisseur de voitures · PS1",
    desc: "N'importe quelle voiture 3D dans le premier Gran Turismo, à la place d'une voiture du jeu : un mod Assetto Corsa ou un modèle glTF (Sketchfab), une fiche de caractéristiques, et son propre disque. Roues contrôlées et passages de roue comme les voitures d'origine, caractéristiques, nom, vignette du concessionnaire et page INFO dans les 6 langues. Gran Turismo 2 viendra ensuite.",
    en: { title: "Assetto → Gran Turismo", kind: "Car converter · PS1",
      desc: "Any 3D car in the first Gran Turismo, in place of a game car: an Assetto Corsa mod or a glTF model (Sketchfab), a spec sheet, and your own disc. Checked wheels and wheel arches like the original cars, specs, name, dealer thumbnail and INFO page in the 6 languages. Gran Turismo 2 comes next." },
    url: "https://github.com/soaresden/Assetto-to-GT1-2-Converter",
    repo: "Assetto-to-GT1-2-Converter",
    platforms: ["ps1", "pc"],
    shot: "assettogt"
  },
  {
    cat: "mods", game: "re1", wide: true, new: true,
    title: "RE1 Director's Cut · Hotkeys",
    kind: "Mod PS1 · patcher en ligne",
    desc: "Resident Evil Director's Cut (PS1) avec le confort moderne : raccourcis L2 + croix, vie et munitions à l'écran, demi-tour rapide façon RE3, rechargement rapide, objets déplaçables, et un menu d'options en jeu. Versions USA, Dual Shock et France ; on patche sa propre image disque dans le navigateur.",
    en: { kind: "PS1 mod · online patcher",
      desc: "Resident Evil Director's Cut (PS1) with modern comfort: L2 + d-pad quick slots, health and ammo on screen, RE3-style quick turn, quick reload, movable items, and an in-game options menu. USA, Dual Shock and French versions; you patch your own disc image in the browser." },
    url: "https://soaresden.github.io/re1-dc-hotkeys/",
    repo: "re1-dc-hotkeys",
    platforms: ["ps1", "web"],
    shot: "re1"
  },
  {
    cat: "mods", game: "mgs", new: true,
    title: "Metal Gear Solid · VOSTFR & mods",
    kind: "Patch PS1 · patcher en ligne",
    desc: "Metal Gear Solid (PS1) avec les voix anglaises d'origine et les textes français (cinématiques, Codec, voix en jeu), ou le jeu français ou anglais d'origine avec seulement les mods. Mods façon MGS2 : Carré fait défiler le Codec, M9 et claymores tranquillisants (chiens-loups compris), braquer un garde de dos pour le figer, PSG1 debout (et trouvé plus tôt), vue subjective penchée et tir, portes à carte sans l'équiper, bandana visible, ton texte dans la barre de vie. Et les deux disques en une seule image. Tout se fabrique dans le navigateur à partir de ses propres disques.",
    en: { title: "Metal Gear Solid · English voices, French text & mods", kind: "PS1 patch · online patcher",
      desc: "Metal Gear Solid (PS1) with the original English voices and the French text (cutscenes, Codec, in-game voices), or the original French or English game with just the mods. MGS2-style mods: Square fast-forwards the Codec, tranquilizer M9 and claymores (wolf dogs included), hold up a guard from behind to freeze him, standing PSG1 (found earlier), first-person leaning and shooting, keycard doors without equipping the card, a visible bandana, your own text in the life bar. And both discs in a single image. Everything is built in the browser from your own discs." },
    url: "https://soaresden.github.io/MGS1-VOSTFR/",
    repo: "MGS1-VOSTFR",
    platforms: ["ps1", "web"],
    shot: "mgs1vostfr"
  },
  {
    cat: "mods", game: "zelda", new: true,
    title: "Zelda Oracles Combined en 5 langues",
    kind: "Traduction + options · patcher en ligne",
    desc: "Le hack « crossworld » qui réunit Oracle of Ages et Oracle of Seasons dans une seule ROM, en français, anglais, allemand, italien et espagnol (traductions officielles des ROMs européennes). Options de confort à cocher : suivi des codes et suivi 100 %, cœurs et récompenses sur la carte, barre d'état en bas, boutique GBA… Ou, au choix, les deux jeux séparés avec juste la barre en bas. La ROM est fabriquée dans le navigateur à partir de ses propres jeux.",
    en: { title: "Zelda Oracles Combined in 5 languages", kind: "Translation + options · online patcher",
      desc: "The crossworld hack that merges Oracle of Ages and Oracle of Seasons into one ROM, in French, English, German, Italian and Spanish (official translations from the European ROMs). Comfort options to tick: secret tracker and 100% tracker, hearts and rewards on the map, status bar at the bottom, GBA shop… Or, if you prefer, the two separate games with just the bottom bar. The ROM is built in the browser from your own games." },
    url: "https://soaresden.github.io/ZeldaOracleCombinedFR/",
    repo: "ZeldaOracleCombinedFR",
    links: [
      { label: "Patchs BPS (v1.4)", en: "BPS patches (v1.4)", url: "https://github.com/soaresden/ZeldaOracleCombinedFR/releases/latest" },
      { label: "Fork oracles-disasm (branche fr/crossworld1)", en: "oracles-disasm fork (fr/crossworld1 branch)", url: "https://github.com/soaresden/oracles-disasm/tree/fr/crossworld1" }
    ],
    platforms: ["gbc", "web"],
    shot: "zeldaoracles", accent: "#15803d"
  },
  {
    cat: "creation", game: "zelda", new: true,
    title: "Zelda : Gulls of Life",
    kind: "Jeu Game Boy Color · démo jouable",
    desc: "La suite de Link's Awakening que je crée de A à Z : Marine a fait un vœu, elle revient en mouette et accompagne Link dans un archipel où plus personne ne rêve. Histoire, îles, salles, musiques originales, sprites et dialogues : tout est nouveau, seul le moteur d'Oracle of Ages sert de base. La démo, tout le premier chapitre jusqu'au Phare Éteint et son chant de marins, se joue en français ou en anglais : un patch à appliquer sur sa propre ROM Oracle of Ages.",
    en: { title: "Zelda: Gulls of Life", kind: "Game Boy Color game · playable demo",
      desc: "The Link's Awakening sequel I'm building from scratch: Marine made a wish, she comes back as a seagull and travels with Link through an archipelago where nobody dreams anymore. Story, islands, rooms, original music, sprites and dialogue are all new; only the Oracle of Ages engine is reused. The demo, the whole first chapter up to the Dark Lighthouse and its sea shanty, plays in French or English: a patch to apply to your own Oracle of Ages ROM." },
    url: "https://soaresden.github.io/ZeldaGullsOfLife/",
    repo: "ZeldaGullsOfLife",
    links: [{ label: "Jouer à la démo (patch)", en: "Play the demo (patch)", url: "https://github.com/soaresden/ZeldaGullsOfLife/releases/latest" }],
    platforms: ["gbc"],
    shot: "gullsoflife"
  },
  {
    cat: "mods", game: "pokemon", new: true,
    title: "DBZ Team Training en français",
    kind: "Traduction GBA · patcher en ligne",
    desc: "Le ROM hack Dragon Ball Z Team Training V8 (sur base Pokémon Rouge Feu) entièrement en français : textes du hack traduits avec un glossaire, le reste repris de la VF officielle. On dépose ses propres ROMs et la version française est fabriquée dans le navigateur.",
    en: { title: "DBZ Team Training in French", kind: "GBA translation · online patcher",
      desc: "The Dragon Ball Z Team Training V8 ROM hack (based on Pokémon FireRed) fully in French: the hack's text translated with a glossary, the rest taken from the official French version. You drop your own ROMs and the French version is built in the browser." },
    url: "https://soaresden.github.io/DBZPokemonFR/",
    repo: "DBZPokemonFR",
    platforms: ["gba", "web"],
    shot: "dbz"
  },
  {
    cat: "mods", game: "pokemon",
    title: "Pokémon Regulation en français",
    kind: "Traduction · Game Boy",
    desc: "Traduction française du hack Pokémon Regulation Rouge/Bleu : attaques, objets, statistiques, noms des Pokémon et menus. Compile en français avec RGBDS.",
    en: { title: "Pokémon Regulation in French", kind: "Translation · Game Boy",
      desc: "French translation of the Pokémon Regulation Red/Blue hack: moves, items, stats, Pokémon names and menus. Builds in French with RGBDS." },
    url: "https://github.com/soaresden/pokemon_regulation_rouge_bleu",
    repo: "pokemon_regulation_rouge_bleu",
    platforms: ["gb"],
    art: "pokefr", accent: "#e11d48"
  },

  // ── Outils consoles ──────────────────────────────────────
  {
    cat: "consoles", wide: true, new: true,
    console: "ps2",
    title: "Prism PS2 Launcher",
    kind: "Homebrew PS2 · Lua",
    desc: "Un seul lanceur pour toute la ludothèque : disque exFAT interne, clé USB ou MMCE, et chaque fichier part dans le bon émulateur (RetroArch, POPStarter, Neutrino, OPL). Jaquettes, descriptions et emplacement des sauvegardes.",
    en: { kind: "PS2 homebrew · Lua",
      desc: "One launcher for the whole library: internal exFAT drive, USB stick or MMCE, and each file goes to the right emulator (RetroArch, POPStarter, Neutrino, OPL). Covers, descriptions and where the saves are." },
    url: "https://github.com/soaresden/PrismPS2Launcher",
    repo: "PrismPS2Launcher",
    platforms: ["ps2"],
    shot: "prism"
  },
  {
    cat: "consoles", new: true,
    console: "ps2",
    title: "bigben8mcps2",
    kind: "Rétro-ingénierie PS2",
    desc: "Ressusciter la carte mémoire Datel Mega Memory 8 sans son CD : gestionnaire XMEM2 qui ouvre les archives Datel, et un pilote résident qui joue le rôle du disque.",
    en: { kind: "PS2 reverse engineering",
      desc: "Bringing the Datel Mega Memory 8 memory card back to life without its CD: an XMEM2 manager that opens Datel's archives, and a resident driver that plays the disc's role." },
    url: "https://github.com/soaresden/bigben8mcps2",
    repo: "bigben8mcps2",
    platforms: ["ps2"],
    shot: "bigben"
  },
  {
    cat: "consoles", game: "mgs", new: true,
    console: "switch",
    title: "MPW Switch Save Editor",
    kind: "Éditeur de sauvegarde",
    desc: "Peace Walker (Master Collection, Switch) dans le navigateur : déchiffrement, soldats, véhicules, ZEKE, rangs S. Rien n'est envoyé nulle part.",
    en: { kind: "Save editor",
      desc: "Peace Walker (Master Collection, Switch) in the browser: decryption, soldiers, vehicles, ZEKE, S ranks. Nothing is sent anywhere." },
    url: "https://soaresden.github.io/MPW-Switch-Save-Editor/",
    repo: "MPW-Switch-Save-Editor",
    platforms: ["web", "switch"],
    art: "mpw", accent: "#b7791f"
  },
  {
    cat: "consoles", game: "nfsmw", new: true,
    console: "switch",
    title: "NFS Most Wanted Save Editor · Xbox 360",
    kind: "Éditeur de sauvegarde · contribution",
    desc: "L'éditeur web de x07x08 pour NFS Most Wanted (2005), auquel j'ai ajouté les sauvegardes Xbox 360 : ordre des octets, décalages, et les trois CRC d'EA que le jeu vérifie. Testé sur le portage Switch : la sauvegarde modifiée se charge en jeu.",
    en: { kind: "Save editor · contribution",
      desc: "x07x08's web editor for NFS Most Wanted (2005), to which I added Xbox 360 saves: byte order, offsets, and the three EA CRCs the game checks. Tested on the Switch port: the edited save loads in game." },
    url: "https://soaresden.github.io/nfsmw-save-editor/src/",
    repo: "nfsmw-save-editor",
    links: [{ label: "Pull request chez x07x08", en: "Pull request to x07x08", url: "https://github.com/x07x08/nfsmw-save-editor/pull/6" }],
    platforms: ["web", "xbox360", "switch"],
    art: "nfsmw", accent: "#65a30d"
  },
  {
    cat: "consoles", new: true,
    console: "switch",
    title: "Walkthrough Overlay",
    kind: "Overlay Switch · C++",
    desc: "Lire une soluce par-dessus n'importe quel jeu : textes, images et pages PDF, plus un outil PC pour convertir les guides. Réécriture complète de la v1.",
    en: { kind: "Switch overlay · C++",
      desc: "Read a walkthrough on top of any game: text, images and PDF pages, plus a PC tool to convert guides. A full rewrite of v1." },
    url: "https://github.com/soaresden/WalkthroughOverlay",
    repo: "WalkthroughOverlay",
    platforms: ["switch", "pc"],
    shot: "walkthrough"
  },
  {
    cat: "consoles",
    console: "retroid",
    title: "LED Retroid 5",
    kind: "Batocera · Python",
    desc: "Pilote les LED des sticks du Retroid Pocket 5 : couleurs par bouton gardées au redémarrage, ou niveau de batterie en couleur. Proposé à Batocera lui-même : réglages appliqués en direct, mode batterie, luminosité en pourcentage et curseur de teinte.",
    en: { desc: "Controls the Retroid Pocket 5 stick LEDs: per-button colours kept after reboot, or the battery level as a colour. Offered to Batocera itself: settings applied live, a battery mode, brightness as a percentage and a hue slider." },
    url: "https://github.com/soaresden/Retroid5_Led_Batocera",
    repo: "Retroid5_Led_Batocera",
    links: [
      { label: "Pull request Batocera (système)", en: "Batocera pull request (system)", url: "https://github.com/batocera-linux/batocera.linux/pull/17200" },
      { label: "Pull request EmulationStation (menus)", en: "EmulationStation pull request (menus)", url: "https://github.com/batocera-linux/batocera-emulationstation/pull/2275" }
    ],
    platforms: ["handheld"],
    art: "retroid", accent: "#a855f7"
  },

  // ── Applis Android ───────────────────────────────────────
  {
    cat: "android", new: true,
    title: "Bodycount",
    kind: "Appli Android · bêta Play Store",
    desc: "Le carnet de ta vie amoureuse en version jeu : une fiche avec avatar pour chaque rencontre, un agenda de rendez-vous, des défis (alphabet, tour du monde, astro) et des cartes rares à collectionner. Tout reste sur le téléphone, chiffré et verrouillé ; ni compte ni pub.",
    en: { kind: "Android app · Play Store beta",
      desc: "Your love life log as a game: a card with an avatar for each encounter, a date planner, challenges (alphabet, around the world, astrology) and rare cards to collect. Everything stays on the phone, encrypted and locked; no account, no ads." },
    url: "https://groups.google.com/g/bodycountapp",
    links: [
      { label: "Activer le test Play Store", en: "Join the Play Store test", url: "https://play.google.com/apps/testing/com.grobezeur.bodycount" },
      { label: "Confidentialité", en: "Privacy", url: "https://soaresden.github.io/BodyCountApp/politique-de-confidentialite.html" }
    ],
    platforms: ["android"],
    shot: "bodycount", accent: "#ec4899"
  },

  // ── Sur la route ─────────────────────────────────────────
  {
    cat: "route", also: ["android"], wide: true, new: true,
    title: "FuelTrajetMap",
    kind: "Carburant · trajet optimisé",
    desc: "Les prix officiels des ~9 800 stations françaises sur une carte, et surtout l'optimiseur de pleins : où s'arrêter sur ton trajet et combien de litres mettre, selon ton véhicule. Mode pénurie, écran Android Auto, sans backend.",
    en: { kind: "Fuel · optimised trip",
      desc: "Official prices of the ~9,800 French fuel stations on a map, and above all the refuelling optimiser: where to stop on your trip and how many litres to put in, for your vehicle. Shortage mode, Android Auto screen, no backend." },
    url: "https://soaresden.github.io/FuelTrajetMap/",
    repo: "FuelTrajetMap",
    platforms: ["web", "android"],
    shot: "fuel"
  },
  {
    cat: "route", also: ["android"], new: true,
    title: "Ride Companion · iX7 Pro",
    kind: "Trottinette connectée",
    desc: "Remplace l'appli officielle de la trottinette iX7 Pro : tableau de bord personnalisable, modes et réglages, trajets enregistrés avec la carte, suivi batterie, et la montre au poignet.",
    en: { kind: "Connected scooter",
      desc: "Replaces the official iX7 Pro scooter app: customisable dashboard, modes and settings, rides recorded on a map, battery tracking, and the watch on your wrist." },
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
    en: { kind: "Yantop dashcam player",
      desc: "Replaces GXPlayer from the SD card: decodes the GPS track hidden in the videos, rebuilds the trips and flags bumps while parked." },
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
    en: { desc: "Sorts and deduplicates thousands of photos and videos by comparing their real content (dHash, duration, frame by frame). Reliable chronological sorting and an interactive timeline." },
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
    en: { desc: "Embeds a thumbnail into a video: 10 extracted frames, built-in VLC player, 2×2 collage, text overlay and GPU acceleration." },
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
    en: { kind: "Security", desc: "Checks your Bitwarden export against leaks found on the dark web, to know which passwords to change first." },
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
    en: { kind: "Serious game · EDF Renouvelables", desc: "The Quality Week 2025 quiz: inspection dilemmas, timer and live leaderboard." },
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
    en: { kind: "HSE safety · EDF Renouvelables", desc: "An educational falling-object simulator: height, mass and impact energy, to raise risk awareness." },
    url: "https://soaresden.github.io/EDF-NoDropNoHarm/",
    repo: "EDF-NoDropNoHarm",
    platforms: ["web"],
    shot: "hse"
  },
  {
    cat: "outils",
    title: "idotMatrix GIF Converter",
    kind: "Ancien outil · 2025",
    desc: "Transforme une vidéo en GIF optimisé pour les écrans pixel iDotMatrix (16×16 à 64×64) : choix du passage, aperçu du rendu, début et fin.",
    en: { kind: "Older tool · 2025", desc: "Turns a video into a GIF optimised for iDotMatrix pixel displays (16×16 to 64×64): pick the part, preview the result, start and end." },
    url: "https://github.com/soaresden/idotMatrixViewer-Gif-Converter",
    repo: "idotMatrixViewer-Gif-Converter",
    platforms: ["pc"],
    art: "pixelgif", accent: "#0d9488"
  },
  {
    cat: "outils",
    title: "Live-Pipette",
    kind: "Ancien outil · 2024",
    desc: "Une pipette de couleur à l'écran, pour lire une valeur RGB sans lancer Photoshop.",
    en: { kind: "Older tool · 2024", desc: "An on-screen colour picker, to read an RGB value without opening Photoshop." },
    url: "https://github.com/soaresden/Live-Pipette",
    repo: "Live-Pipette",
    platforms: ["pc"],
    art: "pipette", accent: "#c026d3"
  },
  {
    cat: "outils",
    title: "GifCarBootanimAndroid",
    kind: "Ancien outil · 2023",
    desc: "Un GIF devient l'animation de démarrage d'un autoradio Android (et inversement) : en boucle ou figée sur la dernière image, avec redimensionnement.",
    en: { kind: "Older tool · 2023", desc: "A GIF becomes the boot animation of an Android car stereo (and back): looping or frozen on the last frame, with resizing." },
    url: "https://github.com/soaresden/GifCarBootanimAndroid",
    repo: "GifCarBootanimAndroid",
    platforms: ["pc"],
    art: "bootanim", accent: "#2563eb"
  }
];
