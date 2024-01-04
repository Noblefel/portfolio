import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/projects',
      name: 'projects',
      component: import("@/views/Projects.vue")
    },
    {
      path: '/contact',
      name: 'contact',
      component: import("@/views/Contact.vue")
    },
    {
      path: '/blog',
      name: 'blog',
      component: import("@/views/Blog.vue")
    }
  ]
})

export default router
