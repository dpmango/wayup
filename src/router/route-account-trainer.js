export default [
    {
        path: "main",
        component: () => import('../views/Personal/Trainer/Main'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalTrainerMain",
    },
    {
        path: "stat",
        component: () => import('../views/Personal/Trainer/Stat'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalTrainerStat",
    },
]