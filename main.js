// Main JavaScript pour générer les sections dynamiquement
// Version 2.0 - Avec SVG personnalisés pour chaque projet

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupNavigation();
  setupAnimations();
});

/**
 * Génère toutes les sections de projets
 */
function renderProjects() {
  const main = document.getElementById('projects-container');
  if (!main) return;

  // Ordre des sections
  const sections = ['games', 'music', 'plongee', 'securite', 'quizz', 'tools'];

  sections.forEach((sectionKey, index) => {
    const section = PROJECTS[sectionKey];
    main.appendChild(createProjectSection(sectionKey, section, index));
  });

  // Mettre à jour les nav pills
  updateNavigation(sections);
}

/**
 * Crée une section de projet
 */
function createProjectSection(sectionId, section, index) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'section';
  sectionEl.id = sectionId;

  const headerEl = document.createElement('div');
  headerEl.className = 'section-header';
  headerEl.innerHTML = `
    <div class="section-icon bg-${section.color}">
      ${section.icon}
    </div>
    <div>
      <div class="section-label c-${section.color}">${section.label}</div>
      <div class="section-title">${section.title}</div>
    </div>
    <div class="section-line"></div>
  `;

  const gridEl = document.createElement('div');
  gridEl.className = 'card-grid';

  section.items.forEach((project, itemIndex) => {
    const card = createProjectCard(project, section.color, index, itemIndex);
    gridEl.appendChild(card);
    // Animation stagger
    card.style.animationDelay = `${(itemIndex * 0.05) + 0.05}s`;
  });

  sectionEl.appendChild(headerEl);
  sectionEl.appendChild(gridEl);

  return sectionEl;
}

/**
 * Crée une carte de projet
 */
function createProjectCard(project, colorClass, sectionIndex, itemIndex) {
  const cardEl = document.createElement('a');
  cardEl.className = `pcard border-${colorClass}`;
  cardEl.href = project.url;
  cardEl.target = '_blank';

  // Art (SVG ou image)
  const artEl = document.createElement('div');
  artEl.className = 'pcard-art';

  if (project.art) {
    // Utiliser l'art personnalisé du projet
    artEl.innerHTML = project.art;
  }

  // Body
  const bodyEl = document.createElement('div');
  bodyEl.className = 'pcard-body';

  let typeHTML = `<div class="pcard-type c-${colorClass}">${project.type}</div>`;
  let titleHTML = `<div class="pcard-title">${project.title}`;
  if (project.isNew) {
    titleHTML += `<span class="badge-new">NEW</span>`;
  }
  titleHTML += `</div>`;

  const footerEl = document.createElement('div');
  footerEl.className = 'pcard-footer';
  footerEl.innerHTML = `
    <span class="pcard-link">${project.link}</span>
    <span class="pcard-arrow">→</span>
  `;

  bodyEl.innerHTML = typeHTML + titleHTML;

  const descEl = document.createElement('div');
  descEl.className = 'pcard-desc';
  descEl.textContent = project.desc;
  bodyEl.appendChild(descEl);

  bodyEl.appendChild(footerEl);

  cardEl.appendChild(artEl);
  cardEl.appendChild(bodyEl);

  return cardEl;
}

/**
 * Met à jour les nav pills
 */
function updateNavigation(sections) {
  const navInner = document.querySelector('.nav-inner');
  if (!navInner) return;

  navInner.innerHTML = '';

  const colorMap = {
    games: 'c-games',
    music: 'c-music',
    plongee: 'c-plongee',
    securite: 'c-securite',
    quizz: 'c-quizz',
    tools: 'c-tools'
  };

  sections.forEach((sectionId) => {
    const section = PROJECTS[sectionId];
    const pill = document.createElement('a');
    pill.className = 'nav-pill';
    pill.href = `#${sectionId}`;
    pill.innerHTML = `<span class="dot" style="background:var(--${colorMap[sectionId]})"></span>${section.label}`;
    navInner.appendChild(pill);
  });
}

/**
 * Setup de la navigation et scroll
 */
function setupNavigation() {
  const navPills = document.querySelectorAll('.nav-pill');
  const sections = document.querySelectorAll('.section');

  navPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Setup des animations
 */
function setupAnimations() {
  const cards = document.querySelectorAll('.pcard');
  cards.forEach((card, index) => {
    if (!card.style.animationDelay) {
      card.style.animationDelay = `${(index * 0.02)}s`;
    }
  });
}

/**
 * Ajouter un nouveau projet facilement
 * Exemple: addProject('games', { title: '...', type: '...', desc: '...', url: '...', link: '...', art: '<svg>...' })
 */
function addProject(sectionId, projectData) {
  if (!PROJECTS[sectionId]) {
    console.error(`Section ${sectionId} non trouvée`);
    return;
  }

  PROJECTS[sectionId].items.push(projectData);
  location.reload(); // Recharger la page pour voir le changement
}

/**
 * Retirer un projet
 * Exemple: removeProject('games', 'Smile Life Tracker')
 */
function removeProject(sectionId, projectTitle) {
  if (!PROJECTS[sectionId]) {
    console.error(`Section ${sectionId} non trouvée`);
    return;
  }

  PROJECTS[sectionId].items = PROJECTS[sectionId].items.filter(
    p => p.title !== projectTitle
  );
  location.reload();
}

// Exporter pour utilisation globale
window.ProjectManager = {
  addProject,
  removeProject,
  PROJECTS
};
