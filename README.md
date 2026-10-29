# Abdelrahman Mansy — Portfolio

بورتفوليو شخصي ثنائي اللغة (عربي/إنجليزي) بتصميم ورقي إيديتوريالي.
A bilingual (Arabic/English) personal portfolio with an editorial paper design.

**Live:** https://abdelrahmanmansy.github.io/mansy-portfolio/

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Lucide icons

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Content

كل البيانات في ملفات مستقلة — عدّل من هنا:

- `src/config/site.js` — الاسم، التواصل، السوشيال، التقنيات
- `src/data/experience.js` — الـTimeline
- `src/data/projects.js` — المشاريع
- `src/data/skills.js` — المهارات
- `src/data/services.js` — الخدمات

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`.

The workflow builds with `VITE_BASE=/mansy-portfolio/` because project pages
are served from a sub-path. If you later attach a custom domain, remove that
env (or set it to `/`) and update the canonical/OG URLs in `index.html`,
`public/robots.txt`, `public/sitemap.xml`, and `src/config/site.js`.
