<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import SysStatus from './SysStatus.vue'
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'

const currentTime = ref(new Date())
const timer: number | null = null

onUnmounted(() => {
  if (timer)
    clearInterval(timer)
})
</script>

<template>
  <footer class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white">
    <div v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0" class="flex flex-wrap gap-4">
      <template v-for="(link, index) in siteConfig.footer.navLinks" :key="link.text">
        <a
          :aria-label="`${link.text}`"
          :target="getLinkTarget(link.href)"
          class="nav-link flex items-center"
          :href="link.href"
        >
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footer.navLinks.length - 1" op-70> / </span>
      </template>
    </div>
    <div flex>
      <a nav-link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
      <span op-70>&nbsp;&nbsp;&copy;&nbsp;&nbsp;{{ currentTime.getFullYear() }}&nbsp;&nbsp;{{ siteConfig.author }}.</span>
    </div>
    <div>
      <SysStatus />
    </div>
  </footer>
</template>
