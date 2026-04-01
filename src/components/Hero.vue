<template>
  <section
    id="home"
    class="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 pt-28 pb-16
    bg-[#cbd18f] dark:bg-[#163513] transition   duration-300"  data-aos="fade-up"
  >
    <!-- LEFT -->
    <div class="flex-1 text-center md:text-left animate-fade-in-up">

      <!-- HEADLINE -->
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#1e293b] dark:text-white leading-tight">
        Hi, I’m <span class="text-xplicitGreen">Dabo David</span> 👋
      </h1>

      <!-- ROLE -->
      <h2 class="mt-4 text-lg md:text-2xl font-semibold text-[#334155] dark:text-gray-300">
        Frontend & Fullstack Developer
      <br/><br/>
      <span class="text-xplicitGreen">
        I build fast, scalable web applications.</span>
      </h2>

      <!-- DESCRIPTION -->
      <p class="mt-4 text-[#475569] dark:text-gray-400 max-w-xl leading-relaxed">
        I help businesses and startups transform ideas into fast, responsive, and visually engaging digital products.

        <br /><br />

        Specialized in <strong class="text-xplicitGreen">Vue, React, and modern frontend architecture</strong>,
        with backend capabilities using <strong>Laravel & API integrations</strong>.
      </p>

      <!-- TRUST BADGES -->
      <div class="mt-6 flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400 justify-center md:justify-start">
        <span class="px-3 py-1 bg-white/60 dark:bg-gray-800 rounded-full">✔ Production-ready code</span>
        <span class="px-3 py-1 bg-white/60 dark:bg-gray-800 rounded-full">✔ Scalable architecture</span>
        <span class="px-3 py-1 bg-white/60 dark:bg-gray-800 rounded-full">✔ Clean UI/UX</span>
      </div>

      <!-- EXPERIENCE -->
      <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Worked on platforms like <strong>Ringo.ng</strong> & <strong>Approot Technologies</strong>
      </p>

      <!-- CTA -->
      <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

        <a
          href="#projects"
          class="px-6 py-3 bg-xplicitGreen text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Explore My Work
        </a>

        <a
          href="#contact"
          class="px-6 py-3 border-2 border-xplicitGreen text-xplicitGreen font-semibold rounded-full hover:bg-xplicitGreen hover:text-white transition"
        >
          Start a Project
        </a>

        <a
          href="/Dabo_Melvin_Resume.pdf"
          target="_blank"
          download
          class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:underline"
        >
          <Icon icon="mdi:file-pdf-box" width="20" />
          Resume
        </a>

      </div>
    </div>

    <!-- RIGHT -->
    <div class="flex-1 flex justify-center items-center animate-fade-in-up delay-200 relative">

      <!-- Glow -->
      <div class="absolute w-64 h-64 bg-xplicitGreen opacity-20 blur-3xl rounded-full"></div>

      <!-- Logo -->
      <img
        :src="logo"
        alt="Xplicit Crafted Logo"
        class="relative w-44 h-44 md:w-64 md:h-64 object-contain animate-float"
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>