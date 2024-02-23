import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useAppStore } from './stores/app';

import './assets/css/style.scss';

(async () => {
  const app = createApp(App);
  app.use(createPinia());
  const { fetchUser } = useAppStore();
  await fetchUser();
  app.use(router);
  app.mount('#app');
})();