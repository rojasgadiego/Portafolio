import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark' || 
    (localStorage.getItem('theme') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches))

  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  watch(isDark, (dark) => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    applyTheme(dark)
  }, { immediate: true })

  return { isDark, toggleTheme }
})