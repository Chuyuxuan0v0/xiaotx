<script setup>
import homeHot from './home-hot.vue'
import homeCategory from './home-category.vue'
import homeNew from './home-new.vue'
import homeProduct from './home-product.vue'
import hommBanner from './home-banner.vue'
</script>

<template>
  <el-row>
    <el-col :span="20"> <homeCategory /> <hommBanner /></el-col>
    <!-- <el-col :span="20" > </el-col> -->
    <el-col :span="24"><homeHot /></el-col>
    <el-col :span="24"> <homeNew /></el-col>
    <el-col :span="24"> <homeProduct /></el-col>
    <el-col :span="24"></el-col>
  </el-row>
</template>
