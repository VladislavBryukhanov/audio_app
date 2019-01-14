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

const intiStore = {
  state,
  mutations,
  actions
};

export default intiStore;
