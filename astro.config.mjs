// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hayoun-k.github.io',
  base: '/cmstest', //for github page
  srcDir: './src',
  publicDir: './public'
});
