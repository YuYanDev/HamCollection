import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var local = 'en-US'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/'+local+'/HomeView').default
    },
    {
      path: '/csquery',
      name: 'cs-query',
      component: require('@/components/'+local+'/CallsignQueryView').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/'+local+'/AboutView').default
    },
    {
      path: '/onair',
      name: 'onair',
      component: require('@/components/'+local+'/onair').default
    },
    {
      path: '/contestmode',
      name: 'contestmode',
      component: require('@/components/'+local+'/contestmode').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
