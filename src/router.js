import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from "./views/error/NotFound.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('./views/demo/Home.vue'),
    children: [
      {
        path: 'todo',
        component: () => import('./views/demo/Todo.vue'),
      },
      {
        path: 'calendar',
        component: () => import('./views/demo/Calendar.vue'),
      }
    ]
  },
  {
    path: "/notFound",
    name: "notFound",
    component: NotFound
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
    // redirect: "/notFound"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
