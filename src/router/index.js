import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/LoginView.vue'
import Register from '@/views/auth/RegisterView.vue'
import LearningView from '@/views/LearningView.vue'
import StatisticView from '@/views/StatisticView.vue'
import CreateCard from '@/views/CreateCard.vue'
import EditCard from '@/views/EditCard.vue'

Vue.use(VueRouter)

const isAuth = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}

const alrAuth = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
  } else {
    next('/');
  }
}

const logout = (to, from, next) => {
  store.dispatch('logout')
  next('/login');
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNavbar: true, showSidebar: true },
    beforeEnter: isAuth,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: alrAuth,
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: logout,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: alrAuth,
  },
  {
    path: '/learning',
    name: 'learning',
    component: LearningView,
    meta: { showNavbar: true, showSidebar: true },
    beforeEnter: isAuth,
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticView,
    meta: { showNavbar: true, showSidebar: true },
    beforeEnter: isAuth,
  },
  {
    path: '/sets/create',
    name: 'create',
    component: CreateCard,
    meta: { showNavbar: true },
    beforeEnter: isAuth,
  },
  {
    path: '/sets/:id',
    name: 'edit',
    component: EditCard,
    meta: { showNavbar: true },
    beforeEnter: isAuth,
  },
]

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, scrollBehavior
})

export default router
