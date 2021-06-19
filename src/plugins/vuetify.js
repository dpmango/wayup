import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'


const opts = {}

const plugin = Vue => {
  Vue.use(Vuetify)

  return new Vuetify(opts)
}

export default plugin
