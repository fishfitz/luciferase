import Vue from 'vue';
import Router from 'vue-router';

import './assets/scss/main.scss';

Vue.use(Router);

const vm = new Vue({
  el: '#app',
  router: new Router({
    mode: process.env.NODE_ENV === 'production' ? 'abstract' : 'hash',
    routes: [
      { path: '/', component: () => import('./pages/index.vue') },
      { path: '/play', component: () => import('./pages/play.vue') },
      { path: '/credits', component: () => import('./pages/credits.vue') },
      { path: '/settings', component: () => import('./pages/settings.vue') }
    ]
  }),
  render: h => h('router-view')
});

if (process.env.NODE_ENV === 'production') vm._router.replace('/');
