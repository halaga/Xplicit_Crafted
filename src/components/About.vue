<template>
  <section
    id="about"
    class="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-[#dfdfc8] dark:bg-gray-950 transition duration-300"
    data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
>
    <!-- Left: Text Content -->
    <div class="flex-1 mb-12 md:mb-0 md:pr-12 animate-fade-in-up"
    data-aos="fade-up"
  data-aos-delay="100">
      <h2 class="text-3xl md:text-4xl font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-6">
            <Icon icon="mdi:account-circle-outline" width="40" height="40" color="#809771"/>
        About Me
      </h2>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
      data-aos="fade-up"
  data-aos-delay="200">
        I'm <span class="text-xplicitGreen font-semibold">Dabo David</span>, a passionate
        <strong class="text-xplicitYellow">Frontend Developer</strong> with a creative edge and a technical backbone.
        I specialize in building sleek, interactive, and scalable web applications that bring ideas to life — powered by
        <span class="text-xplicitGreen">Vue 3</span>, <span class="text-xplicitGreen">Tailwind CSS</span>,
        and <span class="text-xplicitGreen">Vite</span>.
      </p>

      <p class="mt-4 text-gray-700 dark:text-gray-300"
      data-aos="fade-up"
data-aos-delay="300">
        I also harness the power of <strong>Python</strong> for backend logic, automation, and tooling. Whether it's designing UI systems, optimizing performance,
        or building fully responsive experiences — I code. create. craft <span class="text-xplicitGreen font-semibold">— THE XPLICIT WAY</span>.
      </p>

      <p class="mt-4 text-gray-700 dark:text-gray-300"
      data-aos="fade-up"
  data-aos-delay="350">
        As a freelancer and aspiring full-time developer, I'm all about delivering value with clean code, fluid user experience, and attention to detail.
        I’m open to exciting freelance collaborations and full-time opportunities.
      </p>

      <!-- Contact Info with Icons -->
      <div class="mt-10 space-y-4 text-gray-800 dark:text-gray-200"
      data-aos="fade-up"
  data-aos-delay="400">
        <div class="flex items-center gap-4">
          <i class="fas fa-envelope text-red-500"></i>
          <a href="mailto:dabo.melvin@gmail.com" class="hover:underline">dabo.melvin@gmail.com</a>
        </div>
        <div class="flex items-center gap-4">
          <i class="fas fa-phone text-green-500"></i>
          <a href="tel:+2349036792601" class="hover:underline">+234 704 147 2893</a>
        </div>
        <div class="flex items-center gap-4 pt-4">
          <a href="https://www.linkedin.com/in/jesujuwon-dabo" target="_blank" class="text-[#0A66C2] hover:scale-110 transition">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://x.com/@DaboMelvin92344" target="_blank" class="text-black dark:text-white hover:scale-110 transition">
            <i class="fab fa-x-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com/dabo.melvin" target="_blank" class="text-[#E1306C] hover:scale-110 transition">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://discord.com/users/dabo.melvin" target="_blank" class="text-[#5865F2] hover:scale-110 transition">
            <i class="fab fa-discord fa-lg"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Right: Floating Tech Card -->
    <div
      class="flex-1 w-full md:max-w-md bg-[#809771] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl p-6 animate-fade-in-up delay-200"
    data-aos="fade-up"
  data-aos-delay="600">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
      <ul class="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">HTML5</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">CSS3</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">JavaScript</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Vue 3</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Tailwind CSS</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Vite</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Python</li>
        <li class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Git</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
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
  animation: fade-in-up 10s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
