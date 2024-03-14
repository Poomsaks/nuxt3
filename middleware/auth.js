// import { defineNuxtRouteMiddleware, useNuxtApp, navigateTo } from '#app'
import { defineNuxtRouteMiddleware, useNuxtApp } from '#app'
export default defineNuxtRouteMiddleware(() => {
  const { $keycloak } = useNuxtApp()
  //   console.log('🚀 ~ file: auth middleware auth.js:5 ~ loadNewData', $keycloak)
  if (!$keycloak.authenticated) {
    console.log('🚀 ~ file: auth middleware auth.js:7 ~ loadNewData', $keycloak)
    // navigateTo('/')
  }
})
