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
        }, {
          path: '/tgsy/insert',
          component: () => import('./views/Project/huodong/insert.vue')
        }, {
          path: '/spgl',
          component: () => import('./views/Project/shangping/shangping.vue')
        }, {
          path: '/tgsy/update',
          component: () => import('./views/Project/huodong/update.vue')
        }, {
          path: '/spgl/update',
          component: () => import('./views/Project/shangping/update.vue')
        },
        {
          path: '/spgl/insert',
          component: () => import('./views/Project/shangping/insert.vue')
        },
        {
          path: '/yhqs',
          component: () => import('./views/Project/youhuiquan/yhqs.vue')
        },
        {
          path: '/yhqs/insert_shiti',
          component: () => import('./views/Project/youhuiquan/insert.vue')
        },
        {
          path: '/yhqs/insert_dianzi',
          component: () => import('./views/Project/youhuiquan/insert_dianzi.vue')
        },
        {
          path: '/yhqs/update',
          component: () => import('./views/Project/youhuiquan/update.vue')
        }, {
          path: '/yhqs/update_shiti',
          component: () => import('./views/Project/youhuiquan/update_dianzi.vue')
        },
        {
          path: '/hdProject',
          component: () => import('./views/Project/tuangou/hd.vue')
        }, {
          path: '/hdProject/insert',
          component: () => import('./views/Project/tuangou/insert.vue')
        }, {
          path: '/hdProject/update',
          component: () => import('./views/Project/tuangou/update.vue')
        }, {
          path: '/finance',
          component: () => import('./views/Finance/baobiao.vue')
        }, {
          path: '/shtixian',
          component: () => import('./views/Finance/tixian.vue')

        }, {
          path: '/user',
          component: () => import('./views/Finance/yinhang_user.vue')

        }, {
          path: '/kps',
          component: () => import('./views/Finance/kaipiao.vue')

        },
        {
          path: '/mdlist',
          component: () => import('./views/Shop/shop_list/ulist.vue')
        }, {
          path: '/mdlist/insert',
          component: () => import('./views/Shop/shop_list/insert.vue')
        }, {
          path: '/mdlist/update',
          component: () => import('./views/Shop/shop_list/update.vue')
        }, {
          path: '/mdlist/gengxin',
          component: () => import('./views/Shop/shop_list/gengxin.vue')
        }, {
          path: '/waimaiy',
          component: () => import('./views/Shop/waimai/wai.vue')
        }, {
          path: '/waimaiy/jc',
          component: () => import('./views/Shop/waimai/jichu.vue')
        }, {
          path: '/waimaiy/yy',
          component: () => import('./views/Shop/waimai/yuyue.vue')
        }, {
          path: '/waimaiy/fl',
          component: () => import('./views/Shop/waimai/fenlei.vue')
        }, {
          path: '/waimaiy/sp',
          component: () => import('./views/Shop/waimai/shangping.vue')
        }, {
          path: '/shangmen',
          component: () => import('./views/Shop/shangmen/shangmen.vue')
        }, {
          path: '/peisong',
          component: () => import('./views/Shop/peisong/peisong.vue')
        }, {
          path: '/shangmen/shangmensz',
          component: () => import('./views/Shop/shangmen/shang.vue')
        }, {
          path: '/peisongmb',
          component: () => import('./views/Account/peisong/peisong.vue')
        }, {
          path: '/peisongmb/xinzeng',
          component: () => import('./views/Account/peisong/xinzeng.vue')
        }, {
          path: '/peisongmb/xg',
          component: () => import('./views/Account/peisong/bianji.vue')
        }, {
          path: '/zzh',
          component: () => import('./views/Account/zizhanghu/sy.vue')
        }, {
          path: '/zzh/insert',
          component: () => import('./views/Account/zizhanghu/insert.vue')
        }, {
          path: '/zzh/qx',
          component: () => import('./views/Account/zizhanghu/quanxian.vue')
        }, {
          path: '/zzh/xg',
          component: () => import('./views/Account/zizhanghu/xiugai.vue')
        }, {
          path: '/kd',
          component: () => import('./views/Account/kuaidi/kuaidi.vue')
        }, {
          path: '/wd',
          component: () => import('./views/Account/weidian/wd.vue')
        }, {
          path: '/manmina',
          component: () => import('./views/Marketing/manmian.vue')
        }, {
          path: '/spys',
          component: () => import('./views/Marketing/shangping/shangping.vue')
        }, {
          path: '/waimdd',
          component: () => import('./views/Reserve/waimai.vue')
        }, {
          path: '/spys/bj',
          component: () => import('./views/Marketing/shangping/bj.vue')
        }, {
          path: '/yddd',
          component: () => import('./views/Reserve/yuding.vue')
        }, {
          path: '/ycdd',
          component: () => import('./views/Reserve/yichang.vue')
        }, {
          path: "/czjl",
          component: () => import('./views/Reserve/cuizhang.vue')
        }, {
          path: "/dzd",
          component: () => import('./views/Reserve/zhangdan.vue')
        }, {
          path: "/fws",
          component: () => import('./views/Visit/fuwu/fws.vue')
        },
        {
          path:'/fws/xzlx',
          component: () => import('./views/Visit/fuwu/leixing.vue')
        },{
          path:'/fws/xz',
          component: () => import('./views/Visit/fuwu/xinzeng.vue')
        },{
          path:'/fwx/bianji',
          component: () => import('./views/Visit/fuwu/bianji.vue')
        },{
          path:'/yicfw',
          component: () => import('./views/Visit/yichang/yichang.vue')
        },{
          path:'/fuw',
          component: () => import('./views/Visit/fuwu_dingdan/fuwu.vue')
        }
      ]

    },

    {
      path: "/",
      component: Index,
    }
  ]
})