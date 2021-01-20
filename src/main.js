import Vue from "vue";
import { store } from "./vuex/store.js";
import App from "./App.vue";
import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
