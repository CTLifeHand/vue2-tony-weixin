# vue2-tony-weixin

> A Vue.js project

## 构建
```构建代码
vue init webpack vue2-tony-weixin
sass环境
npm install sass-loader node-sass webpack --save-dev
```

### 项目运行

```
npm install

npm run dev (访问本地，运行后访问 http://localhost:8882)

```

### keep-alive
- Vue keep-alive实践总结
```https://www.cnblogs.com/sysuhanyf/p/7454530.html
https://www.cnblogs.com/sysuhanyf/p/7454530.html
```

### 通讯录的点击list滚动有问题
- mUtils的animate函数不生效

### HTML5屏幕适配标签设置
```http://blog.csdn.net/zxf13598202302/article/details/51594661
开发HTML5游戏中，我们常用的一些mata标签:

<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
　
width: viewport 的宽度 （范围从 200 到 10,000 ，默认为 980 像素 ）

height: viewport 的高度 （范围从 223 到 10,000 ）

initial-scale: 初始的缩放比例 （范围从>0到 10 ）

minimum-scale: 允许用户缩放到的最小比例

maximum-scale: 允许用户缩放到的最大比例

user-scalable: 用户是否可以手动缩放

下面是我们经常用到的一些标签，由于浏览器的差异，并不能百分百兼容。

<!-- 是否删除默认的苹果工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- 其他的meta设置 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">

<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
此外，apple还有两个有趣的标签：
1. apple-touch-icon
< link  rel= "apple-touch-icon"  sizes= "76x76"  href= "touch-icon-ipad.png">
如果 apple-mobile-web-app-capable 设置为 yes 了，那么在苹果机的safari上可以通过添加到主屏按钮将网站添加到主屏幕上。而设置相应 apple-touch-icon 标签，则添加到主屏上的图标就会使用我们指定的图片。

2. apple-touch-startup-image
< link rel= "apple-touch-startup-image" href= "/startup.png">
基于 apple-mobile-web-app-capable 设置为 yes ，可以为WebApp设置一个类似NativeApp的启动画面。和 apple-touch-icon 不同， apple-mobile-web-app-capable 不支持sizes属性，要使用media来加载不同的启动画面。详细查询 大漠的文章 。

// iPhone
<link href="apple-touch-startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image" />
// iPhone Retina
<link href="apple-touch-startup-image-640x920.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
参考：

http://www.w3cplus.com/mobile/mobile-terminal-refactoring-create-page.html

http://blog.sina.com.cn/s/blog_6d48e77101015kqr.html

http://blog.sina.com.cn/s/blog_3f1fc8950101fz2v.html
```

### 基于路由的动画
- https://router.vuejs.org/zh-cn/advanced/transitions.html



### 说明

> 本项目主要用于熟悉vue2+vuex的用法

# 目标功能

- [x] 微信
- [x] 通讯录
- [x] 通讯录右边导航功能
- [x] 发现
- [x] 我
- [x] 设置
- [x] 新消息提醒
- [x] 勿扰模式
- [x] 聊天
- [x] widows 微信已登录
- [x] 搜索页
- [x] 对话页
- [x] 对话功能
- [x] 单人机器人智能对话页
- [x] 群聊
- [x] 朋友圈
- [x] 朋友圈点赞、评论
- [x] 个人中心
- [x] 详细资料
- [x] 更多
- [x] 个人相册
- [x] 更多
- [x] 收藏
- [x] 我的钱包
- [x] 购物
- [x] 设置
- [x] 登录

# 项目布局

```

├── README.md                                    // webpack配置文件
├── build                                        // 项目打包路径
├── config                                       // 上线项目文件，放在服务器即可正常访问
│   └── index.js
├── favicon.ico
├── index.html
├── package.json
├── printscreen
├── src                                          // 源码目录
│   ├── App.vue                                  // 页面入口文件
│   ├── components                               // 公共组件
│   │   ├── findandMe
│   │   │   └── findandMe.vue                    // 发现和我共同的模块的列表
│   │   ├── footer
│   │   │   └── foot.vue                         // 底部微信导航
│   │   └── header
│   │       └── head.vue                         // 头部公共组件
│   ├── config                                   // 基本配置
│   │   ├── env.js                               // 环境切换配置
│   │   ├── fetch.js                             // 获取数据
│   │   ├── iscroll.js
│   │   ├── mUtils.js                            // 工具
│   │   ├── rem.js                               // px转换rem
│   │   ├── swiper.min.js                        // 轮播图控件
│   │   └── uploadPreview.js                     // 上传图片控件
│   ├── frames
│   │   ├── addressbook
│   │   │   ├── addressbook.vue                  // 通讯录
│   │   │   └── details
│   │   │       ├── details.vue                  // 详细资料
│   │   │       └── more
│   │   │           └── more.vue                 // 更多
│   │   ├── computer
│   │   │   └── computer.vue                     // pc端登录
│   │   ├── conversation
│   │   │   ├── chatmessage
│   │   │   │   ├── chatmessage.vue              // 单人聊天信息
│   │   │   │   └── groupchatmessage.vue         // 群聊聊天信息
│   │   │   ├── groupchat.vue                    // 群聊
│   │   │   └── singlechat.vue                   // 单人对话
│   │   ├── dialogue
│   │   │   └── dialogue.vue                     // 微信首页(对话列表页)
│   │   ├── find
│   │   │   ├── find.vue                         // 发现
│   │   │   ├── friendcircle
│   │   │   │   └── friendcircle.vue             // 朋友圈
│   │   │   └── miniapps
│   │   │       └── miniapps.vue                 // 小程序子页面
│   │   ├── me
│   │   │   ├── cardbag
│   │   │   │   └── cardbag.vue                  // 卡包
│   │   │   ├── collect
│   │   │   │   └── collect.vue                  // 我的收藏
│   │   │   ├── me.vue
│   │   │   ├── personaldetails
│   │   │   │   └── personaldetails.vue          // 个人信息
│   │   │   ├── photoalbum
│   │   │   │   └── photoalbum.vue               // 我的相册
│   │   │   ├── settings
│   │   │   │   ├── detailset
│   │   │   │   │   ├── aboutwc.vue              // 关于微信
│   │   │   │   │   ├── chat.vue                 // 聊天
│   │   │   │   │   ├── currency.vue             // 通用
│   │   │   │   │   ├── disturbance.vue          // 勿扰模式
│   │   │   │   │   ├── help.vue                 // 帮助与反馈
│   │   │   │   │   ├── login.vue                // 登录
│   │   │   │   │   ├── newmessage.vue           // 新消息提醒
│   │   │   │   │   └── privacy.vue              // 隐私
│   │   │   │   └── settings.vue                 // 设置
│   │   │   └── wallet
│   │   │       └── wallet.vue                   // 我的钱包
│   │   ├── search
│   │       └── search.vue                       // 搜索
│   ├── images
│   ├── main.js                                  // 程序入口文件，加载各种公共组件
│   ├── router
│   │   └── router.js                           // 所有页面路由控制中心
│   ├── service
│   │   ├── data
│   │   │   ├── album.js                        // 个人相册
│   │   │   ├── burse.js                        // 钱包数据
│   │   │   ├── chatmore.js
│   │   │   ├── collect.js                     // 我的收藏
│   │   │   ├── contacts.js                    // 联系人列表数据
│   │   │   ├── dialoglist.js                  // 对话列表
│   │   │   ├── friendcircle.js                // 朋友圈数据
│   │   │   ├── groupchat.js                   // 群聊数据
│   │   │   ├── login.js                       // 个人用户信息
│   │   │   ├── search.js                      // 搜索的分类
│   │   │   └── userword.js
│   │   └── getData.js                         // 数据交互统一调配
│   ├── style
│   │   ├── public.scss                        // 公共样式
│   │   └── swiper.min.css
│   └── vuex                                   // vuex的状态管理
│       ├── action.js                          // 配置根actions
│       ├── index.js                           // 引用vuex，创建store
│       ├── mutation-types.js                  // 定义常量muations名
│       └── mutation.js                        // 配置根mutations
└── tree.md

36 directories, 133 files

```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
