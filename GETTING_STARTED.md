# Getting Started with lenidev Portfolio

Your synthwave gamedev portfolio is ready to go! Here's what you have:

## 🎮 What You Have

✅ **Landing Page** (`/`)
- Glowing "lenidev" logo
- Bio: "A gamedev hobbyist because getting a job in gamedev is tough for me :P"
- Skills display (Blender, Godot, Aseprite)
- "See My Games" CTA button
- GitHub & itch.io social links

✅ **Games Gallery** (`/games`)
- Responsive 3-column grid (1 on mobile, 2 on tablet)
- Game cards with cover images
- Status badges (Released / In Development / Abandoned)
- Hover effects with neon glow
- Tags display

✅ **Game Detail Pages** (`/games/[slug]`)
- Large banner with cover image
- Full game information (date, tags, status)
- Markdown content rendering
- Dynamic Play/Download buttons (if link provided)
- Status-appropriate CTAs

✅ **Demo Games** (ready to replace)
1. Escape the Neon Grid (Released)
2. Silent Whispers (In Development)
3. Forgotten Realm (Abandoned)

---

## 🚀 Running Your Portfolio

### Local Development
```bash
cd lenidev-portfolio
npm run dev
```
Visit `http://localhost:4321` in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📝 Adding Your First Real Game

### Step 1: Create the Markdown File

Create `src/content/games/my-first-game.md`:

```markdown
---
title: "My First Game"
cover: "/assets/games/my-first-game/cover.png"
date: "2025-03-20"
tags: ["Godot", "Puzzle", "Cozy"]
link: "https://itch.io/my-first-game"
status: "released"
---

A cozy puzzle game where you help forest creatures solve their problems.

## Features

- Relaxing gameplay
- Beautiful pixel art
- Wholesome story

## Download

Available on itch.io and Steam!
```

### Step 2: Add Your Assets

1. Create folder: `public/assets/games/my-first-game/`
2. Add your cover image as `cover.png` (400x300px works great)
3. Add any screenshots

### Step 3: Reference Images in Markdown

```markdown
![Gameplay Scene](/assets/games/my-first-game/screenshot1.png)
```

---

## 🎨 Customizing Your Portfolio

### Update Your Bio & Skills

Edit `src/pages/index.astro` (around line 35-45):

```astro
<p class="text-lg md:text-xl font-montserrat text-synthwave-cyan font-medium">
  Your custom bio here!
</p>

<!-- Update skills -->
<div class="px-5 py-2 rounded-lg ...">NEW SKILL</div>
```

### Update Social Links

In the same file (bottom section):

```astro
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<!-- Change URL -->
</a>
```

---

## 🎨 Color Customization

All colors are in `tailwind.config.js`:

```js
synthwave: {
  magenta: '#f72585',    // Primary neon (change this!)
  cyan: '#22d3ee',       // Secondary neon
  purple: '#3a2357',     // Dark purple
  horrorRed: '#c9184a',  // Horror accent
  dark: '#181824',       // Background (almost black)
}
```

Change these hex values to your liking. The whole site will update automatically!

---

## 📁 File Reference

| File | Purpose |
|------|---------|
| `src/pages/index.astro` | Landing page - edit bio, skills, socials here |
| `src/content/games/` | Your game markdown files go here |
| `public/assets/games/` | Game cover images and media |
| `tailwind.config.js` | Colors, fonts, and theme settings |
| `src/layouts/Layout.astro` | Global layout with animated grid background |
| `src/components/GameCard.astro` | Game card component (advanced users only) |

---

## ✨ Pro Tips

### Tip 1: Delete Demo Games
Once you're comfortable, delete the 3 demo games:
- `src/content/games/escape-the-neon-grid.md`
- `src/content/games/silent-whispers.md`
- `src/content/games/forgotten-realm.md`

### Tip 2: Rich Markdown
Your game descriptions support full markdown:
- **Bold**, *italic*, `code`
- # Headings, ## Subheadings
- [Links](https://example.com)
- Lists and bullet points
- Images with alt text

### Tip 3: Game Status Strategy
- `released` = Has playable link
- `in-development` = Work in progress, no download yet
- `abandoned` = Old project you've learned from

### Tip 4: Image Optimization
- Cover images: 400x300px (portrait works too)
- Screenshots: Keep under 500KB for fast loading
- Use PNG for graphics, JPG for photos
- All images go in `public/assets/games/[slug]/`

---

## 🚀 Deployment

### Netlify (Easiest)
1. Push project to GitHub
2. Go to netlify.com
3. Connect your repo
4. Netlify auto-detects Astro
5. Done! Your site is live

### GitHub Pages
```bash
npm run build
# Upload the 'dist' folder contents to your gh-pages branch
```

### Vercel (Alternative)
1. Push to GitHub
2. Go to vercel.com
3. Import your repo
4. Vercel detects Astro automatically
5. Done!

---

## 🎯 Next Steps

1. ✅ Run `npm run dev` and explore the site
2. ✅ Customize the landing page (bio, skills, colors)
3. ✅ Delete the 3 demo games
4. ✅ Add your first real game
5. ✅ Test locally
6. ✅ Deploy to Netlify/Vercel/GitHub Pages

---

## 💡 Questions?

- **How do I add more skills?** Edit the skills grid in `src/pages/index.astro`
- **Can I change colors?** Yes! Edit `tailwind.config.js`
- **Can I add more social links?** Yes! Edit the social section in `src/pages/index.astro`
- **Do I need a backend?** No! Everything is static markdown + Astro

---

**Happy showcasing! Your portfolio is ready for your games. 🎮✨**
