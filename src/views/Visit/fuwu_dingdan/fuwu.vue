<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">服务订单</a>
        </span>
      </p>
    </div>
    <div class="box">
       <el-input placeholder="下单起始日期" v-model="input" clearable size="small"></el-input>
      <i style="margin-right: 20px;">-</i>
      <el-input placeholder="下单截至日期" v-model="input1" clearable size="small"></el-input>
      <el-input placeholder="请输入商品名..." v-model="input2" clearable size="small"></el-input>
     <el-select v-model="value" placeholder="请选择" size="small">
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
    right: 290px;"
      >查询</el-button>

       <div style="margin: 17px 0 17px 0;font-size:12px">
           <label >订单状态：</label>
         <el-radio-group v-model="radio">
    <el-radio :label="3">全部</el-radio>
    <el-radio :label="6">待接单</el-radio>
    <el-radio :label="9">待服务</el-radio>
    <el-radio :label="12">服务中</el-radio>
    <el-radio :label="15">代付尾款</el-radio>
    <el-radio :label="18">待评价</el-radio>
    <el-radio :label="21">已完成</el-radio>
    <el-radio :label="24">已取消</el-radio>
   
  </el-radio-group>
   </div>
   <div class="body">
<el-row class="top">
    <el-col :span="7">详情</el-col>
    <el-col :span="6">服务门店</el-col>
    <el-col :span="5">服务时间</el-col>
    <el-col :span="3">订单结算总额</el-col>
    <el-col :span="3">操作</el-col>
   </el-row>
   <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：
<br>
实际服务时间：
<br>
支付尾款时间：</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center" ><el-link type="warning" @click.native="qx">取消订单</el-link><br><el-button size="small" style="background:rgb(0,190,127);color:white" @click.native="jd">接单</el-button></el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:30:00
<br>
支付尾款时间：</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center" ><el-button size="small" style="background:rgb(0,190,127);color:white;margin-top: 17px;" @click.native="jd">开始服务</el-button></el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center" ><el-button size="small" style="background:rgb(0,190,127);color:white;margin-top: 17px;" @click.native="jd">结束服务</el-button></el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：2018-12-28 14:20:00
<br>
支付尾款时间：2018-12-28 14:20:00</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
    <el-row class="bo">
订单号：2018122800300557，交易时间：2018-12-28 00:30:05，预约时间：2018-12-28 14:00 - 16:00
<span>接单超时</span>
   </el-row>
   <el-row class="fot">
    <el-col :span="7">预约项目：华为mate20电池更换<br>
客户信息：十月大神 18800000000<br>
服务地址：广东省广州市越秀区东园横路1号</el-col>
    <el-col :span="6">门店名称：花生米科技公司总部
<br>
联系电话：18888888888</el-col>
    <el-col :span="5">预定服务时间：2018-12-28 14:20:00
<br>
实际服务时间：
<br>
支付尾款时间：</el-col>
    <el-col :span="3" style="text-align:center">￥18<br><el-link type="warning" @click.native="sf">收费详情</el-link></el-col>
    <el-col :span="3" style="text-align:center"> </el-col>
   </el-row>
   </div>
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
   <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="服务名称" width="200"></el-table-column>
    <el-table-column property="name" label="数量" width="130"></el-table-column>
     <el-table-column property="names" label="售价" width="120"></el-table-column>
    <el-table-column property="address" label="结算价" width="110"></el-table-column>
  </el-table>
  <div style="margin-top:10px;line-height:28px">
      <p  style="float:Right"> 订单总额：<span style="    margin-left: 62px;">￥200</span></p>
     <br>
   <p style="float:Right">  订金（已付）：<span  style="margin-left: 42px;">￥10</span></p>
   <br>
   <p  style="float:Right"> 尾款（未付）：<span  style="margin-left: 49px;">190</span></p>
</div>
<hr style="      margin-top: 35px;
    background: rgb(228, 228, 228);
    height: 1px;
    border: none;">
     <p  style="float:Right   ; margin-top: 4px;"> 本单收入：<span  style="margin-left: 64px;color:red;font-weight:bold">￥160</span></p>
     <hr style="       margin-top: 29px;
    background: rgb(228, 228, 228);
    height: 1px;
    border: none;">
     <el-button style="    background: rgb(255, 136, 0);
    color: white;
    margin: 14px 0 0 240px;
" size="small"
    @click.native="dialogTableVisible=false"
>确认</el-button>
</el-dialog>
    </div>
     
  
  </div>
</template>
<script>
export default {
  data() {
    return {
        radio: 3,
     input:'',
     input1:'',
     input2:'',
     dialogTableVisible:false,
      gridData: [{
          date: '华为mate20电池更换',
          name: '1',
          names:'￥160',
          address: '￥140'
        }, {
          date: '华为mate20贴膜',
          name: '2',
           names:'￥20',
          address: '￥10'
        }],
      options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '花生米科技公司总部'
        }, {
          value: '选项3',
          label: '花生米科技公司（越秀店)'
        }, {
          value: '选项4',
          label: '花生米科技公司（天河店）'
        }, {
          value: '选项5',
          label: '花生米科技公司（天河店）'
        }],
        value: ''
  }
},
 methods: {
     qx(){
           this.$confirm('确定取消订单吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
          
     },
     jd(){
           this.$confirm('确认要接单吗？接单成功后请按约定时间上门服务', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '接单成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消接单'
          });          
        });
 
     },
      cx(){
          this.$router.go(0)
      },sf(){
          this.dialogTableVisible=true
      }
  }
}
</script>
<style  scoped>
.box>>>.el-dialog__header{
    background: rgb(255, 136, 0);
    color: white;
}
.box>>>.el-dialog__title{
    color: white;
}
.box>>>.el-dialog__headerbtn .el-dialog__close{
    color: white;
}
.box>>>.el-dialog th{

    text-align: center;
    font-weight: normal;
    border: 1px solid rgb(228,228,228);
        border-right: 0;
}
.box>>>.el-dialog th:last-of-type{
    border-right:1px solid rgb(228,228,228);
}
.box>>>.el-dialog tr td:last-of-type{
    border-right:1px solid rgb(228,228,228);
}
.box>>>.el-dialog tr td{
    font-size: 12px;
    text-align: center;
    font-weight: normal;
    border: 1px solid rgb(228,228,228);
        border-top: 0;
    border-right: 0;
}
.box>>>.el-dialog{
    width: 600px    ;

}
.top{
    padding: 10px 0;
    text-align: center;
    background: rgb(242,242,242);
    font-size: 14px;
    border-bottom: 1px solid rgb(228,228,228);
}
.box>>>.el-radio__label{
    font-size: 12px;
}
.box>>>.el-radio__input.is-checked .el-radio__inner {
    border-color: rgb(255, 136, 0);
    background: rgb(255, 136, 0);
}
.box >>>.el-radio__input.is-checked+.el-radio__label {
    color: rgb(255, 136, 0);
}
.box {
  padding: 29px;
  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.fot{
    font-size: 12px;
    padding: 10px;
    min-height: 10px;
    line-height: 22px;
    border-bottom: 1px solid rgb(228,228,228);
}
.bo{
    padding: 10px;
    font-size: 12px;
    background: rgb(254,251,239);
    border-bottom: 1px solid rgb(228,228,228);
}
.bo span{
    float: right;
    color: rgb(255,136,9);
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
.body{
    border: 1px solid rgb(228,228,228);
    min-height: 100px;
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
.el-input {
    margin: 0 20px 0 0;

  width: 141px;
  height: 31px;
}
.box >>> .el-input__inner:focus {
  border-color: rgb(255, 136, 0);
  outline: 0;
}
</style>