import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './common/common.css'
Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
