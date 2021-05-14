import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueDraggable from 'vue-draggable'
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import DropdownMenu from 'v-dropdown-menu'
import VueMuuri from 'vue-muuri'
import 'vue-muuri/dist/vue-muuri.css'


// import vueCustomScrollbar from 'vue-custom-scrollbar'
// import "vue-custom-scrollbar/dist/vueScrollbar.css"


// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'


// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import { Draggable } from 'draggable-vue-directive'
 // Base style, required.


// import  SvgSprite  from 'vue-svg-sprite'
// import moment from 'moment'
// import '@/scss/app.scss'
// Vue.use(SvgSprite, {
//     url: '@/assets/images/svg/sprite.svg',
// class: 'svg-icon',
// } /* options */)
// Vue.prototype.moment = moment





Vue.use(DropdownMenu,{
    direction:'right',
    overlay: false,
    overlayBgColor:'transparent'
})

Vue.use(VueDraggable)

Vue.use(VueMuuri)

// Vue.use(vueCustomScrollbar)

//
// import SwiperCore, {
//     Scrollbar,Mousewheel
// } from 'swiper/core';

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// SwiperCore.use([Scrollbar,Mousewheel]);

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

// Vue.component('base-button', () => import('./components/BaseButton.vue'));
Vue.component('base-label', () => import('./components/BaseLabel.vue'));
Vue.component('base-link', () => import('./components/BaseLink.vue'));
// Vue.component('base-select', () => import('./components/BaseSelect.vue'));
Vue.component('base-select-mini', () => import('./components/BaseSelectMini.vue'));



Vue.component('base-select', () => import('./components/library/BaseSelect.vue'));
Vue.component('base-input', () => import('./components/library/BaseInput.vue'));
Vue.component('base-input-password', () => import('./components/library/BaseInputPassword'));
Vue.component('base-badge', () => import('./components/library/BaseBadge'));
Vue.component('base-tag', () => import('./components/library/BaseTag'));
Vue.component('base-checkbox', () => import('./components/library/BaseCheckbox'));
Vue.component('base-button', () => import('./components/library/BaseButton'));
Vue.component('base-segment', () => import('./components/library/BaseSegment'));
Vue.component('base-textarea', () => import('./components/library/BaseTextarea'));


new Vue({
    router,
    store,
    vuetify,
    VueDraggable,
    VueSimpleAccordion,
    DropdownMenu,

// SvgSprite,
    // moment,

    render: h => h(App)
}).$mount('#app')
