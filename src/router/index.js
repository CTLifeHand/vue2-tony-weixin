import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Base
const search = r => require.ensure([], () => r(require('../components/search')), 'search')

const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')
const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')

// push
// conversation
const singlechat = r => require.ensure([], () => r(require('../frames/conversation/singlechat')), 'singlechat')
const chatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/chatmessage')), 'chatmessage')
const groupchat = r => require.ensure([], () => r(require('../frames/conversation/groupchat')), 'groupchat')
const groupchatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/groupchatmessage')), 'groupchatmessage')

// dialogue
const computer = r => require.ensure([], () => r(require('../frames/dialogue/push/computer')), 'computer')
const transfer = r => require.ensure([], () => r(require('../frames/dialogue/push/transfer')), 'transfer')

// addressbook
const details = r => require.ensure([], () => r(require('../frames/addressbook/details/details')), 'details')
const more = r => require.ensure([], () => r(require('../frames/addressbook/details/more/more')), 'more')
// find
const friendcircle = r => require.ensure([], () => r(require('../frames/find/push/friendcircle')), 'friendcircle')
const miniapps = r => require.ensure([], () => r(require('../frames/find/push/miniapps')), 'miniapps')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '', redirect: '/dialogue' },   // 地址为空时跳转dialogue页面
    {
      path: '/dialogue',
      component: dialogue // 对话列表页
    },
    {
      path: '/addressbook',
      name: 'addressbook', // 路由应该可以用于push
      component: addressbook,
      meta: { keepAlive: true },
      children: [
        {
          path: '/addressbook/details',
          component: details, // 详细资料
          children: [
            {
              path: '/addressbook/details/more',
              component: more // 更多
            }
          ]
        }
      ]
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      children: [
        {
          path: '/find/friendcircle',
          component: friendcircle // 朋友圈
        },
        {
          path: '/find/miniapps',
          component: miniapps // 小程序
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/singlechat',
      component: singlechat,
      children: [
        {
          path: '/singlechat/chatmessage',
          component: chatmessage
        }
      ]

    },
    {
      path: '/groupchat',
      component: groupchat,
      children: [
        {
          path: '/groupchat/groupchatmessage',
          component: groupchatmessage
        }
      ]
    },
    { path: '/search', component: search }, // 我
    { path: '/computer', component: computer }, // 电脑登录
    { path: '/transfer', component: transfer } // 文件传送助手
  ],
  mode: 'history', // 路由模式
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (from.meta.keepAlive) { // from 是router (解决addressbook的滚动条问题 )
    from.meta.savedPosition = document.body.scrollTop
  }
  next()
})

export default router
