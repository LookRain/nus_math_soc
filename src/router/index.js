import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Events from '@/pages/Events'
import JoinUs from '@/pages/JoinUs'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import Pyp from '@/pages/Pyp'
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
    },
    {
      path: '/contact_us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/pyp',
      name: 'Pyp',
      component: Pyp
    }
  ]
})
