import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'animate.css'
import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
