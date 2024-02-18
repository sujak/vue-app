import { createWebHistory, createRouter } from 'vue-router';
import { useLoadingStore } from '@/stores/loading';
import Home from '@/views/Home.vue';
import NotFound from '@/views/error/NotFound.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/Home.vue'),
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
  const loadingStore = useLoadingStore();
  const { showLoading, hideLoading } = loadingStore;
  //   const userStore = useUserStore();
  //   const { clearUser } = userStore;

  //   // user로 이동할 때 먼저 User 정보를 초기화
  //   if (to.name == 'user') {
  //     clearUser();
  //   }
  showLoading();
  next();
});

router.beforeResolve(async to => {
  console.log('beforeResolve', to.name)
})

router.afterEach((to, from, failure) => {
  const loadingStore = useLoadingStore();
const { showLoading, hideLoading } = loadingStore;
  hideLoading();
});

export default router;
