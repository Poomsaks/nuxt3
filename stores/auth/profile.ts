// stores/auth/profile.ts
export const useProfileStore = defineStore('profile', {
  state: () => ({
    locale: 'th'
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale
    }
  }
})

