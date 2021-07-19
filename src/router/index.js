import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainForm",
    component: () =>
      import(/* webpackChunkName: "MainForm" */ "@/pages/MainForm.vue")
  },
  {
    path: "/confirm",
    name: "ConfirmingForm",
    component: () =>
      import(
        /* webpackChunkName: "ConfirmingForm" */ "@/pages/ConfirmingForm.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
