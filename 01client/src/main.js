
import Vue from 'vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
Vue.use(VueAxios, axios)
//axios组件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueRouter)
//网页title组件
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
//网页组件
import App from './App.vue'
import index from './components/index.vue'
import reciteWords from './components/reciteWords.vue'
import translate from './components/translate.vue'
import courses from './components/courses.vue'
import cloudNote from './components/cloudNote.vue'
import humanTrans from './components/humanTrans.vue'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false


const routes = [
  { path: '/index', component: index, meta: { title: '有道首页'}},
  { path: '/reciteWords', component: reciteWords,meta: { title: '有道背单词'} },
  { path: '/translate', component: translate,meta: { title: '在线翻译-有道'} },
  { path: '/courses', component: courses,meta: { title: '有道精品课-为你精选好课'} },
  { path: '/cloudNote', component: cloudNote,meta: { title: '有道云笔记|5000万用户的选择'} },
  { path: '/humanTrans', component: humanTrans,meta: { title: '有道人工翻译-网易旗下专业人工翻译'} },

]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//生产模式消息为false
Vue.config.productionTip = false

