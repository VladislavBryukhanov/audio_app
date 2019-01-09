import Vue from 'vue';
import {AUTH_TOKEN} from '../common/constants';

export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
  Vue.http.headers.common[AUTH_TOKEN] = token;
};

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
  delete Vue.http.headers.common[AUTH_TOKEN];
};
