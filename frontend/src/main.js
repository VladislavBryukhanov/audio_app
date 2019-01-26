import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './store';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(Vuetify);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
