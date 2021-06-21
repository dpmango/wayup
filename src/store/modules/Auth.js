import { SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE } from '../mutation-types'
import { AuthApi, ProfileResource } from '@/store/api'

/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  access: localStorage.getItem('access') || '',
  profile: {},
  role: localStorage.getItem('role') || '',
})

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/
const state = initialState
/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
  [SET_ACCESS](state, payload) {
    state.access = payload
  },
  [SET_REFRESH](state, payload) {
    state.refresh = payload
  },
  [SET_ROLE](state, payload) {
    state.role = payload
  },
  [SET_PROFILE](state, payload) {
    state.profile = payload
  },
  [REMOVE_ACCESS](state) {
    state.access = ''
  },
  [RESET](state) {
    const newState = initialState()
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  },
}
/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async login({ commit }, { email, password }) {
    const [err, data] = await AuthApi.login({ email, password })

    if (err) throw err

    const { access, refresh, userRole } = data

    commit(SET_ACCESS, access)
    commit(SET_REFRESH, refresh)
    commit(SET_ROLE, userRole)
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
    localStorage.setItem('role', userRole)

    return data
  },

  logout({ commit }) {
    commit(RESET)
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  },

  async refreshToken({ commit }, { refresh }) {
    const [err, data] = await AuthApi.refresh({ refresh })

    if (err) throw err

    commit(SET_ACCESS, data.access)
    commit(SET_REFRESH, data.refresh)
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)

    return data
  },
  async loadProfile({ commit }) {
    await ProfileResource.get()
      .then(response => {
        commit(SET_PROFILE, response.data)
      })
      .catch(err => {
        console.log(err)
        throw err.response
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
