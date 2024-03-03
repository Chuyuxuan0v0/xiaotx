import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

// 引入自定义指令
import { lazyImgPugin } from './directives'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.use(lazyImgPugin)

app.mount('#app')
