// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/dona3dprotfolioNEW/', // GitHub Pages repo name
  resolve: {
    alias: {
      'dat.gui': path.resolve(__dirname, 'node_modules/dat.gui/build/dat.gui.module.js'), // Only keep the alias for dat.gui
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});

