# Piyush Raj — Portfolio

**Live:** [piyushraj.me](https://www.piyushraj.me)

Personal site for recruiters and hiring managers. Dark theme, single-page layout, content-driven sections.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · MongoDB · Zod · Nodemailer

Live sections: Hero, About, Skills, Experience, Projects, Education, Achievements, Contact.

---

## Features

- Content lives in TypeScript modules under `src/content/` — no CMS required
- Contact form with shared Zod validation (client + server), rate limiting, MongoDB persistence, and HTML-escaped email notifications
- SEO: metadata, sitemap, robots, Open Graph, and JSON-LD (`WebSite`, `ProfilePage`, `Person`, projects)
- Agent-readable surfaces: [`/llms.txt`](./public/llms.txt), [`/profile.json`](./public/profile.json)
- Accessibility: skip link, labeled sections, live form status, `prefers-reduced-motion`
- Security headers in `next.config.ts`; contact emails are HTML-escaped

---

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm start        # serve production build
npm run lint
npm test
```

Contact submissions need MongoDB and SMTP. The rest of the site works without them.

---

## Environment

Copy `.env.example` and fill in values:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | For deploy | Canonical URL for sitemap, OG, JSON-LD |
| `MONGODB_URI` | For contact form | Message storage |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | For contact form | Outbound mail |
| `CONTACT_EMAIL_TO` | For contact form | Where inquiries are sent |
| `NEXT_PUBLIC_*_LENGTH` | Optional | Name/message min/max |
| `RATE_LIMIT_WINDOW_MS` / `MAX_REQUESTS_PER_WINDOW` | Optional | Defaults: 3 requests / hour |

Production default is `https://www.piyushraj.me`. Override with `NEXT_PUBLIC_SITE_URL` if you run a preview or staging host.

---

## Edit content

All copy and listings are in `src/content/`:

| File | What it drives |
|---|---|
| `profile.ts` | Name, role, bio, philosophy, stats |
| `experience.ts` | Roles, dates, achievements, tech |
| `projects.ts` | Featured work, links, images |
| `education.ts` | Degrees and coursework |
| `skills.ts` | Skill groups |
| `certifications.ts` | Achievements |
| `social.ts` | GitHub, LinkedIn, email |
| `navigation.ts` | Header links |
| `seo.ts` | Keywords / description |

Site URL, email, and resume path: `src/config/site.ts`.  
Resume PDF: `public/resume/`.  
OG image: `public/og-images/og-image.webp`.  
Favicons: `public/favicon/`.

---

## Project layout

```text
src/
├── app/                 # App Router pages, layout, sitemap, robots
│   └── api/contact/     # Contact API
├── components/
│   ├── layout/          # Header, footer, section, container
│   ├── sections/        # Page sections
│   ├── shared/          # Cards, headings, scroll reveal
│   ├── seo/             # JSON-LD, deferred manifest
│   └── ui/              # Splash, custom cursor
├── content/             # Typed site content
├── config/              # siteConfig
├── lib/                 # DB, email, validation, rate limit, icons
├── models/              # Mongoose schemas
└── types/               # Domain types

public/
├── favicon/
├── images/
├── og-images/
├── resume/
├── llms.txt
└── profile.json
```

---

## Notes

- In-memory rate limiting resets on each serverless instance — fine for a personal site, not a shared cluster lock.
- Prefer `npm run build && npm start` for Lighthouse; `next dev` inflates performance findings.
- Keep `llms.txt` and `profile.json` in sync when you change role, contact, or section IDs.

---

## License

Private personal project. Content and images belong to Piyush Raj.
