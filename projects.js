// 🎨 Toutes les données des projets avec SVG détaillés et beaux!

const PROJECTS = {
  games: {
    label: 'Board Games',
    title: 'Assistants de jeu de société',
    color: 'games',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M12 12v4M10 14h4"/></svg>',
    items: [
      {
        title: 'Smile Life Tracker',
        type: 'Games · Life Tracking',
        desc: 'Assistant pour suivre les points de vie des joueurs au Smile Life, avec gestion des tours et des effets de cartes.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/smilelifetracker/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="slt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ffe5cc;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ffc9a8;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="slt-heart" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ff4500;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#slt-bg)"/>
          <!-- Cœurs de vie -->
          <g transform="translate(60, 40)">
            <path d="M 15 5 Q 10 0 5 5 Q 0 10 10 20 Q 20 10 15 5" fill="url(#slt-heart)" opacity="0.9"/>
            <text x="40" y="20" font-family="'Poppins',sans-serif" font-size="28" font-weight="700" fill="#ff6b35">20</text>
          </g>
          <g transform="translate(180, 40)">
            <path d="M 15 5 Q 10 0 5 5 Q 0 10 10 20 Q 20 10 15 5" fill="url(#slt-heart)" opacity="0.6"/>
            <text x="40" y="20" font-family="'Poppins',sans-serif" font-size="28" font-weight="700" fill="#ff6b35">15</text>
          </g>
          <!-- Joueurs -->
          <rect x="50" y="100" width="100" height="50" rx="8" fill="white" opacity="0.8" stroke="#ff6b35" stroke-width="2"/>
          <text x="100" y="135" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="16" font-weight="600" fill="#1a1a2e">Player 1</text>
          <rect x="250" y="100" width="100" height="50" rx="8" fill="white" opacity="0.8" stroke="#ff6b35" stroke-width="2"/>
          <text x="300" y="135" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="16" font-weight="600" fill="#1a1a2e">Player 2</text>
        </svg>`
      },
      {
        title: 'Space Base Ledger',
        type: 'Games · Counter',
        desc: 'Tableau de scoring pour Space Base. Gère les points des joueurs, les tours et affiche les scores en temps réel.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/space-base-ledger/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#e0d9ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#d4b5ff;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#sb-bg)"/>
          <!-- Dice/Dé -->
          <g transform="translate(50, 40)">
            <rect x="0" y="0" width="60" height="60" rx="4" fill="#c77dff" opacity="0.8" stroke="#a855f7" stroke-width="2"/>
            <circle cx="15" cy="15" r="4" fill="white"/>
            <circle cx="45" cy="15" r="4" fill="white"/>
            <circle cx="15" cy="45" r="4" fill="white"/>
            <circle cx="45" cy="45" r="4" fill="white"/>
            <circle cx="30" cy="30" r="4" fill="white"/>
          </g>
          <!-- Score board -->
          <g transform="translate(150, 50)">
            <rect x="0" y="0" width="220" height="80" rx="6" fill="white" opacity="0.9" stroke="#c77dff" stroke-width="2"/>
            <text x="10" y="25" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#8a95a5">Score</text>
            <text x="10" y="50" font-family="'JetBrains Mono',monospace" font-size="28" font-weight="700" fill="#c77dff">2,450</text>
            <text x="130" y="25" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#8a95a5">Round</text>
            <text x="130" y="50" font-family="'JetBrains Mono',monospace" font-size="28" font-weight="700" fill="#a855f7">5</text>
          </g>
        </svg>`
      }
    ]
  },

  music: {
    label: 'Music & Audio',
    title: 'Projets musicaux & audio',
    color: 'music',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13M9 9l12-2"/></svg>',
    items: [
      {
        title: 'WeMeetMusik',
        type: 'Music · Social Platform',
        desc: 'Plateforme collaborative pour connecter musiciens et producteurs. Trouvez des collaborateurs, écoutez des projets, et créez ensemble.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/WeMeetMusik/',
        isNew: true,
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wmm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f0d4ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#e0b9ff;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="wmm-wave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#c77dff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.6" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#wmm-bg)"/>
          <!-- Audio waves -->
          <g transform="translate(60, 60)">
            <path d="M 10 10 Q 10 0 20 0 Q 30 0 30 10 Q 30 20 20 20 Q 10 20 10 10" fill="#c77dff" opacity="0.8"/>
            <path d="M 45 20 L 45 0 L 55 0 L 55 20" fill="url(#wmm-wave)" opacity="0.8"/>
            <path d="M 65 10 L 65 0 L 75 0 L 75 10" fill="url(#wmm-wave)" opacity="0.9"/>
            <path d="M 85 5 L 85 0 L 95 0 L 95 5" fill="url(#wmm-wave)"/>
          </g>
          <!-- Collaboration bubble -->
          <circle cx="250" cy="70" r="35" fill="white" opacity="0.9" stroke="#c77dff" stroke-width="2"/>
          <text x="250" y="75" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="24" fill="#c77dff">♪</text>
          <circle cx="270" cy="90" r="15" fill="#c77dff" opacity="0.6"/>
          <circle cx="230" cy="90" r="15" fill="#a855f7" opacity="0.6"/>
        </svg>`
      }
    ]
  },

  plongee: {
    label: 'Diving',
    title: 'Plongée sous-marine',
    color: 'plongee',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>',
    items: [
      {
        title: 'Dive Log Assistant',
        type: 'Plongée · Tracking',
        desc: 'Carnet de plongée numérique. Enregistrez vos plongées, profondeurs, durées et conditions.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/divelog/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dive-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#c9e9f7;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7dd3e8;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#dive-bg)"/>
          <!-- Depth gauge -->
          <circle cx="80" cy="90" r="45" fill="white" opacity="0.9" stroke="#00b4d8" stroke-width="2"/>
          <circle cx="80" cy="90" r="38" fill="none" stroke="#00b4d8" stroke-width="1" opacity="0.3"/>
          <line x1="80" y1="50" x2="80" y2="55" stroke="#00b4d8" stroke-width="2"/>
          <line x1="80" y1="125" x2="80" y2="130" stroke="#00b4d8" stroke-width="2"/>
          <path d="M 80 90 L 90 80" stroke="#00b4d8" stroke-width="3"/>
          <circle cx="80" cy="90" r="4" fill="#00b4d8"/>
          <!-- Stats box -->
          <rect x="160" y="50" width="180" height="80" rx="8" fill="white" opacity="0.9" stroke="#00b4d8" stroke-width="2"/>
          <text x="175" y="70" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#8a95a5">Profondeur</text>
          <text x="175" y="90" font-family="'JetBrains Mono',monospace" font-size="20" font-weight="700" fill="#00b4d8">28m</text>
          <text x="280" y="70" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#8a95a5">Durée</text>
          <text x="280" y="90" font-family="'JetBrains Mono',monospace" font-size="20" font-weight="700" fill="#00b4d8">45min</text>
        </svg>`
      },
      {
        title: 'Dive Briefing Tool',
        type: 'Plongée · Planning',
        desc: 'Outil de préparation de plongées. Planifiez avec votre équipe, vérifiez les conditions et préparez les briefs.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/dive-briefing/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="briefing-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#a8f0ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#5ee3dd;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#briefing-bg)"/>
          <!-- Map/Planning -->
          <rect x="50" y="50" width="120" height="80" rx="6" fill="white" opacity="0.85" stroke="#00b4d8" stroke-width="2"/>
          <circle cx="75" cy="65" r="5" fill="#00b4d8"/>
          <circle cx="95" cy="80" r="4" fill="#06d6a0"/>
          <path d="M 75 65 L 95 80" stroke="#00b4d8" stroke-width="1.5" stroke-dasharray="2,2"/>
          <!-- Checklist -->
          <g transform="translate(200, 50)">
            <rect x="0" y="0" width="140" height="80" rx="6" fill="white" opacity="0.85" stroke="#00b4d8" stroke-width="2"/>
            <circle cx="15" cy="20" r="3" fill="#06d6a0"/>
            <text x="25" y="24" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Équipement OK</text>
            <circle cx="15" cy="45" r="3" fill="#06d6a0"/>
            <text x="25" y="49" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Météo vérifiée</text>
            <circle cx="15" cy="70" r="3" fill="#ffa500"/>
            <text x="25" y="74" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Team briefing</text>
          </g>
        </svg>`
      },
      {
        title: 'Nitrogen Calculator',
        type: 'Plongée · Safety',
        desc: 'Calculateur d\'absorption d\'azote et de décompression. Respectez les limites de plongée en sécurité.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/nitrogen-calc/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nitrogen-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#b3f0ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#80e9f3;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="nitrogen-bar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#06d6a0;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ff6b6b;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#nitrogen-bg)"/>
          <!-- N2 Level Bar -->
          <rect x="50" y="40" width="300" height="40" rx="6" fill="white" opacity="0.8" stroke="#00b4d8" stroke-width="2"/>
          <rect x="50" y="40" width="210" height="40" rx="6" fill="url(#nitrogen-bar)" opacity="0.8"/>
          <text x="200" y="68" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="20" font-weight="700" fill="#1a1a2e">70% N₂</text>
          <!-- Safety info -->
          <text x="50" y="120" font-family="'Poppins',sans-serif" font-size="13" font-weight="600" fill="#1a1a2e">Max bottom time: 25 min</text>
          <text x="50" y="145" font-family="'Poppins',sans-serif" font-size="13" font-weight="600" fill="#1a1a2e">Deco stop: 3 min @ 5m</text>
        </svg>`
      },
      {
        title: 'Depth Gauge Simulator',
        type: 'Plongée · Training',
        desc: 'Simulateur de profondimètre pour l\'entraînement. Apprenez à lire les instruments.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/depth-gauge/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gauge-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#bff7ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8ee8f5;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#gauge-bg)"/>
          <!-- Large gauge -->
          <circle cx="120" cy="90" r="60" fill="white" opacity="0.9" stroke="#00b4d8" stroke-width="2"/>
          <circle cx="120" cy="90" r="52" fill="none" stroke="#00b4d8" stroke-width="1" opacity="0.2"/>
          <!-- Tick marks -->
          <line x1="120" y1="32" x2="120" y2="38" stroke="#00b4d8" stroke-width="2"/>
          <line x1="165" y1="45" x2="170" y2="40" stroke="#00b4d8" stroke-width="2"/>
          <line x1="178" y1="90" x2="184" y2="90" stroke="#00b4d8" stroke-width="2"/>
          <line x1="165" y1="135" x2="170" y2="140" stroke="#00b4d8" stroke-width="2"/>
          <!-- Needle -->
          <line x1="120" y1="90" x2="140" y2="65" stroke="#00b4d8" stroke-width="3"/>
          <circle cx="120" cy="90" r="5" fill="#00b4d8"/>
          <!-- Reading display -->
          <rect x="220" y="60" width="140" height="60" rx="8" fill="white" opacity="0.9" stroke="#00b4d8" stroke-width="2"/>
          <text x="290" y="80" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="28" font-weight="700" fill="#00b4d8">18.5m</text>
          <text x="290" y="108" text-anchor="middle" font-family="'DM Sans',sans-serif" font-size="12" fill="#8a95a5">Profondeur actuelle</text>
        </svg>`
      },
      {
        title: 'Certification Tracker',
        type: 'Plongée · Progress',
        desc: 'Suivi des certifications PADI/SSI. Gérez vos niveaux et vos progrès de formation.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/cert-tracker/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cert-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#d0f5ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#a5edff;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#cert-bg)"/>
          <!-- Certificate -->
          <rect x="50" y="40" width="120" height="100" rx="4" fill="white" opacity="0.85" stroke="#00b4d8" stroke-width="2"/>
          <text x="110" y="65" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="14" font-weight="700" fill="#00b4d8">PADI</text>
          <text x="110" y="88" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="11" fill="#8a95a5">Open Water</text>
          <text x="110" y="108" text-anchor="middle" font-family="'DM Sans',sans-serif" font-size="9" fill="#5a6b7a">2024</text>
          <!-- Progress -->
          <g transform="translate(220, 50)">
            <text x="0" y="0" font-family="'Poppins',sans-serif" font-size="13" font-weight="600" fill="#1a1a2e">Niveau: Advanced Open Water</text>
            <rect x="0" y="15" width="120" height="12" rx="6" fill="#e0e0e0" opacity="0.6"/>
            <rect x="0" y="15" width="85" height="12" rx="6" fill="#06d6a0"/>
            <text x="0" y="55" font-family="'Poppins',sans-serif" font-size="11" fill="#8a95a5">Plongées: 42/60</text>
            <text x="0" y="75" font-family="'Poppins',sans-serif" font-size="11" fill="#8a95a5">Prochaine: Deep Diver</text>
          </g>
        </svg>`
      },
      {
        title: 'Buddy Check List',
        type: 'Plongée · Checklist',
        desc: 'Liste de vérification avant plongée. Assurez-vous que votre équipement et votre buddy sont prêts.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/buddy-check/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="buddy-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#e5f5ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#c7e9ff;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#buddy-bg)"/>
          <!-- Two divers -->
          <circle cx="80" cy="50" r="18" fill="#00b4d8" opacity="0.8"/>
          <circle cx="280" cy="50" r="18" fill="#00b4d8" opacity="0.8"/>
          <!-- Checklist -->
          <g transform="translate(120, 50)">
            <circle cx="0" cy="10" r="4" fill="#06d6a0"/>
            <text x="15" y="14" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Réserve air OK</text>
            <circle cx="0" cy="35" r="4" fill="#06d6a0"/>
            <text x="15" y="39" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Poids OK</text>
            <circle cx="0" cy="60" r="4" fill="#06d6a0"/>
            <text x="15" y="64" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Masque OK</text>
          </g>
        </svg>`
      }
    ]
  },

  securite: {
    label: 'Security',
    title: 'Sécurité & Outils HSE',
    color: 'securite',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    items: [
      {
        title: 'Risk Assessment Tool',
        type: 'Sécurité · HSE',
        desc: 'Outil d\'évaluation des risques. Identifiez, classez et tracez les actions correctives.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/risk-assessment/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="risk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#d4f7e4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#a8f0d8;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#risk-bg)"/>
          <!-- Risk matrix -->
          <rect x="50" y="40" width="100" height="100" rx="4" fill="white" opacity="0.8" stroke="#06d6a0" stroke-width="2"/>
          <line x1="100" y1="40" x2="100" y2="140" stroke="#06d6a0" stroke-width="1" opacity="0.3"/>
          <line x1="50" y1="90" x2="150" y2="90" stroke="#06d6a0" stroke-width="1" opacity="0.3"/>
          <!-- Risk items -->
          <circle cx="70" cy="60" r="6" fill="#06d6a0" opacity="0.7"/>
          <circle cx="120" cy="110" r="8" fill="#ffd60a" opacity="0.8"/>
          <circle cx="80" cy="115" r="5" fill="#06d6a0" opacity="0.6"/>
          <!-- Assessment form -->
          <g transform="translate(200, 50)">
            <rect x="0" y="0" width="140" height="90" rx="6" fill="white" opacity="0.9" stroke="#06d6a0" stroke-width="2"/>
            <text x="10" y="20" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#1a1a2e">Impacts:</text>
            <rect x="10" y="28" width="120" height="6" rx="3" fill="#e0e0e0" opacity="0.5"/>
            <rect x="10" y="28" width="45" height="6" rx="3" fill="#06d6a0"/>
            <text x="10" y="52" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#1a1a2e">Probabilité:</text>
            <rect x="10" y="60" width="120" height="6" rx="3" fill="#e0e0e0" opacity="0.5"/>
            <rect x="10" y="60" width="70" height="6" rx="3" fill="#ffd60a" opacity="0.8"/>
          </g>
        </svg>`
      }
    ]
  },

  quizz: {
    label: 'Quiz & Learning',
    title: 'Quiz & Outils d\'apprentissage',
    color: 'quizz',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    items: [
      {
        title: 'General Knowledge Quiz',
        type: 'Quiz · Learning',
        desc: 'Quiz de culture générale interactif. Testez vos connaissances sur différents thèmes.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/general-quiz/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="quiz-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#fff4e0;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ffe8b6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#quiz-bg)"/>
          <!-- Question card -->
          <rect x="50" y="50" width="150" height="80" rx="8" fill="white" opacity="0.9" stroke="#ffd60a" stroke-width="2"/>
          <text x="65" y="70" font-family="'Poppins',sans-serif" font-size="13" font-weight="600" fill="#1a1a2e">Question 3/10</text>
          <text x="65" y="95" font-family="'Poppins',sans-serif" font-size="12" fill="#5a6b7a">Quelle est la capitale</text>
          <text x="65" y="110" font-family="'Poppins',sans-serif" font-size="12" fill="#5a6b7a">de la France?</text>
          <!-- Answer options -->
          <g transform="translate(230, 50)">
            <rect x="0" y="0" width="100" height="18" rx="4" fill="white" opacity="0.8" stroke="#ffd60a" stroke-width="1.5"/>
            <text x="8" y="13" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">A) Paris</text>
            <rect x="0" y="25" width="100" height="18" rx="4" fill="white" opacity="0.8" stroke="#ffd60a" stroke-width="1.5"/>
            <text x="8" y="38" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">B) Lyon</text>
            <rect x="0" y="50" width="100" height="18" rx="4" fill="#ffd60a" opacity="0.3" stroke="#ffd60a" stroke-width="2"/>
            <text x="8" y="63" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">C) Marseille</text>
          </g>
        </svg>`
      }
    ]
  },

  tools: {
    label: 'Tools',
    title: 'Outils métier & productivité',
    color: 'tools',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    items: [
      {
        title: 'EDF No Drop No Harm',
        type: 'Tools · HSE · EDF',
        desc: 'Outil de suivi HSE pour EDF Renouvelables. Gestion des inspections, signalement de risques et suivi des actions correctives de sécurité.',
        link: 'soaresden.github.io',
        url: 'https://soaresden.github.io/EDF-NoDropNoHarm/',
        art: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="edf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ffe4e4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ffd4d4;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#edf-bg)"/>
          <!-- Safety steps -->
          <g transform="translate(50, 50)">
            <circle cx="15" cy="15" r="10" fill="#06d6a0"/>
            <text x="15" y="19" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="14" font-weight="700" fill="white">✓</text>
            <text x="35" y="20" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Inspection HSE</text>
          </g>
          <g transform="translate(50, 85)">
            <circle cx="15" cy="15" r="10" fill="#06d6a0"/>
            <text x="15" y="19" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="14" font-weight="700" fill="white">✓</text>
            <text x="35" y="20" font-family="'DM Sans',sans-serif" font-size="11" fill="#1a1a2e">Risques identifiés</text>
          </g>
          <!-- Action item -->
          <g transform="translate(250, 70)">
            <rect x="0" y="0" width="130" height="40" rx="6" fill="white" opacity="0.85" stroke="#ff4d6d" stroke-width="2"/>
            <circle cx="15" cy="20" r="8" fill="#ff4d6d" opacity="0.2"/>
            <text x="15" y="24" text-anchor="middle" font-family="'Poppins',sans-serif" font-size="12" font-weight="600" fill="#ff4d6d">!</text>
            <text x="30" y="18" font-family="'Poppins',sans-serif" font-size="11" font-weight="600" fill="#1a1a2e">Action:</text>
            <text x="30" y="32" font-family="'DM Sans',sans-serif" font-size="9" fill="#5a6b7a">Corrective required</text>
          </g>
        </svg>`
      }
    ]
  }
};
