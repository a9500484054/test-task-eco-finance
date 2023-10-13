import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import Public from '@/views/Public.vue';
import Protected from '@/views/Protected.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/public',
    component: Public,
  },
  {
    path: '/protected',
    component: Protected,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !token) {
    next('/')
  } else {
    next()
  }
})

export default router;
