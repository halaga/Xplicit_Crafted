<template>
  <footer class="relative bg-[#809771] dark:bg-[#809771] text-gray-800 dark:text-gray-900 overflow-hidden">
    <!-- Top Wave / Dome -->
    <div class="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
      <svg viewBox="0 0 1440 320" class="w-full h-40">
        <path
          fill="currentColor"
          class="text-blue-800 dark:text-gray-950"
          d="M0,160 C360,260 1080,40 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>

    <!-- Footer Content -->
    <div class="pt-36 pb-10 px-6 md:px-20 text-center relative z-10">
      <h2 class="text-2xl font-bold mb-4">Let’s Build Something Xplicit</h2>
      <p class="mb-8 text-gray-600 dark:text-gray-700">
        Passionate about crafting clean code, smooth interfaces, and building forward-thinking web solutions.
      </p>

      <!-- Socials -->
      <div class="flex justify-center space-x-6 mb-8 text-2xl">
        <a href="mailto:dabo.melvin@gmail.com" class="hover:text-xplicitYellow transition"><i class="fas fa-envelope"></i></a>
        <a href="tel:+2347041472893" class="hover:text-xplicitYellow transition"><i class="fas fa-phone-alt"></i></a>
        <a href="http://linkedin.com/in/jesujuwon-dabo" target="_blank" class="text-blue-600 hover:scale-110 transition"><i class="fab fa-linkedin"></i></a>
        <a href="https://x.com/@DaboMelvin92344" target="_blank" class="text-black dark:text-white hover:scale-110 transition"><i class="fab fa-x-twitter"></i></a>
        <a href="https://instagram.com/dabo.melvin" target="_blank" class="text-pink-500 hover:scale-110 transition"><i class="fab fa-instagram"></i></a>
        <a href="https://discord.com/users/dabo.melvin" target="_blank" class="text-indigo-500 hover:scale-110 transition"><i class="fab fa-discord"></i></a>
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-700">
        &copy; {{ new Date().getFullYear() }} Xplicit_Crafted. All rights reserved.
      </p>
    </div>
  </footer>
</template>
