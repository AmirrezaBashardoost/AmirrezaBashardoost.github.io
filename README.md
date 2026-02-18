# Architecture Portfolio (GitHub Pages) — with Project Pages

This version adds a separate **project page** for each project:
- Before & After galleries
- Final gallery
- Final walkthrough video (embed or local mp4)
- Description + meta

## Deploy
1) Create repo: `YOUR_GITHUB_USERNAME.github.io`
2) Upload all files in this folder to the repo root (so `index.html` is at top level)
3) Repo → Settings → Pages → Deploy from branch → `main` and `/(root)`
4) Open: `https://YOUR_GITHUB_USERNAME.github.io`

## Where to edit content
- `index.html` — your name, about text, email/links, CV filename
- `assets/projects-data.js` — all projects and their images/videos
- `projects/project.html` — the project page template (usually no changes needed)
- `assets/img/` — put your images here
- `assets/cv/YourName_CV.pdf` — replace with your real CV PDF

## Project pages
Each project uses the same template:
`/projects/project.html?id=p1`
Change `p1` to your project id.

## Video
Set one of these in a project:
- `videoEmbed: "https://www.youtube.com/embed/VIDEO_ID"` (recommended)
- OR `videoFile: "../assets/videos/myvideo.mp4"` (only if small)
