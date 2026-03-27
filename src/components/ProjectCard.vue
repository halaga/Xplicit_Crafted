<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full cursor-pointer"
    @click="$emit('open', project)"
    :data-aos="'fade-up'"
    :data-aos-delay="delay"
  >
    <!-- IMAGE -->
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-cover"
    />

    <!-- CONTENT -->
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {{ project.title }}
      </h3>

      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {{ project.description }}
      </p>

      <div class="flex gap-2 mt-3 mb-1 flex-wrap text-xs">
  <span class="bg-green-100 text-green-700 px-2 py-1 rounded">Fast UI</span>
  <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">Scalable</span>
  <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded">Responsive</span>
</div>

      <!-- STACK -->
      <div class="flex flex-wrap gap-2 mt-auto">
        <span
          v-for="(tag, i) in project.stack"
          :key="i"
          class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
  delay: Number,
})
</script>