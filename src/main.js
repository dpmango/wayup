import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueDraggable from 'vue-draggable'
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';


// import  SvgSprite  from 'vue-svg-sprite'
// import moment from 'moment'
// import '@/scss/app.scss'
// Vue.use(SvgSprite, {
//     url: '@/assets/images/svg/sprite.svg',
// class: 'svg-icon',
// } /* options */)
// Vue.prototype.moment = moment


Vue.use(VueDraggable)
Vue.use(VueSimpleAccordion, {
    tags: {
        // list: "ul",
        // list__item: "div",
        // item__heading: "div",
        // heading__content: "div",
        // heading__icon: "span",
        // item__content: "div"
    },
});

Vue.config.productionTip = false


new Vue({
    router,
    store,
    vuetify,
    VueDraggable,
    VueSimpleAccordion,

// SvgSprite,
    // moment,

    render: h => h(App)
}).$mount('#app')
