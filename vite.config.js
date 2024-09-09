// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/dona3dprotfolioNEW/', // Set this to the repository name for GitHub Pages
  resolve: {
    alias: {
      'three': path.resolve(__dirname, 'node_modules/three/build/three.module.js'),
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});
