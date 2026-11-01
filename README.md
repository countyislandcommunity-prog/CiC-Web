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
- Contact info, meeting details and dues are in `src/site.ts`.
- Island names and descriptions are in `src/pages/islands.astro`.
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

## Forms

Join, Contact and Newsletter submissions go to the CIC Google Sheet (one tab per form) and are emailed to countyislandcommunity@gmail.com. The script is in `apps-script/Code.gs`, and its web app URL is `formHandler` in `src/site.ts`. Setup and update steps: [docs/forms-setup.md](docs/forms-setup.md). When changing the script, edit the existing deployment (pencil icon, New version) so the URL stays the same.

## Deploy

Hosted on Vercel (project `cic-web`) at www.countyislandcommunity.com; the bare domain redirects to www. Every push to `main` deploys to production and is public. Other branches get preview URLs that need a Vercel sign-in. DNS is at Namecheap: `A @ 216.198.79.1` and a `www` CNAME to Vercel.
