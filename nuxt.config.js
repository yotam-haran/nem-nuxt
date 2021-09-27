export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nymphes et Monstres',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nymphes et Monstres is specialized in historically informed performance of French baroque music, aimed at an experience that goes far beyond the music itself.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        { src: 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/ismobilejs@1/dist/isMobile.min.js', defer: true },
        { src: 'https://www.google.com/recaptcha/api.js?render=explicit', defer: true, async: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/imagekit.js',
    { src: '~/plugins/afterEach.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
      fallback: true
  },

  env: {
    sitekey: process.env.NODE_ENV === 'production'
        ? '6LfqjlwcAAAAAAOG891KDFZL5bz7EaeQr77qn8T3'
        : '6LeXBlscAAAAAKNnd8EDUZkewVTamlgj4f-bdIPy'
  },

  googleFonts: {
    families: {
      Dosis: true,
      Raleway: {
        wght: [400, 700],
        ital: [100]
      },
    }
  }
}
