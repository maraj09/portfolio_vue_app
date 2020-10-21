import Vue from 'vue'
import App from './App.vue'
import VueNumber from 'vue-number-animation' 
import checkView from 'vue-check-view'
import  VueTypedJs  from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(VueNumber)
Vue.use(checkView)

new Vue({
  render: h => h(App),
}).$mount('#app')
