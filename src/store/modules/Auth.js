import {
  SET_ACCESS, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE
} from '../mutation-types';
import { ProfileResource } from '../api.js';

/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  access: localStorage.getItem("access") || "",
  profile: {},
  role: localStorage.getItem("role") || "",
});

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/
const state = initialState;
/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
  [SET_ACCESS](state, payload) {
    state.access = payload;
  },
  [SET_ROLE](state, payload) {
    state.role = payload;
  },
  [SET_PROFILE](state, payload) {
    state.profile = payload;
  },
  [REMOVE_ACCESS](state) {
    state.access = '';
  },
  [RESET](state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    });
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

  async login({commit}, payload) {
    commit(SET_ACCESS, payload);
    localStorage.setItem("access", payload);
  },

  role({commit}, payload) {
    commit(SET_ROLE, payload);
    localStorage.setItem("role", payload);
  },

  logout({commit}) {
    commit(RESET);
    localStorage.removeItem("access");
  },

  async loadProfile({commit}) {
    await ProfileResource.get().then(response => {
      commit(SET_PROFILE, response.data);
    }).catch(err => {
      console.log(err);
      throw err.response;
    });
  }


};

export default {
  state,
  getters,
  mutations,
  actions
}
