<script setup lang="ts">
import { sub } from 'date-fns'
import type { Period, Range } from '~/types'

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

const range = ref<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date()
})
const period = ref<Period>('daily')
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

      <UDashboardToolbar>
        <template #left>
          <!-- ~/components/live/dateRangePicker.vue -->
          <!-- <LiveDateRangePicker v-model="range" class="-ml-2.5" /> -->

          <!-- ~/components/live/periodSelect.vue -->
          <LivePeriodSelect v-model="period" :range="range" />
        </template>
      </UDashboardToolbar>
      <UContainer class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.pointit.co.th"
          title="Anne-Marie - 2002 [Official Video]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <canvas
          ref="canvas"
          style="
            position: absolute;
            top: 0;
            left: 0;
            height: 38vh;
            width: 100%;
            z-index: 2;
          "
        />
      </UContainer>
      <UDashboardPanelContent />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scope>
/* ตั้งค่า container ให้มีอัตราส่วน 16:9 */
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

/* ทำให้ iframe มีขนาดเต็ม container และยืดหยุ่นได้ */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
