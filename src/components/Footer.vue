<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="relative bg-gray-900 text-gray-300 overflow-hidden">

    <!-- Gradient Glow -->
    <div class="absolute inset-0 bg-gradient-to-tr from-[#809771]/20 to-transparent"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-16 text-center">

      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
        Let’s Build Something Xplicit 🚀
      </h2>

      <p class="text-gray-400 max-w-xl mx-auto mb-10">
        I craft scalable, high-performance web experiences that help brands grow and stand out.
      </p>

      <!-- SOCIALS -->
      <div class="flex justify-center gap-6 text-xl mb-10">
        <a href="mailto:dabo.melvin@gmail.com" class="hover:text-white transition">
          <Icon icon="mdi:email-outline" />
        </a>

        <a href="tel:+2347041472893" class="hover:text-white transition">
          <Icon icon="mdi:phone-outline" />
        </a>

        <a href="https://www.linkedin.com/in/jesujuwon-dabo" target="_blank" class="hover:text-blue-500 transition">
          <Icon icon="mdi:linkedin" />
        </a>

        <a href="https://x.com/DaboMelvin92344" target="_blank">
<i class="fab fa-x-twitter hover:text-black transition"></i>       
 </a>

        <a href="https://instagram.com/dabo.melvin" target="_blank" class="hover:text-pink-500 transition">
          <Icon icon="mdi:instagram" />
        </a>

        <a href="https://discord.com/users/dabo.melvin" target="_blank" class="hover:text-indigo-400 transition">
          <Icon icon="mdi:discord" />
        </a>
      </div>

      <!-- CTA -->
      <a
        href="https://wa.me/2347041472893"
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-3 bg-xplicitGreen text-white rounded-full shadow hover:scale-105 transition"
      >
        <Icon icon="mdi:whatsapp" />
        Start a Project
      </a>

      <!-- COPYRIGHT -->
      <p class="mt-10 text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Xplicit_Crafted. All rights reserved.
      </p>
    </div>
  </footer>
</template>