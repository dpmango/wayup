import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueDraggable from 'vue-draggable'
import VueSimpleAccordion from 'vue-simple-accordion'
import 'vue-simple-accordion/dist/vue-simple-accordion.css'
import DropdownMenu from 'v-dropdown-menu'
import VueMuuri from 'vue-muuri'
import 'vue-muuri/dist/vue-muuri.css'
import Vuelidate from 'vuelidate'
import { VueMaskDirective } from 'v-mask'
import VueDatePicker from '@mathieustan/vue-datepicker'
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css'

Vue.use(VueDatePicker, {
  lang: 'ru',
})

Vue.directive('mask', VueMaskDirective)

Vue.use(DropdownMenu, {
  direction: 'right',
  overlay: false,
  overlayBgColor: 'transparent',
})

Vue.use(VueDraggable)

Vue.use(VueMuuri)

Vue.use(Vuelidate)

Vue.use(VueSimpleAccordion, {
  tags: {},
})

Vue.config.productionTip = false

Vue.component('base-label', () => import('./components/library/old/BaseLabel.vue'))
Vue.component('base-link', () => import('./components/library/old/BaseLink.vue'))
Vue.component('base-select-mini', () => import('./components/library/old/BaseSelectMini.vue'))

Vue.component('base-select', () => import('./components/library/BaseSelect.vue'))
Vue.component('base-select-simple', () => import('./components/library/BaseSelectSimple.vue'))
Vue.component('base-select-primary', () => import('./components/library/BaseSelectPrimary.vue'))
Vue.component('base-input', () => import('./components/library/BaseInput.vue'))
Vue.component('base-input-password', () => import('./components/library/BaseInputPassword'))
Vue.component('base-badge', () => import('./components/library/BaseBadge'))
Vue.component('base-tag', () => import('./components/library/BaseTag'))
Vue.component('base-checkbox', () => import('./components/library/BaseCheckbox'))
Vue.component('base-button', () => import('./components/library/BaseButton'))
Vue.component('base-segment', () => import('./components/library/BaseSegment'))
Vue.component('base-textarea', () => import('./components/library/BaseTextarea'))
Vue.component('base-switch', () => import('./components/library/BaseSwitch'))
Vue.component('base-radio-button', () => import('./components/library/BaseRadioButton'))

new Vue({
  router,
  store,
  vuetify,
  VueDraggable,
  VueSimpleAccordion,
  DropdownMenu,
  VueDatePicker,
  VueMaskDirective,

  // SvgSprite,
  // moment,

  render: h => h(App),
}).$mount('#app')
