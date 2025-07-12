import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome to Matrix360sourcing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/img/logo/companyLogo.png' },
      { rel: "stylesheet", href: "/assets/css/plugins.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css" },
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },
      { src: "/assets/js/plugins.js" },
      { src: "/assets/js/main.js" },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   'owl.carousel/dist/assets/owl.carousel.min.css',
  //   'owl.carousel/dist/assets/owl.theme.default.min.css'
  // ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/jquery.js', ssr: false }, // Import jQuery
    { src: '~plugins/vue-owl-carousel.js', ssr: false },
    // { src: '~/plugins/google-analytics.js', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/auth-next",
  ],
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: "access_token",
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "post" },
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //baseURL: "http://127.0.0.1:8000/api",
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.matrix360sourcing.com/api/' : 'http://127.0.0.1:8000/api/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["defu"],
    vendor: ['jquery'],
    build: {
      extend(config, { isDev, isClient }) {
        if (isDev && isClient) {
          // Add FriendlyErrorsWebpackPlugin
          const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
          config.plugins.push(new FriendlyErrorsWebpackPlugin());
        }
      }
    },
  }
}
