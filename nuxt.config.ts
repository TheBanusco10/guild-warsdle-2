// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  extends: [
    "./app/features/skills/nuxt.config.ts",
    "./app/features/core/nuxt.config.ts",
  ],
});
