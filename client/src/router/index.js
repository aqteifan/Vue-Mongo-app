import Vue from 'vue'
import Router from 'vue-router'
// the @ sign alies that point to root of our vue cli generated src folder
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'

// Use Router plugin
// Give access to roter vue components
// template markup will get injected in router-view tag in App.vue
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
