import { createRouter, createWebHistory } from "vue-router";
import Lab1PY00004 from "../components/lab1.vue";
import bai1lab2PY00004 from "../components/lab2/bai1.vue";
import bai2lab2PY00004 from "../components/lab2/bai2.vue";
import bai3lab2PY00004 from "../components/lab2/bai3.vue";
import bai4lab2PY00004 from "../components/lab2/bai4.vue";
import bai1lab3PY00004 from "../components/lab3/bai1lab3.vue";
import bai2lab3PY00004 from "../components/lab3/bai2lab3.vue";
import bai3lab3PY00004 from "../components/lab3/bai3lab3.vue";
import bai4lab3PY00004 from "../components/lab3/bai4lab3.vue";
import Bai1Lab5Component from "../components/lab5/bai1lab5.vue";
import Bai2Lab5Component from "../components/lab5/bai2lab5.vue";
import Bai3Lab5Component from "../components/lab5/bai3lab5.vue";
import Bai4Lab5Component from "../components/lab5/bai4lab5.vue";
import Bai1Lab6Component from "../components/lab6/bai1lab6.vue";
import Bai2Lab6Component from "../components/lab6/bai2lab6.vue";
import Bai4Lab6Component from "../components/lab6/bai4lab6.vue";
import Bai3Lab6Component from "../components/lab6/bai3lab6.vue";
import Bai1Lab7Component from "../components/lab7/bai1lab7.vue";
import Bai2Lab7Component from "../components/lab7/bai2lab7.vue";

import Bai3Lab7Component from "../components/lab7/bai3lab7.vue";


const routes = [
  { path: "/lab1", component: Lab1PY00004 },
  { path: "/bai1", component: bai1lab2PY00004 },
  { path: "/bai2", component: bai2lab2PY00004 },
  { path: "/bai3", component: bai3lab2PY00004 },
  { path: "/bai4", component: bai4lab2PY00004 },
  { path: "/bai1lab3", component: bai1lab3PY00004 },
  { path: "/bai2lab3", component: bai2lab3PY00004 },
  { path: "/bai3lab3", component: bai3lab3PY00004 },
  { path: "/bai4lab3", component: bai4lab3PY00004 },
  { path: "/bai1lab5", component: Bai1Lab5Component },
  { path: "/bai2lab5", component: Bai2Lab5Component },
  { path: "/bai3lab5", component: Bai3Lab5Component },
  { path: "/bai4lab5", component: Bai4Lab5Component },
  { path: "/bai1lab6", component: Bai1Lab6Component },
  { path: "/bai2lab6", component: Bai2Lab6Component },
  { path: "/bai4lab6", component: Bai4Lab6Component },
  { path: "/bai3lab6", component: Bai3Lab6Component },
  { path: "/bai1lab7", component: Bai1Lab7Component },
  { path: "/bai2lab7", component: Bai2Lab7Component },
 
  { path: "/bai3lab7", component: Bai3Lab7Component },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
