# Arpit Jain — Portfolio

A single-page portfolio site for Arpit Jain: **Applied AI × Creative Technology**.

> You bring the idea. I'll figure out the AI.

## What's inside

One scrolling page, built as a personal digital universe rather than a resume:

- **Hero** — portrait, positioning line, and the two entry points (work / contact)
- **Manifesto** — "If you can imagine it, there's probably a way to build it with AI", shown as a connected IDEA → EXPERIMENT → BUILD → SHIP flow
- **What I Make AI Do** — four selected projects (Zopper Printables Studio, Diggin Café, Outbound Sales Automation, Shiv AI) with build / automate / create / design filtering
- **Storytelling × AI** — Tata Tea, Mamaearth, and AI UGC ad pieces
- **Meme campaign** — ZenuraTech
- **Playground** — Inventory Automation, DigiDZN
- **How I Work** — think, explore, build, ship
- **About, Experience, Toolkit, contact**

All copy and project content lives in local data files — no CMS, no backend, no accounts.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Run locally

```sh
npm install
npm run dev
```

Build a production bundle:

```sh
npm run build
```

## Deploy

Zero-config on Vercel (framework preset: Vite). Build command `npm run build`, output `dist`.

## Notes

Project data is structured in `src/data/portfolio.ts` and the sections defined in `src/routes/index.tsx`, so new work gets added by editing data rather than rebuilding layouts.

Theme (dark / light) is the default view and is remembered per visitor in their browser.
