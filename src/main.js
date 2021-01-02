import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/sass/main.scss'
import { routes } from './routes'
import store from './store/store'

console.log('loc=>' + window.location);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-fa384.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
