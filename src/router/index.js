import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import store from "@/store";

const getMounth = store.getters["Getmonth"];

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: () => {
      let date = new Date();
      let todaymonth = getMounth.filter((e) => e.id === date.getMonth());

      return `${date.getFullYear()}/${todaymonth.map(
        (e) => e.title
      )}/${date.getDate()}`;
    },
    component: () => import("@/views/auth"),
  },
  {
    path: "/:year/:month/:day",
    name: "Mainpage",
    component: () => import("@/views/mainform"),
  },
  {
    path: "/:year/:month/",
    name: "MainpageRDR",
    redirect: "/:month/1",
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404error"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
