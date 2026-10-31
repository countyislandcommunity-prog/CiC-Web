# County Island Community website

Static site for [countyislandcommunity.com](https://countyislandcommunity.com), built with [Astro](https://astro.build). Content comes from `cic_website_content.md`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Before launch

- Bracketed placeholders like `[CONTACT EMAIL]` show up highlighted in yellow on the site. Search the repo for `[` to find them all.
- Contact info, meeting details, dues and the form handler are in `src/site.ts`.
- Island names and descriptions are in `src/pages/islands.astro`.
- **Forms:** set `formHandler` in `src/site.ts` to a form endpoint (for example a Formspree URL). Until then, forms validate and show the thank-you message but send nothing.
- Replace the two sample posts in `src/content/news/`.

## Add a news post

Create a Markdown file in `src/content/news/`, for example `2026-11-15-meeting-recap.md`:

```markdown
---
title: Meeting recap
date: 2026-11-15
author: CIC Volunteers
summary: One or two sentences for the news list.
image: /images/your-photo.jpg   # optional, put the file in public/images/
tags: [Events, Health & Safety]  # Health & Safety, Tax Reform, Water, Annexation, Events, Community
---

Post body...

**What it means for the islands:** ...

**What you can do:** ...
```

## Deploy

Pushing to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`. One-time setup: in the repo, go to Settings → Pages and set Source to **GitHub Actions**. To use the custom domain, add it under Settings → Pages and point the domain's DNS at GitHub Pages.
