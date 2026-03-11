import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blogdeco.example.com',
  // output: 'server',
  integrations: [tailwind()]
});
