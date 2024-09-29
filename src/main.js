import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'; // Import Tailwind CSS here


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
