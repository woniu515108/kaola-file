import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Select from '../views/Select.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
