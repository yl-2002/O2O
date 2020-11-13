import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Management/index.vue'
import Houtai from './views/Management/houtai.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/houtai",
      component: Houtai,
      children: [{
          path: "/shouye",
          component: () => import('./views/Management/shouye.vue'),
        },
        {
          path: "/houtai",
          redirect: '/shouye'
        },
        {
          path: "/xiugai",
          component: () => import('./views/Management/xiugai.vue'),
        },
        {
          path: "/shanghu",
          component: () => import('./views/Management/shangping.vue'),
        },
        {
          path: "/yzxfq",
          component: () => import('./views/Authentication/youhui.vue'),
        },
        {
          path: "/yzyhq",
          component: () => import('./views/Authentication/xiaofei.vue'),
        },
        {
          path: "/hdcanjia",
          component: () => import('./views/Authentication/hdcanjia.vue'),

        },
        {
          path: '/tgdd',
          component: () => import('./views/Order/tuangou_list.vue'),
        },
        {
          path: '/spdd',
          component: () => import('./views/Order/shangping_list.vue'),
        },
        {
          path: '/yhlq',
          component: () => import('./views/Order/jilu_list.vue'),
        }, {
          path: '/hdbm',
          component: () => import('./views/Order/huodong.vue')
        }, {
          path: '/ddf',
          component: () => import('./views/Order/goShop/xiangqing.vue')
        },
        {
          path: '/ddf/xq',
          component: () => import('./views/Order/goShop/xianq.vue')
        },
        {
          path: '/yushou',
          component: () => import('./views/Order/yushou.vue')
        },
        {
          path: '/xfpl',
          component: () => import('./views/Comment/xiaofei.vue')
        },
        {
          path: '/yhqpl',
          component: () => import('./views/Comment/youhuiquan.vue')
        }, {
          path: '/hdpl',
          component: () => import('./views/Comment/hd.vue')
        }, {
          path: '/mdpl',
          component: () => import('./views/Comment/md.vue')
        }, {
          path: '/tgsy',
          component: () => import('./views/Project/huodong/tg.vue')
        }

      ]

    },

    {
      path: "/",
      component: Index,
    }
  ]
})