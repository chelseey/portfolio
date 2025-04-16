// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import AboutMe from '../pages/AboutMe.vue'
import Projects from '../pages/Projects.vue'
import Settings from '../pages/Settings.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
