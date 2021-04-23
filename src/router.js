import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Details from "@/components/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forecast/:id",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
