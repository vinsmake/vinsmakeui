// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Josefin Slab',
      cssVariable: '--ff-branding',
      weights: [400, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Nixie One',
      cssVariable: '--ff-heading',
      weights: [400],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--ff-text',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
    },
  ],
});
