import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kajoble.com',
  output: 'static',
  integrations: [],
  build: {
    format: 'directory',
  },
});
