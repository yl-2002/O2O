<template>
  <div>
    <el-col :span="3" class="el3">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>验证管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click.native="yzxfq">验证消费券</el-menu-item>
            <el-menu-item index="1-2" @click.native="yzyhq">验证优惠券</el-menu-item>
            <el-menu-item index="1-3" @click.native="yzcj">验证活动报名</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click.native="tgdd">团购管理订单</el-menu-item>
            <el-menu-item index="2-2" @click.native="spdd">商品订单列表</el-menu-item>
            <el-menu-item index="2-3" @click.native="yhlq">优惠券领取记录</el-menu-item>
            <el-menu-item index="2-4" @click.native="hdbm">活动报名</el-menu-item>
            <el-menu-item index="2-5" @click.native="ddf">到店付</el-menu-item>
            <el-menu-item index="2-6" @click.native="ys">预售订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>评论管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click.native="xfpl">消费评论</el-menu-item>
            <el-menu-item index="3-2" @click.native="yhqpl">优惠券评论</el-menu-item>
            <el-menu-item index="3-3" @click.native="hdpl">活动评论</el-menu-item>
            <el-menu-item index="3-4" @click.native="mdpl">门店评论</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="4"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>项目管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click.native="tg">团购</el-menu-item>
            <el-menu-item index="4-2" @click.native="sp">商品</el-menu-item>
            <el-menu-item index="4-3" @click.native="sps">优惠券</el-menu-item>
            <el-menu-item index="4-4" @click.native="hds">活动</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="5"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>财务管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1" @click.native="hdss">财务报表</el-menu-item>
            <el-menu-item index="5-2" @click.native="shtx">商户提现</el-menu-item>
            <el-menu-item index="5-3" @click.native="user">银行账户</el-menu-item>
            <el-menu-item index="5-4" @click.native="kps">开票设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="6"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>门店管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1" @click.native="mdlist">门店列表</el-menu-item>
            <el-menu-item index="6-2" @click.native="wm">外卖预定设置</el-menu-item>
            <el-menu-item index="6-3" @click.native="sm">上门服务设置</el-menu-item>
            <el-menu-item index="6-4" @click.native="pssz">配送设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="7"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>账户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1" @click.native="peisongmb">配送模板</el-menu-item>
            <el-menu-item index="7-2" @click.native="zhs">子账户管理</el-menu-item>
            <el-menu-item index="7-3" @click.native="kd">快递列表</el-menu-item>
            <el-menu-item index="7-4" @click.native="wd">微店设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="8"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>营销管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1" @click.native="mm">满免运费</el-menu-item>
            <el-menu-item index="8-2" @click.native="spys">商品预售</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="9"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>外卖预定管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="9-1" @click.native="wydd">外卖订单</el-menu-item>
            <el-menu-item index="9-2" @click.native="yddd">预定订单</el-menu-item>
            <el-menu-item index="9-3" @click.native="ycdd">异常外卖订单</el-menu-item>
            <el-menu-item index="9-4" @click.native="dzd">对账单</el-menu-item>
            <el-menu-item index="9-5" @click.native="czjl">催单记录</el-menu-item>
            <el-menu-item index="9-6" @click.native="yzyhq">预定电子券验证</el-menu-item>
          </el-menu-item-group>
        </el-submenu> 
      </el-menu>
      <el-menu
        default-active="10"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>上门服务管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="10-1" @click.native="fws">服务管理</el-menu-item>
            <el-menu-item index="10-2" @click.native="fwws">服务订单</el-menu-item>
            <el-menu-item index="10-3" @click.native="yicfw">异常服务订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  methods: {
    fwws(){
        this.$router.push({
            path:'/fuw',
      });
    },
    yicfw(){
       this.$router.push({
            path:'/yicfw',
      });
    },
    fws(){
      this.$router.push({
        path: "/fws",
      });
    },
    dzd(){
      this.$router.push({
        path: "/dzd",
      });
    },
    czjl(){
      this.$router.push({
        path: "/czjl",
      });
    },
    ycdd(){
      this.$router.push({
        path: "/ycdd",
      });
    },
    yddd(){
       this.$router.push({
        path: "/yddd",
      });
    },
    wydd(){
  this.$router.push({
        path: "/waimdd",
      });
    },
    spys() {
      this.$router.push({
        path: "/spys",
      });
    },
    mm() {
      this.$router.push({
        path: "/manmina",
      });
    },

    zhs() {
      this.$router.push({
        path: "/zzh",
      });
    },
    wd() {
      this.$router.push({
        path: "/wd",
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    kd() {
      this.$router.push({
        path: "/kd",
      });
    },
    yzcj() {
      this.$router.push({
        path: "/hdcanjia",
      });
    },
    yzxfq() {
      this.$router.push({
        path: "/yzxfq",
      });
    },
    yzyhq() {
      this.$router.push({
        path: "/yzyhq",
      });
    },
    hdpl() {
      this.$router.push({
        path: "/hdpl",
      });
    },
    mdpl() {
      this.$router.push({
        path: "/mdpl",
      });
    },
    tgdd() {
      this.$router.push({
        path: "/tgdd",
      });
    },
    spdd() {
      this.$router.push({
        path: "/spdd",
      });
    },
    yhlq() {
      this.$router.push({
        path: "/yhlq",
      });
    },
    hdbm() {
      this.$router.push({
        path: "/hdbm",
      });
    },
    ddf() {
      this.$router.push({
        path: "/ddf",
      });
    },
    ys() {
      this.$router.push({
        path: "/yushou",
      });
    },
    xfpl() {
      this.$router.push({
        path: "/xfpl",
      });
    },
    yhqpl() {
      this.$router.push({
        path: "/yhqpl",
      });
    },
    tg() {
      this.$router.push({
        path: "/tgsy",
      });
    },
    sps() {
      this.$router.push({
        path: "/yhqs",
      });
    },
    sp() {
      this.$router.push({
        path: "/spgl",
      });
    },
    hds() {
      this.$router.push({
        path: "/hdProject",
      });
    },
    hdss() {
      this.$router.push({
        path: "/finance",
      });
    },
    shtx() {
      this.$router.push({
        path: "/shtixian",
      });
    },
    user() {
      this.$router.push({
        path: "/user",
      });
    },
    kps() {
      this.$router.push({
        path: "/kps",
      });
    },
    mdlist() {
      this.$router.push({
        path: "/mdlist",
      });
    },
    wm() {
      this.$router.push({
        path: "/waimaiy",
      });
    },
    sm() {
      this.$router.push({
        path: "/shangmen",
      });
    },
    pssz() {
      this.$router.push({
        path: "/peisong",
      });
    },
    peisongmb() {
      this.$router.push({
        path: "/peisongmb",
      });
    },
  },
};
</script>
<style coped>
.el3 {
  overflow-y: scroll;
  position: fixed;
  left: 0;
  top: 61px;
  max-height: 100%;
}
.el3::-webkit-scrollbar {
  display: none;
}
.el-submenu__title:hover {
  background-color: rgba(255, 136, 0, 0.1) !important;
}
.el-menu-item:hover {
  background-color: rgba(255, 136, 0, 0.1) !important;
}
.el-menu-item.is-active {
  background-color: rgb(255, 136, 0) !important;
  color: white !important;
}
</style>