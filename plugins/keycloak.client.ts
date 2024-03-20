// plugins/keycloak.ts
// import { defineNuxtPlugin, useRuntimeConfig, navigateTo } from '#app'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import Keycloak from 'keycloak-js'

function getRelativeRoute(route: string) {
  return `${window.location.origin}/${route}`
}

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()
  if (process.client) {
    const keycloak = new Keycloak({
      url: runtimeConfig.public.keycloakUrl,
      realm: runtimeConfig.public.keycloakRealm,
      clientId: runtimeConfig.public.keycloakClientId
    })

    keycloak
      .init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: getRelativeRoute('silent-check-sso.html')
        // responseMode: 'query'
      })
      .then(authenticated => {
        if (authenticated) {
          // navigateTo('/live')
        }
        console.log('Authenticated:', authenticated)
      })
      .catch(err => {
        console.error('Keycloak init failed:', err)
      })

    // Make the keycloak instance available throughout your app
    nuxtApp.provide('keycloak', keycloak)
  }
})

