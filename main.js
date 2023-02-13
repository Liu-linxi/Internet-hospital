
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from "./store"

Vue.prototype.$store = store
Vue.config.productionTip = false
//引入自定义组件
import components from "@/components";
Vue.use(components);

App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif