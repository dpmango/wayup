import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from "@/views/Schedule";
import CalendarViewMonth from "@/components/CalendarViewMonth";
import CalendarViewWeek from "@/components/CalendarViewWeek";
// import TrainingPlan from "@/views/TrainingPlan";
// import TrainingPlanGroup from "@/components/TrainingPlanGroup";
// import TrainingPlanEvent from "@/components/TrainingPlanEvent";
// import About from "@/views/About";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Schedule',
        meta: {layout: 'main'},
        component: Schedule,
    },
    {
        path: '/schedule',
        name: 'Schedule',
        meta: {layout: 'main'},
        component: Schedule,
        children: [
            {
                path: 'month',
                component: CalendarViewMonth,
                meta: {layout: 'main'},
                name: 'CalendarMonth'
            },
            {
                path: 'week',
                component: CalendarViewWeek,
                meta: {layout: 'main'},
            }
        ]
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
        path: '/training-plan',
        name: 'TrainingPlan',
        meta: {layout: 'main'},

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/TrainingPlan')
        // component: TrainingPlan,
        // children: [
        //     {
        //         path: 'group',
        //         component: TrainingPlanGroup,
        //         meta: {layout: 'main'},
        //         name: 'TrainingPlanGroup'
        //     },
        //     {
        //         path: 'event',
        //         component: TrainingPlanEvent,
        //         meta: {layout: 'main'},
        //         name: 'TrainingPlanEvent'
        //
        //     }
        // ]
    },


    {
        path: '/schedule-year',
        name: 'ScheduleYear',
        meta: {layout: 'main'},

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleYear')
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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
