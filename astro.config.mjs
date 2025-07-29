import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import favicons from "astro-favicons";

export default defineConfig({
  site: "https://www.jroutdoorsolutions.com", // update me!
  image: {
    // Enable modern image formats and better compression
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      }
    },
    // Configure image optimization defaults
    domains: [],
    remotePatterns: [],
  },
  integrations: [
    icon(), 
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }), 
    favicons()
  ],
});