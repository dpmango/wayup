import {
  SET_PLANS,
  RESET,
  SET_GROUPS
} from '../mutation-types';
import moment from 'moment-timezone';
import { PlanResource, GroupResource} from '../api.js';
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  plans: [],
  exer: [],
  plan_parts: [],
  plan: {},
  groups: [],

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
  [SET_PLANS](state, payload) {
    state.plans = payload;
  },
  [SET_GROUPS](state, payload) {
    state.groups = payload;
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
  groupList(state) {
      let groupList = [];

      state.groups.map(item => {
        groupList.push(item.title)
      });
      return groupList;
  },

  events(state) {
    let events = [];

    state.plans.map(item => {
      let diffMin = moment(item.end_time).diff(moment(item.start_time), 'minutes');
      let dataEvent = {
        id: item.id,
        start_time: item.start_time,
        duration: parseFloat((diffMin/60).toFixed(1)),
        name: item.name,
        type_of_preparation: item.type_of_preparation,
        rating: '5 / 10',
      };
      events.push(dataEvent);
    });

    return events;

  }
};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async loadPlans({commit}) {
    await PlanResource.get().then(response => {
      commit(SET_PLANS, response.data);
    }).catch(err => {
      console.log(err);
      throw err.response;
    });
  },

  loadGroups({commit}) {
    GroupResource.get().then(response => {
      commit(SET_GROUPS, response.data);
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
