import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jQuery'
window.jQuery = jQuery


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

global.jQuery = require('jQuery');
var $ = global.jQuery;
window.$ = $;


