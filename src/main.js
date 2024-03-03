import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) //全局注册 font-awesome-icon 图标

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

// 自定义全局指令
// 图片懒加载 --- 到视口的时候才加载出来
app.directive('img-lazy', {
  mounted(el, binding) {
    // el  指令绑定的元素
    // binding 指令括号后的表达式值
    console.log(el, binding, 'el-baind')

    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting, 'isIntersecting')

      if (isIntersecting) {
        el.src = binding.value
      }
    })
  }
})

app.mount('#app')
