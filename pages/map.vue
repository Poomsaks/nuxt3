<script setup>
import { onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

onMounted(() => {
  // console.log(process.env.GOOGLE_MAP_TOKEN)
  const loader = new Loader({
    apiKey: 'AIzaSyA1SMMwO1D8SoAQe_7nZs8W8V0Oox4rN_0', // Make sure you have defined this environment variable
    version: 'weekly'
  })

  loader.load().then(() => {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: 13.76836446790013, lng: 100.55145680397254 },
      zoom: 10
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

          <!-- <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown> -->
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
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.full-size-map {
  position: absolute;
  top: 7%;
  left: 0;
  bottom: 0;
  right: 0;
  height: 93%; /* Adjust if needed */
}

</style>
