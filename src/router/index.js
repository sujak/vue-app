import { createWebHistory, createRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

// Layout
import DefaultLayout from '@/layouts/Default.vue';
// import ExampleLayout from '@/layouts/Example.vue';
// Component
import Home from '@/views/Home.vue';
import NotFound from '@/views/error/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/Home.vue'),
    meta: {
      layout: DefaultLayout
    },
    children: [
      {
        path: 'todo',
        component: () => import('@/views/demo/Todo.vue')
      },
      {
        path: 'calendar',
        component: () => import('@/views/demo/Calendar.vue')
      }
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
    // redirect: "/notFound"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guards
router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  const { hideNavbar } = appStore;
  // 이동시 네비게이션 숨기기
  hideNavbar();

  next();
});
// router.beforeResolve(async to => {})
// router.afterEach((to, from, failure) => {});

export default router;
