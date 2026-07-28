# pzhou1729.github.io

Personal website, built with plain HTML/CSS/JS (no build step) and deployed via GitHub Pages.

## Structure

- `index.html` — single-page site with About Me, Research Interests, Publications, CV, and Contact Me sections
- `css/style.css` — styles (light/dark mode via `prefers-color-scheme`)
- `js/main.js` — mobile nav toggle + active-section highlighting
- `assets/img/` — images (graphical abstract)
- `assets/cv/` — downloadable CV PDF

## Publishing to GitHub Pages

```bash
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/pzhou1729/pzhou1729.github.io.git
git push -u origin main
```

Then in the repo's Settings → Pages, set the source to the `main` branch, root directory. Since the repo is named `pzhou1729.github.io`, it will automatically be served at `https://pzhou1729.github.io/` (usually live within a minute or two of the first push).

## Updating content later

- Edit text directly in `index.html`.
- Swap `assets/cv/Phillip_Zhou_CV_July_2026_Abbreviated.pdf` with a new CV (update the filename/link in the CV section if the filename changes).
- Replace `assets/img/LDLR_graphical_abstract.png` to update the graphical abstract.
