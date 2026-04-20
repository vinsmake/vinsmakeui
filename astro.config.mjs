// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Nixie One',
      cssVariable: '--ff-nixie',
      weights: [400],
      styles: ['normal'],
    },
  ],
});
