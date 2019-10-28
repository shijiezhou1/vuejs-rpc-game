import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/playercomputer",
    name: "playervscomputer",
    component: () => import("../views/Playercomputer.vue")
  },
  {
    path: "/computercomputer",
    name: "computervscomputer",
    component: () => import("../views/Computercomputer.vue")
  },
  {
    path: "/result",
    name: "result",
    component: () => import("../views/Result.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
