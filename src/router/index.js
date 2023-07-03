import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',//memories
    name:HomePage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, 
  {
    path: '/memories',
    name: 'memories',
    component: MemoriesPage
  },
  {
    path: '/memories/add',
    component: ()=>import('../pages/AddMemoryPage.vue'),

  },
  {
    path: '/memories/:id',
    component: ()=>import('../pages/MemoriesDetailPage.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
