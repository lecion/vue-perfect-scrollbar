import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Panel from './panel.vue'
import RandomList from './random-list.vue'
import MySite from './mysite.vue'

const router = new VueRouter({
  routes: [{
    name: 'root',
    path: '/',
    redirect: '/random',
    component: Panel,
    children: [{
      name: 'random-list',
      path: 'random',
      component: RandomList,
    }, {
      name: 'my site name',
      path: 'mysite',
      component: MySite,
    }],

  }],
  mode: 'history'
})


new Vue({ router }).$mount('#app')