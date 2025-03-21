import { createRouter, createWebHistory } from 'vue-router'
import ServicesView from '../views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: "",
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/plantStatePrice',
      name: 'plantStatePriceView',
      component: () => import('../views/PlantStatePriceView.vue')
    },
    {
      path: '/damageAssessmentPrice',
      name: 'damageAssessmentPrice',
      component: () => import('../views/DamageAssessmentPriceView.vue')
    },
  ],
})

export default router
