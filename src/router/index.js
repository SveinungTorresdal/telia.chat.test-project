import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/Faq.vue') },
    { path: '/category/:rel', name: 'Category', component: () => import('../views/Faq.vue') },
    { path: '/guide/:id/:title', name: 'Guide', component: () => import('../views/Faq.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { routes, router };
