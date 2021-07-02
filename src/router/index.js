import Vue from 'vue'
import VueRouter from 'vue-router'
import SportsmanChildren from './route-account-sportsmen'
import TrainerChildren from './route-account-trainer'
import Vuex from 'vuex'
import store from '@/store';

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {
        path: "/",
        redirect: (() => {
            const role = localStorage.getItem('role');
            if(role == 'C') {
                return '/account-trainer/information';
            }
            if(role == 'Sp') {
                return '/account-sportsman';
            }


        })
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
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarMonth'
            },
            {
                path: 'week',
                component: () => import('@/components/Calendar/CalendarViewWeek'),
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarWeek'
            }
        ]
    },

    // Индивидуальное занятие
    {
        path: '/plan/:id',
        name: 'Plan',
        meta: {layout: 'main', userSettings: true},
        component: () => import('@/components/Calendar/CalendarPlan'),
    },

    // Оценка индивидуального занятия
    {
        path: '/rating/:id',
        name: 'Rating',
        meta: {layout: 'main', userSettings: true},
        component: () => import('@/components/Calendar/CalendarRating'),
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
        redirect: '/account-trainer/profile-complete',
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
        meta: { layout: "main", requiresAuth: true, userSettings: true },
        component: () => import("../views/Wizard"),
    },

    // Treelist
    {
        path: "/treelist",
        name: "Treelist",
        meta: { layout: "main", requiresAuth: true, userSettings: true },
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
        component: () => import('../views/Registration')
    },

    // Авторизация
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login')
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
        component: () => import('../views/Demo2')
    },
    {
        path: '/demo3',
        name: 'Demo3',
        meta: {layout: 'main'},
        component: () => import('../views/Demo3')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return '';
}

// Провека авторизации пользователя
router.beforeEach((to, from, next) => {


  const publicPages = ['/login', '/registration']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('access')

    const sportsmanPage = '/account-sportsman';
    const trainerPage = '/account-trainer';
    const role = localStorage.getItem('role');
    const isPrivateSportsman = to.path.includes(sportsmanPage)
    const isPrivateTrainer = to.path.includes(trainerPage)
    //console.log(authRequired);
    if (authRequired) {
        let accessCookie = getCookie('access');
        if(accessCookie) {
            //console.log(accessCookie);
        } else {
            const $refreshToken = async () => {
                const refresh = localStorage.getItem('refresh')

                if (refresh) {
                    try {
                        await store.dispatch('auth/refreshToken', { refresh })
                    } catch (error) {
                        store.dispatch('auth/logout')

                    }
                }
            }
            $refreshToken();

        }
    }


    if(role == 'C' && isPrivateSportsman) {
        next('/account-trainer')
    }

    if(role == 'Sp' && isPrivateTrainer) {
        next('/account-sportsman')
    }

      if (authRequired && !loggedIn) {
        next('/login')
      } else {
        next()
      }

      if (!authRequired && loggedIn) {
        next('/')
      }
})

export default router
