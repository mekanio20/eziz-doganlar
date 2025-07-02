import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import VueLazyload from 'vue-lazyload'
import ScrollReveal from "scrollreveal";
import { i18n } from './i18/index'
import { appAxios } from './api'
import './style.css'

i18n.global.locale = localStorage.getItem('lang') || 'TM'

const app = createApp(App)

app.config.globalProperties.$appAxios = appAxios
app.directive('scroll-reveal', { mounted(el, binding) { ScrollReveal().reveal(el, binding.value || {}) } })
app.use(VueLazyload)
app.use(router)
app.use(i18n)
app.mount('#app')