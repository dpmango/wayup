import axios from 'axios'
import { API_URL, API_URL_GRAF } from '@/config/api'

const token = localStorage.getItem('token')
const access = localStorage.getItem('access')

const HTTP = axios.create({
  baseURL: API_URL,
})

const HTTP_GRAF = axios.create({
  baseURL: API_URL_GRAF,
  headers: { Authorization: access ? `Bearer ${access}` : '', 'Content-Type': 'application/json; charset=utf-8' },
})

if (token) {
  HTTP.headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json; charset=utf-8' }
}

HTTP_GRAF.interceptors.request.use(x => {
  console.log(`${x.method.toUpperCase()} | ${x.url}`, x.params, x.data)
  const access = localStorage.getItem('access')

  if (access) x.headers.Authorization = `Bearer ${access}`

  return x
})

HTTP_GRAF.interceptors.response.use(
  x => {
    console.log(`${x.status} | ${x.config.url}`, x.data)
    const access = localStorage.getItem('access')

    if (access) x.headers.Authorization = `Bearer ${access}`

    return x
  },
  async error => {
    if (error.response && !error.response.config.url.includes('rest-auth')) {
      if (parseInt(error.response && error.response.status) === 401) {
        // await store.dispatch('auth/logout');
        console.log('TODO - should dispatch logout action')
      }
    }

    // $sentry.captureException(error);

    return Promise.reject(error.response)
  }
)

HTTP.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)

// Новое АПИ
export const AuthApi = {
  /**
    @param email String required
    @param password String required
  **/
  async login(request) {
    try {
      const { data } = await HTTP_GRAF.post('/auth/users/login/', request)
      return [null, data]
    } catch (error) {
      return [error, null]
    }
  },

  /**
    @param refresh String required
  **/
  async refresh(request) {
    try {
      const { data } = await HTTP_GRAF.post('/auth/users/refresh/', request)
      return [null, data]
    } catch (error) {
      return [error, null]
    }
  },
  /**
    @param email String required
    @param code String required
  **/
  async verify(request) {
    try {
      const { data } = await HTTP_GRAF.post('/auth/users/verify/', request)
      return [null, data]
    } catch (error) {
      return [error, null]
    }
  },
}

export const EventResource = {
  create(data) {
    return HTTP_GRAF.post('/events/', data)
  },
  list() {
    return HTTP_GRAF.get('/events/coach/')
  },
  utils() {
    return HTTP_GRAF.get('/events/utils/')
  },
  update(id, data) {
    return HTTP_GRAF.put(`/events/coach/${id}/`, data)
  },
}

export const ProfileResource = {
  get() {
    return HTTP_GRAF.get('/coaches/')
  },
}

export const ExerciseResource = {
  create(data) {
    return HTTP_GRAF.post('/exercises/', data)
  },
  list() {
    return HTTP_GRAF.get('/exercises/')
  },
}

// Старое АПИ
export const PlanResource = {
  get() {
    return HTTP.get('/plans.json')
  },
  single(id) {
    return HTTP.get(`/plans/${id}.json`)
  },
  parts() {
    return HTTP.get('/plan_parts.json')
  },
}

export const ExerResource = {
  get() {
    return HTTP.get('/exercises.json')
  },
}

export const GroupResource = {
  get() {
    return HTTP.get('/groups.json')
  },
}
