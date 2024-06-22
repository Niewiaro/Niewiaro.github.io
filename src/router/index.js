import { createRouter, createMemoryHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes,
})

export default router
