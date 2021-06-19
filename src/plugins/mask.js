import { VueMaskDirective } from 'v-mask'


const plugin = Vue => {
  Vue.directive('mask', VueMaskDirective);
}

export default plugin

