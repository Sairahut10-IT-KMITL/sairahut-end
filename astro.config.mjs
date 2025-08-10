// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
    },
    preview:{
      allowedHosts : ['sairahut.it.kmitl.ac.th']
    }
  }
});