import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.less'
import './assets/jq.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
