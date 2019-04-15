import AppRouter from '@/app/AppRouter';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: AppRouter,
});

export default router;
