import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueDraggable from 'vue-draggable'


// import  SvgSprite  from 'vue-svg-sprite'
// import moment from 'moment'
// import '@/scss/app.scss'
// Vue.use(SvgSprite, {
//     url: '@/assets/images/svg/sprite.svg',
// class: 'svg-icon',
// } /* options */)
// Vue.prototype.moment = moment


Vue.use(VueDraggable)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    vuetify,
    VueDraggable,

// SvgSprite,
    // moment,

    render: h => h(App)
}).$mount('#app')
