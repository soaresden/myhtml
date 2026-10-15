const PLATFORMS = {
  web: "Web", android: "Android", wear: "Wear OS",
  ps1: "PS1", ps2: "PS2", gb: "Game Boy", gbc: "Game Boy Color", gba: "GBA",
  xbox: "Xbox", xbox360: "Xbox 360", switch: "Switch", pc: "PC", handheld: "Retroid"
};
const HOME = { id: "", label: "Accueil", short: "Accueil", icon: "✦", color: "#e11d74", en: { label: "Home", short: "Home" } };
// group : le jeu ou la console ouvert ({ type: "game" | "console", id }), sinon null
const state = { view: "", group: null, query: "" };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function escapeHtml(value){
  return String(value).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

/* ── Langue : le même bouton 🇬🇧 EN / 🇫🇷 FR que sur mes autres pages ──
   Choix mémorisé dans sb.lang, sinon langue du navigateur. */
let LANG = null;
try { LANG = localStorage.getItem("sb.lang"); } catch (e) {}
if (LANG !== "fr" && LANG !== "en") LANG = /^fr/i.test(navigator.language || "") ? "fr" : "en";
document.documentElement.lang = LANG;
const EN = LANG === "en";
const T = (fr, en) => (EN ? en : fr);
// Texte d'une fiche, d'une catégorie ou d'un jeu dans la langue choisie (repli sur le français)
const L = (o, key) => (EN && o.en && o.en[key]) || o[key];
if (EN) {
  $$("[data-en]").forEach((e) => { e.innerHTML = e.getAttribute("data-en"); });
  $$("[data-en-placeholder]").forEach((e) => { e.placeholder = e.getAttribute("data-en-placeholder"); });
  $$("[data-en-label]").forEach((e) => { e.setAttribute("aria-label", e.getAttribute("data-en-label")); });
  document.title = "soaresden · the workshop";
}
$$(".lang-btn").forEach((b) => {
  b.textContent = EN ? "🇫🇷 FR" : "🇬🇧 EN";
  b.title = "Français / English";
  b.addEventListener("click", () => {
    try { localStorage.setItem("sb.lang", EN ? "fr" : "en"); } catch (e) {}
    location.reload();
  });
});

const catOf = (p) => CATEGORIES.find((c) => c.id === p.cat);
const gameOf = (id) => GAMES.find((g) => g.id === id);
// Deux façons de regrouper : par jeu (Mods…) ou par console (Outils consoles)
const GROUPS = { game: { list: GAMES, slug: "jeu", field: "game" }, console: { list: CONSOLES, slug: "console", field: "console" } };
const groupOf = (type, id) => GROUPS[type].list.find((x) => x.id === id);
const groupProjects = (type, id) => PROJECTS.filter((p) => p[GROUPS[type].field] === id);
const colorOf = (p) => p.accent || catOf(p).color;
const isLive = (p) => p.url.startsWith("https://soaresden.github.io/");
// Un projet a une catégorie principale (cat) et peut apparaître dans d'autres (also)
const inCat = (p, id) => p.cat === id || (p.also || []).includes(id);
// Un jeu ou une console a sa propre vignette dès qu'il a au moins deux projets
const isGrouped = (type, id) => !!id && groupProjects(type, id).length > 1;

/* ── Thème : auto → clair → sombre ────────────────────── */
const THEMES = ["auto", "light", "dark"];
function applyTheme(theme){
  if (theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", theme);
  $$(".theme-btn").forEach((b) => {
    b.textContent = { auto: "◐", light: "☀", dark: "☾" }[theme];
    b.title = { auto: T("Thème : automatique", "Theme: automatic"), light: T("Thème : clair", "Theme: light"), dark: T("Thème : sombre", "Theme: dark") }[theme];
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

/* ── Ce qu'affiche chaque vue ─────────────────────────────
   Dans une catégorie, les projets d'un même jeu (ou d'une même console, selon
   groupBy de la catégorie) sont remplacés par une seule vignette ; un clic ouvre
   #/jeu/<id> ou #/console/<id> avec tous ses projets. */
function itemsFor(view, group, query){
  const q = (query || "").trim().toLowerCase();
  if (q) {
    return PROJECTS.filter((p) => [p.title, L(p, "title"), p.kind, L(p, "kind"), p.desc, L(p, "desc"),
      L(catOf(p), "label"), p.game ? gameOf(p.game).name : "", ...p.platforms.map((k) => PLATFORMS[k])]
      .join(" ").toLowerCase().includes(q)).map((p) => ({ p }));
  }
  if (group) return groupProjects(group.type, group.id).map((p) => ({ p }));
  if (!view) return PROJECTS.filter((p) => p.wide).map((p) => ({ p }));
  const type = CATEGORIES.find((c) => c.id === view).groupBy || "game";
  const field = GROUPS[type].field;
  const out = [], seen = new Set();
  for (const p of PROJECTS.filter((x) => inCat(x, view))) {
    const id = p[field];
    if (isGrouped(type, id)) {
      if (!seen.has(id)) { seen.add(id); out.push({ g: groupOf(type, id), type }); }
    } else out.push({ p });
  }
  return out;
}
const currentItems = () => itemsFor(state.view, state.group, state.query);
// Catégorie à allumer dans le menu (et vers laquelle revenir) sur la page d'un jeu ou d'une console
const homeCatOf = (group) => state.view || catOf(groupProjects(group.type, group.id)[0]).id;

/* ── Navigation ───────────────────────────────────────────
   Ordinateur : colonne d'icônes, le nom apparaît au survol.
   Mobile : bouton « Catégories » qui ouvre une grille. Même liste dans les deux. */
function renderNav(){
  const items = [HOME, ...CATEGORIES];
  // Sur la page d'un jeu, on garde allumée la catégorie d'où il vient
  const active = state.group ? homeCatOf(state.group) : state.view;
  const html = items.map((c) => {
    const n = c.id ? PROJECTS.filter((p) => inCat(p, c.id)).length : "";
    const current = !state.query && active === c.id ? ' aria-current="page"' : "";
    return `<a class="nav-item" href="#/${c.id}" data-cat="${c.id || "home"}" style="--c:${c.color}"${current} aria-label="${escapeHtml(L(c, "label"))}">
      <span class="nav-ico" aria-hidden="true">${c.icon}</span>
      <span class="nav-label">${escapeHtml(L(c, "label"))}${n ? ` <span class="nav-n">${n}</span>` : ""}</span>
    </a>`;
  }).join("");
  $("#nav").innerHTML = html;
  $("#catGrid").innerHTML = html;
  const cur = items.find((c) => c.id === active) || HOME;
  const g = state.group && groupOf(state.group.type, state.group.id);
  const label = state.query ? T("Recherche", "Search") : g ? g.short : L(cur, "short") || L(cur, "label");
  $("#catToggle").innerHTML = `<span aria-hidden="true">${state.query ? "⌕" : g ? g.icon : cur.icon}</span> ${escapeHtml(label)} <span aria-hidden="true">▾</span>`;
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
    const n = items.length;
    title = `${headIco("search", "⌕")} ${T("Recherche", "Search")}`;
    sub = T(`${n} projet${n > 1 ? "s" : ""} pour « ${escapeHtml(state.query.trim())} »`, `${n} project${n > 1 ? "s" : ""} for “${escapeHtml(state.query.trim())}”`);
  } else if (state.group) {
    const g = groupOf(state.group.type, state.group.id);
    const back = homeCatOf(state.group);
    title = `<a class="back" href="#/${back}" aria-label="${T("Retour", "Back")}">←</a> ${headIco(state.group.type, g.icon)} ${escapeHtml(L(g, "name"))}`;
    sub = escapeHtml(L(g, "blurb"));
  } else if (!state.view) {
    title = `${headIco("home", "✦")} ${T("Projets <em>phares</em>", "Featured <em>projects</em>")}`;
    sub = T(`${PROJECTS.length} projets faits maison pour mes passions : plongée, violon, jeux, consoles rétro…`,
      `${PROJECTS.length} home-made projects for my passions: scuba diving, violin, games, retro consoles…`);
  } else {
    const c = CATEGORIES.find((x) => x.id === state.view);
    title = `${headIco(c.id, c.icon)} ${escapeHtml(L(c, "label"))}`;
    sub = escapeHtml(L(c, "blurb"));
  }
  $("#viewHead").innerHTML = `<h1>${title}</h1><p>${sub}</p>`;
}

// À monter quand une capture de shots/ est remplacée (sinon le navigateur garde l'ancienne)
const SHOTS_VERSION = 7;
const img = (shot) => `<img src="shots/${shot}.jpg?v=${SHOTS_VERSION}" alt="" loading="lazy" decoding="async" width="900" height="337">`;
function artFor(p){
  if (p.shot) return img(p.shot);
  return artSvg({ ...p, accent: colorOf(p) });
}
const NEW = () => T("Nouveau", "New");

function tileHtml(item, i, showCat){
  if (item.g) {
    const g = item.g, list = groupProjects(item.type, g.id), n = list.length;
    const art = g.shot ? img(g.shot) : g.art ? artSvg({ art: g.art, title: g.name, accent: g.color }) : artFor(list[0]);
    return `<a class="tile tile-game" href="#/${GROUPS[item.type].slug}/${g.id}" style="--c:${g.color};--n:${i}">
      <span class="tile-art">${art}<span class="tile-count">${n} ${T("projets", "projects")}</span></span>
      <span class="tile-cap">
        <span class="tile-kind">${g.icon} ${item.type === "console" ? "Console" : T("Jeu", "Game")}</span>
        <span class="tile-title">${escapeHtml(L(g, "name"))}</span>
      </span>
    </a>`;
  }
  const p = item.p;
  // Ligne du dessus : la catégorie (accueil, recherche), sinon le jeu puis le type
  const kind = showCat ? `${catOf(p).icon} ${escapeHtml(L(catOf(p), "label"))}`
    : (p.game && !(state.group && state.group.type === "game") ? `${escapeHtml(gameOf(p.game).short)} · ` : "") + escapeHtml(L(p, "kind"));
  return `<button class="tile" type="button" data-i="${PROJECTS.indexOf(p)}" style="--c:${colorOf(p)};--n:${i}">
      <span class="tile-art">${artFor(p)}${p.new ? `<span class="tile-new">${NEW()}</span>` : ""}</span>
      <span class="tile-cap">
        <span class="tile-kind">${kind}</span>
        <span class="tile-title">${escapeHtml(L(p, "title"))}</span>
      </span>
    </button>`;
}

function renderTiles(items, entering){
  const showCat = (!state.view && !state.group) || state.query.trim();
  $("#tiles").classList.toggle("enter", entering);
  $("#tiles").innerHTML = items.length ? items.map((it, i) => tileHtml(it, i, showCat)).join("")
    : `<p class="empty">${T("Rien trouvé 🤿 Essaie un autre mot.", "Nothing found 🤿 Try another word.")}</p>`;
  fit();
}

function render(){
  const items = currentItems();
  const viewKey = state.query.trim() ? "search" : state.group ? state.group.type + "/" + state.group.id : state.view;
  const entering = viewKey !== lastView;
  lastView = viewKey;
  // La page prend la couleur de sa catégorie ou de son jeu (transition douce, cf. @property --pc)
  const cat = CATEGORIES.find((c) => c.id === state.view);
  const color = state.query.trim() ? "#64748b" : state.group ? groupOf(state.group.type, state.group.id).color : cat ? cat.color : HOME.color;
  document.documentElement.style.setProperty("--pc", color);
  renderNav();
  renderHead(items);
  $("#viewHead").classList.toggle("play", entering);
  renderTiles(items, entering);
}

/* ── Vignettes : une seule taille pour tout le site ─────
   La taille dépend de l'écran, pas de la vue : on la calcule pour que la vue
   la plus remplie (catégorie ou jeu, une fois les jeux regroupés) tienne sans
   défiler, et toutes les vues l'utilisent. Vignette = illustration 8:3 + légende. */
const MAX_ITEMS = Math.max(
  itemsFor("", null, "").length,
  ...CATEGORIES.map((c) => itemsFor(c.id, null, "").length),
  ...GAMES.map((g) => groupProjects("game", g.id).length),
  ...CONSOLES.map((c) => groupProjects("console", c.id).length)
);
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
    `<a class="primary" href="${p.url}" target="_blank" rel="noreferrer">${isLive(p) ? T("Ouvrir", "Open") : T("Voir", "View")} ↗</a>`,
    p.apk ? `<a href="${p.apk}" rel="noreferrer">APK</a>` : "",
    repoUrl && repoUrl !== p.url ? `<a href="${repoUrl}" target="_blank" rel="noreferrer">Code</a>` : ""
  ].join("");
  const g = p.game && gameOf(p.game);
  sheet.style.setProperty("--c", colorOf(p));
  $("#sheetInner").innerHTML = `
    <div class="sheet-art">${artFor(p).replace(' loading="lazy"', "")}
      <button class="sheet-close" type="button" aria-label="${T("Fermer", "Close")}">✕</button>
    </div>
    <div class="sheet-body">
      <div class="sheet-kind">${g ? `${g.icon} ${escapeHtml(g.short)} · ` : `${catOf(p).icon} `}${escapeHtml(L(p, "kind"))}${p.new ? `<span class="new">${NEW()}</span>` : ""}</div>
      <h2 id="sheetTitle">${escapeHtml(L(p, "title"))}</h2>
      <p class="sheet-desc">${escapeHtml(L(p, "desc"))}</p>
      ${p.links ? `<div class="sublinks">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noreferrer">${escapeHtml(EN && l.en ? l.en : l.label)}</a>`).join("")}</div>` : ""}
      <div class="sheet-foot">
        <div class="plats">${p.platforms.map((k) => `<span class="plat">${PLATFORMS[k]}</span>`).join("")}</div>
        <div class="actions">${actions}</div>
      </div>
    </div>`;
  sheet.showModal();
  sheet.querySelector(".actions a").focus();
}
$("#tiles").addEventListener("click", (e) => {
  const tile = e.target.closest("button.tile");
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

/* ── Routage par ancre : #/plongee, #/jeu/nfsmw, #/console/switch… ── */
let fromCat = "";
function route(){
  const id = location.hash.replace(/^#\/?/, "");
  const m = id.match(/^(jeu|console)\/(.+)$/);
  const type = m && (m[1] === "jeu" ? "game" : "console");
  if (m && groupOf(type, m[2])) {
    // On retient la catégorie d'où l'on vient, pour le bouton retour et le menu
    state.group = { type, id: m[2] };
    state.view = fromCat && groupProjects(type, m[2]).some((p) => inCat(p, fromCat)) ? fromCat : "";
  } else {
    state.group = null;
    state.view = CATEGORIES.some((c) => c.id === id) ? id : "";
    fromCat = state.view;
  }
  if (state.query) { state.query = ""; $("#search").value = $("#searchMobile").value = ""; }
  if (sheet.open) sheet.close();
  if (cats.open) cats.close();
  render();
}
addEventListener("hashchange", route);
route();
