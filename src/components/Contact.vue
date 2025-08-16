<template>
  <section
    id="contact"
    class="min-h-screen px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-950 transition duration-300 flex flex-col md:flex-row items-center justify-between"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
  >
    <!-- Left: Text + Button -->
    <div class="flex-1 animate-fade-in-up">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 max-w-xl">
        Let's Build Something <span class="text-xplicitYellow">Incredible</span> Together
      </h2>
      <p class="text-gray-700 dark:text-gray-300 mb-8 text-lg max-w-lg">
        Ready to collaborate or got a project in mind? Reach out and let’s make it real.
      </p>
      <button
        @click="showForm = true"
        class="bg-xplicitYellow text-gray-900 px-6 py-3 font-semibold rounded-md flex items-center gap-2 hover:bg-yellow-400 transition"
      >
        Get In Touch
        <Icon icon="lucide:send" width="26" height="22" class="text-black" />
      </button>
    </div>

    <!-- Right: Illustration -->
    <div class="flex-1 mt-12 md:mt-0 flex justify-center animate-fade-in-up delay-200">
      <img src="../assets/contact.webp" alt="Contact illustration" class="max-w-md w-full" />
    </div>

    <!-- Modal Form -->
    <div v-if="showForm" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div class="bg-white dark:bg-gray-900 w-full max-w-xl rounded-lg shadow-xl p-8 relative animate-fade-in-up">
        <button @click="showForm = false" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl">
          &times;
        </button>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Me</h3>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <div class="flex items-center border rounded px-3 py-2">
            <Icon icon="mdi:account-outline" class="text-gray-400 mr-2" width="20" height="20" />
            <input v-model="form.fullName" type="text" placeholder="Full Name" required class="w-full bg-transparent focus:outline-none" />
          </div>

          <div class="flex items-center border rounded px-3 py-2">
            <Icon icon="mdi:email-outline" class="text-gray-400 mr-2" width="20" height="20" />
            <input v-model="form.email" type="email" placeholder="Email" required class="w-full bg-transparent focus:outline-none" />
          </div>

          <div class="flex items-center border rounded px-3 py-2">
            <Icon icon="mdi:phone-outline" class="text-gray-400 mr-2" width="20" height="20" />
            <input v-model="form.phone" type="tel" placeholder="Phone (optional)" class="w-full bg-transparent focus:outline-none" />
          </div>

          <div class="flex items-start border rounded px-3 py-2">
            <Icon icon="mdi:message-text-outline" class="text-gray-400 mr-2 mt-1" width="20" height="20" />
            <textarea v-model="form.message" placeholder="Your message..." required class="w-full bg-transparent focus:outline-none resize-none"></textarea>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="bg-xplicitGreen text-white px-6 py-3 rounded-md hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <span v-if="!loading">Send Message</span>
            <span v-else>Sending...</span>
            <Icon icon="mdi:send" width="20" height="20" class="text-white" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import axios from 'axios'

const showForm = ref(false)
const loading = ref(false)

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  message: '',
})

async function submitForm() {
  loading.value = true
  try {
    await axios.post('https://formspree.io/f/mjkorjlb', {
      name: form.value.fullName,
      email: form.value.email,
      phone: form.value.phone,
      message: form.value.message,
    })
    alert('Message sent successfully!')
    showForm.value = false
    form.value = { fullName: '', email: '', phone: '', message: '' }
  } catch (error) {
    alert('There was an error. Please try again later.')
    console.error(error)
  } finally {
    loading.value = false
  }
}
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
.delay-200 {
  animation-delay: 0.2s;
}
</style>
