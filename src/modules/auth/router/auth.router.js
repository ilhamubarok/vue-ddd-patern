export default [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login' },
    component: () => import('../ui/loginUI.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { title: 'Register' },
    component: () => import('../ui/registerUI.vue'),
  },
];
