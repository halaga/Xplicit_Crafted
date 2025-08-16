import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Icon } from '@iconify/vue';

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app');


AOS.init({
  duration: 2000, // Animation duration
  easing: 'ease-in-out',
  once: false, // Animation only once
  mirror: true,
});

