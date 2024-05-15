import { createApp } from 'vue'
import App from './App.vue'
import VueIcon from '@/components/shared/VueIcon.vue'

const app = createApp(App)
app.component('VueIcon', VueIcon)
app.mount('#app')
