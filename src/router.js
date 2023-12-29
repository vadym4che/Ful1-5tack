import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home', // Redirect root path to the Home route
  },
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
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
    component: () => import('@/components/Loader.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router