// 自定义指令

import { useIntersectionObserver } from '@vueuse/core'
// 定义图片懒加载
export const lazyImgPugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el  指令绑定的元素
        // binding 指令括号后的表达式值
        console.log(el, binding, 'el-baind')

        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting, 'isIntersecting')

          if (isIntersecting) {
            el.src = binding.value
            // 当我们第一次监听请求图片完成之后，
            // 需要停止监听，避免重复请求
            stop()
          }
        })
      }
    })
  }
}
