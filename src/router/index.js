import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
import WorksView from '../views/WorksView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'Works',
      component: WorksView
    },
    { 
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router