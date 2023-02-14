// #ifndef VUE3
import Vue from 'vue'
import App from './App'
//引入自定义组件
import components from "@/components";
Vue.use(components);
import store from "./store" //引入存储vuex
Vue.prototype.$store = store;
// 引入请求库
import {
	http
} from '@/common/config/service.js' // 全局挂载引入，配置相关在该index.js文件里修改
Vue.prototype.$H = http;
// 引入请求地址文件
import $serviceURI from '@/common/config/config.js';
Vue.prototype.$serviceURI = $serviceURI
//获取用户oppenid
const ua = window.navigator.userAgent.toLowerCase()
if (ua.match(/micromessenger/i) == 'micromessenger') {
	require("@/common/config/getUserInfo.js")
}



Vue.config.productionTip = false

// #ifdef H5
// 提交前需要注释  本地调试使用
const vconsole = require('vconsole')
Vue.prototype.$vconsole = new vconsole() // 使用vconsole
// #endif
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
