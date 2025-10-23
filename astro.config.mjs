// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

const debugIntegration = () => ({
  name: "debug-integration",
  hooks: {
    "astro:config:done": ({ config }) => {
      console.log("DEBUG adapter", config.adapter?.name);
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [cloudflare(), mdx(), sitemap(), debugIntegration()],
});
