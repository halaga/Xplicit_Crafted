<script setup>
import { Icon } from '@iconify/vue'

const strengths = [
  {
    title: "Business-Focused Development",
    icon: "mdi:briefcase-check-outline",
    desc: "I build solutions that don’t just look good — they solve real business problems and drive results."
  },
  {
    title: "Scalable & Clean Code",
    icon: "mdi:code-tags",
    desc: "My code is structured, maintainable, and built for growth — making future updates easy and efficient."
  },
  {
    title: "Performance First",
    icon: "mdi:speedometer",
    desc: "Optimized for speed, SEO, and responsiveness to ensure smooth user experience across all devices."
  },
  {
    title: "Clear Communication",
    icon: "mdi:account-voice",
    desc: "You always know what’s happening — I keep communication clear, structured, and professional."
  }
]
</script>

<template>
  <section class="relative py-24 px-6 md:px-20 bg-transparent overflow-hidden">

  <!-- Glass overlay -->
  <div class="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30"></div>

  <!-- Glow -->
  <div class="absolute inset-0 opacity-30 pointer-events-none mix-blend-soft-light">
    <div class="absolute w-96 h-96 bg-xplicitGreen blur-3xl rounded-full top-10 left-10"></div>
    <div class="absolute w-96 h-96 bg-xplicitYellow blur-3xl rounded-full bottom-10 right-10"></div>
  </div>

  <!-- Content -->
  <div class="relative max-w-6xl mx-auto text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Why Work With Me
    </h2>

    <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      I don’t just deliver code — I deliver solutions that help your business grow, scale, and stand out.
    </p>
  </div>

    <p class="text-xs uppercase tracking-widest text-xplicitGreen mb-2">
  Why Choose Me
</p>

    <!-- CARDS -->
    <div class="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

      <div
        v-for="(item, index) in strengths"
        :key="index"
        class="group relative p-6 rounded-xl dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      >

        <!-- hover glow -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-xplicitGreen/20 to-transparent"></div>

        <!-- ICON -->
        <div class="relative mb-4 flex justify-center">
          <div class="p-3 rounded-full bg-xplicitGreen/10 group-hover:scale-110 transition">
            <Icon :icon="item.icon" width="28" class="text-xplicitGreen" />
          </div>
        </div>

        <!-- TITLE -->
        <h3 class="relative font-semibold text-lg mb-2 text-gray-900 dark:text-white text-center">
          {{ item.title }}
        </h3>

        <!-- DESC -->
        <p class="relative text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
          {{ item.desc }}
        </p>

      </div>

    </div>

  </section>
</template>