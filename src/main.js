import { createApp } from 'vue';
import './assets/css/style.scss';
import App from './App.vue';
import router from './router'; // 추가

createApp(App).use(router).mount('#app');
