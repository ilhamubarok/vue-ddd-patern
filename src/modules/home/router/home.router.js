const guardRoute = (to, from, next) => {
  if (localStorage.getItem('token') === null) return next('/login');

  return next();
};

export default [
  {
    path: '/home',
    name: 'Home',
    beforeEnter: guardRoute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todos" */ '../ui/HomeUI.vue'),
  },
];
