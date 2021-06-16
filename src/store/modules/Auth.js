import {
  SET_ACCESS, RESET, REMOVE_ACCESS
} from '../mutation-types';

/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  access: localStorage.getItem("access") || "",
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

  async  login({commit}, payload) {
    commit(SET_ACCESS, payload);
    localStorage.setItem("access", payload);
  },

  logout({commit}) {
    commit(REMOVE_ACCESS);
    localStorage.removeItem("access");
  }


};

export default {
  state,
  getters,
  mutations,
  actions
}
