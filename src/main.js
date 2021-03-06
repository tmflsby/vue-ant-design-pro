import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './lang'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themeConfig from './utils/themeConfig'
import '../mock' // WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './utils/lazy_use' // use lazy load components 按需引入
import './permission' // permission control
import './utils/filter' // global filter
import './style/index.less'

Vue.config.productionTip = false

// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themeConfig.theme

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
