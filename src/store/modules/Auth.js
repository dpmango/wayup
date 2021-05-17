export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem("token") || "",
    }),
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        }
    },

    actions: {
        login({commit}, payload) {
            commit('setToken', payload);
            localStorage.setItem("token", payload);
        }
    }
};