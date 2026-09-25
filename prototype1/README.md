# involve.me — React + TypeScript Prototype

A Plan First social-discovery app prototype for CSCI 39529 (Involve.me).
Built with **React 18 + TypeScript + Vite**.

## Features

- **Login / signup** with a one-time sample 18+ ID verification step
- **Plan First feed** with 24 NYC plans (food crawls, concerts, raves, nightlife, culture, sports, networking, daytime)
- **Plan detail pages** with host preview clip placeholder, venue, price range, and crew member list
- **Host a Plan** flow — create a plan, review incoming join requests, accept/decline
- **Dare Crew** — weekly extrovert challenge with animated wheel spin and generated plan/crew suggestion
- **Dare Locked demo** — sample mutually-accepted plan with temporary crew chat, timeline, and badges
- **Join animation** — confetti + lock overlay when a request is mutually accepted
- **Profile menu** (top-right avatar) — profile, account settings, saved plans, log out
- **Account settings**:
  - Refresh interests (swipe-style "likely to go" cards)
  - Artists & music preferences
  - Hobbies & energy preferences
  - **2026 Wrapped recap** — Adventurer, Spontaneous, Night Owl, Certified Foodie, Concert Goer, Reliable Crew Member, Outdoor Explorer, Networker statuses, plus most-compatible-group stat

## Getting started

You need [Node.js](https://nodejs.org) (version 18 or newer) installed on your computer.

1. Unzip this project and open the folder in VS Code.
2. Open a terminal in VS Code and make sure you're in the project root (where `package.json` is).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app in development mode:

   ```bash
   npm run dev
   ```

5. Vite will print a local URL, typically:

   ```
   http://localhost:5173
   ```

   Open that URL in your browser to see the app. It hot-reloads as you edit files.

## Building for production (optional)

```bash
npm run build
npm run preview
```

This creates an optimized static build in `dist/` and lets you preview it locally.

## Project structure

```
involve-me/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Top-level state and routing between views
    ├── types.ts            # Shared TypeScript types
    ├── data.ts             # Sample plans, requests, interests, Wrapped logic
    ├── index.css           # All styling (design system, animations, layout)
    ├── Auth.tsx             # Login / signup / ID verification screens
    ├── Layout.tsx           # Sidebar + top bar + profile dropdown menu
    ├── PlanCard.tsx         # Reusable plan card + avatar faces
    ├── HomeView.tsx         # Home dashboard
    ├── PlansView.tsx        # Plan First feed with category filters
    ├── PlanDetailView.tsx   # Single plan detail page
    ├── HostView.tsx         # Host-a-plan flow with join requests
    ├── DareCrewView.tsx     # Dare Crew wheel + generated suggestion
    ├── DareLockedView.tsx   # Sample mutually-accepted plan aftermath
    ├── SuccessOverlay.tsx   # Confetti + lock animation on mutual acceptance
    ├── ProfileView.tsx      # Profile summary + Dare Points
    ├── SettingsView.tsx     # Interests / artists / hobbies / Wrapped tabs
    └── useToast.tsx         # Small toast notification hook + component
```

## Notes for the class prototype

- The "host-uploaded preview" and "prototype inspiration" cards are **placeholders**, not real
  embedded TikTok/Instagram content. A production version would need a licensed content pipeline
  or direct host uploads.
- Identity verification is simulated for demonstration purposes only — no real ID data is collected,
  transmitted, or stored.
- All Dare Points, badges, and Wrapped statistics are sample data to demonstrate the intended
  product behavior, not real usage analytics.
- No real backend, database, or authentication service is connected. All state lives in memory
  (React `useState`) and resets on page reload.
