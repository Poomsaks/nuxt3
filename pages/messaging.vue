<script setup lang="ts">
// import { sub } from 'date-fns'
// import type { Period, Range } from '~/types'
definePageMeta({
  middleware: ['auth']
})
const { isNotificationsSlideoverOpen } = useDashboard()

const items = [
  [
    {
      label: 'New mail',
      icon: 'i-heroicons-paper-airplane',
      to: '/inbox'
    },
    {
      label: 'New user',
      icon: 'i-heroicons-user-plus',
      to: '/users'
    }
  ]
]

// const range = ref<Range>({
//   start: sub(new Date(), { days: 14 }),
//   end: new Date()
// })
// const period = ref<Period>('daily')
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar :title="$t('live')">
        <template #right>
          <SwitchLang />
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen.value = true"
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

      <UDashboardToolbar>
        <template #left>
          <!-- ~/components/live/dateRangePicker.vue -->
          <!-- <LiveDateRangePicker v-model="range" class="-ml-2.5" /> -->

          <!-- ~/components/live/periodSelect.vue -->
          <!-- <LivePeriodSelect v-model="period" :range="range" /> -->
        </template>
      </UDashboardToolbar>
      <UContainer>
        <iframe
          class="responsive-iframe"
          src="https://messaging.pointit.co.th"
          title="Messaging"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <!-- <canvas
          ref="canvas"
          style="
            position: absolute;
            top: 0;
            left: 0;
            height: 38vh;
            width: 100%;
            z-index: 2;
          "
        /> -->
      </UContainer>
      <UDashboardPanelContent />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped>
/* ทำให้ iframe มีขนาดเต็ม container และยืดหยุ่นได้ */
  .responsive-iframe {
    position: absolute;
    top: 7%;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 93%;
    border: none;
  }
</style>