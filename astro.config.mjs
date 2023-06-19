import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CenDocs',
      logo: {
        src: '/src/assets/logo.svg',
        replacesTitle: true,
      },
      sidebar: [
        {
          label: 'Contents',
          autogenerate: { directory: 'contents' },
        },
      ],
    }),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: 'docs',
            label: 'Contents',
            folder: 'src/content/docs/contents/',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
            ],
          },
        ],
      },
    }),
  ],
});
