import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        ws: {},
        user: {}
    },
    mutations: {
        addWs(state, ws) {
            state.ws = ws
        },
        addUser(state, user) {
            state.user = user
        },
    },
    actions: {}
})

export default store