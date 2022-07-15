import { LAYOUT_NAVBAR } from '@/modules/app/constant/layout.constant';

export default [
  {
    path: '/home',
    name: 'Home',
    meta: { guard: true, layout: LAYOUT_NAVBAR },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todos" */ '../ui/HomeUI.vue'),
  },
];
