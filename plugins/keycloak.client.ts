// plugins/keycloak.client.ts

import { defineNuxtPlugin, useRuntimeConfig, navigateTo } from '#app'
import Keycloak from 'keycloak-js'
import { useAuthStore } from '../stores/auth' // ตั้งค่าตามที่อยู่ของไฟล์ store ของคุณ
import { useStateStore } from '../stores/auth/state' // ตั้งค่าตามที่อยู่ของไฟล์ store ของคุณ


function getRelativeRoute(route: string) {
  return `${window.location.origin}/${route}`
}

function parseJwt(token: string | undefined) {
  if (!token) {
    return null
  }
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
  return JSON.parse(jsonPayload)
}

export default defineNuxtPlugin({
  name: 'keycloak',
  parallel: true,
  setup(nuxtApp) {
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
        })
        .then(authenticated => {
          if (authenticated) {
            const authStore = useAuthStore()
            const authState = useStateStore()
            authStore.setAuthenticated(authenticated)
            const tokenPayload = parseJwt(keycloak.token)
            // Assuming you're getting the user details from the Keycloak token or profile
            keycloak.loadUserProfile().then(profile => {
              const userData = {
                id: profile.id as string, // Be cautious with type assertions
                username: profile.username as string,
                email: profile.email as string,
                firstName: profile.firstName as string,
                lastName: profile.lastName as string,
                token: keycloak.token,
                refreshToken: keycloak.refreshToken
                // groups: tokenPayload?.groups || []
                // groups: profile.userProfileMetadata.groups as Array
              }
              authStore.setUser(userData)
              navigateTo('/live')
              // navigateTo(authState.currentRoute)
              console.log('🚀 ~ file: keycloak.client.ts  line:60 ~ tokenPayload', tokenPayload)
              console.log('🚀 ~ file: keycloak.client.ts  line:61 ~ keycloak', keycloak)
              console.log('🚀 ~ file: keycloak.client.ts  line:62 ~ authState', authState)
            }).catch(err => {
              console.error('Failed to load user profile', err)
            })
          }
        })
        .catch(err => {
          console.error('Keycloak init failed:', err)
        })

      // Make the keycloak instance available throughout your app
      nuxtApp.provide('keycloak', keycloak)
    }
  }
})
