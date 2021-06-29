import { SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE } from '../mutation-types'
import { AuthApi, ProfileResource } from '@/store/api'
import moment from 'moment';

import { TRAINER_ROLE, SPORTSMAN_ROLE } from '@/config/api'
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
const getters = {
  profile: (state) => state.profile
}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async login({ commit }, { email, password }) {
    const [err, data] = await AuthApi.login({ email, password })

    if (err) throw err

    //const { access, refresh, userRole } = data

    const { access,  userRole } = data

    commit(SET_ACCESS, access)
    //commit(SET_REFRESH, refresh)
    commit(SET_ROLE, userRole)
    localStorage.setItem('access', access)
    //localStorage.setItem('refresh', refresh)
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
  
  async editProfile({commit}, {profile, personal, passport, workplaces, educations}){
    
    const {
      lastName,
      firstName,
      nickname,
      dateBirth,
      email,
      phone,
      isMarried,
      // group,
      // rhesus,
    } = personal;
    
    const {
      passportSeries, passportNumber, docIssuer, docIssuerName, registration, docDate
    } = passport

    const patchObject = {
      ...profile,
      ...{
        user: {
          ...profile.user,
          ...{
            lastName,
            firstName,
            dateBirth: moment(dateBirth).format('YYYY-MM-DD'),
            nickname,
            email,
            phone,
            // patronymic // TODO - no input or conflict with firstName
          },
          ...{
            isMarried,
            passportSeries,
            passportNumber,
            address: registration,
            unitCode: docIssuer,
            unitName: docIssuerName,
            dateIssue: moment(docDate).format('YYYY-MM-DD'),
          },
        },
        workplaces: workplaces.map((x) => {
          return {
            coach: 1, // todo - tmp fix
            dateEnd: moment(x.dateStart).format('YYYY-MM-DD'),
            dateStart: moment(x.dateEnd).format('YYYY-MM-DD'),
            employer: x.employer,
            // id: 1, // todo - should ids be created on backend ?
            position: x.position,
            responsibilities: x.duties,
          }
        }),
        educations: educations.map((x) => {
          return {
            coach: 1, // todo - tmp fix
            dateEnd: moment(x.dateStart).format('YYYY-MM-DD'),
            dateStart: moment(x.dateStart).format('YYYY-MM-DD'),
            employer: x.employer,
            // id: 1 // todo - should ids be created on backend ?
            refresherCourses: x.courses,
            title: x.title,
          }
        }),

        sportsmans: profile.sportsmans.map((x) => x.id),
      },
    };

    const [err, data] = await ProfileResource.edit(patchObject)

    if (err) throw err

    commit(SET_PROFILE, data)

    return data
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
