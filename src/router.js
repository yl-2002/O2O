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
          path:"/xiugai",
          component: () => import('./views/Management/xiugai.vue'),
        },
        {
          path:"/shanghu",
          component: () => import('./views/Management/shangping.vue'),
        },
        {
          path:"/yzxfq",
          component: () => import('./views/Authentication/youhui.vue'),
        },
        {
          path:"/yzyhq",
          component: () => import('./views/Authentication/xiaofei.vue'),
        },
        {
          path:"/hdcanjia",
          component: () => import('./views/Authentication/hdcanjia.vue'),
        
        },
        {
          path:'/tgdd',
          component: () => import('./views/Order/tuangou_list.vue'),
        },
        {
          path:'/spdd',
          component: () => import('./views/Order/shangping_list.vue'),
        }
      ]

    },

    {
      path: "/",
      component: Index,
    }
  ]
})