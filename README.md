# myproject

### 这是一个后台管理的模板，基于 careyshop 所抽离。
1. 首先这是基于 vue2 + vue-cli3 + element-ui + axios + vuex + sass.
2. 目录介绍：(所有 demo.* 均为demo)
+ /public   静态资源（img,css,js,index.html-项目主入口，favicon.ico-网站小图标）
+ /src   项目开发主操作
+ /src/api  api接口 （每一个文件夹代表相应的模块）
+ /src/assets 静态资源
+ /src/components 项目公共组件
+ /src/layout  该项目的布局设计
+ /src/menu    该项目菜单
+ /src/mock    模拟数据
+ /src/plugin  功能插件
+ /src/router  路由模块
+ /src/store   vuex
+ /src/utils   实用工具(axios封装，cookie，localstorage)
+ /src/views   主页面 （每个文件代表每个模块）
+ /src/App.vue 
+ /src/main.js 主入口
+ /src/setting.js 一些快捷键设置,主题设置
+ vue.config.js  vue-cli3 打包设置


> 一些问题
1. 在 src\components\cs-upload\components\mixins/upload.js 文件下 直接修改文件上传api地址，上传文件大小，类型。
2. api 接口 baseUrl 在根目录下  .env  .env.development 下更该


