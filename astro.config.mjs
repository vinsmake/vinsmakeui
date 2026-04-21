// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Josefin Slab',
      cssVariable: '--ff-b',
      weights: [400, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Nixie One',
      cssVariable: '--ff-h',
      weights: [400],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--ff-t',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
    },
  ],
});
