<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">对账单</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div class="ss">
        <p style=" margin-bottom: 22px;">
          销售金额：
          <span style="color:Red">￥2000</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 未确认：
          <span style="color:Red">￥750</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 已完成：
          <span style="color:Red">￥1200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 退款/取消订单：
          <span style="color:Red">￥50</span>
        </p>
        <p>注：以上数据统计的是所有订单销售金额，商户最终结算费用以每个订单的结算价为准，货到付款/到店支付不产生结算价</p>
      </div>
      <div class="ss">
        <p style=" margin-bottom: 22px;margin-top: 19px;">
          已结算：
          <span style="color:Red">￥0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 待结算：
          <span style="color:Red">￥1900</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 已结算佣金：
          <span style="color:Red">￥100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-button size="mini" class="a">结算</el-button>
        </p>
      </div>
       <div class="ss">
       <el-input placeholder="下单起始日期" v-model="input" clearable size="small"></el-input>
      <i>-</i>
      <el-input placeholder="下单截至日期" v-model="input1" clearable size="small"></el-input>
      <el-input placeholder="请输入商品名..." v-model="input2" clearable size="small"></el-input>
       <el-select v-model="value" placeholder="请选择"  size="small" style="
    position: relative;
    left: 214px;
">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      <el-button
        type="warning"
        size="small"
        @click.native="cx"
        style="position: absolute;
    background: rgb(255, 136, 0);
    right: 305px;"
      >查询</el-button>
      </div>
      
      <div class="tb">
        <el-row class="top">
          <el-col :span="4">门店</el-col>
          <el-col :span="4">订单号</el-col>
          <el-col :span="3">联系人</el-col>
          <el-col :span="3">电话</el-col>
          <el-col :span="6">配送地址</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">催单时间</el-col>
        </el-row>
        <el-row class="ff">
            <div style="float:right">本页合计：<span style="color:red">￥100</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合计：<span style="color:red">￥2800</span></div>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司总部</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市天河区天河大厦601室</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司总部</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市天河区天河大厦601室</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司总部）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市天河区天河大厦601室</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>

        <el-row class="dd">
          <el-col :span="4">花生米科技公司（越秀店）</el-col>
          <el-col :span="4">2018122800300557</el-col>
          <el-col :span="3">￥15</el-col>
          <el-col :span="3">￥0</el-col>
          <el-col :span="6">广州市越秀区东园横路1号</el-col>
          <el-col style="border-right: 1px solid rgb(228,228,228);" :span="4">2018-12-12 12:00:12</el-col>
        </el-row>
        <div class="foot">
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="4000"
            style="padding: 16px 0px 0px 205px;
    margin-bottom: 16px"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
    
      input2: "",
      msg: "全部",
         options: [{
          value: '选项1',
          label: '销售明细',
        }, {
          value: '选项2',
          label: '已完成明细',
        }, {
          value: '选项3',
          label: '退款/取消订单',
        }, {
          value: '选项4',
          label: '已结算明细',
        }],
        value: '销售明细'
    };
  },
  methods: {
    cx() {
      this.$router.go(0);
    },

  },
};
</script>
<style scoped>
.a{
    background:rgb(255,136,0);color:white    ;margin-left: 660px;
}
.foot >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.foot >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
.tb {
  width: 1100px;
  min-height: 200px;
    margin: 5px 0 4px 16px;
}
.top {
  text-align: center;
  font-size: 14px;
  background: rgb(242, 242, 242);
}
.top >>> .el-col {
  padding: 7px 0;
  border: 1px solid rgb(228, 228, 228);
  border-right: none;
}
.ff{
    min-height: 10px;

    border: 1px solid rgb(228,228,228);
    padding: 13px 20px;
    background: rgb(254, 251, 239);
    font-size: 12px;
}
.box {
  padding: 29px 0 1px 60px;
  background: white;
  min-height: 100px;
  width: 1185px;
  margin: 34px auto;
}
.dd {
  font-size: 12px;
  text-align: center;
}
.dd >>> .el-col {
  padding: 10px 0;
  border: 1px solid rgb(228, 228, 228);
  border-top: none;
  border-right: none;
}

.ss {
  width: 1085px;
  padding: 10px 0 10px 15px;
  min-height: 10px;
  margin: 35px 0px 4px 16px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(254, 251, 239);
  font-size: 12px;
}
.pj1 {
  padding: 7px 0 7px 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.el-input {
  margin: 0 20px;
  width: 141px;
  height: 31px;
}
.box >>> .el-input__inner:focus {
  border-color: rgb(255, 136, 0);
  outline: 0;
}
</style>