import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            // 값
            authUser : null,
            token : null
        };
    },
    mutations: {
        // 함수
        setAuthUser(state, payload){
            state.authUser = payload;
        },
        setToken(state, payload){
            state.token = payload;
        },
        setAuthUserName(state,payload){
            state.authUser.name = payload;
        }
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token']
        })
    ]
});