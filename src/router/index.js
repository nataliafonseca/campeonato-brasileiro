import Vue from "vue";
import VueRouter from "vue-router";

import ClubesLista from "../views/ClubesLista.vue";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/classificacao",
    name: "classificacao",
    component: ClubesLista,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
