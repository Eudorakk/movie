import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import list from '../components/list'
import about from '../components/About'

Vue.use(Router)
import VueResource from 'vue-resource'  
Vue.use(VueResource) 
export default new Router({
  routes: [
    {
      path: '/',
      component: list
    },
        {
      path: '/about',
      component: about
    }
  ]
})
