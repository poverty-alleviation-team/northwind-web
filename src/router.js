import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



let RouteList = [
    {
        path: '/',
        name: 'Login',
        meta: {
            title: '后台登录',
            keepAlive: false
        },
        components: {
            blank: resolve => require(['@/views/login/Login.vue'], resolve),
        }
    },
    {
        path: '/index',
        meta: {
            title: '首页',
            keepAlive: false,
        },
        component: resolve => require(['@/views/layout/App.vue'], resolve),
    },

]


export default new Router({routes: RouteList})


