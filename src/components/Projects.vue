<template>
  <section
    id="projects"
    class="min-h-screen px-6 md:px-20 py-24 bg-[#e1e1c0] dark:bg-gray-950 transition"
    data-aos="fade-up"
  >

    <!-- HEADER -->
    <div class="text-center mb-20">
      <h2 class="text-4xl font-bold flex justify-center items-center gap-3 mb-4 text-gray-900 dark:text-white">
        <Icon icon="mdi:briefcase-outline" width="34" class="text-[#809771]" />
        Selected Work
      </h2>

      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Real-world projects focused on performance, scalability, and user experience.
      </p>
    </div>

    <!-- 🔥 BIG PROJECTS -->
    <div class="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20">
      <div
        v-for="(project, index) in bigProjects"
        :key="index"
        @click="openModal(project)"
        class="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img
          :src="project.image"
          class="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
        />

        <!-- overlay -->
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold text-white">
            {{ project.title }}
          </h3>
          <p class="text-gray-200 text-sm mt-2">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 🧩 SMALL PROJECTS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <ProjectCard
        v-for="(project, index) in smallProjects"
        :key="index"
        :project="project"
        @open="openModal"
        :delay="index * 100"
      />
    </div>

    <!-- MODAL -->
    <div
  v-if="selectedProject"
  class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
>
  <div class="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative">

    <!-- CLOSE -->
    <button
      class="absolute top-3 right-3 text-gray-500 text-xl"
      @click="selectedProject = null"
    >
      ✕
    </button>

    <!-- IMAGE -->
    <img :src="selectedProject.image" class="rounded mb-4" />

    <!-- TITLE -->
    <h3 class="text-2xl font-bold mb-2">
      {{ selectedProject.title }}
    </h3>

    <!-- ROLE -->
    <p class="text-sm text-gray-500 mb-4">
      Role: {{ selectedProject.role }}
    </p>

    <!-- PROBLEM -->
    <div class="mb-3">
      <p class="font-semibold text-gray-800 dark:text-white">Problem</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        {{ selectedProject.problem }}
      </p>
    </div>

    <!-- SOLUTION -->
    <div class="mb-3">
      <p class="font-semibold text-gray-800 dark:text-white">Solution</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        {{ selectedProject.solution }}
      </p>
    </div>

    <!-- RESULT -->
    <div class="mb-4">
      <p class="font-semibold text-gray-800 dark:text-white">Result</p>
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        {{ selectedProject.result }}
      </p>
    </div>

    <!-- STACK -->
    <div class="flex gap-2 flex-wrap mb-4">
      <span
        v-for="(tag, i) in selectedProject.stack"
        :key="i"
        class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
      >
        {{ tag }}
      </span>
    </div>

    <!-- CTA -->
    <a
      v-if="selectedProject.link"
      :href="selectedProject.link"
      target="_blank"
      class="inline-block bg-xplicitGreen text-white px-5 py-2 rounded-md hover:scale-105 transition"
    >
      Visit Live →
    </a>

  </div>
</div>

  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import ProjectCard from "../components/ProjectCard.vue"
import { Icon } from "@iconify/vue"

const projects = ref([])
const selectedProject = ref(null)

onMounted(async () => {
  try {
    const res = await fetch("/projects.json")
    const data = await res.json()

    console.log("PROJECTS:", data) // 🔥 DEBUG

    projects.value = data
  } catch (err) {
    console.error("FETCH ERROR:", err)
  }
})

const bigProjects = computed(() =>
  projects.value.filter(p => p.type === "big")
)

const smallProjects = computed(() =>
  projects.value.filter(p => p.type !== "big")
)

function openModal(project) {
  selectedProject.value = project
}
</script>