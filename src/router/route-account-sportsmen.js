export default [
    {
        path: "main",
        component: () => import('../views/Personal/Sportsman/Main'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanMain",
    },
    {
        path: "testing",
        component: () => import('../views/Personal/Sportsman/Testing'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanTesting",
    },
    {
        path: "rating",
        component: () => import('../views/Personal/Sportsman/Rating'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanRating",
    },
    {
        path: "stats",
        component: () => import('../views/Personal/Sportsman/Stat'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanStat",
    },
    {
        path: "medical",
        component: () => import('../views/Personal/Sportsman/Medical'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanMedical",
    },
    {
        path: "homework",
        component: () => import('../views/Personal/Sportsman/Homework'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanHomework",
    },
    {
        path: "about",
        component: () => import('../views/Personal/Sportsman/About'),
        meta: {
            layout: "main",
            userSettings: true
        },
        name: "PersonalSportsmanAbout",
    },
]