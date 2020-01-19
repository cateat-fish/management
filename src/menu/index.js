import util from '@/utils/util'

import system from './modules/system.js'
import setting from './modules/setting.js'
// 菜单 顶栏
export const menuHeader = [
  // 首页
  { path: '/index', title: '首页', icon: 'shouye' },
  { path: '/system/index', title: '系统', icon: 'zhongkong' },
  { path: '/setting/index', title: '设置', icon: 'kongzhizhongxin' }
]
// 菜单 侧边栏
export const menuAside = [
  system,
  setting
]

/**
 * 将数据源处理为菜单树
 * @param arr
 * @returns {{header: Array, aside: Array}}
 */
// function getMenuData(arr) {
//   let tree = { header: [], aside: [] }
//   arr.forEach(value => {
//     if (!value.is_navi || !value.status) {
//       return
//     }

//     // 储存顶部(父节点)数据
//     let arrElem = {
//       path: value.url,
//       title: value.name,
//       icon: value.icon,
//       remark: value.remark
//     }

//     if (value.parent_id === 0) {
//       tree.header.push({ ...arrElem })
//     }

//     // 处理子节点数据
//     arrElem['menu_id'] = value.menu_id
//     arrElem['parent_id'] = value.parent_id

//     tree.aside.push(arrElem)
//   })

//   tree.aside = util.formatDataToTree(tree.aside)
//   return tree
// }


// export default {
//   install(vm, source) {
//     const menu = getMenuData(source)
//     vm.commit('careyshop/menu/headerSet', menu.header)
//     vm.commit('careyshop/menu/asideSet', menu.aside)
//     vm.commit('careyshop/search/init', menu.aside)
//   }
// }
