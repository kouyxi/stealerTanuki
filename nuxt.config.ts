import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@primevue/nuxt-module",
  ],
  css: ["primeicons/primeicons.css"],
  imports: {
    dirs: ["./composables/useMarkdown"],
  },
  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
