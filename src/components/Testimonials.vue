<script setup>
const testimonials = [
  {
    name: "Project Stakeholder",
    role: "Telecom Platform",
    text: "Dabo delivered a clean and highly responsive interface. His attention to detail and performance optimization stood out."
  },
  {
    name: "Business Owner",
    role: "Corporate Website",
    text: "Professional, fast, and easy to work with. The final product exceeded expectations and improved our online presence."
  },
  {
    name: "Team Collaboration",
    role: "Internal Tooling",
    text: "Built exactly what we needed. The tool improved workflow efficiency and saved time across the team."
  }
]
</script>

<template>
  <section class="py-24 px-6 md:px-20 bg-[#dfdfc8] dark:bg-gray-950 transition"
  data-aos="fade-up">

    <div class="max-w-6xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What People Say
      </h2>

      <p class="text-gray-600 dark:text-gray-400">
        Feedback from projects and collaborations.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
      >
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          “{{ item.text }}”
        </p>

        <h4 class="font-semibold text-gray-900 dark:text-white">
          {{ item.name }}
        </h4>

        <p class="text-xs text-gray-500">
          {{ item.role }}
        </p>
      </div>
    </div>

  </section>
</template>