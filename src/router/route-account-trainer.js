export default [
  // {
  //   path: "profile",
  //   component: () => import('../views/Personal/Trainer/Profile'),
  //   meta: {
  //     layout: "main",
  //     userSettings: true
  //   },
  //   name: "PersonalTrainerProfile",
  // },
  // {
  //   path: "profile-complete",
  //   component: () => import('../views/Personal/Trainer/ProfileComplete'),
  //   meta: {
  //     layout: "main",
  //     userSettings: true
  //   },
  //   name: "PersonalTrainerProfileСomplete",
  // },
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
    component: () => import('../views/Personal/Trainer/Information'),
    meta: {
      layout: "main",
      userSettings: true
    },
    name: "PersonalTrainerStat",
  },
]