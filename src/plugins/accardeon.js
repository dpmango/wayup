import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

const plugin = Vue => {
  Vue.use(VueSimpleAccordion, {
    tags: {},
  });
}

export default plugin

