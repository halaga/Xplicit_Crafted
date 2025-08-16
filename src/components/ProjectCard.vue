<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg animate-fade-in-up transition-all hover:shadow-2xl hover:-translate-y-1"
    :data-aos="'fade-up'"
    :data-aos-delay="delay"
  >
    <!-- Project Image -->
    <img
      :src="project.image"
      :alt="project.title"
      loading="lazy"
      class="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {{ project.description }}
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tag, i) in project.stack"
          :key="i"
          class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Action Button -->
      <a
        :href="project.link"
        target="_blank"
        class="inline-block text-xplicitYellow hover:underline font-medium text-sm"
      >
        {{ project.label }} →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
  delay: Number,
})
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
  animation: fade-in-up 1s ease-out both;
}
</style>
