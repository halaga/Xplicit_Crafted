<template>
  <section
    id="about"
    class="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-[#dfdfc8] dark:bg-gray-950 transition"
        data-aos="fade-up"
  >

    <!-- LEFT -->
    <div class="flex-1 mb-12 md:mb-0 md:pr-12 animate-fade-in-up">

      <!-- TITLE -->
      <h2 class="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900 dark:text-white mb-6">
        <Icon icon="mdi:account-circle-outline" width="38" class="text-[#809771]" />
        About Me
      </h2>

      <!-- CONTENT -->
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-4">
        I'm <span class="text-xplicitGreen font-semibold">Dabo David</span> —
        a <strong class="text-xplicitYellow">Frontend & Fullstack Developer</strong>
        focused on building scalable, user-focused web applications.
      </p>

      <p class="text-gray-700 dark:text-gray-300 mb-4">
        I work with businesses and teams to develop fast, responsive, and conversion-driven interfaces that deliver real impact.
      </p>

      <p class="text-gray-700 dark:text-gray-300 mb-4">
        My core stack includes <span class="text-xplicitGreen">Vue 3</span>,
        <span class="text-xplicitGreen">React</span>, and modern UI systems —
        combined with backend capabilities using <strong>Laravel</strong> and API-driven architecture.
      </p>

      <p class="text-gray-700 dark:text-gray-300 mb-6">
        I prioritize performance, clean architecture, and seamless user experience —
        delivering products that are not just functional, but refined.
      </p>

      <!-- AVAILABILITY -->
      <p class="text-sm text-gray-500 mb-6">
        Available for freelance, remote roles, and contract projects.
      </p>

      <!-- CONTACT -->
      <div class="space-y-4 text-gray-800 dark:text-gray-200">
        <div class="flex items-center gap-4">
          <i class="fas fa-envelope text-red-500"></i>
          <a href="mailto:dabo.melvin@gmail.com" class="hover:underline">
            dabo.melvin@gmail.com
          </a>
        </div>

        <div class="flex items-center gap-4">
          <i class="fas fa-phone text-green-500"></i>
          <a href="tel:+2347041472893" class="hover:underline">
            +234 704 147 2893
          </a>
        </div>

        <!-- SOCIAL -->
        <div class="flex items-center gap-4 pt-4">
          <a href="https://www.linkedin.com/in/jesujuwon-dabo" target="_blank">
            <i class="fab fa-linkedin fa-lg text-[#0A66C2] hover:scale-110 transition"></i>
          </a>

          <a href="https://x.com/DaboMelvin92344" target="_blank">
            <i class="fab fa-x-twitter fa-lg hover:scale-110 transition"></i>
          </a>

          <a href="https://instagram.com/dabo.melvin" target="_blank">
            <i class="fab fa-instagram fa-lg text-[#E1306C] hover:scale-110 transition"></i>
          </a>

          <a href="https://discord.com/users/dabo.melvin" target="_blank">
            <i class="fab fa-discord fa-lg text-[#5865F2] hover:scale-110 transition"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- RIGHT (TECH STACK) -->
    <div
      class="flex-1 w-full md:max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-2xl p-6 animate-fade-in-up delay-200"
    >

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech Stack
      </h3>

      <div class="space-y-5">

        <!-- FRONTEND -->
        <div>
          <p class="text-sm font-semibold mb-2 text-gray-500">Frontend</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Vue 3</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">React</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">JavaScript</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Tailwind CSS</span>
          </div>
        </div>

        <!-- BACKEND -->
        <div>
          <p class="text-sm font-semibold mb-2 text-gray-500">Backend</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">PHP</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Laravel</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Python</span>
          </div>
        </div>

        <!-- TOOLS -->
        <div>
          <p class="text-sm font-semibold mb-2 text-gray-500">Tools</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Git</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Vite</span>
            <span class="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Figma</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>