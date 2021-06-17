import axios from "axios";
import { API_URL, API_URL_GRAF } from "@/config/api";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");

const HTTP = axios.create({
    baseURL: API_URL,
});

const HTTP_GRAF = axios.create({
    baseURL: API_URL_GRAF,
    headers: {'Authorization': access ? `Bearer ${access}` : '' , 'Content-Type': 'application/json; charset=utf-8'}
});

if (token) {
    HTTP.headers = {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json; charset=utf-8'};
}

HTTP_GRAF.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      return Promise.reject(error.response);
  }
);

HTTP.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response);
    }
);

// Новое АПИ
export const AuthApi = {
    login(data) {
        return HTTP_GRAF.post('/auth/users/login/', data);
    },
};

export const EventResource = {
    create() {
        return HTTP_GRAF.post('/events/');
    }
};

export const ProfileResource = {
    get() {
        return HTTP_GRAF.get('/coaches/');
    }
};



// Старое АПИ
export const PlanResource = {
    get() {
        return HTTP.get('/plans.json');
    },
    single(id) {
        return HTTP.get(`/plans/${id}.json`);
    },
    parts() {
        return HTTP.get('/plan_parts.json');
    }
};

export const ExerResource = {
    get() {
        return HTTP.get('/exercises.json');
    },
};

export const GroupResource = {
    get() {
        return HTTP.get('/groups.json');
    },
};





