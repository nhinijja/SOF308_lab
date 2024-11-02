import { createRouter, createWebHistory } from 'vue-router';
import Lab1PY00004 from '../components/lab1.vue';
import bai1lab2PY00004 from '../components/lab2/bai1.vue';
import bai2lab2PY00004 from '../components/lab2/bai2.vue';
import bai3lab2PY00004 from '../components/lab2/bai3.vue';
import bai4lab2PY00004 from '../components/lab2/bai4.vue';

const routes = [
    { path: '/lab1', component: Lab1PY00004 },
    { path: '/bai1', component: bai1lab2PY00004 },
    { path: '/bai2', component: bai2lab2PY00004 },
    { path: '/bai3', component: bai3lab2PY00004 },
    { path: '/bai4', component: bai4lab2PY00004 },

   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
