import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static', // ← MUST be 'static' for Netlify
  site: 'https://your-site-url.netlify.app', // Your Netlify URL
  base: '/', // Ensure this is '/'
});