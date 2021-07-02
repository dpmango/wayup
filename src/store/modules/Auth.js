import { SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE } from '../mutation-types'
import { AuthApi, ProfileResource } from '@/store/api'
import moment from 'moment';

import { TRAINER_ROLE, SPORTSMAN_ROLE } from '@/config/api'
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


    let patchObject = {
      user: {},
      // workplaces: workplaces.map((x) => {
      //   return {
      //     coach: 1, // todo - tmp fix
      //     dateEnd: moment(x.dateStart).format('YYYY-MM-DD'),
      //     dateStart: moment(x.dateEnd).format('YYYY-MM-DD'),
      //     employer: x.employer,
      //     // id: 1, // todo - should ids be created on backend ?
      //     position: x.position,
      //     responsibilities: x.duties,
      //   }
      // }),
      // educations: educations.map((x) => {
      //   return {
      //     coach: 1, // todo - tmp fix
      //     dateEnd: moment(x.dateStart).format('YYYY-MM-DD'),
      //     dateStart: moment(x.dateStart).format('YYYY-MM-DD'),
      //     employer: x.employer,
      //     // id: 1 // todo - should ids be created on backend ?
      //     refresherCourses: x.courses,
      //     title: x.title,
      //   }
      // }),
      sportsmans: profile.sportsmans.map((x) => x.id),
    };

    const addToPatch = (field, name, val, type) => {
      const clear = (val, type) => {
        if (type === 'string'){
          return val.trim()
        } else if (type === 'date') {
          // todo..
        }

        return val
      }

      let curField = profile[name]
      let clearValue = clear(val);

      let targetField = clearValue

      if (field !== 'root'){
        curField = profile[field][name]
      }
      
      // setter 
      // console.log(curField, targetField)
      const hasChanged = curField !== targetField
      // console.log(`${name} has changed`, hasChanged);

      if (hasChanged){
        if (field !== 'root'){
          patchObject[field][name] = clearValue
        } else {
          patchObject[name] = clearValue
        }
      }
    }

    addToPatch('user', 'lastName', lastName, 'string')
    addToPatch('user', 'firstName', firstName, 'string')
    addToPatch('user', 'dateBirth', moment(dateBirth).format('YYYY-MM-DD'), 'date')
    addToPatch('user', 'nickname', nickname, 'string')
    addToPatch('user', 'email', email, 'string')
    addToPatch('user', 'phone', phone, 'string')

    addToPatch('root', 'isMarried', isMarried)
    addToPatch('root', 'passportSeries', passportSeries, 'string')
    addToPatch('root', 'passportNumber', passportNumber, 'string')
    addToPatch('root', 'address', registration, 'string')
    addToPatch('root', 'unitCode', docIssuer, 'string')
    addToPatch('root', 'unitName', docIssuerName, 'string')
    addToPatch('root', 'dateIssue', moment(docDate).format('YYYY-MM-DD'), 'date')
    
    console.log('patch object', patchObject)

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
