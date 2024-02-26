import { storeToRefs } from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

// Layout
import DefaultLayout from '@/layouts/Default.vue';
// import ExampleLayout from '@/layouts/Example.vue';
// Component
import Home from '@/views/Home.vue';
import NotFound from '@/views/error/NotFound.vue';
import Login from '@/views/auth/Login.vue';
import SignUp from '@/views/auth/SignUp.vue';


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
      layout: DefaultLayout,
      requiresAuth: true
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
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: DefaultLayout
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      layout: DefaultLayout
    },
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
  const { hideNavbar, getUser } = appStore;
  const isAuthenticated = () => {
    return getUser.loggedIn;
  };

  // 이동시 네비게이션 숨기기
  hideNavbar();

  const guestOnlyPath = ['Login', 'SignUp'];

  if (!isAuthenticated() && to.meta.requiresAuth) {
    // 로그인 페이지로 이동
    next({
      path: '/login',
      query: {
        returnUrl: to.fullPath
      }
    });
  } else if(isAuthenticated() && guestOnlyPath.some((name)=> name === to.name)){
    next('/');
  } else {
    next();
  }
});
// router.beforeResolve(async to => {})
// router.afterEach((to, from, failure) => {});

export default router;
