import Vuetify from '@/plugins/vuetify'
import DatePicker from '@/plugins/datepicker'
import Mask from '@/plugins/mask';
import DropDown from '@/plugins/dropdown'
import Draggable from '@/plugins/draggable'
import Muuri from '@/plugins/muuri'
import Validate from '@/plugins/vuelidate';
import Accardeon from '@/plugins/accardeon'

const registerPlugins = Vue => {
  Vuetify(Vue);
  DatePicker(Vue);
  Mask(Vue);
  DropDown(Vue);
  Draggable(Vue);
  Muuri(Vue);
  Validate(Vue);
  Accardeon(Vue);
}

export default registerPlugins
