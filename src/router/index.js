// createRouter 创建路由实例
// createWebHistory 创建路由模式为历史路由

import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import login from '../views/login/login-index.vue'
import layout from '../views/layout/layout-index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        // { path: '/', name: 'home', component: home },
        // { path: '/category', name: 'category', component: category }
      ]
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    // 如果没有匹配到，默认回到login
    { path: '/:pathMatch(.*)*', redirect: '/layout' }
  ]
})

export default router
