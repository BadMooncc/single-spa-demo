import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'about',
    component: about,
    path: '/about'
  },
  {
    name: 'home',
    component: home,
    path: '/home'
  }
]
console.log(process.env.VUE_APP_BASE_URL, 'process.env.BASE_URL')
const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router