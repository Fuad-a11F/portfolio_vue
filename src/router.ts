import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/views/Main-page.vue";
import DetailPage from "@/views/Detail-page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
