import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://zachwong02.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'zachwong02',
      openGraph: {
        home: {
          title: 'zachwong02',
          description: 'Basically an about me page and my achievements page'
        },
        blog: {
          title: 'Blog',
          description: 'Write-ups, technical breakdowns, and lessons learned from CTFs, malware analysis, and red teaming adventures'
        }
      }
    })
  ]
});