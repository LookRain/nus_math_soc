import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Events from '@/pages/Events'
import JoinUs from '@/pages/JoinUs'
import AboutUs from '@/pages/AboutUs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/join_us',
      name: 'JoinUs',
      component: JoinUs
    }
  ]
})
