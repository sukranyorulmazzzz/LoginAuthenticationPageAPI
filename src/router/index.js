import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
