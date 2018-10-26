import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/HomeView').default
    },
    {
      path: '/csquery',
      name: 'cs-query',
      component: require('@/components/CallsignQueryView').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/AboutView').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
