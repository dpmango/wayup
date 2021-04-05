import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from "@/views/Schedule";
// import About from "@/views/About";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Schedule',
        meta: {layout: 'main'},
        component: Schedule
    },
    {
        path: '/training',
        name: 'Training',
        meta: {layout: 'main'},

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Training')
        // component: About
    },

    {
        path: '/test',
        name: 'Test',
        meta: {layout: 'main'},

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Test')
        // component: About
    },
    {
        path: '/test2',
        name: 'Test2',
        meta: {layout: 'main'},

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Test2')
        // component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
