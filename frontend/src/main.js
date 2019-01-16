import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

// Vue.use(Vuex);
Vue.use(VueRouter);

// router must be imported after Vue.use(Vuex) because use store
import store from './store';
import router from './router';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
