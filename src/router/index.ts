import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/index.vue')
    // redirect: '/request'
  },
  {
    path: '/ol-map',
    component: () => import('@/views/ol/ol-overview.vue')
  },
  {
    path: '/point-test',
    component: () => import('@/views/point-test.vue')
  },
  {
    path: '/human-map',
    component: () => import('@/views/human-map/human-map.vue')
  },
  {
    path: '/human-map-loca',
    component: () => import('@/views/loka-map/loka-map.vue')
  },
  {
    path: '/human-echarts',
    component: () => import('@/views/human-echarts/human-echarts.vue')
  },
  {
    path: '/human-cesium',
    component: () => import('@/views/human-cesium/human-cesium.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
