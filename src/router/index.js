import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/LoginView.vue'
import Register from '@/views/auth/RegisterView.vue'
import LearningView from '@/views/LearningView.vue'
import StatisticView from '@/views/StatisticView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNavigation: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/learning',
    name: 'learning',
    component: LearningView,
    meta: { showNavigation: true }
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticView,
    meta: { showNavigation: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
