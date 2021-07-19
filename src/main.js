import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMask from "./plugins/vuemask";
import Vuelidate from "./plugins/vuelidate";
import elementUI from "./plugins/elementUI";
import "./assets/tailwind.css";
import "./components/registerBaseComponents";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  elementUI,
  VueMask,
  Vuelidate,

  render: (h) => h(App)
}).$mount("#app");
