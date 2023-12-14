import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    component: () => import('./views/AboutMe.vue'),
  },
  {
    path: '/works',
    component: () => import('./views/MyWorks.vue'),
  },
  {
    path: '/contact',
    component: () => import('./views/ContactMe.vue'),
  },
  {
    path: '/loader',
    component: () => import('./components/loader.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

let isFirstLoad = !history.length
router.beforeEach((to, from, next) => {
  if (isFirstLoad) {
    isFirstLoad = false
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router