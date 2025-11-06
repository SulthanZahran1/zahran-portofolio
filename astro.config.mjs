// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zahran-portofolio.zsulthan9.workers.dev",
  integrations: [mdx(), sitemap()],
  output: "static",
});
