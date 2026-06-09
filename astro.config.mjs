// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gbegkas.github.io',
  base: '/photography-portfolio-website',
  vite: {
    plugins: [tailwindcss()]
  }
});