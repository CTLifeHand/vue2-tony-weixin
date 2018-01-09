import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')

const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')
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
      name: 'addressbook',
      component: addressbook,
      meta: { keepAlive: true }
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
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
