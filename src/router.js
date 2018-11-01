import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import With from './views/With.vue'
import goWhere from './views/goWhere.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/with',
      name: 'with',
      component: With,
      children: [{
        path: 'goWhere',
        component: goWhere
      }]
    }
  ]
})