import VueRouter from 'vue-router';
import store from '../store';
import {AUTH_TOKEN} from '../common/constants';
import Auth from '../components/auth.vue';
import PublicNavbar from '../components/navbar/publicNavbar.vue';
import PrivateNavbar from '../components/navbar/privateNavbar.vue';
import Home from '../components/home.vue'
import AudioList from '../components/audioList.vue'

const routes = [
  {
    path: '/',
    component: PublicNavbar,
    meta: {
      guest: true
    },
    children: [
      {
        path: '',
        redirect: 'sign_in',
      },
      {
        path: 'sign_in',
        component: Auth,
        name: 'sign_in',
      },
      {
        path: 'sign_up',
        component: Auth,
        name: 'sign_up',
        props: {isSignUp: true}
      }
    ]
  },
  {
    path: '/home',
    component: PrivateNavbar,
    meta: {
      authorized: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'audio_list',
        name: 'AudioList',
        component: AudioList
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.user && localStorage.getItem(AUTH_TOKEN)) {
    await store.dispatch('getProfile');
  }

  if (store.state.user) {
    if (to.matched.some(route => route.meta.authorized)) {
      return next();
    } else if (to.matched.some(route => route.meta.guest)) {
      return next('/home');
    }
  } else {
    if (to.matched.some(route => route.meta.guest)) {
      return next();
    } else if (to.matched.some(route => route.meta.authorized)) {
      return next('/');
    }
  }

});

export default router;
