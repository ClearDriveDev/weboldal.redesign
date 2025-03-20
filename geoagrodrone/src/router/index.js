import { createRouter, createWebHistory } from 'vue-router'
import ServicesView from '../views/ServicesView.vue'
/*import PlantStatePriceView from '../views/PlantStatePriceView.vue';
import DamageAssessmentPriceView from '../views/DamageAssessmentPriceView.vue';*/

//Vue.use(Router);

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
    }/*,
    {
      path: '/plant-statePrice',
      name: 'plantStatePriceView',
      component: PlantStatePriceView
    },
    {
      path: '/damageAssessmentPrice',
      name: 'damageAssessmentPrice',
      component: DamageAssessmentPrice
    },*/
  ],
})

export default router
