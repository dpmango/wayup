import {
  RESET, SET_EVENT, ADD_EX
} from '../mutation-types';

import { EventResource } from '../api.js';
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  event: {},
  exersiceList: []
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
  [SET_EVENT](state, payload) {
    state.event = payload;
  },
  [ADD_EX](state, payload) {
    state.exersiceList.push(payload);
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
  async createEvent({commit}) {

    await EventResource.create(data).then(response => {
      commit(SET_EVENT, response.data);
    }).catch(err => {
      console.log(err);
      throw err.response;
    });
  },


};

export default {
  state,
  getters,
  mutations,
  actions
}
