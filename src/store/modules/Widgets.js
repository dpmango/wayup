import {
	SET_WIDGET_ALL,
	SET_WIDGET_LIST,
	RESET
} from '../mutation-types';
import { WidgetAll, WidgetList  } from '../fixture/widgets'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
	widgetLevel: [],
	widgetChartPolar: [],

	// Список всех виджетов доступных в холодильнике
	WidgetAll: [],

	// Список виджетов, расположенных на странице
	WidgetList: []
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
	[SET_WIDGET_ALL] (state, payload) {
		state.WidgetAll = payload;
	},
	[SET_WIDGET_LIST] (state, payload) {
		state.WidgetList = payload;
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
	loadWidgetsAll({commit}) {
		// Получаем список виджетов по апи
		//

		commit(SET_WIDGET_ALL, WidgetAll);
	},
	loadWidgetsList({commit}) {
		// Получаем список виджетов по апи
		//

		commit(SET_WIDGET_LIST, WidgetList);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
