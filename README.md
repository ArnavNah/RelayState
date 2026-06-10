# Relay Estate | Premium Real Estate Lead Automation

Relay Estate is a high-performance lead intake, qualification, and routing platform built for modern, top-producing real estate teams. Powered by an immersive **Atmospheric Glass** design aesthetic, it integrates real-time analytics, automated text scheduling, and seamless CRM synchronization to ensure no lead inquiry cools down.

## Features

- **Atmospheric Glass UI**: Deep Indigo foundations (`#0b1326`) overlaid with frosted crystalline cards (`glass`) and glowing copper/teal accents (`#C88D5F`).
- **Interactive Fluid Grid**: Powered by `p5.js`, featuring an interactive grid background that tracks and responds to cursor movements.
- **Mock-Up Interfaces**:
  - **Live Lead Feed**: Simulates real-time intake logs from Zillow, Facebook Ads, and organic sources with visual status tags.
  - **Latency Index Gauge**: A circular progress chart displaying response speeds compared to industry averages.
  - **AI Dialog Feeds**: Formatted text session logs demonstrating bot pre-qualification logic.
- **Operational Timeline & Social Proof**: Testimonials and key timeline metrics (48h deployment, 99% uptime) built into the layout.
- **Optimized Performance & LAN Dev Setup**: Configured for local and network access (`http://192.168.1.20:3000/`) with HMR origin allowance.

## Tech Stack

- **Core**: Next.js 16.2 (Turbopack, App Router) & React 19
- **Styling**: Tailwind CSS v4, custom utility glows, and animations
- **Animation**: Framer Motion 12 & GSAP (ScrollTrigger)
- **Canvas Logic**: Client-side `p5.js` with SSR disabled dynamically
- **Icons**: Lucide React

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server locally or bind to your network IP:

```bash
# Run locally
npm run dev

# Or run bound to LAN host IP
npx next dev -H 192.168.1.20 -p 3000
```

Open [http://localhost:3000](http://localhost:3000) or [http://192.168.1.20:3000](http://192.168.1.20:3000) in your browser to see the result.

## Production Build

To build the application for production deployment:

```bash
npm run build
```

This compiles the static export successfully using Turbopack optimizations.
