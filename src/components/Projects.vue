<template>
  <section
    id="projects"
    class="relative min-h-screen px-6 md:px-20 py-24 bg-[#e1e1c0] dark:bg-gray-950 transition duration-300"
    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-out-cubic"
  >
  

    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 text-gray-900 dark:text-white mb-4">
        <Icon icon="mdi:briefcase-outline" width="36" height="36" color="#809771" />
        Featured Projects
      </h2>
      <p class="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
        A showcase of systems and interfaces I’ve built with clarity, scalability, and performance in mind.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :delay="100 * (index + 1)"
      />
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-14" data-aos="fade-up" data-aos-delay="500">
      <a
        href="https://github.com/halaga"
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#809771] text-white rounded-md hover:bg-[#6d885f] transition"
      >
        <Icon icon="mdi:rocket-launch-outline" width="20" />
        See More Projects
      </a>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
  {
    title: 'Blue Oasis Springs Website',
    image: new URL('../assets/blue.png', import.meta.url).href,
    description:
      'A modern Vue SPA for a water company with scroll-based animations, branding, and responsive layout.',
    link: 'https://blueoasissprings.com',
    label: 'View Project',
  },
  {
    title: 'Ringo Telecom Website',
    image: new URL('../assets/ringo.png', import.meta.url).href,
    description:
      'Corporate Vue 3 website for Ringo.ng using KeenSlider, custom layouts, and dark/light modes.',
    link: 'https://ringo.ng',
    label: 'View Project',
  },
  {
    title: 'Email Signature Generator',
    image: new URL('../assets/ringo-gen.png', import.meta.url).href,
    description:
      'Dynamic internal tool for staff to generate professional email signatures with custom styles.',
    link: 'https://ringo.ng/signature-generator.html',
    label: 'View Tool',
  },
];
</script>
