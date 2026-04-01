# Cortec Ireland — Website

Professional B2B website for **Corrosion Engineering Cortec Ireland Ltd**, Ireland's exclusive authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Forms:** Formspree (no backend required)
- **Analytics:** Google Analytics 4 (placeholder)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Git Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy
4. Every push to `main` triggers an automatic deployment

### Option 2: Vercel CLI

```bash
npx vercel
```

## Project Structure

```
src/
├── app/                        # All pages
│   ├── layout.tsx              # Root layout (Header, Footer, fonts, analytics)
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # Custom 404 page
│   ├── about/page.tsx
│   ├── technology/page.tsx
│   ├── sustainability/page.tsx
│   ├── resources/page.tsx
│   ├── contact/page.tsx
│   ├── products/               # 7 product category pages
│   ├── industries/             # 8 industry sector pages
│   └── articles/               # Blog/news section
│       ├── page.tsx            # Articles listing
│       └── [slug]/page.tsx     # Individual article pages
├── components/                 # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── TrustBar.tsx
│   ├── ProductCard.tsx
│   ├── IndustryCard.tsx
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   └── SectionHeading.tsx
└── data/
    └── articles.ts             # Article content — edit this file to add/update articles
```

## How to Update Content

### Page Content

Edit the relevant page file in `src/app/`. Text is directly in the JSX — find the section you want to update and change the text.

### Adding Articles / News

Articles are managed through `src/data/articles.ts`. To add a new article:

1. Open `src/data/articles.ts`
2. Add a new object to the `articles` array following the existing format
3. Set `published: true` when ready to go live
4. The article automatically appears on `/articles` and gets its own page at `/articles/your-slug`

### Content Placeholders to Replace

Search for these placeholders and replace with real content:

- `[MARY MCCRUM BIO — to be supplied]` — in `/about`
- `[PHOTO — Mary McCrum, Managing Director]` — in `/about`
- `[PRODUCT IMAGE — ...]` — across product pages
- `[CASE STUDY — to be added: ...]` — across industry pages
- `[CLIENT LOGOS AND TESTIMONIALS — ...]` — on homepage
- `[MAP — ...]` — on contact page

### Adding Images

Place images in the `public/images/` directory and reference them as `/images/filename.jpg`.

## Configuration Checklist

### Formspree (Contact Forms)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `PLACEHOLDER_FORM_ID` in `src/components/ContactForm.tsx` with your form ID

### Google Analytics

Replace `GA_MEASUREMENT_ID` in `src/app/layout.tsx` with your GA4 measurement ID.

### Domain

Update `metadataBase` in `src/app/layout.tsx` if using a domain other than `cortecireland.com`.

## Colour Palette

| Colour | Hex | Tailwind Class |
|--------|-----|----------------|
| Navy (primary) | `#0A1F44` | `navy` / `navy-900` |
| Steel Blue (accent) | `#1E5EA8` | `steel` / `steel-500` |
| White | `#FFFFFF` | `white` |
| Light Grey | `#F5F7FA` | `grey-100` |
| Orange (CTA) | `#E8640C` | `orange` / `orange-500` |
