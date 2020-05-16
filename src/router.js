import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Documentation from "@/components/Documentation";
import Download from "@/components/Download";
import Performance from "@/components/Performance";
import Playground from "@/components/Playground";
import Library from "@/components/Library";
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/performance",
    component: Performance
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/documentation',
    component: Documentation
  },
  {
    path: '/download',
    component: Download
  },
  {
    path: '/performance',
    component: Performance
  },
  {
    path: '/playground',
    component: Playground
  },
  {
    path: '/library',
    component: Library
  },
]

var router = new VueRouter({
  routes
})
export default router;
