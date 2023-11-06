import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(router)
app.use(Vue3Marquee)

app.mount('#app')
