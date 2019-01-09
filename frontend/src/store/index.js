import Vue from 'vue';
import {setAuthToken, removeAuthToken} from '../auth';

const state = {
  // user: {}
  user: null
};

const mutations = {
  // auth(state, token) {
  //   Vue.http.headers.common['Authorization'] = token;
  //   return state.user = user;
  // },
  logOut(state) {
    return state.user = null
  },
  getProfile(state, user) {
    return state.user = user;
  }
};

const actions = {
  signUp({dispatch}, payload) {
    Vue.http.post('auth', payload)
      .then(res => {
        setAuthToken(res.data);
        dispatch('getProfile'); // ?
      });
  },
  signIn({dispatch}, payload) {
    Vue.http.post('auth/signIn', payload)
      .then(res => {
        setAuthToken(res.data);
        dispatch('getProfile'); // ?
      });
  },
  getProfile({commit}) {
    Vue.http.get('auth')
      .then(res => {
        commit('getProfile', res.data);
      })
  },
  logOut({commit}) {
    removeAuthToken();
    commit('logOut');
  }
};

const intiStore = {
  state,
  mutations,
  actions
};

export default intiStore;
