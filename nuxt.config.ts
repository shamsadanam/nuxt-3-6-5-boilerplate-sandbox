// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      baseURL: "https://reqres.in/api",
    },
  },
});
