<template>
    <div >
  <el-col :span="3"      class="el3">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
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
      @close="handleClose">
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click.native="tgdd">团购管理订单</el-menu-item>
          <el-menu-item index="2-2" @click.native="spdd">商品订单列表</el-menu-item>
          <el-menu-item index="2-3">优惠券领取记录</el-menu-item>
          <el-menu-item index="2-4">活动报名</el-menu-item>
          <el-menu-item index="2-5">到店付</el-menu-item>
          <el-menu-item index="2-6">预售订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>评论管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">消费评论</el-menu-item>
          <el-menu-item index="3-2">优惠券评论</el-menu-item>
          <el-menu-item index="3-3">活动评论</el-menu-item>
          <el-menu-item index="3-4">门店评论</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="4"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>项目管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">团购</el-menu-item>
          <el-menu-item index="4-2">商品</el-menu-item>
          <el-menu-item index="4-3">优惠券</el-menu-item>
          <el-menu-item index="4-4">活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="5"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">财务报表</el-menu-item>
          <el-menu-item index="5-2">商户提现</el-menu-item>
           <el-menu-item index="5-3">银行账户</el-menu-item>
          <el-menu-item index="5-4">开票设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="6"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>门店管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">门店列表</el-menu-item>
          <el-menu-item index="6-2">外卖预定设置</el-menu-item>
           <el-menu-item index="6-1">上门服务设置</el-menu-item>
          <el-menu-item index="6-2">配送设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="7"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>账户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">配送模板</el-menu-item>
          <el-menu-item index="7-2">子账户管理</el-menu-item>
          <el-menu-item index="7-3">快递列表</el-menu-item>
          <el-menu-item index="7-4">微店设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="8"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>营销管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">满免运费</el-menu-item>
          <el-menu-item index="8-2">商品预售</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="9"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>外卖预定管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">外卖订单</el-menu-item>
          <el-menu-item index="9-2">预定订单</el-menu-item>
           <el-menu-item index="9-3">异常外卖订单</el-menu-item>
          <el-menu-item index="9-4">对账单</el-menu-item>
           <el-menu-item index="9-5">催单记录</el-menu-item>
            <el-menu-item index="9-6">预定电子券验证</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
        <el-menu
      default-active="10"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>上门服务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1">服务管理</el-menu-item>
          <el-menu-item index="10-2">服务订单</el-menu-item>
          <el-menu-item index="10-3">异常服务订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
    </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      yzcj(){
        this.$router.push({
          path:'/hdcanjia'
        })
      },
      yzxfq(){
        this.$router.push({
          path:'/yzxfq'
        })
      },
      yzyhq(){
         this.$router.push({
          path:'/yzyhq'
        })
      },
      tgdd(){
        this.$router.push({
          path:'/tgdd'
        })
      },
      spdd(){
         this.$router.push({
          path:'/spdd'
        })
      }
    }
  }
</script>
<style coped>
.el3{
    overflow-y: scroll;
    position: fixed;
    left: 0;
    top: 61px;
    max-height: 100%;
}
.el3::-webkit-scrollbar{
  display: none;
}
</style>