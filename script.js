const PLATFORMS = {
  web: "Web", android: "Android", wear: "Wear OS",
  ps1: "PS1", ps2: "PS2", gb: "Game Boy", gba: "GBA",
  xbox360: "Xbox 360", switch: "Switch", pc: "PC", handheld: "Retroid"
};
const HOME = { id: "", label: "Accueil", icon: "✦", color: "#e11d74" };
const state = { view: "", query: "" };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function escapeHtml(value){
  return String(value).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
const catOf = (p) => CATEGORIES.find((c) => c.id === p.cat);
const colorOf = (p) => p.accent || catOf(p).color;
const isLive = (p) => p.url.startsWith("https://soaresden.github.io/");
// Un projet a une catégorie principale (cat) et peut apparaître dans d'autres (also)
const inCat = (p, id) => p.cat === id || (p.also || []).includes(id);

/* ── Thème : auto → clair → sombre ────────────────────── */
const THEMES = ["auto", "light", "dark"];
function applyTheme(theme){
  if (theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", theme);
  $$(".theme-btn").forEach((b) => {
    b.textContent = { auto: "◐", light: "☀", dark: "☾" }[theme];
    b.title = { auto: "Thème : automatique", light: "Thème : clair", dark: "Thème : sombre" }[theme];
  });
}
let theme = "auto";
try { theme = localStorage.getItem("theme") || "auto"; } catch (e) {}
if (!THEMES.includes(theme)) theme = "auto";
applyTheme(theme);
$$(".theme-btn").forEach((b) => b.addEventListener("click", () => {
  theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  applyTheme(theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}));

/* ── Navigation ───────────────────────────────────────────
   Ordinateur : colonne d'icônes, le nom apparaît au survol.
   Mobile : bouton « Catégories » qui ouvre une grille. Même liste dans les deux. */
function renderNav(){
  const items = [HOME, ...CATEGORIES];
  const html = items.map((c) => {
    const n = c.id ? PROJECTS.filter((p) => inCat(p, c.id)).length : "";
    const current = !state.query && state.view === c.id ? ' aria-current="page"' : "";
    return `<a class="nav-item" href="#/${c.id}" data-cat="${c.id || "home"}" style="--c:${c.color}"${current} aria-label="${escapeHtml(c.label)}">
      <span class="nav-ico" aria-hidden="true">${c.icon}</span>
      <span class="nav-label">${escapeHtml(c.label)}${n ? ` <span class="nav-n">${n}</span>` : ""}</span>
    </a>`;
  }).join("");
  $("#nav").innerHTML = html;
  $("#catGrid").innerHTML = html;
  const cur = items.find((c) => c.id === state.view) || HOME;
  $("#catToggle").innerHTML = `<span aria-hidden="true">${state.query ? "⌕" : cur.icon}</span> ${state.query ? "Recherche" : escapeHtml(cur.short || cur.label)} <span aria-hidden="true">▾</span>`;
}

/* ── Contenu de la vue ────────────────────────────────── */
function currentItems(){
  const q = state.query.trim().toLowerCase();
  if (q) {
    return PROJECTS.filter((p) => [p.title, p.kind, p.desc, catOf(p).label, ...p.platforms.map((k) => PLATFORMS[k])]
      .join(" ").toLowerCase().includes(q));
  }
  if (!state.view) return PROJECTS.filter((p) => p.wide);
  return PROJECTS.filter((p) => inCat(p, state.view));
}

// Même structure d'en-tête partout (titre + une phrase) : la place laissée
// aux vignettes est donc identique d'une vue à l'autre.
// L'icône du titre joue l'animation de sa catégorie quand on arrive sur la page
// (pas à chaque lettre tapée dans la recherche).
let lastView = null;
const headIco = (cat, icon) => `<span class="head-ico" data-cat="${cat}">${icon}</span>`;
function renderHead(items){
  let title, sub;
  if (state.query.trim()) {
    title = `${headIco("search", "⌕")} Recherche`;
    sub = `${items.length} projet${items.length > 1 ? "s" : ""} pour « ${escapeHtml(state.query.trim())} »`;
  } else if (!state.view) {
    title = `${headIco("home", "✦")} Projets <em>phares</em>`;
    sub = `${PROJECTS.length} projets faits maison pour mes passions : plongée, violon, jeux, consoles rétro…`;
  } else {
    const c = CATEGORIES.find((x) => x.id === state.view);
    title = `${headIco(c.id, c.icon)} ${escapeHtml(c.label)}`;
    sub = escapeHtml(c.blurb);
  }
  $("#viewHead").innerHTML = `<h1>${title}</h1><p>${sub}</p>`;
}

// À monter quand une capture de shots/ est remplacée (sinon le navigateur garde l'ancienne)
const SHOTS_VERSION = 5;
function artFor(p){
  if (p.shot) return `<img src="shots/${p.shot}.jpg?v=${SHOTS_VERSION}" alt="" loading="lazy" decoding="async" width="900" height="337">`;
  return artSvg({ ...p, accent: colorOf(p) });
}

function renderTiles(items, entering){
  const showCat = !state.view || state.query.trim();
  $("#tiles").classList.toggle("enter", entering);
  $("#tiles").innerHTML = items.length ? items.map((p, i) => `
    <button class="tile" type="button" data-i="${PROJECTS.indexOf(p)}" style="--c:${colorOf(p)};--n:${i}">
      <span class="tile-art">${artFor(p)}${p.new ? '<span class="tile-new">Nouveau</span>' : ""}</span>
      <span class="tile-cap">
        <span class="tile-kind">${showCat ? `${catOf(p).icon} ${escapeHtml(catOf(p).label)}` : escapeHtml(p.kind)}</span>
        <span class="tile-title">${escapeHtml(p.title)}</span>
      </span>
    </button>`).join("")
    : `<p class="empty">Rien trouvé 🤿 Essaie un autre mot.</p>`;
  fit();
}

function render(){
  const items = currentItems();
  const viewKey = state.query.trim() ? "search" : state.view;
  const entering = viewKey !== lastView;
  lastView = viewKey;
  // La page prend la couleur de sa catégorie (transition douce, cf. @property --pc)
  const cat = CATEGORIES.find((c) => c.id === state.view);
  document.documentElement.style.setProperty("--pc", state.query.trim() ? "#64748b" : (cat ? cat.color : HOME.color));
  renderNav();
  renderHead(items);
  $("#viewHead").classList.toggle("play", entering);
  renderTiles(items, entering);
}

/* ── Vignettes : une seule taille pour tout le site ─────
   La taille dépend de l'écran, pas de la catégorie : on la calcule pour que
   la catégorie la plus remplie tienne sans défiler, et toutes les vues
   l'utilisent. Vignette = illustration 8:3 + légende de hauteur fixe. */
const MAX_ITEMS = Math.max(...CATEGORIES.map((c) => PROJECTS.filter((p) => inCat(p, c.id)).length));
function fit(){
  const box = $("#tiles");
  const W = box.clientWidth, H = box.clientHeight;
  if (!W || !H) return;
  const css = getComputedStyle(box);
  const gap = parseFloat(css.columnGap) || 12;
  const cap = parseFloat(css.getPropertyValue("--cap")) || 52;
  const mobile = matchMedia("(max-width: 760px)").matches;
  const height = (w, c) => { const r = Math.ceil(MAX_ITEMS / c); return r * (w * 3 / 8 + cap) + gap * (r - 1); };

  // Colonnes : 2 (ou 3) sur mobile ; sur ordinateur, le moins de colonnes possible
  // (donc les plus grandes vignettes) tant que tout tient en hauteur.
  let cols = mobile ? (W >= 520 ? 3 : 2) : 6;
  if (!mobile) {
    for (let c = 2; c <= 6; c++) {
      if (height((W - gap * (c - 1)) / c, c) <= H) { cols = c; break; }
    }
  }
  // Largeur de vignette : celle de la colonne, réduite si la hauteur manque.
  let w = (W - gap * (cols - 1)) / cols;
  const r = Math.ceil(MAX_ITEMS / cols);
  const wFromH = ((H - gap * (r - 1)) / r - cap) * 8 / 3;
  w = Math.floor(Math.min(w, wFromH, 440));
  box.classList.remove("rows");
  box.style.gridAutoRows = "";
  // Petit téléphone : des vignettes trop petites deviennent illisibles ; on passe
  // à des lignes de même hauteur (image à gauche, titre à droite).
  if (mobile && w < 130) {
    box.classList.add("rows");
    box.style.gridTemplateColumns = "minmax(0, 1fr)";
    box.style.gridAutoRows = `${Math.floor((H - gap * (MAX_ITEMS - 1)) / MAX_ITEMS)}px`;
    return;
  }
  box.style.gridTemplateColumns = `repeat(${cols}, ${Math.max(90, w)}px)`;
}
new ResizeObserver(() => fit()).observe($("#tiles"));

/* ── Fiche projet ─────────────────────────────────────── */
const sheet = $("#sheet");
function openSheet(p){
  const repoUrl = p.repo ? `https://github.com/soaresden/${p.repo}` : null;
  const actions = [
    `<a class="primary" href="${p.url}" target="_blank" rel="noreferrer">${isLive(p) ? "Ouvrir" : "Voir"} ↗</a>`,
    p.apk ? `<a href="${p.apk}" rel="noreferrer">APK</a>` : "",
    repoUrl && repoUrl !== p.url ? `<a href="${repoUrl}" target="_blank" rel="noreferrer">Code</a>` : ""
  ].join("");
  sheet.style.setProperty("--c", colorOf(p));
  $("#sheetInner").innerHTML = `
    <div class="sheet-art">${artFor(p).replace(' loading="lazy"', "")}
      <button class="sheet-close" type="button" aria-label="Fermer">✕</button>
    </div>
    <div class="sheet-body">
      <div class="sheet-kind">${catOf(p).icon} ${escapeHtml(p.kind)}${p.new ? '<span class="new">Nouveau</span>' : ""}</div>
      <h2 id="sheetTitle">${escapeHtml(p.title)}</h2>
      <p class="sheet-desc">${escapeHtml(p.desc)}</p>
      ${p.links ? `<div class="sublinks">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`).join("")}</div>` : ""}
      <div class="sheet-foot">
        <div class="plats">${p.platforms.map((k) => `<span class="plat">${PLATFORMS[k]}</span>`).join("")}</div>
        <div class="actions">${actions}</div>
      </div>
    </div>`;
  sheet.showModal();
  sheet.querySelector(".actions a").focus();
}
$("#tiles").addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (tile) openSheet(PROJECTS[+tile.dataset.i]);
});
sheet.addEventListener("click", (e) => {
  if (e.target === sheet || e.target.closest(".sheet-close")) sheet.close();
});

/* ── Recherche (en-tête sur ordinateur, bouton sur mobile) ── */
function setQuery(q){
  state.query = q;
  $("#search").value = $("#searchMobile").value = q;
  render();
}
$("#search").addEventListener("input", (e) => setQuery(e.target.value));
$("#searchMobile").addEventListener("input", (e) => setQuery(e.target.value));
$("#searchToggle").addEventListener("click", () => {
  const wrap = $("#searchMobileWrap");
  wrap.hidden = !wrap.hidden;
  if (wrap.hidden) setQuery("");
  else $("#searchMobile").focus();
  fit();
});

/* ── Grille des catégories (mobile) ───────────────────── */
const cats = $("#cats");
$("#catToggle").addEventListener("click", () => cats.showModal());
cats.addEventListener("click", (e) => {
  if (e.target === cats || e.target.closest(".nav-item")) cats.close();
});

/* ── Routage par ancre : #/plongee, #/musique… ─────────── */
function route(){
  const id = location.hash.replace(/^#\/?/, "");
  state.view = CATEGORIES.some((c) => c.id === id) ? id : "";
  if (state.query) { state.query = ""; $("#search").value = $("#searchMobile").value = ""; }
  if (sheet.open) sheet.close();
  if (cats.open) cats.close();
  render();
}
addEventListener("hashchange", route);
route();
