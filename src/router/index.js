import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')
const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')

// push
// addressbook
const details = r => require.ensure([], () => r(require('../frames/addressbook/details/details')), 'details')
const more = r => require.ensure([], () => r(require('../frames/addressbook/details/more/more')), 'more')

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
          path: '/addressbook/dialogue',
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
