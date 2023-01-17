export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "매우 허접한 쇼핑몰",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "안되는 기능이 많다. 놀랄만큼 매우 허접한게 특징이다.",
      // },
      {
        hid: "og:title",
        property: "og:title",
        content: "Nuxt를 사용한 쇼핑몰",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "놀랄만큼 허접한 쇼핑몰이다.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "http://placeimg.com/640/480/fashion",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/reset.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false,
      },
    },
  },
  // port setup
  server: {
    // port: 5000,
    port: process.env.NODE_ENV === "production" ? null : 5000,
  },
  // env setup config
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://my-json-server.typicode.com/LeeHanryang/nuxt-shopping-api"
        : "http://localhost:3000",
  },
};
