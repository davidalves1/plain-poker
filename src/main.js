import Vue from 'vue';
import toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$store = store;

Vue.use(toasted, {
  duration: 4000,
  keepOnHover: true,
  closeOnSwipe: true,
  iconPack: 'material',
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
