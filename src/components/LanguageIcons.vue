<script setup>
import { ref } from 'vue'

const languages = ref([
  { name: 'C', icon: '/c.svg' },
  { name: 'C++', icon: '/cpp.svg' },
  { name: 'Python', icon: '/python.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'Vue.js', icon: '/vue.svg' },
  { name: 'Astro.js', icon: '/astro.svg' },
  { name: 'Lua', icon: '/lua.svg' },
  { name: 'LaTeX', icon: '/latex.svg' },
  { name: 'Bash', icon: '/bash.svg' },
])
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 p-4">
    <div v-for="lang in languages" :key="lang.name" class="text-center">
      <div
        class="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
        :title="lang.name"
      >
        <img :src="lang.icon" :alt="lang.name" class="w-8 h-8">
      </div>
      <span class="mt-2 text-sm text-gray-600">{{ lang.name }}</span>
    </div>
  </div>
</template>
