import { defineNuxtConfig } from "nuxt/config";
import { repositoryName, apiEndpoint } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo-loader",
    "@nuxt/image",
    "@nuxtjs/prismic",
    "nuxt-jsonld",
    "nuxt-gtag",
  ],

  css: ["~/assets/css/font.css"],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
  },
  gtag: {
    id: "G-78C2NPQCD1",
  },
});
