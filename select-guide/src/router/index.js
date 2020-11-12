import Vue from "vue";
import VueRouter from "vue-router";
import Italian from "../views/Italian.vue";
import English from "../views/English.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Eng",
    component: English,
  },
  {
    path: "/ita",
    name: "Ita",
    component: Italian,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
