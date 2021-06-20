import { RESET, SET_EVENT, ADD_EX, SET_EVENT_LIST, SET_UTILS } from '../mutation-types'

import { EventResource } from '../api.js'
import moment from 'moment-timezone'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  event: {},
  eventList: [],
  exersiceList: [],
  utils: [],
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
  [SET_EVENT](state, payload) {
    state.event = payload
  },
  [ADD_EX](state, payload) {
    state.exersiceList.push(payload)
  },
  [SET_EVENT_LIST](state, payload) {
    state.eventList = payload
  },
  [SET_UTILS](state, payload) {
    state.utils = payload
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
const getters = {
  events(state) {
    let events = []
    let locations = state.utils.locations
    state.eventList.map(item => {
      let diffMin = moment(item.dateTo).diff(moment(item.dateFrom), 'minutes')
      let location = locations.filter(loc => loc.id == item.location)
      let dataEvent = {
        id: item.id,
        start_time: item.dateFrom,
        duration: parseFloat((diffMin / 60).toFixed(1)),
        name: item.title,
        type_of_preparation: location[0].name,
        rating: '5 / 10',
      }
      events.push(dataEvent)
    })

    console.log(events)

    return events
  },
  groupSchedule(state) {
    const startWeek = date => {
      console.log(date)
      return moment(date).startOf('week')
    }
    const endWeek = date => {
      return moment(date).endOf('week')
    }

    let groupSchedule = []
    for (let i = 1; i <= 7; i++) {
      groupSchedule[i] = []
    }

    state.eventList.map(item => {
      if (
        moment(item.start_time).isBetween(
          startWeek(item.start_time).toDate(),
          endWeek(item.start_time).toDate(),
          undefined,
          '[]'
        )
      ) {
        let day = moment(item.start_time).isoWeekday()
        groupSchedule[day].push(item)
      }
    })

    return groupSchedule
  },
}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async createEvent({ commit }, data) {
    await EventResource.create(data)
      .then(response => {
        commit(SET_EVENT, response.data)
      })
      .catch(err => {
        console.log(err)
        throw err.response
      })
  },

  async loadEvents(store) {
    await store.dispatch('loadUtils').then(() => {
      EventResource.list()
        .then(response => {
          store.commit(SET_EVENT_LIST, response.data)
        })
        .catch(err => {
          console.log(err)
          throw err.response
        })
    })
  },

  async loadUtils({ commit }) {
    await EventResource.utils()
      .then(response => {
        commit(SET_UTILS, response.data)
      })
      .catch(err => {
        console.log(err)
        throw err.response
      })
  },

  async updateEvent(store, data) {
    console.log(data)
    await EventResource.update(data.id, data.data)
      .then(response => {
        console.log(response)
        console.log(store.event)
        //commit(SET_UTILS, response.data);
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
