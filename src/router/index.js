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
      path: '/:month/:day',
      name: 'Mainpage',
      component: () => import('@/views/mainform')
    },
    {
      path: '/:month/',
      name: 'MainpageRDR',
      redirect: '/:month/1'
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404error')
    },
    {
      path: '/test',
      name: '404',
      component: () => import('@/views/test')
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
