import type { UserData } from '~/types'

// stores/auth/index.js
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null as UserData | null
    }),
    actions: {
        setAuthenticated(isAuthenticated: boolean) {
            this.isAuthenticated = isAuthenticated
        },
        setUser(user: UserData | null) { // Annotate user with UserData type
            this.user = user
        }
    }
})