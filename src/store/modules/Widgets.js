import {
	SET_WIDGET_DATA,
	RESET
} from '../mutation-types';
import { WidgetLevel } from '../fixture/widgets'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
	widgetLevel: [],
	widgetChartPolar: [],
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
	[SET_WIDGET_DATA] (state, payload) {
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
	loadWidgets({commit}) {
		commit(SET_WIDGET_DATA, WidgetLevel);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
