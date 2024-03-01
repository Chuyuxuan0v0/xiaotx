<script setup>
import { ref } from 'vue'

const fileRef = ref()
const file = ref()

const handleUpload = (e) => {
  file.value = fileRef.value.files[0]
}
</script>

<template>
  <div>
    <h1>I am LOGIN</h1>
    <div class="mydiv">我是一个div</div>
    <input ref="fileRef" type="file" class="fileInput" />
    <el-button @click="handleUpload">upload</el-button>
    <RouterView></RouterView>
  </div>
</template>
<style lang="scss">
.mydiv {
  width: 200px;
  height: 200px;
  background-color: $warnColor;
}
</style>
