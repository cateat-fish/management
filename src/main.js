import Vue from 'vue'
import App from './App'

import store from '@/store'
import careyshop from '@/plugin/careyshop'

import { menuHeader, menuAside } from '@/menu/index'

// 菜单和路由设置
import router from './router'
import { frameInRoutes } from '@/router/routes'

// 核心插件
Vue.use(careyshop)

// v-has
Vue.directive('has', {
  bind: (el, binding) => {
    if (!Vue.prototype.$has(binding.value)) {
      el.parentNode ? el.parentNode.removeChild(el) : el.style.display = 'none'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('careyshop/page/init', frameInRoutes)
  },
  mounted() {
    // 设置顶栏菜单
    this.$store.commit('careyshop/menu/headerSet', menuHeader)
    // 初始化菜单搜索功能
    this.$store.commit('careyshop/search/init', menuAside)
    // 展示系统信息
    this.$store.commit('careyshop/releases/versionShow')
    // 检查最新版本
    // this.$store.dispatch('careyshop/releases/checkUpdate')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('careyshop/account/load').then(() => {})
    // 获取并记录用户 UA
    this.$store.commit('careyshop/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('careyshop/fullscreen/listen').then(() => {})
  },
  watch: {
    // 检测路由变化切换侧边栏内容
    '$route.matched': {
      handler(matched) {
        if (matched.length > 0) {
          const _side = menuAside.filter(menu => menu.path === matched[0].path)
          this.$store.commit('careyshop/menu/asideSet', _side.length > 0 ? _side[0].children : [])
        }
      },
      immediate: true
    }
  }
}).$mount('#app')
