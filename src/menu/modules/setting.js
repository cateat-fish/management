export default {
  path: '/setting',
  title: '设置',
  icon: 'home',
  children: (pre => [
    { path: `${pre}index`, title: '设置首页', icon: 'shouye_o' },
    { title: '店铺设置',
      icon: 'quanjushezhi_o',
      children: [
        { path: `${pre}setting/system`, title: '系统设置', icon: 'jingliren_o' },
        { path: `${pre}setting/info`, title: '系统信息', icon: 'guanyu_o' },
        { path: `${pre}setting/navi`, title: '前台导航', icon: 'daohang_o' },
      ]
    },
    { title: '支付系统',
      icon: 'jinbi_o',
      children: [
        { path: `${pre}payment/config`, title: '支付配置', icon: 'jinrongguanli_o' },
        { path: `${pre}payment/log`, title: '支付日志', icon: 'huobiliu_o' }
      ]
    },
    { title: '消息通知',
      icon: 'tongzhizhongxin_o',
      children: [
        { path: `${pre}notice/template`, title: '消息模板', icon: 'daochu_o' }
      ]
    }
  ])('/setting/')
}
