import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  actions: {
    // Сброс всего хранилища
    reset({ commit }) {
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`)
      })
    },
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
