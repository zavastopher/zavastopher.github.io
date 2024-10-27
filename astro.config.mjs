// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://christopherzavala.com',
  base: '/zavastopher.github.io/',
  integrations: [tailwind(), icon()],
});