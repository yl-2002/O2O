<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">买单详情</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div class="xiangqing">
        <p>
          订单编号：
          <span>2018122800300557</span>
        </p>

        <p>
          消费时间：
          <span>2018-12-12 18:31:53</span>
        </p>

        <p>
          顾客名称：
          <span></span>
        </p>

        <p>
          消费内容：
          <span>到店支付¥780</span>
        </p>

        <p>
          不可优惠金额
          <span>¥600</span>
        </p>

        <p>
          满100减20：
          <span>¥20</span>
        </p>
      </div>
      <div class="xiangqing1">
      <el-row :gutter="0">
  <el-col :span="8"><div class="l">实付金额<span>=</span></div></el-col> 
  <el-col :span="8"><div class="l">消费金额<span>-</span></div></el-col>
  <el-col :span="8"><div class="l">优惠金额</div></el-col>
</el-row>

        <el-row :gutter="0">
  <el-col :span="8"><div class="l1">￥780</div></el-col> 
  <el-col :span="8"><div class="l1">￥800</div></el-col>
  <el-col :span="8"><div class="l1">￥20</div></el-col>
</el-row>
      </div>
      <el-button size="mini" @click.native="fh">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
  
   fh(){
       this.$router.go(-1);
   }
  },
};
</script>
<style scoped>
.el-button:hover{
 background:rgba(51,203,153,.7)
}
.el-button{
        margin-top: 28px;
    background:rgb(51,203,153);
    color:white;
  border: none;
}
.l{
    background: rgb(242,242,242);
    text-align: center;
        padding: 11px 0;
        border-bottom:1px solid rgb(228, 228, 228);
}
.l span{
    float: right;
}
.l1{
    text-align: center;
        padding: 11px 0;

}
.xiangqing {
  border: 1px solid rgb(228, 228, 228);
  min-height: 100px;
  padding: 10px;
  width: 1110px;
  background: rgb(254, 251, 239);
}
.xiangqing1 {
  border: 1px solid rgb(228, 228, 228);
  min-height: 70px;
  width: 1110px;
  margin-top: 20px;
}
.xiangqing p {
  font-size: 12px;
  line-height: 30px;
}
.xiangqing p span {
  color: rgb(255, 136, 0);
}
.xl {
  background: white;
  font-size: 13px;
  color: #000;
  border-color: transparent;
  margin: 0 0 0 58px;
}
.box {
  padding: 29px 0 1px 60px;
  background: white;
  min-height: 500px;
  width: 1185px;
  margin: 34px auto;
}
.pj1 {
  padding: 15px 0 0 191px;
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