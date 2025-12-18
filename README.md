# lenidev — Synthwave Gamedev Portfolio

A premium, markdown-driven gamedev portfolio with dark synthwave aesthetics and subtle horror undertones. Built with **Astro** and **Tailwind CSS**.

## Features

✨ **Premium Design**
- Dark synthwave theme with neon accents (magenta, cyan, purple)
- Subtle horror elements (red accents, grayscale for abandoned projects)
- Animated 3D grid background
- Responsive, glowing UI components
- Orbitron + Inter fonts for that retro-futuristic vibe

🎮 **Game Management (No Backend Required)**
- Add games as simple markdown files in `/src/content/games/`
- Automatic collection parsing and validation
- Three game statuses: `released`, `in-development`, `abandoned`
- Dynamic URL generation (clean URLs like `/games/my-game`)

📄 **Content-Driven Architecture**
- Astro Content Collections with Zod schema validation
- Markdown-based CMS approach
- Assets organized in `/public/assets/games/[slug]/`
- TypeScript support for content

---

## 🚀 Quick Start

### Installation & Development

```bash
cd lenidev-portfolio
npm install
npm run dev
```

Visit `http://localhost:4321` to see your portfolio live.

### Build for Production

```bash
npm run build
npm run preview  # Preview the built site locally
```

---

## 📝 How to Add Games

### 1. Create a Game Markdown File

Add a new file to `src/content/games/` named after your game (e.g., `my-awesome-game.md`):

```markdown
---
title: "My Awesome Game"
cover: "/assets/games/my-awesome-game/cover.png"
date: "2025-03-20"
tags: ["Godot", "Puzzle", "Synthwave"]
link: "https://itch.io/my-awesome-game"  # Optional - if empty & not abandoned, shows "In Development"
status: "released"  # Options: released | in-development | abandoned
---

A brief pitch or description of your game goes here.

## Features

- List your features
- With markdown formatting

## Story

Tell the story of your game here.

![Screenshot](/assets/games/my-awesome-game/screenshot.png)
```

### 2. Add Assets

Create a folder matching your game's slug in `public/assets/games/`:

```
public/assets/games/my-awesome-game/
├── cover.png          # 400x300px recommended
├── screenshot1.png
└── screenshot2.png
```

Then reference them in your markdown:
```markdown
![Gameplay](/assets/games/my-awesome-game/screenshot1.png)
```

### 3. Status Guide

| Status | Behavior | Badge | Button |
|--------|----------|-------|--------|
| `released` | Normal colors, if `link` present shows "Play Now" button | Cyan | "Play Now" → external link |
| `in-development` | Normal colors, no button | Amber/Yellow | "Coming Soon..." |
| `abandoned` | Grayscale cover image, muted colors | Red | "No Longer Maintained" |

---

## 🎨 Customization

### Edit Landing Page

Open `src/pages/index.astro` to customize:
- Your bio/tagline
- Skills (Blender, Godot, Aseprite, etc.)
- Social links (GitHub, itch.io)

### Edit Colors & Theme

Modify the synthwave palette in `tailwind.config.js`:

```js
colors: {
  synthwave: {
    magenta: '#f72585',    // Primary neon
    cyan: '#22d3ee',       // Secondary neon
    purple: '#3a2357',     // Dark purple
    horrorRed: '#c9184a',  // Horror accent
    dark: '#181824',       // Background
  },
}
```

### Edit Fonts

In `src/styles/global.css`, the fonts are already imported:
- **Headings:** Orbitron (synthwave branding)
- **Body:** Inter (clean, readable)
- **Alternate:** Montserrat

Change font-family classes in components as needed.

---

## 📁 Project Structure

```
lenidev-portfolio/
├── public/
│   └── assets/games/          # Game cover images & media
│       └── [game-slug]/
├── src/
│   ├── content/
│   │   ├── config.ts          # Collection schema (don't edit unless needed)
│   │   └── games/             # 🎮 YOUR GAME MARKDOWN FILES GO HERE
│   │       ├── game1.md
│   │       ├── game2.md
│   │       └── ...
│   ├── pages/
│   │   ├── index.astro        # Landing page
│   │   └── games/
│   │       ├── index.astro    # Games gallery
│   │       └── [id].astro     # Game detail page (dynamic route)
│   ├── components/
│   │   └── GameCard.astro     # Game card component
│   ├── layouts/
│   │   └── Layout.astro       # Global layout (animated grid background)
│   └── styles/
│       └── global.css         # Global styles & font imports
├── tailwind.config.js         # Tailwind configuration
├── astro.config.mjs           # Astro configuration
└── package.json
```

---

## 🔗 Social Links

To update social links on the landing page, edit `src/pages/index.astro`:

```astro
<a href="https://github.com/YOUR_USERNAME" target="_blank">
  {/* GitHub button */}
</a>
<a href="https://itch.io/profile/YOUR_PROFILE" target="_blank">
  {/* itch.io button */}
</a>
```

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile:** Stacked layout, optimized text sizes
- **Tablet:** 2-column game grid
- **Desktop:** 3-column game grid with full effects

---

## 🚀 Deployment

The portfolio is a static site and can be deployed anywhere:

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Astro

### GitHub Pages
```bash
npm run build
# Deploy the `dist` folder
```

---

## 📚 Tech Stack

- **Astro 5** — Static site generator
- **Tailwind CSS v4** — Utility-first CSS framework
- **Fonts:** @fontsource (Orbitron, Inter, Montserrat)
- **Markdown Collections** — Type-safe content management

---

## ✅ Demo Games

The portfolio comes with 3 demo games:

1. **Escape the Neon Grid** (Released)
   - Shows a "Play Now" button (links to itch.io)

2. **Silent Whispers** (In Development)
   - Shows "Coming Soon..." badge

3. **Forgotten Realm** (Abandoned)
   - Shows grayscale cover + "Abandoned" badge

Delete these from `src/content/games/` and add your own!

---

## 🤝 Support & Feedback

- **Issues:** Report bugs or feature requests via GitHub
- **Questions?** Check the files' comments for inline documentation

---

Happy showcasing your games! 🎮✨
