import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'

import Config from './config/'

//Vue.config.productionTip = false
Vue.prototype.$Config = Config
Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
