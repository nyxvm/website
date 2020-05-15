import Vue from "vue";
import VueRouter from "vue-router";
import Performance from './components/Performance'
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/app",
        component: App
    },
    {
        path: "/performance",
        component: Performance
    },
    {
        path: '/',
        redirect: '/app'
    }
]

var router = new VueRouter({
    routes
})
export default router;
