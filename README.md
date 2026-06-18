# NEX CREATOR OS — MVP

A production-ready creator platform MVP: generate digital assets with AI, build a link-in-bio page, sell digital products, and track growth.

## Stack
Next.js 14 (App Router) · React · TailwindCSS · ShadCN-style UI · Supabase (Postgres, Auth, Storage) · OpenAI · Stripe + Paystack · Vercel-ready.

## Features
- **Auth** — email/password signup, login, logout, protected dashboard (middleware), auto profile creation.
- **Dashboard** — sidebar nav, topbar, usage stat cards, recent projects.
- **AI Ebook Creator** — 3-step flow (10 titles → outline → full content), editable, save to DB, export PDF.
- **AI Social Creator** — TikTok hooks/ideas/captions, YouTube titles/descriptions, ad copy + CTAs, copy/save/regenerate.
- **Link-in-Bio Builder** — avatar upload, bio, links, themes/colors, live mobile preview, public page at `/u/username`.
- **Digital Products** — upload cover + file, set price, public product page at `/p/id`, Stripe & Paystack checkout, secure signed-URL download after payment.
- **Analytics** — visits, clicks, product views, sales, AI generations, with charts.
- **Admin** — `/admin` (role-gated): users, products, revenue, AI usage.

## Setup

### 1. Install
```bash
npm install
```

### 2. Supabase
1. Create a project at supabase.com.
2. In **SQL Editor**, run `supabase/schema.sql` (creates tables, RLS, signup trigger).
3. In **Storage**, create two buckets:
   - `avatars` → **public**
   - `products` → **private**
4. Grab your URL, anon key, and service-role key from **Project Settings → API**.

### 3. Environment
Copy `.env.example` to `.env.local` and fill in all values.

### 4. Run
```bash
npm run dev
```

### 5. Make yourself admin
In Supabase SQL editor:
```sql
update profiles set role = 'admin' where email = 'you@example.com';
```

## Payment Webhooks
Point your payment providers at:
- Stripe: `https://your-domain/api/webhook/stripe` (event: `checkout.session.completed`). Set `STRIPE_WEBHOOK_SECRET`.
- Paystack: `https://your-domain/api/webhook/paystack` (event: `charge.success`).

Orders are only marked `paid` by verified webhooks; downloads require a `paid` order + valid token + short-lived signed URL.

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo in Vercel.
3. Add all env vars from `.env.example`.
4. Deploy. Update Supabase **Auth → URL Configuration** redirect URLs to your Vercel domain.

## Security notes
- Row Level Security on every table; owner-only writes, public read only for published bio pages and active products.
- Service-role key used **only** in server routes (webhooks, public pages, admin) — never shipped to the browser.
- Input validation on AI routes; auth checks on all protected APIs.
- Private product files delivered via expiring signed URLs.

## Roadmap (post-MVP)
Custom domains, team accounts, more AI templates, email delivery of downloads, subscription billing.
