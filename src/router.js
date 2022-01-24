import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import index from './pages/index.vue';
import detail from './pages/detail.vue';

const routes = [
  { path: '/', name: 'home', component: index },
  { path: '/Contact', name: 'detail', component: detail },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});