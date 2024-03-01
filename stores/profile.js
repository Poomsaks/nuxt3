// stores/profile.js
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Aliza',
    currentLocale: 'th' // Default profile
  }),
  actions: {
    setLocale(profile) {
      this.currentLocale = profile
    },
    setName(profile) {
      this.name = profile
    }
  }
})
