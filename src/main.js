import { createApp } from 'vue'

import '@/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.mount('#app')
