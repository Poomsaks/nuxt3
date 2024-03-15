// plugins/vue-google-maps.js
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { GoogleMap } from 'vue3-google-map'
export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  nuxtApp.vueApp.use(GoogleMap, {
      load: {
        key: runtimeConfig.public.googleMapToken // ใส่ API key ของคุณที่นี่
      }
  })
  nuxtApp.vueApp.component('GoogleMap', GoogleMap)

  return {
    provide: {
      GoogleMap
    }
  }
})