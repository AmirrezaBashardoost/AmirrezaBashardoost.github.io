// Project page renderer
const PROJECTS = window.PROJECTS || [];

const themeToggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Theme (shared)
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

function qs(name){
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}

const id = qs("id") || (PROJECTS[0] ? PROJECTS[0].id : "");
const idx = PROJECTS.findIndex(p => p.id === id);
const p = idx >= 0 ? PROJECTS[idx] : PROJECTS[0];

const pTitle = document.getElementById("pTitle");
const pMeta  = document.getElementById("pMeta");
const pDesc  = document.getElementById("pDesc");
const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");

const beforeImg = document.getElementById("beforeImg");
const beforeCap = document.getElementById("beforeCap");
const afterImg  = document.getElementById("afterImg");
const afterCap  = document.getElementById("afterCap");
const finalImg  = document.getElementById("finalImg");
const finalCap  = document.getElementById("finalCap");
const videoWrap = document.getElementById("videoWrap");

const prevBefore = document.getElementById("prevBefore");
const nextBefore = document.getElementById("nextBefore");
const prevAfter  = document.getElementById("prevAfter");
const nextAfter  = document.getElementById("nextAfter");
const prevFinal  = document.getElementById("prevFinal");
const nextFinal  = document.getElementById("nextFinal");

if (!p){
  pTitle.textContent = "Project not found";
  pMeta.textContent = "";
  pDesc.textContent = "Please return to the projects page.";
  prevProject.style.display = "none";
  nextProject.style.display = "none";
} else {
  document.title = `${p.title} — Project`;
  pTitle.textContent = p.title;
  pMeta.textContent = `${p.year} • ${p.role} • ${p.tools}`;
  pDesc.textContent = p.description;

  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  prevProject.href = `project.html?id=${encodeURIComponent(prev.id)}`;
  nextProject.href = `project.html?id=${encodeURIComponent(next.id)}`;
}

let bi = 0, ai = 0, fi = 0;

function safeArr(x){ return Array.isArray(x) ? x : []; }
const beforeArr = safeArr(p?.beforeImages);
const afterArr  = safeArr(p?.afterImages);
const finalArr  = safeArr(p?.finalImages);


const coverImg = document.getElementById("coverImg");
const coverCap = document.getElementById("coverCap");

function setCover(){
  if (!coverImg) return;
  const src =
    (finalArr[0] && finalArr[0].src) ||
    (afterArr[0] && afterArr[0].src) ||
    (beforeArr[0] && beforeArr[0].src) ||
    "../assets/img/hero.jpg";
  coverImg.src = src;
  coverImg.alt = p ? `${p.title} cover image` : "Project cover image";
  if (coverCap){
    const cap =
      (finalArr[0] && finalArr[0].caption) ||
      (afterArr[0] && afterArr[0].caption) ||
      (beforeArr[0] && beforeArr[0].caption) || "";
    coverCap.textContent = cap;
  }
}


function setImg(el, capEl, arr, i, alt){
  if (!arr.length){
    el.src = "../assets/img/hero.jpg";
    el.alt = alt;
    capEl.textContent = "";
    return;
  }
  const item = arr[i];
  el.src = item.src;
  el.alt = alt;
  capEl.textContent = item.caption || "";
}

function renderVideo(){
  videoWrap.innerHTML = "";
  if (!p) return;
  const hasEmbed = !!p.videoEmbed;
  const hasFile  = !!p.videoFile;
  if (!hasEmbed && !hasFile) return;

  const title = document.createElement("p");
  title.className = "muted";
  title.style.margin = "0 0 10px";
  title.textContent = "Final Walkthrough Video";
  videoWrap.appendChild(title);

  const frame = document.createElement("div");
  frame.className = "video";

  if (hasEmbed){
    frame.innerHTML = `
      <iframe
        src="${p.videoEmbed}"
        title="${escapeHtml(p.title)} video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    `;
  } else {
    frame.innerHTML = `
      <video controls preload="metadata">
        <source src="${p.videoFile}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  }
  videoWrap.appendChild(frame);
}

function renderAll(){
  setCover();
  setImg(beforeImg, beforeCap, beforeArr, bi, "Before image");
  setImg(afterImg, afterCap, afterArr, ai, "After image");
  setImg(finalImg, finalCap, finalArr, fi, "Final image");
  renderVideo();
}

prevBefore.addEventListener("click", () => {
  if (!beforeArr.length) return;
  bi = (bi - 1 + beforeArr.length) % beforeArr.length;
  setImg(beforeImg, beforeCap, beforeArr, bi, "Before image");
});
nextBefore.addEventListener("click", () => {
  if (!beforeArr.length) return;
  bi = (bi + 1) % beforeArr.length;
  setImg(beforeImg, beforeCap, beforeArr, bi, "Before image");
});
prevAfter.addEventListener("click", () => {
  if (!afterArr.length) return;
  ai = (ai - 1 + afterArr.length) % afterArr.length;
  setImg(afterImg, afterCap, afterArr, ai, "After image");
});
nextAfter.addEventListener("click", () => {
  if (!afterArr.length) return;
  ai = (ai + 1) % afterArr.length;
  setImg(afterImg, afterCap, afterArr, ai, "After image");
});
prevFinal.addEventListener("click", () => {
  if (!finalArr.length) return;
  fi = (fi - 1 + finalArr.length) % finalArr.length;
  setImg(finalImg, finalCap, finalArr, fi, "Final image");
});
nextFinal.addEventListener("click", () => {
  if (!finalArr.length) return;
  fi = (fi + 1) % finalArr.length;
  setImg(finalImg, finalCap, finalArr, fi, "Final image");
});

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderAll();
