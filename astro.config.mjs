import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://blogdeco.example.com',
  output: 'server',
  integrations: [tailwind()],
  adapter: netlify()
});
