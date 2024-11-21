import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // markdown: {
  //   shikiConfig: {
  //     // Choose from Shiki's built-in themes (or add your own)
  //     // https://shiki.style/themes
  //     // theme: 'everforest-dark',
  //     theme: 'night-owl',
  //     langs: ['go', 'javascript', 'csharp', 'html', 'css'],
  //     wrap: true,
  //     // Add custom transformers: https://shiki.style/guide/transformers
  //     // Find common transformers: https://shiki.style/packages/transformers
  //     // transformers: [],
  //   },
  // },

  integrations: [
    expressiveCode({
      themes: ["monokai"],
    }),
    icon(),
  ],
});
