import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Unify from '@/components/pages/Unify';
import NotFound from '@/components/pages/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/unify',
      name: 'Unify',
      component: Unify,
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound,
    },
  ],
});
