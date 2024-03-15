// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/keycloak.js',
    '~/plugins/google-maps.js'
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
  // auth: {
  //   // กำหนด strategies สำหรับ Keycloak
  //   strategies: {
  //     keycloak: {
  //       scheme: 'oauth2',
  //       endpoints: {
  //         authorization: process.env.KEYCLOAK_ISSUER + '/' + process.env.KEYCLOAK_REAM + '/protocol/openid-connect/auth',
  //         token: process.env.KEYCLOAK_ISSUER + '/' + process.env.KEYCLOAK_REAM + '/protocol/openid-connect/token',
  //         userInfo: process.env.KEYCLOAK_ISSUER + '/' + process.env.KEYCLOAK_REAM + '/protocol/openid-connect/userinfo',
  //         logout: process.env.KEYCLOAK_ISSUER + '/' + process.env.KEYCLOAK_REAM + '/protocol/openid-connect/logout?redirect_uri=' + encodeURIComponent('https://bma-dev.pointit.co.th')
  //       },
  //       clientId: 'nuxtjs3',
  //       scope: ['openid', 'profile', 'email'],
  //       responseType: 'code',
  //       grantType: 'authorization_code',
  //       redirectUri: 'https://bma-dev.pointit.co.th',
  //       logoutRedirectUri: 'https://bma-dev.pointit.co.th/live'
  //     }
  //   }
  // }
})