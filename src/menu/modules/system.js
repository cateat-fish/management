export default {
  path: '/system',
  title: '系统设置',
  icon: 'home',
  children: (pre => [
    { path: `${pre}index`, title: '系统首页', icon: 'shouye_o' },
    { title: '人员管理',
      icon: 'guanliyuansousuo_o',
      children: [
        { path: `${pre}admin/member`, title: '人员管理', icon: 'jingliren_o' }
      ] },
    { title: '权限分配',
      icon: 'RectangleCopy173',
      children: [
        { path: `${pre}auth/group`, title: '用户组', icon: 'jingliren_o' },
        { path: `${pre}auth/menu`, title: '菜单管理', icon: 'RectangleCopy51' },
        { path: `${pre}auth/rule`, title: '权限规则', icon: 'RectangleCopy176' },
        { path: `${pre}auth/action`, title: '操作日志', icon: 'daibanrenwu_o' }
      ] 
    },
    { title: '文章发布',
      icon: 'xinwen_o',
      children: [
        { path: `${pre}article/cat`, title: '文章分类', icon: 'shuzhuangtu_o' },
        { path: `${pre}article/article/create`, title: '新增文章', icon: 'tianjiafujian_o' },
        { path: `${pre}article/article`, title: '文章管理', icon: 'tuwen_o' },
        { path: `${pre}article/topic/create`, title: '新增专题', icon: 'RectangleCopy227' },
        { path: `${pre}article/topic`, title: '专题管理', icon: 'jieshaoxinxi_o' }
      ]
    },
    { title: '广告发布',
      icon: 'yemianliu_o',
      children: [
        { path: `${pre}ads/position`, title: '广告位置', icon: 'jibao_o' },
        { path: `${pre}ads/ads`, title: '广告列表', icon: 'sandengfen_o' }
      ]
    },
    { title: '附件资源',
      icon: 'tianjiafujian_o',
      children: [
        { path: `${pre}storage/storage`, title: '资源管理', icon: 'RectangleCopy256' },
        { path: `${pre}storage/style`, title: '资源样式', icon: 'chizi_o' }
      ]
    },
    { title: '消息管理',
      icon: 'RectangleCopy3',
      children: [
        { path: `${pre}message/user`, title: '我的消息', icon: 'youjian_o' },
        { path: `${pre}message/send`, title: '发布消息', icon: 'duanxinqunfa_o' }
      ]
    },
    { title: '辅助管理',
      icon: 'zhongkong_o',
      children: [
        { path: `${pre}aided/app`, title: 'App应用', icon: 'yingyongAPP_o' },
        { path: `${pre}aided/app_install`, title: 'App安装包', icon: 'shitujuzhen_o' },
        { path: `${pre}aided/support`, title: '客服人员', icon: 'kefu_o' },
        { path: `${pre}aided/friendlink`, title: '友情链接', icon: 'lianjie_o' },
        { path: `${pre}aided/qrcode`, title: '二维码', icon: 'erweima_o' }
      ]
    } 
  ])('/system/')
}

