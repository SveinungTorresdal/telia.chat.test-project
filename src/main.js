__webpack_nonce__ = window.__webpack_nonce__ = window.btoa(Math.random().toString(36).substr(7));

import { createApp } from 'vue'
import { router } from './router';
import App from './App.vue'

// Importing SCSS file.
import './style/main.scss';

const app = createApp(App)
app.use(router);
app.mount('#app')