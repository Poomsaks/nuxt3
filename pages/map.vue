<script setup>
import { onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

onMounted(() => {
  const loader = new Loader({
    apiKey: process.env.GOOGLE_MAP_TOKEN, // Make sure you have defined this environment variable
    version: 'weekly'
  })

  loader.load().then(() => {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  })
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar :title="$t('map')">
        <template #right>
          <SwitchLang />
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>
      <UContainer class="map-container">
        <div id="map" class="full-size-map" />
      </UContainer>
      <UDashboardPanelContent />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped>
/* ตั้งค่า container ให้มีอัตราส่วน 16:9 */
.map-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.full-size-map {
  position: absolute;
    top: 0%;
    left: 0;
    bottom: 0;
    right: 0;
    width: 160%;
    height: 91%;
    border: none;
}

</style>
