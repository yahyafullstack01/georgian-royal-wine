# Vinea Wines

A modern e-commerce website for a premium wine company, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Custom Design** — Elegant burgundy and cream wine-themed UI
- **Responsive** — Mobile and desktop layouts
- **Product Catalog** — 12 wines with filtering by category and sorting
- **Product Pages** — Detailed wine info, tasting notes, related products
- **Shopping Cart** — Add/remove items, quantity controls, persistent cart (localStorage)
- **Checkout** — Full checkout flow with shipping and payment forms
- **Contact Form** — Customer inquiry form with subject categories

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, featured wines, categories |
| `/shop` | Full product catalog with filters |
| `/wines/[slug]` | Individual product detail page |
| `/cart` | Shopping cart |
| `/checkout` | Checkout and order confirmation |
| `/contact` | Contact form |
| `/about` | Company story |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React Context for cart state

## Notes

- Checkout and contact forms are demo implementations (no real payment/email backend)
- Wine images served from Unsplash
- Cart persists in browser localStorage
