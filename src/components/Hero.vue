<template>
  <section
    id="home"
    class="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 pt-28 pb-16
    bg-[#cbd18f] dark:bg-[#163513] transition duration-300"
    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-out-cubic"
  >
    <!-- Left Column -->
    <div class="flex-1 text-center md:text-left animate-fade-in-up">
      <h1 class="text-xl md:text-3xl font-extrabold text-[#1e293b] dark:text-white leading-tight">
        Hi, I'm <span class="text-xplicitGreen">Dabo David</span>
      </h1>
      <p class="mt-4 text-lg text-[#475569] dark:text-gray-300 max-w-xl leading-relaxed">
        Front-End Web Developer specializing in building fast, accessible, and responsive interfaces using
        <strong class="text-xplicitGreen">Vue 3</strong>, <strong>Tailwind CSS</strong>, and <strong>Vite</strong>.
        <br />
        I build interactive portfolios, business sites, and tools with sleek UI/UX, clean code, and scroll-triggered animations.
      </p>
      <ul class="mt-6 text-left text-[#334155] dark:text-gray-300 text-sm list-disc ml-5">
        <li>Experience with Vue 3 Composition API & component-driven design</li>
        <li>Skilled in building modern SPAs with GSAP, AOS, and transitions</li>
        <li>Worked on projects like <em>BlueOasisSprings.com</em> & <em>Ringo.ng</em></li>
        <li>Custom UI tools including signature generators & dashboards</li>
      </ul>

      <!-- Buttons -->
      <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <a
          href="#projects"
          class="px-6 py-3 bg-xplicitYellow text-gray-900 font-semibold rounded-full shadow hover:bg-yellow-400 transition"
        >
          View My Work
        </a>
        <a
          href="/Dabo_Melvin_Resume.pdf"
          target="_blank"
          download
          class="flex items-center gap-2 px-6 py-3 border-2 border-xplicitYellow text-gray-900 font-semibold rounded-full hover:bg-xplicitYellow hover:text-gray-900 transition"
        >
          <Icon icon="mdi:file-pdf-box" width="22" height="22" />
          Download CV
        </a>
      </div>
    </div>

    <!-- Right Column: Logo or Illustration -->
    <div class="flex-1 flex justify-center items-center animate-fade-in-up delay-200">
      <img
        :src="logo"
        alt="Xplicit Crafted Logo"
        class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
      />
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import logo from '../assets/Xplicit_Crafted Logo Design.png'
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 2s ease-out forwards;
}
.animate-bounce-slow {
  animation: bounce-slow 4s infinite;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
