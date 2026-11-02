# Amit Kumar Singh — Portfolio

Responsive React portfolio with light/dark themes, mobile navigation, résumé download, and email/social links. No backend or environment variables are required.

## Local use

Install Node.js 22.12 or newer, then run:

```sh
npm ci
npm run dev
```

Production check: `npm run build` followed by `npm run preview`.

## Edit content

- src/data/profile.js: identity, biography, contact links, and statistics.
- src/data/content.js: skills, projects, and certifications.
- src/App.jsx: page sections, experience, and education.
- src/components/: navigation and shared section wrapper.
- src/styles/global.css: responsive design and themes.
- public/assets/profile.jpeg and public/resume.pdf: personal assets.

Project links currently point to your GitHub profile because individual repository URLs were not supplied. Contact opens the visitor's email app.

## Vercel

Upload this folder to a GitHub repository and import it into Vercel. Select Vite, build command `npm run build`, output directory `dist`. The included vercel.json supplies these settings. Set the root directory to the folder containing package.json. Deploy.

## Render

Connect the same repository and create a Static Site. Build command: `npm ci && npm run build`. Publish directory: `dist`. Alternatively create a Blueprint using render.yaml. No start command or backend service is needed.

Only publish dist when deploying prebuilt files. Do not upload node_modules. Review personal information and résumé before publishing.
