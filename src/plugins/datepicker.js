import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';


const plugin = Vue => {
  Vue.use(VueDatePicker, {
    lang: 'ru'
  });  
}

export default plugin


