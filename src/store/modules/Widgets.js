import {
	GET_WIDGET_DATA,
	RESET
} from '../mutation-types';
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
	widgetLevel: [],
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
	[GET_WIDGET_DATA] (state, payload) {
		state.widgetLevel = payload;
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

}

export default {
	state,
	getters,
	mutations,
	actions
}
