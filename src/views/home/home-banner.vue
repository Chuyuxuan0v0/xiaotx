<script setup>
import { onMounted, ref } from 'vue'

import { getBannerAPI } from '@/apis/layout'

const bannerList = ref([])

onMounted(async () => {
  const res = await getBannerAPI()
  bannerList.value = res.result
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <!-- 自定义指令，需要自己加一个 v- -->
        <img v-img-lazy="item.imgUrl"  alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
