import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage';
import ElectronicsPage from '@/views/ElectronicsPage';

const routes = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/sections/electronics',
      name: 'Electronics',
      component: ElectronicsPage
    },
  ]
});

export default routes;
