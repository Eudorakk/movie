// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Boot from './bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
//import router from './router'
import list from './components/list'
import about from './components/About'
import movie from './components/movie'

Vue.use(Router)
import VueResource from 'vue-resource'  
Vue.use(VueResource) 
Vue.config.productionTip = false
const router=new Router({
  routes: [
    {
      path: '/home',
      component: list,
      children:[
      {path:"/home/movie",component:movie}]
    },
        {
      path: '/about',
      component: about
    },
    {
    	path:'/',
    	//重定向
    	redirect:'/home'
    }
  ]
});
/* eslint-disable no-new */
window.onload=function (){
	var vm=new Vue({
  el: '#app',
  router,
  //需要加载的是哪个模板,如果没有是不会再页面上显示内容的，并且需要跟组件是同一个template
template: '<app/>',
  components: { App }
})
}


