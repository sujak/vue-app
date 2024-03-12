import { createApp } from 'vue';
import App from './App.vue';

// store
import { setupStore } from '@/stores'

// element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// router
import { setupRouter } from '@/router';

import { useAppStore } from './stores/app';


import 'uno.css'
import './assets/css/style.scss';

(async () => {
  const app = createApp(App);

  setupStore(app);
  setupElementPlus(app);
  const { fetchUser } = useAppStore();
  await fetchUser();
  setupRouter(app);
  app.mount('#app');
})();