const PLATFORMS = {
  web: "Web", android: "Android", wear: "Wear OS",
  ps2: "PS2", switch: "Switch", pc: "PC", handheld: "Retroid"
};
const HOME = { id: "", label: "Accueil", icon: "✦", color: "#78716c" };
const state = { view: "", query: "" };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function escapeHtml(value){
  return String(value).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
const catOf = (p) => CATEGORIES.find((c) => c.id === p.cat);
const colorOf = (p) => p.accent || catOf(p).color;
const isLive = (p) => p.url.startsWith("https://soaresden.github.io/");

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

/* ── Navigation ───────────────────────────────────────── */
function renderNav(){
  const items = [HOME, ...CATEGORIES];
  $("#nav").innerHTML = items.map((c) => {
    const n = c.id ? PROJECTS.filter((p) => p.cat === c.id).length : "";
    const current = !state.query && state.view === c.id ? ' aria-current="page"' : "";
    return `<a class="nav-item" href="#/${c.id}" style="--c:${c.color}"${current}>
      <span class="nav-ico" aria-hidden="true">${c.icon}</span>
      <span class="nav-label">${escapeHtml(c.label)}</span>
      <span class="nav-short">${escapeHtml(c.short || c.label)}</span>
      <span class="nav-n">${n}</span>
    </a>`;
  }).join("");
}

/* ── Contenu de la vue ────────────────────────────────── */
function currentItems(){
  const q = state.query.trim().toLowerCase();
  if (q) {
    return PROJECTS.filter((p) => [p.title, p.kind, p.desc, catOf(p).label, ...p.platforms.map((k) => PLATFORMS[k])]
      .join(" ").toLowerCase().includes(q));
  }
  if (!state.view) return PROJECTS.filter((p) => p.wide);
  return PROJECTS.filter((p) => p.cat === state.view);
}

// Même structure d'en-tête partout (titre + une phrase) : la place laissée
// aux vignettes est donc identique d'une vue à l'autre.
function renderHead(items){
  let title, sub;
  if (state.query.trim()) {
    title = "⌕ Recherche";
    sub = `${items.length} projet${items.length > 1 ? "s" : ""} pour « ${escapeHtml(state.query.trim())} »`;
  } else if (!state.view) {
    title = `✦ Projets <em>phares</em>`;
    sub = "Je bricole des outils pour mes passions : plongée, violon, soirées jeux, consoles rétro…";
  } else {
    const c = CATEGORIES.find((x) => x.id === state.view);
    title = `${c.icon} ${escapeHtml(c.label)}`;
    sub = escapeHtml(c.blurb);
  }
  $("#viewHead").innerHTML = `<h1>${title}</h1><p>${sub}</p>`;
}

function renderSideInfo(){
  const live = PROJECTS.filter(isLive).length;
  $("#sideInfo").innerHTML = `<p class="side-stats"><strong>${PROJECTS.length}</strong> projets · <strong>${live}</strong> en ligne</p>
    <p class="side-archives">Archives : ${ARCHIVES.map((a) => `<a href="${a.url}" target="_blank" rel="noreferrer" title="${escapeHtml(a.desc)}">${escapeHtml(a.title)}</a>`).join(", ")}</p>`;
}

// À monter quand une capture de shots/ est remplacée (sinon le navigateur garde l'ancienne)
const SHOTS_VERSION = 2;
function artFor(p){
  if (p.shot) return `<img src="shots/${p.shot}.jpg?v=${SHOTS_VERSION}" alt="" loading="lazy" decoding="async" width="900" height="337">`;
  return artSvg({ ...p, accent: colorOf(p) });
}

function renderTiles(items){
  const showCat = !state.view || state.query.trim();
  $("#tiles").innerHTML = items.length ? items.map((p) => `
    <button class="tile" type="button" data-i="${PROJECTS.indexOf(p)}" style="--c:${colorOf(p)}">
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
  renderNav();
  renderSideInfo();
  renderHead(items);
  renderTiles(items);
}

/* ── Vignettes : une seule taille pour tout le site ─────
   La taille dépend de l'écran, pas de la catégorie : on la calcule pour que
   la catégorie la plus remplie tienne sans défiler, et toutes les vues
   l'utilisent. Vignette = illustration 8:3 + légende de hauteur fixe. */
const MAX_ITEMS = Math.max(...CATEGORIES.map((c) => PROJECTS.filter((p) => p.cat === c.id).length));
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
  w = Math.max(90, Math.floor(Math.min(w, wFromH, 440)));
  box.style.gridTemplateColumns = `repeat(${cols}, ${w}px)`;
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

/* ── Recherche (barre latérale ou bouton mobile) ──────── */
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

/* ── Routage par ancre : #/plongee, #/musique… ─────────── */
function route(){
  const id = location.hash.replace(/^#\/?/, "");
  state.view = CATEGORIES.some((c) => c.id === id) ? id : "";
  if (state.query) { state.query = ""; $("#search").value = $("#searchMobile").value = ""; }
  if (sheet.open) sheet.close();
  render();
}
addEventListener("hashchange", route);
route();
