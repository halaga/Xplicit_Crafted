<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import axios from 'axios'

const showForm = ref(false)
const loading = ref(false)
const success = ref(false)

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

    success.value = true

    setTimeout(() => {
      showForm.value = false
      success.value = false
      form.value = { fullName: '', email: '', phone: '', message: '' }
    }, 2000)

  } catch (error) {
    alert('Something went wrong. Try again.')
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-950 flex flex-col md:flex-row items-center justify-between"
    data-aos="fade-up"
  >

    <!-- LEFT -->
    <div class="flex-1">
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
        Let’s Build Something
        <span class="text-xplicitGreen">Powerful</span>
      </h2>

      <p class="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
        Got a project idea, business, or collaboration?
        Let’s turn it into something exceptional.
      </p>

      <button
        @click="showForm = true"
        class="flex items-center gap-3 px-8 py-4 bg-xplicitGreen text-white rounded-full shadow-lg hover:scale-105 hover:bg-green-600 transition"
      >
        <Icon icon="mdi:send" width="20" />
        Start a Project
      </button>
    </div>

    <!-- RIGHT VISUAL -->
    <div class="flex-1 mt-12 md:mt-0 flex justify-center">
      <img
        src="../assets/contact.webp"
        class="max-w-md w-full drop-shadow-xl"
      />
    </div>

    <!-- MODAL -->
    <div
      v-if="showForm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    >
      <div
        class="w-full max-w-xl rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl p-8 relative animate-fade-in-up"
      >

        <!-- CLOSE -->
        <button
          @click="showForm = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-red-500"
        >
          <Icon icon="mdi:close" width="24" />
        </button>

        <!-- SUCCESS STATE -->
        <div v-if="success" class="text-center py-10">
          <Icon icon="mdi:check-circle" class="text-green-500 mb-4" width="50" />
          <p class="text-lg font-semibold text-gray-800 dark:text-white">
            Message Sent Successfully 🚀
          </p>
        </div>

        <!-- FORM -->
        <form v-else @submit.prevent="submitForm" class="grid gap-5">

          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Let’s Talk
          </h3>

          <!-- INPUT -->
          <div class="input">
            <Icon icon="mdi:account-outline" />
            <input v-model="form.fullName" placeholder="Full Name" required />
          </div>

          <div class="input">
            <Icon icon="mdi:email-outline" />
            <input v-model="form.email" type="email" placeholder="Email" required />
          </div>

          <div class="input">
            <Icon icon="mdi:phone-outline" />
            <input v-model="form.phone" placeholder="Phone (optional)" />
          </div>

          <div class="input textarea">
            <Icon icon="mdi:message-outline" />
            <textarea v-model="form.message" placeholder="Your message..." required></textarea>
          </div>

          <!-- BUTTON -->
          <button
            type="submit"
            :disabled="loading"
            class="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-xplicitGreen text-white rounded-full shadow hover:scale-105 transition"
          >
            <span v-if="!loading">Send Message</span>
            <span v-else>Sending...</span>
            <Icon icon="mdi:send" />
          </button>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.input {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid #ddd;
  background: rgba(255,255,255,0.6);
}

.dark .input {
  background: rgba(30,30,30,0.6);
  border-color: #333;
}

.input input,
.input textarea {
  width: 100%;
  background: transparent;
  outline: none;
}

.textarea {
  align-items: flex-start;
}

textarea {
  resize: none;
  min-height: 100px;
}

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
  animation: fade-in-up 0.6s ease-out both;
}
</style>