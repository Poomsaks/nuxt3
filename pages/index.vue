<script setup>
import { useNuxtApp } from '#app'
definePageMeta({
  layout: false
})
// const router = useRouter()
const { $keycloak } = useNuxtApp()
const { t } = useI18n()
// status.value // Session status: `unauthenticated`, `loading`, `authenticated`
// data.value // Session data, e.g., expiration, user.email, ...
// await signIn() // Sign in the user
// await signOut() // Sign out the user
// const email = ref('')
// const password = ref('')
// const config = useRuntimeConfig()
// const API_URL = config.public.apiUrl
// const { data, error, pending } = useFetch(`${API_URL}/nuxt3/test`, {
//   lazy: true
// })

// if (error.value) {
//   console.error('Fetch error:', error.value)
// } else if (pending.value) {
//   console.log('Fetching data...')
// } else {
//   console.log('Data:', data.value)
// }

// const logout = () => {
//   $keycloak.logout()
// }

const providers = [
  {
    label: t('continueSSO'),
    icon: 'i-simple-icons-keystone',
    color: 'white',
    click: () => {
      console.log('Redirect to IDP')
    }
  }
]

function onSubmit() {
  console.log('Submitted')
  $keycloak.login()
}
</script>

<template>
  <UContainer class="grid place-content-center h-screen">
    <NuxtLayout name="login">
      <UCard class="max-w-sm w-full">
        <UAuthForm
          :providers="providers"
          :title="$t('welcome')"
          align="top"
          icon="i-heroicons-lock-closed"
          :ui="{ base: 'text-center', footer: 'text-center' }"
          @click="onSubmit()"
        >
          <template #description>
            {{ $t('haveAccount') }}
            <NuxtLink to="/live" class="text-primary font-medium">
              {{ $t('signUp') }}
            </NuxtLink>
          </template>

          <template #footer>
            {{ $t('agreement') }}
            <NuxtLink to="/settings" class="text-primary font-medium">
              {{ $t('termsOfService') }}
            </NuxtLink>
          </template>
        </UAuthForm>
      </UCard>
      <!-- <UContainer class="grid place-content-center">
        <img src="~/assets/images/logo.png" alt="IOC">
        <UButton block @click="goto">
          {{ $t("signIn") }}
        </UButton>
      </UContainer> -->
      <!-- <ULandingSection :description="$t('copyright')" /> -->
    </NuxtLayout>
  </UContainer>
</template>


