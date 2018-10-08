// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { post , fetch } from './fetch/api'
import './config/rem'

Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

//引入mockjs
require('./mock.js')
//引入scss
require('./common/scss/index.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//过滤器
Vue.filter('getYMD' , function(input){
  return input.split(' ')[0];
})
