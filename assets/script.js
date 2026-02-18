// ========================================
// EDIT YOUR PROJECTS HERE (data-driven site)
// ========================================
const PROJECTS = [
  {
    id: "p1",
    title: "Courtyard House",
    category: "residential",
    year: "2025",
    role: "Concept + Modeling + Rendering",
    tools: "Revit, Lumion, Photoshop",
    short: "A compact courtyard home designed to maximize daylight and privacy using layered thresholds.",
    description:
      "This project explores a courtyard strategy for natural light, ventilation, and privacy. The massing is shaped by sun angles and sightlines, with a simple circulation loop that frames key views. Material choices prioritize calm, durable finishes and a warm interior atmosphere.",
    images: [
      { src: "assets/img/p1-1.jpg", caption: "Exterior perspective" },
      { src: "assets/img/p1-2.jpg", caption: "Ground floor plan + courtyard logic" }
    ],
    // Add ONE of these (optional):
    // 1) YouTube/Vimeo embed URL (recommended): e.g. https://www.youtube.com/embed/VIDEO_ID
    videoEmbed: "",
    // 2) Local MP4 file (only if small): e.g. assets/videos/p1-walkthrough.mp4
    videoFile: ""
  },
  {
    id: "p2",
    title: "Retail Pavilion",
    category: "commercial",
    year: "2024",
    role: "Design Development + Visualization",
    tools: "Rhino, V-Ray, Illustrator",
    short: "A modular retail pavilion with a lightweight structure and flexible interior layout.",
    description:
      "Designed as a modular system that adapts to different sites, this pavilion uses repeating structural bays and a clear facade rhythm. The interior planning supports reconfiguration for changing retail needs, while keeping circulation intuitive.",
    images: [
      { src: "assets/img/p2-1.jpg", caption: "Facade rhythm and entry" },
      { src: "assets/img/p2-2.jpg", caption: "Interior flexibility diagram" }
    ],
    videoEmbed: "",
    videoFile: ""
  },
  {
    id: "p3",
    title: "Minimal Interior Renovation",
    category: "interior",
    year: "2023",
    role: "Concept + Drawings",
    tools: "AutoCAD, SketchUp, Enscape",
    short: "A minimal renovation focusing on storage, lighting, and better spatial flow.",
    description:
      "The design reorganizes key functions to remove bottlenecks and improve flow. A consistent material palette and integrated storage create calm, while layered lighting enhances usability at different times of day.",
    images: [
      { src: "assets/img/p3-1.jpg", caption: "Living area render" },
      { src: "assets/img/p3-2.jpg", caption: "Lighting + storage strategy" }
    ],
    videoEmbed: "",
    videoFile: ""
  },
  {
    id: "p4",
    title: "Museum Concept",
    category: "concept",
    year: "2025",
    role: "Concept + Diagrams",
    tools: "Rhino, Illustrator",
    short: "A museum concept shaped by a promenade sequence and controlled natural light.",
    description:
      "This concept is driven by a promenade route that stages exhibits as a sequence of compressions and releases. Skylight strategies deliver diffuse light while protecting sensitive exhibits, supported by a simple structural logic.",
    images: [
      { src: "assets/img/p4-1.jpg", caption: "Promenade + section concept" },
      { src: "assets/img/p4-2.jpg", caption: "Massing and daylight study" }
    ],
    videoEmbed: "",
    videoFile: ""
  }
];

// =============================
// DOM helpers
// =============================
const grid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const videoWrap = document.getElementById("videoWrap");
const prevImgBtn = document.getElementById("prevImg");
const nextImgBtn = document.getElementById("nextImg");
const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");

yearEl.textContent = new Date().getFullYear();

// =============================
// Theme (dark/light)
// =============================
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
  });
})();

// =============================
// Rendering
// =============================
function projectCard(p){
  const el = document.createElement("article");
  el.className = "card project-card";
  el.setAttribute("data-category", p.category);

  const thumbSrc = p.images?.[0]?.src || "assets/img/hero.jpg";

  el.innerHTML = `
    <div class="thumb">
      <img src="${thumbSrc}" alt="${escapeHtml(p.title)} thumbnail" loading="lazy" />
    </div>
    <div class="project-title">
      <h3>${escapeHtml(p.title)}</h3>
      <span class="badge">${escapeHtml(p.year)}</span>
    </div>
    <p class="project-desc">${escapeHtml(p.short)}</p>
    <div class="project-meta">
      <span>${escapeHtml(labelCategory(p.category))}</span>
      <span>•</span>
      <span>${escapeHtml(p.tools)}</span>
    </div>
    <div class="project-actions">
      <button class="btn btn-secondary" type="button" data-open="${p.id}">View details</button>
    </div>
  `;
  return el;
}

function renderProjects(filter = "all"){
  grid.innerHTML = "";
  const items = PROJECTS.filter(p => filter === "all" ? true : p.category === filter);
  items.forEach(p => grid.appendChild(projectCard(p)));

  // open handlers
  grid.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-open")));
  });

  if (items.length === 0){
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<p class="muted">No projects in this category yet.</p>`;
    grid.appendChild(empty);
  }
}

// =============================
// Modal logic + gallery
// =============================
let currentProject = null;
let currentIndex = 0;

function openModal(projectId){
  currentProject = PROJECTS.find(p => p.id === projectId);
  if (!currentProject) return;

  modalTitle.textContent = currentProject.title;
  modalMeta.textContent = `${currentProject.year} • ${currentProject.role} • ${currentProject.tools}`;
  modalDesc.textContent = currentProject.description;

  currentIndex = 0;
  updateGallery();

  renderVideo();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // stop video on close
  videoWrap.innerHTML = "";
  currentProject = null;
  currentIndex = 0;
}

function updateGallery(){
  const imgs = currentProject.images || [];
  if (imgs.length === 0){
    modalImg.src = "assets/img/hero.jpg";
    modalCaption.textContent = "";
    return;
  }
  const item = imgs[currentIndex];
  modalImg.src = item.src;
  modalImg.alt = `${currentProject.title} image ${currentIndex + 1}`;
  modalCaption.textContent = item.caption || "";
}

function renderVideo(){
  videoWrap.innerHTML = "";

  const hasEmbed = !!currentProject.videoEmbed;
  const hasFile = !!currentProject.videoFile;

  if (!hasEmbed && !hasFile){
    return;
  }

  const title = document.createElement("p");
  title.className = "muted";
  title.style.margin = "0 0 10px";
  title.textContent = "Walkthrough Video";
  videoWrap.appendChild(title);

  const frame = document.createElement("div");
  frame.className = "video";

  if (hasEmbed){
    frame.innerHTML = `
      <iframe
        src="${currentProject.videoEmbed}"
        title="${escapeHtml(currentProject.title)} video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    `;
  } else {
    frame.innerHTML = `
      <video controls preload="metadata">
        <source src="${currentProject.videoFile}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  }

  videoWrap.appendChild(frame);
}

// gallery buttons
prevImgBtn.addEventListener("click", () => {
  if (!currentProject?.images?.length) return;
  currentIndex = (currentIndex - 1 + currentProject.images.length) % currentProject.images.length;
  updateGallery();
});

nextImgBtn.addEventListener("click", () => {
  if (!currentProject?.images?.length) return;
  currentIndex = (currentIndex + 1) % currentProject.images.length;
  updateGallery();
});

// close on backdrop/close button
modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.getAttribute && target.getAttribute("data-close") === "true") closeModal();
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// =============================
// Filters
// =============================
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderProjects(chip.getAttribute("data-filter"));
  });
});

// =============================
// Utils
// =============================
function labelCategory(cat){
  const map = {
    residential: "Residential",
    commercial: "Commercial",
    interior: "Interior",
    concept: "Concept"
  };
  return map[cat] || "Project";
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// initial render
renderProjects("all");
