
function navigateToProject(projectId){
  window.location.href = `projects/project.html?id=${encodeURIComponent(projectId)}`;
}

// Uses window.PROJECTS from assets/projects-data.js
const PROJECTS = window.PROJECTS || [];

const grid = document.getElementById("projectGrid");
const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");

yearEl.textContent = new Date().getFullYear();

// Theme (dark/light)

function updateThemeLabel(){
  const label = document.getElementById("themeLabel");
  if (!label) return;
  const current = document.documentElement.getAttribute("data-theme");
  // When current is 'light' we offer switching back to Dark
  label.textContent = current === "light" ? "Dark" : "Light";
}

(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  updateThemeLabel();

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
    updateThemeLabel();
  });
})();

function projectCard(p){
  const el = document.createElement("article");
  el.className = "card project-card";
  el.setAttribute("data-category", p.category);

  const thumbSrc =
    (p.afterImages && p.afterImages[0] && p.afterImages[0].src.replace("../","")) ||
    (p.finalImages && p.finalImages[0] && p.finalImages[0].src.replace("../","")) ||
    "assets/img/hero.jpg";

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
      <a class="btn btn-secondary" href="projects/project.html?id=${encodeURIComponent(p.id)}">Open project page</a>
    </div>
  `;

  el.addEventListener("click", (e) => {
    // Don't hijack clicks on interactive elements
    if (e.target && (e.target.closest("a") || e.target.closest("button"))) return;
    navigateToProject(p.id);
  });

  return el;
}

function renderProjects(filter = "all"){
  grid.innerHTML = "";
  const items = PROJECTS.filter(p => filter === "all" ? true : p.category === filter);
  items.forEach(p => grid.appendChild(projectCard(p)));

  if (items.length === 0){
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<p class="muted">No projects in this category yet.</p>`;
    grid.appendChild(empty);
  }
}

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderProjects(chip.getAttribute("data-filter"));
  });
});

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

renderProjects("all");
