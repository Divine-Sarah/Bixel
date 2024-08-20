import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/home.vue'
import AppHeader from '@/components/AppHeader.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
      return { x: 0, y: 0 };
    }
})


export default router