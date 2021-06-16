import Vue from 'vue'
import VueRouter from 'vue-router'
import SportsmanChildren from './route-account-sportsmen'
import TrainerChildren from './route-account-trainer'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: '/account-trainer/profile'
    },

    // Календарь
    {
        path: '/schedule',
        name: 'Schedule',
        meta: {layout: 'main'},
        component: () => import('../views/Schedule'),
        children: [
            {
                path: 'month',
                component: () => import('@/components/Calendar/CalendarViewMonth'),
                meta: {layout: 'main'},
                name: 'CalendarMonth'
            },
            {
                path: 'week',
                component: () => import('@/components/Calendar/CalendarViewWeek'),
                meta: {layout: 'main'},
                name: 'CalendarWeek'
            }
        ]
    },

    // Индивидуальное занятие
    {
        path: '/plan/:id',
        name: 'Plan',
        meta: {layout: 'main'},
        component: () => import('@/components/Calendar/CalendarPlan'),
    },



    // Кабинет спортсмена
    {
        path: '/account-sportsman',
        name: 'PersonalSportsman',
        component: () => import('../views/AccountSportsman'),
        redirect: '/account-sportsman/main',
        children: SportsmanChildren,
    },

    // Кабинет тренера
    {
        path: '/account-trainer',
        name: 'PersonalTrainer',
        component: () => import('../views/AccountTrainer'),
        redirect: '/account-trainer/main',
        children: TrainerChildren,
    },

    // Индивидуальное занятие
    {
        path: "/training",
        name: "Training",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Training"),
    },

    // Wizard
    {
        path: "/wizard",
        name: "Wizard",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Wizard"),
    },

    // Treelist
    {
        path: "/treelist",
        name: "Treelist",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Treelist"),
    },

    // Команды и игроки
    {
        path: "/commands",
        name: "Commands",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Commapnds"),
    },

    // Медиа
    {
        path: "/media",
        name: "Media",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Media"),
    },

    // Чаты
    {
        path: "/chat",
        name: "Chat",
        meta: { layout: "main", requiresAuth: true },
        component: () => import("../views/Chat"),
    },

    // Регистрация
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'empty'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Registration')
    },

    // Авторизация
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Login')
    },

    // Библиотека компонентов
    {
        path: '/components',
        name: 'Components',
        meta: {layout: 'main'},
        component: () => import('../views/Components')

    },

    // Тестовые
    {
        path: '/demo2',
        name: 'Demo2',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Demo2')
    },
    {
        path: '/demo3',
        name: 'Demo3',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Demo3')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// Провека авторизации пользователя
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/registration"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("access");

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }

  if(!authRequired && loggedIn) {
      next("/");
  }
});


export default router
