// stores/auth/index.js
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null
    }),
    actions: {
        setAuthenticated(isAuthenticated: boolean) {
            this.isAuthenticated = isAuthenticated
        },
        setUser(user: null) {
            this.user = user
        }
    }
})