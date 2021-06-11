import axios from "axios";
import { API_URL } from "@/config/api";

const token = localStorage.getItem("token");

const HTTP = axios.create({
    baseURL: API_URL,
});

if (token) {
    HTTP.headers = {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json; charset=utf-8'};
}

HTTP.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response);
    }
);

export const AuthApi = {
    login(data) {
        return HTTP.post('/api/v1/sign_in', data);
    },
    registration(data) {
        let user = {
            'user' : data
        };
        return HTTP.post('/api/v1/sign_up', user);
    },
};

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
    get(token) {
        return HTTP.get('/exercises.json', { headers: {"Authorization" : 'bearer ' + token} });
    },
};

export const GroupResource = {
    get() {
        return HTTP.get('/groups.json');
    },
};

export const ProfileResource = {
    get(token) {
        return HTTP.get('/api/v1/profiles', { headers: {"Authorization" : 'bearer ' + token} });
    },
};


