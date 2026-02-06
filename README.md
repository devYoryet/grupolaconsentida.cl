# Grupo La Consentida - Landing Page

Premium landing page for Grupo La Consentida, a Chilean agricultural export company specializing in fresh cherries and dried prunes.

## Features

- **Bilingual** - Full Spanish/English with dynamic language toggle (no page reload)
- **Premium Design** - Agro-export aesthetic with green, burgundy, gold palette
- **Animated SVGs** - Custom cherry, prune, and process icons with CSS animations
- **Scroll Animations** - Intersection Observer-based reveal animations
- **Contact Form** - Validated form with animated success state
- **Mobile First** - Fully responsive design
- **SEO Optimized** - Metadata, Open Graph, structured content

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- CSS Animations + Intersection Observer
- React 19

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/              # Next.js app router pages
  components/
    sections/       # Page sections (Hero, About, Products, etc.)
    svg/            # Animated SVG components
    ui/             # Reusable UI components (Animate, LanguageToggle, etc.)
  context/          # Language context provider
  lib/              # i18n translations
```
