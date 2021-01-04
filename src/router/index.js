import Vue from "vue";
import VueRouter from "vue-router";
import * as VueGoogleMaps from "vue2-google-maps";
import routes from "./routes";
import { axiosInstance } from "boot/axios.js";

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDooa-E1-gQFUYqm2IgEWQK-GDnL31m1E4",
        librairies: "places"
    }
});
Vue.use(axiosInstance);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
    const Router = new VueRouter({
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes,

        // Leave these as they are and change in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    });

    return Router;
}
