const state = { active: "all", query: "" };
const $ = (selector) => document.querySelector(selector);
const categoryGrid = $("#categoryGrid");
const projectsGrid = $("#projectsGrid");
const searchInput = $("#searchInput");
const selectionTitle = $("#selectionTitle");
const selectionSubtitle = $("#selectionSubtitle");
const emptyState = $("#emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function getFilteredProjects() {
  const q = state.query.trim().toLowerCase();
  return PROJECTS.filter((project) => {
    const inCategory = state.active === "all" || project.category === state.active;
    const haystack = [project.title, project.type, project.desc, ...(project.tags || [])].join(" ").toLowerCase();
    return inCategory && (!q || haystack.includes(q));
  });
}

function renderCategories() {
  const allActive = state.active === "all";
  const allButton = `
    <button class="category-card ${allActive ? "active" : ""}" data-category="all" type="button">
      <div class="cat-icon" style="background:#f1f5f9">▦</div>
      <div class="cat-title">Tous</div>
      <div class="cat-count">${PROJECTS.length} projets</div>
    </button>`;

  const buttons = CATEGORIES.map((cat) => {
    const count = PROJECTS.filter((p) => p.category === cat.id).length;
    return `
      <button class="category-card ${state.active === cat.id ? "active" : ""}" data-category="${cat.id}" type="button">
        <div class="cat-icon" style="background:${cat.soft};color:${cat.color}">${cat.icon}</div>
        <div class="cat-title">${escapeHtml(cat.label)}</div>
        <div class="cat-count">${count} projet${count > 1 ? "s" : ""}</div>
      </button>`;
  }).join("");

  categoryGrid.innerHTML = allButton + buttons;

  categoryGrid.querySelectorAll(".category-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.active = button.dataset.category;
      render();
    });
  });
}

function renderSelection(count) {
  const cat = CATEGORIES.find((c) => c.id === state.active);
  selectionTitle.innerHTML = `${state.active === "all" ? "Tous les projets" : escapeHtml(cat.label)} <span>${count} résultat${count > 1 ? "s" : ""}</span>`;
  selectionTitle.querySelector("span").style.cssText = "margin-left:12px;font-size:15px;font-weight:400;color:#64748b;letter-spacing:0";
  selectionSubtitle.textContent = state.active === "all" ? "Tous les side projects et créations personnelles." : cat.subtitle;
}

function renderProjects() {
  const filtered = getFilteredProjects();
  projectsGrid.innerHTML = filtered.map((project) => `
    <a class="project-card" href="${project.url}" target="_blank" rel="noreferrer" style="--accent:${project.accent}">
      <div class="project-top">
        <div>
          <div class="badges">
            <span class="type-badge">${escapeHtml(project.type)}</span>
            ${project.new ? '<span class="new-badge">New</span>' : ''}
          </div>
          <h3>${escapeHtml(project.title)}</h3>
        </div>
        <div class="project-icon" title="${project.github ? "GitHub" : "Ouvrir"}">${project.github ? "⌘" : "↗"}</div>
      </div>
      <p>${escapeHtml(project.desc)}</p>
      <div class="tags">${(project.tags || []).map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>
    </a>
  `).join("");
  emptyState.style.display = filtered.length ? "none" : "block";
  renderSelection(filtered.length);
}

function render() {
  renderCategories();
  renderProjects();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProjects();
});

render();
