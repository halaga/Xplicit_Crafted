<script setup>
import { Icon } from '@iconify/vue';

const services = [
  {
    title: "Frontend Engineering",
    icon: "mdi:monitor-dashboard",
    description:
      "I build fast, scalable, and visually refined interfaces using Vue, React, and modern frontend architecture — optimized for performance and user engagement.",
  },
  {
    title: "UI/UX Implementation",
    icon: "mdi:palette-outline",
    description:
      "Turning design systems and Figma files into pixel-perfect, responsive interfaces with smooth interactions and consistent user experience.",
  },
  {
    title: "Backend & API Development",
    icon: "mdi:server",
    description:
      "Developing secure and scalable backend systems using Laravel and PHP, including REST APIs, authentication, and data handling.",
  },
  {
    title: "Fullstack Web Applications",
    icon: "mdi:layers-outline",
    description:
      "From idea to deployment — I build complete web applications that are fast, maintainable, and production-ready.",
  },
  {
    title: "Performance Optimization",
    icon: "mdi:speedometer",
    description:
      "Improving load speed, SEO, and responsiveness to enhance user experience, reduce bounce rate, and increase conversions.",
  },
  {
    title: "Custom Tools & Dashboards",
    icon: "mdi:tools",
    description:
      "Building internal tools, admin dashboards, and automation systems tailored to streamline business operations.",
  },
];
</script>

<template>
  <section
    id="services"
    class="min-h-screen px-6 md:px-20 py-24 bg-[#dfdfc8] dark:bg-gray-950 transition duration-300"
    data-aos="fade-up"
  >

    <!-- HEADER -->
    <div class="max-w-6xl mx-auto text-center mb-20">
      <h2 class="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 text-gray-900 dark:text-white mb-4">
        <Icon icon="mdi:cog-outline" width="36" class="text-[#809771]" />
        What I Can Do For You
      </h2>

      <p class="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
        I don’t just build websites — I create high-performance digital products
        that help businesses grow, scale, and stand out.
      </p>
    </div>

    <!-- GRID -->
    <div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        v-for="(service, index) in services"
        :key="index"
        class="group bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
      >
        <!-- Glow -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#809771]/20 to-transparent"></div>

        <!-- ICON -->
        <div class="mb-4">
          <Icon
            :icon="service.icon"
            width="36"
            class="text-[#809771] group-hover:scale-110 transition"
          />
        </div>

        <!-- TITLE -->
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ service.title }}
        </h3>

        <!-- DESC -->
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {{ service.description }}
        </p>
      </div>

    </div>

    <!-- 💥 PREMIUM CTA (THIS IS KEY) -->
    <div class="mt-20 text-center">

      <p class="text-gray-700 dark:text-gray-400 mb-6">
        Have a project in mind or need a developer that delivers?
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">

        <a
          href="#contact"
          class="px-6 py-3 bg-xplicitGreen text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Start a Project
        </a>

        <a
          href="#projects"
          class="px-6 py-3 border border-xplicitGreen text-xplicitGreen rounded-full font-semibold hover:bg-xplicitGreen hover:text-white transition"
        >
          View My Work
        </a>

      </div>
    </div>

  </section>
</template>