import Vue from 'vue'
// 引入全局底部导航组件
import tabbar from "@/components/tabbar/tabbar.vue"
//分割线
import divider from "@/components/divider/divider.vue"
//评分组件
import grade from "@/components/grade/grade.vue"

Vue.component('tabbar', tabbar)
Vue.component('divider', divider)
Vue.component('grade', grade)