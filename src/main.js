import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas,far,fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) //全局注册 font-awesome-icon 图标

app.use(ElementPlus)
app.use(createPinia())
app.use(router)


app.mount('#app')
