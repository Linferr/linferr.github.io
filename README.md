# Linfeng Gao Personal Website

React + Tailwind multi-page website deployed on GitHub Pages.

## Stack
- React 18
- Vite (multi-page build)
- Tailwind CSS

## Pages
- `/` -> Home
- `/courses.html` -> Coursework

## Project structure
```text
src/
  pages/
    HomePage.jsx
    CoursesPage.jsx
  components/
  data/
  main-home.jsx
  main-courses.jsx
```

## Local development
```bash
npm install
npm run dev
```

Then open:
- `http://localhost:5173/`
- `http://localhost:5173/courses.html`

## Production build preview
```bash
npm run build
npm run preview
```

## Deployment
GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `dist` to GitHub Pages when pushing to `main`.

### First-time GitHub Pages setup
1. Push this branch to GitHub (`main`).
2. Open repository settings -> `Pages`.
3. In `Build and deployment`, set `Source` to `GitHub Actions`.
4. Open repository settings -> `Actions` -> `General`, confirm workflow permissions allow read repository contents (default is fine for this workflow).
5. Push again (or manually run workflow) and wait for `Deploy GitHub Pages` to succeed.
6. Visit `https://linferr.github.io/` and `https://linferr.github.io/courses.html`.

### Daily deploy flow
1. Update content in `src/data/resumeData.js` or `src/data/coursesData.js`.
2. Commit and push to `main`.
3. GitHub Actions deploys automatically.

## Content source
- CV PDF: `assets/Linfeng-cv.pdf`
- Home data: `src/data/resumeData.js`
- Courses data: `src/data/coursesData.js`
