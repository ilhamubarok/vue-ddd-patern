import Vue from 'vue';
import { AppLayoutsDefault, AppLayoutsPublic, AppLayoutsWithNavbar } from './layouts';

Vue.component('DefaultLayout', AppLayoutsDefault);
Vue.component('PublicLayout', AppLayoutsPublic);
Vue.component('NavbarLayout', AppLayoutsWithNavbar);
