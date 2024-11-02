import { createRouter, createWebHistory } from 'vue-router';
import Lab1PY00004 from '../components/lab1.vue';

const routes = [
    { path: '/lab1', component: Lab1PY00004 }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
