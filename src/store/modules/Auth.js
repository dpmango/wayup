import { SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE } from '../mutation-types'
import { AuthApi, ProfileResource } from '@/store/api'
import { TRAINER_ROLE, SPORTSMAN_ROLE, TIME_ACCESS } from '@/config/api'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  access: localStorage.getItem('access') || '',
  profile: {},
  role: localStorage.getItem('role') || '',
  refresh: localStorage.getItem('refresh') || '',
});

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
};
/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {

};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async login({ commit }, { email, password }) {
    const [err, data] = await AuthApi.login({ email, password })

    if (err) throw err

    const { access,  userRole, refresh } = data;

    commit(SET_ACCESS, access);
    commit(SET_REFRESH, refresh);
    commit(SET_ROLE, userRole);
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
    localStorage.setItem('role', userRole);

    document.cookie = "access=" + access + "; max-age=" + TIME_ACCESS;

    return data
  },

  logout({ commit }) {
    commit(RESET);
    document.cookie = "access=" + localStorage.getItem('access') + "; max-age=-1";
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('role')


  },

  async refreshToken({ commit, state }) {
    const [err, data] = await AuthApi.refresh(state.refresh);

    if (err) throw err;

    commit(SET_ACCESS, data.access);
    commit(SET_REFRESH, data.refresh);
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);

    document.cookie = "access=" + data.access + "; max-age=" + TIME_ACCESS;

    return data
  },

  async loadProfile({ commit, state }) {

    if(state.role == TRAINER_ROLE) {
      await ProfileResource.getTrainer()
        .then(response => {
          commit(SET_PROFILE, response.data)
        })
        .catch(err => {
          console.log(err)
          throw err.response
        })
    }

    if(state.role == SPORTSMAN_ROLE) {
      await ProfileResource.getSportsman()
        .then(response => {
          commit(SET_PROFILE, response.data)
        })
        .catch(err => {
          console.log(err)
          throw err.response
        })
    }


  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
