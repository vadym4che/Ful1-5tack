import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', // Redirect root path to the Home route
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    component: () => import('@/views/AboutMe.vue'),
  },
  {
    path: '/projects',
    component: () => import('@/views/MyProjects.vue'),
  },
  {
    path: '/project/:projectName',
    name: 'project',
    component: () => import('@/views/ProjectView.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/ContactMe.vue'),
  },
  {
    path: '/loader',
    component: () => import('@/components/loader.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// let isFirstLoad = !history.length
// router.beforeEach((to, from, next) => {
//   if (isFirstLoad) {
//     isFirstLoad = false
//     next({ name: 'Home' })
//   } else {
//     next()
//   }
// })

export default router