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
  <UContainer>
    <UButton variant="ghost" @click="selectLang">
      <img
        v-if="useState.locale === 'th'"
        src="~/assets/images/thai.webp"
        width="24"
        height="24"
      >
      <img
        v-else
        lazy-src="~/assets/images/greatBritain.webp"
        src="~/assets/images/greatBritain.webp"
        width="24"
        height="24"
      >
    </UButton>
    <!-- {{ displayName }} -->
  </UContainer>
</template>