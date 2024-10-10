import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://greenlionpartners.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  // output: "hybrid",

  // adapter: node({
  //   mode: "standalone",
  // }),
});
