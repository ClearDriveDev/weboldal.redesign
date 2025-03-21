import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ReferencesView from '@/views/ReferencesView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  HomeView,
      meta: { headerText: 'Üdvözöljük !' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { headerText: 'Rólunk' }
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('../views/ReferencesView.vue'),
      meta: { headerText: 'Referenciák' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { headerText: 'Szolgáltatások' }
    },
    {
      path: '/plantStatePrice',
      name: 'plantStatePriceView',
      component: () => import('../views/PlantStatePriceView.vue'),
      meta: { headerText: 'Növényállapot felmérés' }
    },
    {
      path: '/damageAssessmentPrice',
      name: 'damageAssessmentPrice',
      component: () => import('../views/DamageAssessmentPriceView.vue'),
      meta: { headerText: 'Kárfelmérés' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { headerText: 'Elérhetőségek' }
    },
  ],
})

export default router
