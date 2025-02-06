import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import { useUserStore } from '@/frontend/stores/userStore.js'
import stripHtmlDirective from '@/frontend/services/stripHtmlDirective.js'

const app = createApp(App)
const pinia = createPinia()

app.use(plugin, defaultConfig({ theme: 'genesis' }))
app.use(pinia)
app.use(router)
app.directive('strip-html', stripHtmlDirective)
app.mount('#oplbase-frontend-app')

// Now, after the app is mounted, use the store
const userStore = useUserStore()
userStore.checkAuth()
