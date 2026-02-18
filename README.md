# Architecture Portfolio (GitHub Pages)

This is a simple, clean, single-page architecture portfolio website:
- Project grid with categories
- Modal project details (gallery + optional video)
- About section
- Contact section
- CV download button

## Quick start (GitHub Pages)
1) Create a repo named: `YOUR_GITHUB_USERNAME.github.io`
2) Upload **everything** in this folder to the repo root (so `index.html` is at the top level)
3) Repo → Settings → Pages → Deploy from branch → `main` and `/(root)`
4) Open: `https://YOUR_GITHUB_USERNAME.github.io`

## Where to edit content
- `index.html` — your name, about text, email/links
- `assets/script.js` — your projects (titles, descriptions, images, videos)
- `assets/img/` — put your project images (recommended: JPG/WebP)
- `assets/cv/YourName_CV.pdf` — replace with your real CV PDF

## Add video to a project
In `assets/script.js`, set one of:
- `videoEmbed: "https://www.youtube.com/embed/VIDEO_ID"` (recommended)
- OR `videoFile: "assets/videos/myvideo.mp4"` (only if small)

Tip: For large videos, upload to YouTube/Vimeo and use the embed link.
