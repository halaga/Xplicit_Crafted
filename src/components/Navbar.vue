<template>
  <header class="fixed top-0 left-0 w-full z-50 shadow bg-white/80 dark:bg-gray-900/80 backdrop-blur transition">
    <nav class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

      <!-- Logo Section -->
      <div class="flex items-center space-x-3">
        <img :src="logo" alt="Xplicit_Crafted Logo"style="border-radius: 4px;" class="w-14 h-14" />
        <span class="font-bold text-xl text-gray-900 dark:text-white">Xplicit_Crafted</span>
      </div>

      <!-- Hamburger Toggle (Mobile) -->
      <button class="md:hidden" @click="navOpen = !navOpen">
        <i class="fas" :class="navOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>

      <!-- Navigation Links (Desktop) -->
      <ul class="hidden md:flex space-x-6 text-sm font-medium">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="[
              activeSection === link.id
                ? 'text-xplicitYellow dark:text-xplicitYellow font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-xplicitGreen dark:hover:text-xplicitGreen'
            ]"
            class="transition-colors duration-300 flex items-center gap-2"
          >
            <Icon :icon="link.icon" width="18" height="18" />
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Right Side: Chat + Theme -->
      <div class="hidden md:flex items-center space-x-4">
        <button @click="toggleDarkMode" class="w-6 h-6 text-gray-800 dark:text-white">
          <i :class="isDark ? 'fas fa-moon' : 'fas fa-sun'"></i>
        </button>
        <a
          href="https://wa.me/2347041472893"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 bg-xplicitGreen text-white rounded hover:bg-green-600 transition"
        >
          <Icon icon="mdi:whatsapp" width="20" height="20" />
          <span>Let’s Chat</span>
        </a>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="navOpen" class="md:hidden px-6 pb-4 pt-2 bg-white dark:bg-gray-900 transition">
      <ul class="flex flex-col space-y-3 text-sm font-medium">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click="navOpen = false"
            :class="[
              activeSection === link.id
                ? 'text-xplicitYellow font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-xplicitGreen'
            ]"
            class=" py-1 transition-colors flex items-center gap-2"
          >
            <Icon :icon="link.icon" width="18" height="18" />
            {{ link.label }}
          </a>
        </li>

        <!-- Theme Toggle (Mobile) -->
        <li class="flex items-center justify-between pt-2 border-t border-gray-300 dark:border-gray-700">
          <span class="text-gray-600 dark:text-gray-400">Dark Mode</span>
          <button @click="toggleDarkMode" class="text-gray-800 dark:text-white">
            <i :class="isDark ? 'fas fa-moon' : 'fas fa-sun'"></i>
          </button>
        </li>

        <!-- Chat Button (Mobile) -->
        <li>
          <a
            href="https://wa.me/2347041472893"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-xplicitGreen text-white rounded hover:bg-green-600 transition"
          >
            <Icon icon="mdi:whatsapp" width="20" height="20" />
            <span>Let’s Chat</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import logo from '../assets/Xplicit_Crafted Logo Design.png' // ✅ Correct path to your logo image

const navOpen = ref(false)
const isDark = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', label: 'Home', icon: 'mdi:home' },
  { id: 'about', label: 'About', icon: 'mdi:account-circle-outline' },
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

  const options = { threshold: 0.5 }
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
