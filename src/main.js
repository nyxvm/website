import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import i18n from './i18n.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app');
