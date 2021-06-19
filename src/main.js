import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import registerPlugins from '@/plugins'
import * as components from '@/components'


Vue.config.productionTip = false

registerPlugins(Vue)


Vue.component('base-label', () => import('./components/library/old/BaseLabel.vue'));
Vue.component('base-link', () => import('./components/library/old/BaseLink.vue'));
Vue.component('base-select-mini', () => import('./components/library/old/BaseSelectMini.vue'));


Vue.component('base-select', () => import('./components/library/BaseSelect.vue'));
Vue.component('base-input', () => import('./components/library/BaseInput.vue'));
Vue.component('base-input-password', () => import('./components/library/BaseInputPassword'));
Vue.component('base-badge', () => import('./components/library/BaseBadge'));
Vue.component('base-tag', () => import('./components/library/BaseTag'));
Vue.component('base-checkbox', () => import('./components/library/BaseCheckbox'));
Vue.component('base-button', () => import('./components/library/BaseButton'));
Vue.component('base-segment', () => import('./components/library/BaseSegment'));
Vue.component('base-textarea', () => import('./components/library/BaseTextarea'));
Vue.component('base-switch', () => import('./components/library/BaseSwitch'));
Vue.component('base-radio-button', () => import('./components/library/BaseRadioButton'));



for (const name in components) {
  Vue.component(name, components[name])
}


new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
