import { createStore } from 'vuex'

export default createStore({
	state: {
		blackScore: 0,
		whiteScore: 0
	},
	mutations: {
		changeBlackScore(state, n) {
			state.blackScore += n;
		},
		changeWhiteScore(state, n) {
			state.whiteScore += n;
		}
	},
	actions: {
	},
	modules: {
	}
})
