__webpack_nonce__ = window.__webpack_nonce__ = window.btoa(Math.random().toString(36).substr(7));

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .mount('#app')