<script setup>
import LayoutNav from './layout-nav.vue'
import LayoutHeader from './layout-header.vue'
import LayoutFooter from './layout-footer.vue'
import LayoutHederFixed from './layout-heder-fixed.vue'
import HomeIndex from '@/views/home/home-index.vue'
import { onMounted } from 'vue'
// 处理nav 导航api 获取

import { useCategoryStore } from '@/stores/category'

// 获取一个实例对象
const categoryStore = useCategoryStore()

onMounted(() => {
  // 获取nav 导航数据
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <HomeIndex />
  <LayoutFooter />
  <LayoutHederFixed />
</template>
