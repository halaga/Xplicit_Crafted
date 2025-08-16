<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { Icon } from '@iconify/vue'
import bgMotif from './assets/motif.png';


const showScroll = ref(false)
const isDark = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

onMounted(async () => {
  // Theme
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)

  // AOS animations
  const AOS = await import('aos')
  AOS.init({
    duration: 3000,
    easing: 'ease-out-cubic',
    once: false,
  })

  // Scroll event listener
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Toggle dark mode
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <!-- Scroll to top button -->
  <button
    v-show="showScroll"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 bg-xplicitGreen text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
  >
    <Icon icon="mdi:arrow-up" width="24" height="24" />
  </button>

  <!-- App wrapper -->
  <div class="relative min-h-screen font-tech text-gray-900 dark:text-white transition-colors bg-matcha-light dark:bg-matcha-dark">

<!-- 🌿 Subtle Floating Overlay Motif -->
<img
  :src="bgMotif"
  alt="Overlay Motif"
  class="fixed inset-0 w-full h-full object-cover opacity-5 mix-blend-soft-light dark:opacity-5 pointer-events-none z-20"
/>


    <!-- ✅ Main content now above watermark -->
    <div class="relative z-10 min-h-screen scroll-smooth">
      <Navbar :isDark="isDark" @toggleTheme="toggleTheme" />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
