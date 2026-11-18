# sahih.codes — Youssef Sahih

Personal portfolio, bilingual French / English, aimed at French apprenticeship (alternance) recruiters.
Live at [sahih.codes](https://sahih.codes) — `/fr` is the default, `/en` is the English version.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion for animation, lucide-react for icons
- Resend for the contact form (optional, see below)
- No i18n library: typed dictionaries + static `/fr` and `/en` routes

## How it is organised

| Path | What it holds |
| --- | --- |
| `app/[lang]/layout.tsx` | Root layout per locale: `<html lang>`, metadata, hreflang alternates, JSON-LD |
| `app/[lang]/page.tsx` | The single page, prerendered for `fr` and `en` |
| `app/[lang]/opengraph-image.tsx` | Generated 1200×630 social preview image, one per locale |
| `app/i18n/dictionaries/en.ts` | English text. Also defines the `Dictionary` type |
| `app/i18n/dictionaries/fr.ts` | French text. Must match the English shape (TypeScript enforces it) |
| `app/data/resume-data.ts` | Locale-neutral data: links, tech stacks, contact details, CV file paths |
| `app/api/contact/route.ts` | Contact form endpoint (Resend) |
| `middleware.ts` | Redirects `/` and unprefixed paths to `/fr` |
| `app/sitemap.ts`, `app/robots.ts` | `sitemap.xml` (with hreflang) and `robots.txt` |

To change any visible text, edit **both** dictionaries.

## Local development

```bash
npm install
cp .env.example .env.local   # optional, only needed for the contact form
npm run dev                  # http://localhost:3000 → redirects to /fr
npm run build && npm run lint
```

### Contact form

The form posts to `app/api/contact/route.ts`, which sends the message through [Resend](https://resend.com).

- `RESEND_API_KEY` set at **build time** → the form is shown.
- Not set → the form is hidden and replaced by email / phone buttons, so visitors never see a form that cannot deliver.

With Resend's shared sender (`onboarding@resend.dev`), mail is only delivered to the address that owns the Resend account. Verify a domain in Resend and set `CONTACT_FROM_EMAIL` to send from your own address.

---

## Manual to-do list (things code cannot do)

### 1. CV files

- [ ] Put the French CV at `public/cv.pdf` and the English one at `public/resume.pdf`.
      Both download buttons in the hero link to these exact paths.
- [ ] Check that both PDFs match the site: Paris 17e, +33 7 52 93 53 14, Im'enSe ended Oct 2026,
      42 Paris since Nov 2026, alternance from January 2027.
- [ ] Commit them (`git add public/cv.pdf public/resume.pdf`). Files that are not committed are not deployed.

### 2. GitHub profile

- [ ] Profile → Edit profile → **Location**: `Paris, France`.
- [ ] Optional bio: `React/TypeScript developer · 42 Paris · Seeking an apprenticeship (alternance) from January 2027`.

### 3. Repository descriptions

Repo page → ⚙️ next to **About** → paste the description, add the website and topics.

**`sentra-challenge`**

> Electron desktop app for meeting intelligence: offline transcription with whisper.cpp and cloud diarization with AssemblyAI side by side, plus a Claude-powered chat grounded in the transcript. React + TypeScript UI, Node.js backend, packaged with Electron Builder and GitHub Actions.

Topics: `electron` `react` `typescript` `nodejs` `whisper-cpp` `assemblyai` `claude-api` `github-actions`

**`CVE-Vulnerability-Analyzer`**

> Python tool that fetches CVE records from the NIST National Vulnerability Database (NVD) API, filters and processes them with pandas, and surfaces vulnerability descriptions for analysis.

Topics: `python` `cve` `nvd` `pandas` `cybersecurity` `vulnerability-analysis`

### 4. Hosting (Vercel)

- [ ] If you want the contact form: add `RESEND_API_KEY` (and optionally `CONTACT_FROM_EMAIL`) under Project → Settings → Environment Variables, then redeploy. The page is static, so the key is read at build time.
- [ ] After deploying, check that `https://sahih.codes/` redirects to `/fr`, and share `/fr` or `/en` links depending on the recipient.

### 5. Elsewhere

- [ ] LinkedIn: location set to Paris, and the Im'enSe role marked as ended in October 2026, so it matches the site.

---

Contact: [youssefsahih9@gmail.com](mailto:youssefsahih9@gmail.com) · [LinkedIn](https://linkedin.com/in/youssef-sahih) · [GitHub](https://github.com/ysahih)
