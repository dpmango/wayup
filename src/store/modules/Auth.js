export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem("token") || "",
        access: localStorage.getItem("access") || "",
    }),
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        deleteToken(state) {
            state.token = '';
        },
        // Для нового АПИ
        setAccess(state, payload) {
            state.access = payload;
        },
        deleteAccess(state) {
            state.access = '';
        },

    },

    actions: {
        login({commit}, payload) {
            commit('setToken', payload);
            localStorage.setItem("token", payload);
        },
        grafLogin({commit}, payload) {
            commit('setAccess', payload);
            localStorage.setItem("access", payload);
        },
        logout({commit}) {
            commit('deleteToken');
            commit('deleteAccess');
            localStorage.removeItem("token");
        }
    }
};