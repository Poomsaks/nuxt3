<script setup>
definePageMeta({
  layout: false,
});
const router = useRouter();
const { t } = useI18n();
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

const providers = [
  {
    label: t("continueSSO"),
    icon: "i-simple-icons-keystone",
    color: "white",
    click: () => {
      console.log("Redirect to IDP");
    },
  },
];

const { signIn } = useAuth();
async function signInWithCredentials() {
  // Probably you'll do some validation here before submitting to the backend
  // ...
  // This is the object that our backend expects for the `signIn` endpoint
  const credentials = {
    email: email.value,
    password: password.value,
  };
  try {
    // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
    await signIn(credentials);
    alert("Successfully logged in!");
  } catch (error) {
    console.error(error);
  }
}

function onSubmit() {
  console.log("Submitted");
  router.push("/settings");
}
</script>

<template>
  <UContainer class="grid place-content-center h-screen">
    <NuxtLayout name="login">
      <!-- <ULandingSection
        icon="i-heroicons-rocket-launch"
        :title="$t('welcome')"
      /> -->
      <UCard class="max-w-sm w-full">
        <UAuthForm
          :providers="providers"
          :title="$t('welcome')"
          align="top"
          icon="i-heroicons-lock-closed"
          :ui="{ base: 'text-center', footer: 'text-center' }"
          @submit="onSubmit"
        >
          <template #description>
            {{ $t("haveAccount") }}
            <NuxtLink to="/live" class="text-primary font-medium">
              {{ $t("signUp") }}
            </NuxtLink>
          </template>

          <template #footer>
            {{ $t("agreement") }}
            <NuxtLink to="/settings" class="text-primary font-medium">
              {{ $t("termsOfService") }}
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
