import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/menu.vue'),
  },
  {
    path: '/consent-0',
    name: 'Consent-0',
    component: () => import('../views/consent-style-0.vue')
  },
  {
    path: '/consent-1',
    name: 'Consent-1',
    component: () => import('../views/consent-style-1.vue')
  },
  {
    path: '/consent-2',
    name: 'Consent-2',
    component: () => import('../views/consent-style-2.vue')
  },
  {
    path: '/consent-3',
    name: 'Consent-3',
    component: () => import('../views/consent-style-3.vue')
  },
  {
    path: '/consent-4',
    name: 'Consent-4',
    component: () => import('../views/consent-style-4.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
