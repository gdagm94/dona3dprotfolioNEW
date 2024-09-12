import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Keep the base path for GitHub Pages or Cloudflare Pages
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      external: [
        'three',      // Exclude three.js from bundling
        'dat.gui',    // Exclude dat.gui from bundling
        'gsap',       // Exclude gsap from bundling
      ],
      output: {
        globals: {
          three: 'THREE',
          'dat.gui': 'dat',
          gsap: 'gsap',
        },
      },
    },
  },
});
