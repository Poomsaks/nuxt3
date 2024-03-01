// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  runtimeConfig: {
    // Public runtime config
    public: {
      apiUrl: process.env.API_URL
    },
    // Private runtime config (server side only)
    private: {
      apiUrl: process.env.API_URL
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  eslint: {
    fix: true // Make sure this is set to true
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  components: [{
    path: '~/components'
  }, {
    path: '~/components/common',
    pathPrefix: false
  }],
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [300, 400, 500, 600, 700]
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  auth: {
    baseURL: 'https://idp-dev.pointit.co.th:8443',
    provider: {
      type: 'refresh',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/session', method: 'get' },
        refresh: { path: '/refresh', method: 'post' }
      },
      token: { signInResponseTokenPointer: '/token' },
      refreshToken: { signInResponseRefreshTokenPointer: '/refreshToken' }
    }
  }
})