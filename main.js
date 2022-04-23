import App from './App'
// 1. 导入封装的 api.js 文件
import { myRequest } from 'util/api.js'

// 2. 定义为 Vue 的属性
Vue.prototype.$myRequest = myRequest

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif