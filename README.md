# Edorena Landing Page

A minimal, story-first landing page for Edorena. Built with Next.js 14
(App Router), TypeScript, Tailwind CSS, and Framer Motion (subtle
fade/slide-up only — no flashy animation).

## Before you deploy

1. **Add your demo video**
   Drop your exported video file at `public/story.mp4`.
   (The video element lazy-loads with `preload="none"` and shows a poster
   until played, so it won't slow down the page.)

2. **Update the app link**
   The "Try Edorena" buttons point to:
   `https://app.edorena.com/login`
   Change this constant (`APP_URL`) in `components/Hero.tsx` and
   `components/FinalCTA.tsx` if your app URL changes.

3. **Update contact links**
   In `components/Footer.tsx`, update the email and LinkedIn URL to yours.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables
   are required for the current flow (no email collection — buttons
   redirect straight to the Edorena app, per the current plan).
4. Deploy.

## Structure

- `app/page.tsx` — assembles all sections in order
- `components/Hero.tsx` — the emotional opening question
- `components/StoryVideo.tsx` — your 2-minute video
- `components/Problem.tsx` — three real-language cards
- `components/WhyEdorena.tsx` — one-sentence positioning + the flow
- `components/Product.tsx` — CSS dashboard mock + three value cards
  (swap `DashboardMock` for a real screenshot `<Image>` any time —
  drop the file in `public/` and replace the mock markup)
- `components/BuiltFor.tsx` — four audience cards
- `components/FounderStory.tsx` — the personal note
- `components/FinalCTA.tsx` — final ask, alpha framing
- `components/Footer.tsx` — minimal links

## Design tokens

- Background `#0B0B0B`, cards `#161616`, accent `#5E7CE2`
- Display face: Fraunces (italic, light) — used only for the human,
  story-driven lines (hero question, problem cards, founder note)
- Body/UI face: Inter — used for anything product- or interface-related
- This split is intentional: serif = the human moment, sans = the product
  moment, so the typography itself tracks the page's emotional arc.

## Notes on the "no email collection" decision

Per the current plan, "Try Edorena" and "Try Edorena Alpha" link straight
to the app's own signup (Supabase Auth), rather than collecting an email
on this page first. That keeps the funnel to: **Landing → Video → App →
Signup**, with no duplicate email step. If you later want to track where
signups came from, append a query string to `APP_URL`, e.g.
`?source=linkedin`, and read `?source` on the app side to store it
alongside the user record.
