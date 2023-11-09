import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
import WorksView from '../views/Worksview.vue';
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
    },
    { 
      path: '/*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
router.push({ name: 'not-found'});
export default router