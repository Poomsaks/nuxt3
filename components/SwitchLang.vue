<!-- components/SwitchLang.vue -->
<script setup lang="ts">
import { useStateStore } from '@/stores/auth/state' // Adjust the path as necessary

const useState = useStateStore()

// const displayName = profileStore.name

const selectLang = () => {
  const newLocale = useState.locale === 'th' ? 'en' : 'th'
  useState.setLocale(newLocale)
  // บันทึกการตั้งค่าภาษาไปยัง localStorage
  localStorage.setItem('locale', newLocale)
}
</script>

<template>
  <UButton variant="ghost" @click="selectLang">
    <img
      v-if="useState.locale === 'th'"
      src="~/assets/images/thai.webp"
      width="20"
      height="20"
    >
    <img
      v-else
      lazy-src="~/assets/images/greatBritain.webp"
      src="~/assets/images/greatBritain.webp"
      width="20"
      height="20"
    >
  </UButton>

  <!-- {{ displayName }} -->
</template>