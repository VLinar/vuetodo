import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/auth')
    },
    {
      path: '/:month',
      name: 'Mainpage',
      component: () => import('@/views/mainform')
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
