const state = { active: "all", query: "" };
const $ = (selector) => document.querySelector(selector);
const categoryGrid = $("#categoryGrid");
const projectsGrid = $("#projectsGrid");
const searchInput = $("#searchInput");
const selectionTitle = $("#selectionTitle");
const selectionSubtitle = $("#selectionSubtitle");
const emptyState = $("#emptyState");

function escapeHtml(value){
  return String(value).replace(/[&<>"]/g,(char)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
}

function artSvg(project){
  const a = project.accent || "#0891b2";
  const key = project.art || project.category;
  const commonBg = `<rect width="400" height="150" rx="0" fill="white"/><circle cx="340" cy="20" r="90" fill="${a}" opacity="0.08"/><circle cx="40" cy="130" r="80" fill="${a}" opacity="0.06"/>`;
  const map = {
    smile: `${commonBg}<rect x="30" y="32" width="62" height="82" rx="10" fill="${a}" opacity="0.12" stroke="${a}"/><text x="61" y="83" text-anchor="middle" font-size="32">😊</text><rect x="125" y="40" width="190" height="12" rx="6" fill="${a}" opacity="0.18"/><rect x="125" y="66" width="150" height="12" rx="6" fill="${a}" opacity="0.12"/><text x="230" y="112" text-anchor="middle" font-size="24">😊 😊 😊</text>`,
    timebomb: `${commonBg}<circle cx="200" cy="82" r="48" fill="${a}" opacity="0.13" stroke="${a}" stroke-width="3"/><path d="M200 34 Q220 18 214 8" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round"/><circle cx="215" cy="8" r="7" fill="#f59e0b"/><text x="200" y="92" text-anchor="middle" font-family="monospace" font-size="28" font-weight="700" fill="${a}">0:47</text><text x="70" y="92" font-size="28">✂️</text><text x="315" y="92" font-size="28">💣</text>`,
    insider: `${commonBg}<rect x="92" y="28" width="216" height="96" rx="18" fill="${a}" opacity="0.12" stroke="${a}" stroke-width="2"/><text x="200" y="68" text-anchor="middle" font-size="28">🧠</text><rect x="130" y="86" width="140" height="16" rx="8" fill="${a}" opacity="0.25"/><text x="200" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="${a}">ROLE REVEAL · 10s</text><text x="72" y="72" font-size="22">🙈</text><text x="320" y="72" font-size="22">⏱️</text>`,
    maker: `${commonBg}<rect x="22" y="24" width="356" height="102" rx="12" fill="#f8fafc" stroke="${a}" opacity="0.95"/><rect x="40" y="48" width="95" height="54" rx="8" fill="${a}" opacity="0.12"/><rect x="155" y="48" width="205" height="54" rx="8" fill="#8b5cf6" opacity="0.10"/><text x="87" y="81" text-anchor="middle" font-size="24">⋮⋮</text><text x="258" y="82" text-anchor="middle" font-size="22">🎧 🎚️ 🎨</text><text x="200" y="119" text-anchor="middle" font-family="monospace" font-size="10" fill="${a}">build all-in-one</text>`,
    wolf: `${commonBg}<rect width="400" height="150" fill="#eef2ff"/><circle cx="334" cy="32" r="18" fill="#fef3c7"/><circle cx="326" cy="28" r="18" fill="#eef2ff"/><text x="70" y="95" text-anchor="middle" font-size="42">🐺</text><rect x="130" y="48" width="180" height="10" rx="5" fill="${a}" opacity="0.35"/><rect x="130" y="75" width="130" height="8" rx="4" fill="${a}" opacity="0.22"/><text x="225" y="112" text-anchor="middle" font-size="19">🌙 🏹 🧙‍♀️</text>`,
    mgs: `${commonBg}<rect width="400" height="150" fill="#eff6ff"/><circle cx="72" cy="76" r="42" fill="none" stroke="${a}" stroke-width="2"/><circle cx="72" cy="76" r="24" fill="none" stroke="${a}" opacity="0.5"/><line x1="72" y1="76" x2="72" y2="34" stroke="${a}" stroke-width="3"/><text x="210" y="58" font-family="monospace" font-size="14" font-weight="700" fill="${a}">TACTICAL OPS</text><rect x="190" y="75" width="120" height="20" rx="4" fill="#ef4444" opacity="0.13" stroke="#ef4444"/><text x="250" y="90" text-anchor="middle" font-family="monospace" font-size="12" fill="#ef4444">ALERT</text><text x="330" y="93" font-size="26">🐍</text>`,
    wemeet: `${commonBg}<circle cx="155" cy="72" r="36" fill="${a}" opacity="0.15"/><circle cx="245" cy="72" r="36" fill="#8b5cf6" opacity="0.15"/><path d="M178 72 C190 45 210 45 222 72 C210 100 190 100 178 72Z" fill="#22c55e" opacity="0.20"/><text x="155" y="80" text-anchor="middle" font-size="25">🎧</text><text x="245" y="80" text-anchor="middle" font-size="25">🎶</text><text x="200" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="${a}">music match</text>`,
    tempo: `${commonBg}<g fill="${a}"><rect x="60" y="70" width="12" height="28" rx="6" opacity="0.35"/><rect x="82" y="56" width="12" height="56" rx="6" opacity="0.45"/><rect x="104" y="42" width="12" height="84" rx="6" opacity="0.55"/><rect x="210" y="34" width="9" height="92" rx="5"/><rect x="226" y="50" width="9" height="60" rx="5"/><rect x="242" y="24" width="9" height="112" rx="5"/></g><text x="316" y="84" text-anchor="middle" font-family="monospace" font-size="26" font-weight="700" fill="${a}">2x</text><path d="M140 78 H182" stroke="${a}" stroke-width="4"/><path d="M174 66 L188 78 L174 90" fill="none" stroke="${a}" stroke-width="4"/>`,
    score: `${commonBg}<g stroke="${a}" opacity="0.35"><line x1="35" y1="52" x2="360" y2="52"/><line x1="35" y1="68" x2="360" y2="68"/><line x1="35" y1="84" x2="360" y2="84"/><line x1="35" y1="100" x2="360" y2="100"/></g><text x="68" y="99" font-size="48" fill="${a}" opacity="0.55">𝄞</text><text x="175" y="92" font-size="34">♪</text><circle cx="318" cy="76" r="28" fill="${a}" opacity="0.14" stroke="${a}"/><polygon points="310,62 310,90 334,76" fill="${a}"/>`,
    mn90: `${commonBg}<text x="70" y="86" text-anchor="middle" font-size="36">🤿</text><rect x="135" y="38" width="185" height="76" rx="12" fill="${a}" opacity="0.10" stroke="${a}"/><text x="228" y="65" text-anchor="middle" font-family="monospace" font-size="13" fill="${a}">MN90 MOBILE</text><text x="228" y="92" text-anchor="middle" font-size="18">📱 🌊 📊</text>`,
    tables: `${commonBg}<rect x="42" y="24" width="32" height="106" rx="16" fill="${a}" opacity="0.13" stroke="${a}"/><rect x="45" y="76" width="26" height="50" rx="13" fill="${a}" opacity="0.35"/><rect x="130" y="42" width="210" height="74" rx="12" fill="${a}" opacity="0.10" stroke="${a}"/><text x="235" y="70" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="${a}">40m / 25min</text><text x="235" y="96" text-anchor="middle" font-size="17">palier 3m</text>`,
    assist3d: `${commonBg}<path d="M198 128 C190 105 208 88 198 66 C190 48 198 28 190 14" fill="none" stroke="${a}" stroke-width="3" stroke-dasharray="6 5"/><line x1="140" y1="34" x2="260" y2="34" stroke="#ca8a04" stroke-width="3" stroke-dasharray="5 4"/><text x="268" y="38" font-family="monospace" font-size="12" fill="#ca8a04">3m</text><text x="150" y="118" font-size="28">🤿</text><text x="225" y="100" font-size="24" opacity="0.65">🤿</text><rect x="32" y="28" width="75" height="46" rx="10" fill="${a}" opacity="0.12" stroke="${a}"/><text x="70" y="57" text-anchor="middle" font-family="monospace" font-size="16" fill="${a}">28m</text>`,
    profile: `${commonBg}<line x1="45" y1="26" x2="45" y2="122" stroke="${a}"/><line x1="45" y1="122" x2="360" y2="122" stroke="${a}"/><polyline points="45,40 90,40 125,78 170,78 200,100 235,62 285,62 315,38 340,110" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round"/><polyline points="45,112 110,108 170,100 230,86 285,74 340,105" fill="none" stroke="#f97316" stroke-width="2" stroke-dasharray="5 4"/><text x="270" y="42" font-family="monospace" font-size="12" fill="${a}">GF 30/85</text>`,
    dtr: `${commonBg}<circle cx="198" cy="74" r="46" fill="${a}" opacity="0.12" stroke="${a}" stroke-width="3"/><path d="M198 74 L198 38" stroke="${a}" stroke-width="4" stroke-linecap="round"/><path d="M198 74 L232 92" stroke="#f97316" stroke-width="4" stroke-linecap="round"/><text x="198" y="122" text-anchor="middle" font-family="monospace" font-size="18" font-weight="700" fill="${a}">DTR</text><text x="84" y="82" font-size="26">⏱️</text><text x="305" y="82" font-size="26">🤿</text>`,
    nitrox: `${commonBg}<circle cx="190" cy="76" r="48" fill="${a}" opacity="0.10" stroke="${a}"/><path d="M190 28 A48 48 0 0 1 238 76" fill="none" stroke="#22c55e" stroke-width="10" stroke-linecap="round"/><text x="190" y="78" text-anchor="middle" font-family="monospace" font-size="24" font-weight="700" fill="${a}">32%</text><text x="190" y="98" text-anchor="middle" font-family="monospace" font-size="10" fill="${a}">O₂</text><rect x="285" y="45" width="70" height="44" rx="10" fill="#22c55e" opacity="0.10" stroke="#22c55e"/><text x="320" y="72" text-anchor="middle" font-family="monospace" font-size="16" fill="#059669">MOD</text>`,
    dive: `${commonBg}<text x="80" y="78" font-size="28">🐟</text><text x="305" y="95" font-size="30">🐠</text><rect x="135" y="38" width="130" height="78" rx="14" fill="${a}" opacity="0.12" stroke="${a}"/><text x="200" y="64" text-anchor="middle" font-family="monospace" font-size="11" fill="${a}">OXYGEN</text><rect x="158" y="76" width="84" height="10" rx="5" fill="white" stroke="${a}"/><rect x="158" y="76" width="58" height="10" rx="5" fill="#22c55e"/><text x="200" y="109" text-anchor="middle" font-size="20">🤿</text>`,
    security: `${commonBg}<rect x="34" y="26" width="332" height="96" rx="14" fill="#f8fafc" stroke="${a}"/><text x="60" y="60" font-family="monospace" font-size="13" fill="${a}">$ checking passwords...</text><text x="60" y="86" font-family="monospace" font-size="13" fill="#059669">✓ 243 OK</text><text x="60" y="108" font-family="monospace" font-size="13" fill="#ef4444">⚠ 4 breaches</text><text x="315" y="88" text-anchor="middle" font-size="30">🛡️</text>`,
    quiz: `${commonBg}<circle cx="200" cy="74" r="46" fill="#fef3c7" stroke="${a}" opacity="0.9"/><text x="200" y="90" text-anchor="middle" font-size="48">🔍</text><rect x="40" y="98" width="78" height="30" rx="10" fill="${a}" opacity="0.12" stroke="${a}"/><text x="79" y="118" text-anchor="middle" font-family="monospace" font-size="12" fill="${a}">2450</text><rect x="282" y="98" width="78" height="30" rx="10" fill="${a}" opacity="0.12" stroke="${a}"/><text x="321" y="118" text-anchor="middle" font-family="monospace" font-size="12" fill="${a}">#3</text>`,
    hse: `${commonBg}<g transform="translate(42,30)"><rect width="245" height="24" rx="8" fill="${a}" opacity="0.10" stroke="${a}"/><text x="34" y="17" font-size="12" fill="#334155">Inspection HSE</text><text x="14" y="17" fill="#059669">✓</text></g><g transform="translate(42,68)"><rect width="245" height="24" rx="8" fill="${a}" opacity="0.10" stroke="${a}"/><text x="34" y="17" font-size="12" fill="#334155">Action corrective</text><text x="14" y="17" fill="${a}">!</text></g><text x="326" y="92" text-anchor="middle" font-size="34">🦺</text>`
  };
  return `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration ${escapeHtml(project.title)}">${map[key] || commonBg + `<text x="200" y="86" text-anchor="middle" font-size="38">${escapeHtml(project.category)}</text>`}</svg>`;
}

function getFilteredProjects(){
  const q=state.query.trim().toLowerCase();
  return PROJECTS.filter((project)=>{
    const inCategory=state.active==="all"||project.category===state.active;
    const haystack=[project.title,project.type,project.desc,...(project.tags||[])].join(" ").toLowerCase();
    return inCategory&&(!q||haystack.includes(q));
  });
}

function renderCategories(){
  const allActive=state.active==="all";
  const allButton=`<button class="category-card ${allActive?"active":""}" data-category="all" type="button"><div class="cat-icon" style="background:#f1f5f9">▦</div><div class="cat-title">Tous</div><div class="cat-count">${PROJECTS.length} projets</div></button>`;
  const buttons=CATEGORIES.map((cat)=>{
    const count=PROJECTS.filter((p)=>p.category===cat.id).length;
    return `<button class="category-card ${state.active===cat.id?"active":""}" data-category="${cat.id}" type="button"><div class="cat-icon" style="background:${cat.soft};color:${cat.color}">${cat.icon}</div><div class="cat-title">${escapeHtml(cat.label)}</div><div class="cat-count">${count} projet${count>1?"s":""}</div></button>`;
  }).join("");
  categoryGrid.innerHTML=allButton+buttons;
  categoryGrid.querySelectorAll(".category-card").forEach((button)=>button.addEventListener("click",()=>{state.active=button.dataset.category;render();}));
}

function renderSelection(count){
  const cat=CATEGORIES.find((c)=>c.id===state.active);
  selectionTitle.innerHTML=`${state.active==="all"?"Tous les projets":escapeHtml(cat.label)} <span>${count} résultat${count>1?"s":""}</span>`;
  selectionTitle.querySelector("span").style.cssText="margin-left:12px;font-size:15px;font-weight:400;color:#64748b;letter-spacing:0";
  selectionSubtitle.textContent=state.active==="all"?"Tous les side projects et créations personnelles.":cat.subtitle;
}

function renderProjects(){
  const filtered=getFilteredProjects();
  projectsGrid.innerHTML=filtered.map((project)=>`<a class="project-card" href="${project.url}" target="_blank" rel="noreferrer" style="--accent:${project.accent}">
    <div class="project-art">${artSvg(project)}</div>
    <div class="project-content">
      <div class="project-top"><div><div class="badges"><span class="type-badge">${escapeHtml(project.type)}</span>${project.new?'<span class="new-badge">New</span>':''}</div><h3>${escapeHtml(project.title)}</h3></div><div class="project-icon" title="${project.github?"GitHub":"Ouvrir"}">${project.github?"⌘":"↗"}</div></div>
      <p>${escapeHtml(project.desc)}</p>
      <div class="tags">${(project.tags||[]).map((tag)=>`<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>
    </div>
  </a>`).join("");
  emptyState.style.display=filtered.length?"none":"block";
  renderSelection(filtered.length);
}

function render(){renderCategories();renderProjects();}
searchInput.addEventListener("input",(event)=>{state.query=event.target.value;renderProjects();});
render();
