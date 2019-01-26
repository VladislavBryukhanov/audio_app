import Vue from 'vue';
import Vuex from 'vuex';
import {setAuthToken, removeAuthToken, setAuthHeader} from '../auth';

Vue.use(Vuex);

const state = {
  user: null
};

const mutations = {
  // auth(state, token) {
  //   Vue.http.headers.common['Authorization'] = token;
  //   return state.user = user;
  // },
  logOut(state) {
    return state.user = null;
  },
  getProfile(state, user) {
    return state.user = user;
  }
};

const actions = {
  async signUp({dispatch}, payload) {
    const res = await Vue.http.post('auth/signUp', payload);
    setAuthToken(res.body);
    await dispatch('getProfile'); // ?
  },
  async signIn({dispatch}, payload) {
    const res = await Vue.http.post('auth/signIn', payload);
    setAuthToken(res.body);
    await dispatch('getProfile'); // ?
  },
  async getProfile({commit}) {
    // this acrion always will be first request and because it set auth token
    setAuthHeader();
    const res = await Vue.http.get('auth');
    commit('getProfile', res.body);
  },
  logOut({commit}) {
    removeAuthToken();
    commit('logOut');
  },

  async getUsers({commit}) {
    const users = await Vue.http.get('user');
    console.log(users)
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
