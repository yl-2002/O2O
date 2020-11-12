<template>
    <div>
           <div class="nav_top">
            <p>
              <span><a style="margin-left:9px">首页</a></span>
            </p>
          </div>
          <div class="box">
            <h2>O2O城市系统商户管理平台部分交互指南</h2>
            <div style="margin-top: 19px;line-height: 29px;">
              <h3>验证管理</h3>
              <div style="font-size:14px">
                <br />验证消费券页面
                <br />单张消费券验证：门店选择、“不输入、输入123456、输入其他”分别提交验证
                <br />消费券批量验证：门店选择、提交验证
                <br />超级验证：门店选择、“不输入、输入123456、输入其他”分别提交验证
                <br />
                <br />验证优惠券页面
                <br />门店选择、“不输入、输入123456、输入其他”分别提交验证
                <br />
                <br />验证活动报名页面
                <br />门店选择、“不输入、输入123456、输入其他”分别提交验证
                <br />
              </div>
            </div>
            <div style="margin-top: 19px;line-height: 29px;">
              <h3>订单管理</h3>
              <div style="font-size:14px">
                <br />商品订单列表页面
                <br />查看发票、待验证详情、待收货详情、待发货详情、待收货详情、已退款详情、待评价详情、已评价详情、退款处理、发货处理
                <br />
                <br />到店付页面
                <br />订单详情
                <br />
                <br />预售订单
                <br />查看发票、待付订金详情、待付尾款详情、待发货详情、待退款详情、待评价详情、发货处理、退款处理
              </div>
            </div>
            <div style="margin-top: 19px;line-height: 29px;">
              <h3>评论管理</h3>
              <div style="font-size:14px">
                <br />消费评论页面/优惠券评论页面/活动评论页面/门店评论页面
                <br />回复、修改回复
              </div>
              <div style="margin-top: 19px;line-height: 29px;">
                <h3>项目管理</h3>
                <div style="font-size:14px">
                  <br />商品页面/新增商品子页面
                  <br />编辑、下架、上架、删除、状态切换
                  <br />商品分类、支持门店、基本信息、团购配置、库存价格、手机端描述
                  <br />
                  <br />团购页面/新增团购子页面
                  <br />编辑、下架、上架、删除、状态切换
                  <br />商品分类、支持门店、基本信息、团购配置、库存价格、手机端描述
                  <br />
                  <br />优惠券页面/新增电子券子页面/新增实体券子页面
                  <br />编辑、删除、状态切换
                  <br />基本信息、使用规则、手机端描述
                  <br />
                  <br />活动页面/新增活动子页面
                  <br />编辑、下架、上架、删除、状态切换
                  <br />支持门店、基本信息、手机端描述
                </div>
              </div>
              <div style="margin-top: 19px;line-height: 29px;">
                <h3>财务管理</h3>
                <div style="font-size:14px">
                  <br />财务报表页面
                  <br />财务概况、销售走势、财务明细切换
                  <br />
                  <br />商户提现页面/银行账户页面/开票设置页面
                  <br />提现金额、图形校验码、短信验证码、是否开票设置
                </div>
                <div style="margin-top: 19px;line-height: 29px;">
                  <h3>门店管理</h3>
                  <div style="font-size:14px">
                    <br />门店列表页面/新增门店子页面
                    <br />审核修改、资料更新、上架、下架、修改、状态切换
                    <br />分类、子分类、城市筛选、商圈、地图定位
                    <br />
                    <br />外卖预定页面/外卖设置子页面/预约项目设置子页面/外卖分类子页面/外卖商品子页面
                    <br />新增、修改、删除、查询、状态切换、排序
                    <br />
                    <br />上门服务设置页面/服务管理子页面/上门设置子页面
                    <br />新增、修改、删除、查询、状态切换、排序
                    <br />
                    <br />剩余的页面交互大家自己点击体验吧！
                  </div>
                </div>
              </div>
            </div>
            <div class="Imgbig"></div>
          </div>
    </div>
</template>
<script>
export default {
    name:'shouye'
}
</script>
<style scoped>
.el-main {
  padding: 0 !important;
  min-height: 1000px;
  margin: 60px 0 0 -61px;
  background: rgb(242, 242, 242);
}
.el-main p {
  padding: 15px 0 0 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.el-main p span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.box {
  padding: 29px 0 0 60px;
  background: white;
  min-height: 500px;
  width: 1185px;
  margin: 34px auto;
}
.box h2 {
  margin: 0 0 0 327px;
}
.Imgbig {
  background: url(/img/u370.80a172f4.png) no-repeat;
  background-size: 92% 90%;
  width: 1282px;
  height: 1201px;
  margin: 43px 0 0 -50px;
}
</style>