import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BarchartView from '../views/chartJs/BarchartView.vue'
import Barchart2View from '../views/chartJs/Barchart2View.vue'
import Barchart3View from '../views/chartJs/Barchart3View.vue'

import DoughnutView from '../views/DoughnutView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/Barchart',
      name: '/barchartView',
      component: BarchartView,
    },
    {
      path: '/Barchart2',
      name: '/barchart2View',
      component: Barchart2View,
    },
    {
      path: '/Barchart3',
      name: '/barchart3View',
      component: Barchart3View,
    },

    {
      path: '/doughnut',
      name: '/doughnutView',
      component: DoughnutView,
    },


  ]
})

export default router
