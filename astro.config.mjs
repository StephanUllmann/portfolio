import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";

export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [
    expressiveCode({
      themes: ["monokai"],
    }),
    icon(),
  ],
});
