// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3002
  },
  runtimeConfig: {
    // Public runtime config
    public: {
      apiUrl: process.env.API_URL,
      keycloakUrl: process.env.KEYCLOAK_ISSUER,
      keycloakRealm: process.env.KEYCLOAK_REALM,
      keycloakClientId: process.env.KEYCLOAK_ID,
      googleMapToken: process.env.GOOGLE_MAP_TOKEN
    },
    // Private runtime config (server side only)
    private: {
      apiUrl: process.env.API_URL
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  plugins: [
    '~/plugins/keycloak.client.ts'
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
    vueI18n: '~/i18n.config.ts' // if you are using custom path, default
  }
})