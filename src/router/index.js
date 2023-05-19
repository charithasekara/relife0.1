import { createRouter, createWebHistory } from 'vue-router'

import SigninSignup from "@/views/SigninSignup.vue";
import SignUp from "@/views/SignUp.vue";
import FullDashBoard from "@/views/FullDashBoard.vue";
import MarketPlace from "@/views/MarketPlace.vue";

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SigninSignup',
    component: SigninSignup
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/fulldashboard',
    name: 'FullDashboard',
    component: FullDashBoard
  },
  {
    path: '/marketplace',
    name: 'MarketPlace',
    component: MarketPlace
  }
  // other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
