import Vue from 'vue'
import Router from 'vue-router'
import VueResource from "vue-resource";

import app from "@/components/app/app";
import goods from "@/components/goods/goods";
import ratings from "@/components/ratings/ratings";
import seller from "@/components/seller/seller";


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    routes: [{
        path: '/',
        name: app,
        component: app,
        children: [{
            path: '/goods',
            name: goods,
            component: goods
        }, {
            path: '/ratings',
            name: ratings,
            component: ratings
        }, {
            path: '/seller',
            name: seller,
            component: seller
        }, {

            path: '/',
            redirect: '/goods' //重定向,打开页面就在goods

        }]
    }]
})

// {
//   path: '/',
//     name: 'HelloWorld',
//       component: HelloWorld,
//     }