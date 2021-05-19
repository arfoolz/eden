import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import http from './axios'

Vue.use(require('vue-moment'));
Vue.config.productionTip = false
Vue.use(http)

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
Vue.use(Toast, {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false,
  transition: 'Vue-Toastification__bounce',
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
