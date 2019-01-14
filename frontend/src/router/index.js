import Auth from '../components/auth.vue';
import PublicNavbar from '../components/navbar/publicNavbar.vue';
import PrivateNavbar from '../components/navbar/privateNavbar.vue';
import Home from '../components/home.vue'
import AudioList from '../components/audioList.vue'

const routes = [
  {
    path: '/',
    component: PublicNavbar,
    children: [
      {
        path: 'sign_in',
        component: Auth,
        name: 'sign_in'
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

const guard = {

};

export default routes;
