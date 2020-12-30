import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Fragments from '../views/Fragments.vue';
import Teleport from '../views/Teleport.vue';
import CompositionApi from '../views/CompositionApi.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fragments',
    name: 'Fragments',
    component: Fragments
  },
  {
    path: '/teleport',
    name: 'Transport',
    component: Teleport
  },
  {
    path: '/composition-api',
    name: 'Composition Api',
    component: CompositionApi
  }
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

/*
--- Vue 2.x
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const route = new Router({
  history: 'true',
  routes,
});

*/
