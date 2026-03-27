<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import logo from '../assets/Xplicit_Crafted Logo Design.png'

const navOpen = ref(false)
const isDark = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', label: 'Home', icon: 'mdi:home-outline' },
  { id: 'about', label: 'About', icon: 'mdi:account-outline' },
  { id: 'services', label: 'Services', icon: 'mdi:cog-outline' },
  { id: 'projects', label: 'Projects', icon: 'mdi:briefcase-outline' },
  { id: 'contact', label: 'Contact', icon: 'mdi:email-outline' }
]

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

let observer = null

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  const options = { threshold: 0.6 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  navLinks.forEach((link) => {
    const section = document.getElementById(link.id)
    if (section) observer.observe(section)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-800 transition"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

      <!-- LOGO -->
      <div class="flex items-center gap-3">
        <img :src="logo" class="w-12 h-12 rounded-md shadow" />
        <span class="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-wide">
          Xplicit_Crafted
        </span>
      </div>

      <!-- DESKTOP NAV -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="relative flex items-center gap-2 transition group"
            :class="activeSection === link.id
              ? 'text-xplicitYellow'
              : 'text-gray-600 dark:text-gray-300 hover:text-xplicitGreen'"
          >
            <Icon :icon="link.icon" width="18" />
            {{ link.label }}

            <!-- underline animation -->
            <span
              class="absolute -bottom-1 left-0 h-[2px] w-0 bg-xplicitGreen transition-all duration-300 group-hover:w-full"
              :class="activeSection === link.id ? 'w-full' : ''"
            ></span>
          </a>
        </li>
      </ul>

      <!-- RIGHT -->
      <div class="hidden md:flex items-center gap-4">
        <!-- Theme -->
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
        >
          <Icon :icon="isDark ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'" width="20" />
        </button>

        <!-- CTA -->
        <a
          href="https://wa.me/2347041472893"
          target="_blank"
          class="flex items-center gap-2 px-5 py-2 bg-xplicitGreen text-white rounded-full shadow hover:scale-105 hover:bg-green-600 transition"
        >
          <Icon icon="mdi:whatsapp" width="20" />
          Chat Me
        </a>
      </div>

      <!-- MOBILE TOGGLE -->
      <button class="md:hidden" @click="navOpen = !navOpen">
        <Icon :icon="navOpen ? 'mdi:close' : 'mdi:menu'" width="26" />
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="navOpen"
      class="md:hidden px-6 pb-6 pt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"
    >
      <ul class="flex flex-col gap-4 text-sm">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click="navOpen = false"
            class="flex items-center gap-3 py-2"
          >
            <Icon :icon="link.icon" width="18" />
            {{ link.label }}
          </a>
        </li>

        <!-- Dark toggle -->
        <div class="flex justify-between items-center pt-4 border-t">
          <span>Dark Mode</span>
          <button @click="toggleDarkMode">
            <Icon :icon="isDark ? 'mdi:moon' : 'mdi:sun'" width="20" />
          </button>
        </div>
      </ul>
    </div>
  </header>
</template>