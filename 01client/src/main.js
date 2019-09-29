
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
  {path:'/index',component:index},
  {path:'/reciteWords',component:reciteWords},
  {path:'/translate',component:translate},
  {path:'/courses',component:courses},
  {path:'/cloudNote',component:cloudNote},
  {path:'/humanTrans',component:humanTrans},
 
]
const router = new VueRouter({
    routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

