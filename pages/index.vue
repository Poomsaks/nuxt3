<script setup>
definePageMeta({
  layout: false
})
const router = useRouter()
const config = useRuntimeConfig()
const API_URL = config.public.apiUrl
const { data, error, pending } = useFetch(`${API_URL}/nuxt3/test`, {
  lazy: true
})

if (error.value) {
  console.error('Fetch error:', error.value)
} else if (pending.value) {
  console.log('Fetching data...')
} else {
  console.log('Data:', data.value)
}

const goto = () => {
  router.push('/settings')
}
</script>

<template>
  <UContainer class="grid place-content-center h-screen">
    <NuxtLayout name="login">
      <UCard>
        <UContainer class="grid place-content-center">
          <strong class="text-1x"> {{ $t("welcome") }} </strong>
          <img src="~/assets/images/logo.png" alt="IOC">
          <UButton @click="goto">
            {{ $t("signIn") }}
          </UButton>
          <strong class="text-1x"> {{ data.message }} </strong>
        </UContainer>
      </UCard>
    </NuxtLayout>
  </UContainer>
</template>
