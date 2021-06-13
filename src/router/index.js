import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/Categories",
    name: "Categories",
    meta: { layout: "main" },
    component: () => import("@/views/Categories.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/Record",
    name: "Record",
    meta: { layout: "main" },
    component: () => import("@/views/Record.vue"),
  },
  {
    path: "/Detail-Record",
    name: "Detail-Record",
    meta: { layout: "main" },
    component: () => import("@/views/Detail-Record.vue"),
  },
  {
    path: "/History",
    name: "History",
    meta: { layout: "main" },
    component: () => import("@/views/History.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Planning",
    name: "Planning",
    meta: { layout: "main" },
    component: () => import("@/views/Planning.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    meta: { layout: "main" },
    component: () => import("@/views/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
