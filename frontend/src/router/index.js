import Auth from '../components/auth.vue';
import PublicNavbar from '../components/navbar/publicNavbar.vue';

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
      },
    ]
  }
];

export default routes;
