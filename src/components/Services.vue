<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <section
    id="services"
    class="min-h-screen px-6 md:px-20 py-24 bg-[#dfdfc8] dark:bg-gray-900 transition duration-300"
    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-out-cubic"
  >
    <div class="max-w-6xl mx-auto text-center mb-16 animate-fade-in-up">
      <h2 class="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2 text-gray-900 dark:text-white mb-4">
                    <Icon icon="mdi:cog-outline" width="40" height="40" color="#809771" class="inline-block align-middle" />
        Services I Offer
      </h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100">
        Whether you're building from scratch or refining an existing product, I bring your ideas to life with precision and creativity.
      </p>
    </div>

    <!-- Service Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
      <!-- Service 1 -->
      <div class="bg-[#809771] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
      data-aos="fade-up"
h      data-aos-delay="200">

        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Frontend Web Development</h3>
        <p class="text-gray-800 dark:text-gray-300">
          I craft responsive, interactive, and modern web interfaces using Vue 3, JavaScript, Tailwind CSS, and Vite — ensuring speed, accessibility, and beauty.
        </p>
      </div>

      <!-- Service 2 -->
      <div class="bg-[#809771] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay="300">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">UI/UX Design Implementation</h3>
        <p class="text-gray-800 dark:text-gray-300">
          I translate design systems and Figma prototypes into pixel-perfect, high-performing frontend code with a focus on consistency and user experience.
        </p>
      </div>

      <!-- Service 3 -->
      <div class="bg-[#809771] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay="400">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Python-Powered Integrations</h3>
        <p class="text-gray-800 dark:text-gray-300">
          Need backend logic, scripts, or automation? I leverage Python to handle light server logic, data transformation, and tool development alongside your frontend.
        </p>
      </div>
    </div>
  </section>
</template>
