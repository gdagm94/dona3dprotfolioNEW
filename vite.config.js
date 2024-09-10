// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/dona3dprotfolioNEW/', // Ensure this matches your GitHub Pages repo name
  resolve: {
    alias: {
      'three': path.resolve(__dirname, 'node_modules/three/build/three.module.js'),
      'dat.gui': path.resolve(__dirname, 'node_modules/dat.gui/build/dat.gui.module.js'), // Alias for dat.gui
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});
