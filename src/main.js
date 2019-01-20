// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import path from "path";
Vue.config.productionTip = false

//import VueRouter from 'vue-router'
//Vue.use(VueRouter); //用Vue这个方法使用VueRouter


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App }, // es6写法
    template: '<App/>'
})

// let app = Vue.extend(App); //挂载App组件
// const routes = [{ path: '/goods', components: goods }]
// let router = new VueRouter({
//     routes
// }); //实例化一个路由