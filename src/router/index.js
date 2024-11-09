import { createRouter, createWebHistory } from 'vue-router';
import Lab1PY00004 from '../components/lab1.vue';
import bai1lab2PY00004 from '../components/lab2/bai1.vue';
import bai2lab2PY00004 from '../components/lab2/bai2.vue';
import bai3lab2PY00004 from '../components/lab2/bai3.vue';
import bai4lab2PY00004 from '../components/lab2/bai4.vue';
import bai1lab3PY00004 from '../components/lab3/bai1lab3.vue';
import bai2lab3PY00004 from '../components/lab3/bai2lab3.vue';
import bai3lab3PY00004 from '../components/lab3/bai3lab3.vue';
import bai4lab3PY00004 from '../components/lab3/bai4lab3.vue';


const routes = [
    { path: '/lab1', component: Lab1PY00004 },
    { path: '/bai1', component: bai1lab2PY00004 },
    { path: '/bai2', component: bai2lab2PY00004 },
    { path: '/bai3', component: bai3lab2PY00004 },
    { path: '/bai4', component: bai4lab2PY00004 },
    { path: '/bai1lab3', component: bai1lab3PY00004 },
    { path: '/bai2lab3', component: bai2lab3PY00004 }, 
    { path: '/bai3lab3', component: bai3lab3PY00004 }, 
    { path: '/bai4lab3', component: bai4lab3PY00004 }, 
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
