// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://1mochachan1.github.io',
  base: '/lenidev-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});