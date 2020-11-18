<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">配送设置</a>
        </span>
      </p>
    </div>
    <div class="box">
     <div class="body">
       <div class="px">
<p>温馨提示：</p>
<p>1、所有门店的外卖订单，在配送员配送完毕后，都会从商户的配送帐号余额中扣除相应金额作为配送员的酬劳</p>
<p>2、配送帐号最低必须存有 ¥15 ，否则无法使用第三方配送</p>

       </div>
        <div style="padding: 29px 0 31px 10px;">
           配送账户可用余额：￥100
           <el-link type="warning" style="margin:-7px 20px 0 110px" @click.native="czz">充值</el-link>
           <el-link type="warning" style="margin:-7px 0 0 0" @click.native="txx">提现</el-link>
       </div>
     </div>
       <div class="body" style="margin-top:20px" v-show="oo">
       
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="110px" :model="formLabelAlign">
  <el-form-item label="充值金额：" style="font-size:12px">
    <el-input v-model="formLabelAlign.name" placeholder="请输入提现金额" size="small" style="width:30%"></el-input>
  </el-form-item>
  <el-form-item label="图形校验码：">
    <el-input v-model="formLabelAlign.region" placeholder="请输入校验码" size="small"  style="width:18%"></el-input><img style="    position: absolute;margin-left: 24px" src="../../../assets/img/Management_img/yzm.png" alt="">
  </el-form-item>
  <el-form-item label="短信验证码：">
    <el-input v-model="formLabelAlign.type" placeholder="请输入校验码" size="small"  style="width:18%"></el-input><el-button size="medium " style="background:rgb(255,136,0);color:white; margin-left:20px">发送验证码</el-button>
  </el-form-item>
  <el-form-item label="充值方式：">
       <el-radio v-model="formLabelAlign.radio" label="1">
商户账户可用余额￥100</el-radio>
  <el-radio v-model="formLabelAlign.radio" label="2">支付宝支付</el-radio>
    <el-radio v-model="formLabelAlign.radio" label="3">微信支付</el-radio>
  <el-radio v-model="formLabelAlign.radio" label="4">银联快捷支付</el-radio>
  </el-form-item>
  <el-form-item>
    <el-button size="middle" style="background:rgb(255,136,0);color:white" @click="onSubmit">充值</el-button>
  </el-form-item>
</el-form>

     </div>
      <div class="body" style="margin-top:20px" v-show="oos">
       
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="110px" :model="formLabelAlign">
  <el-form-item label="充值金额：" style="font-size:12px">
    <el-input v-model="formLabelAlign.name" placeholder="请输入提现金额" size="small" style="width:30%"></el-input>
  </el-form-item>
  <el-form-item label="图形校验码：">
仅支持提现到商户账户（可用余额￥100）
  </el-form-item>
  <el-form-item label="图形校验码：">
    <el-input v-model="formLabelAlign.region" placeholder="请输入校验码" size="small"  style="width:18%"></el-input><img style="    position: absolute;margin-left: 24px" src="../../../assets/img/Management_img/yzm.png" alt="">

  </el-form-item>
  <el-form-item label="短信验证码：">
    <el-input v-model="formLabelAlign.type" placeholder="请输入校验码" size="small"  style="width:18%"></el-input><el-button size="medium " style="background:rgb(255,136,0);color:white; margin-left:20px">发送验证码</el-button>
  </el-form-item>
  
  <el-form-item>
    <el-button size="middle" style="background:rgb(255,136,0);color:white" @click="onSubmit">充值</el-button>
  </el-form-item>
</el-form>

     </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        oo:true,
        oos:false,
         labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          radio:'1'
        }
      
    };
  },
  methods: {
      shxg(){

      },
      gx(){
          
      },
      onSubmit(){
           this.$alert('充值成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
      },
      txx(){
          this.oos=true,
          this.oo=false
      },czz(){
          this.oos=false,
          this.oo=true
      }
  },
};
</script>
<style  scoped>
.box>>>.el-radio__input.is-checked+.el-radio__label{
color: rgb(255,136,0);
}
.box>>>.el-radio__input.is-checked .el-radio__inner {
    border-color: rgb(255,136,0);
    background: rgb(255,136,0);
}
.box>>>.el-form-item__label{
    font-size: 12px;
}
.body {
  margin: 5px;
  padding:10px;
  min-height: 122px;
    font-size: 12px;
  border: 1px solid rgb(228,228,228);
}
.box {
  padding: 29px;
  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.px{
    background: rgb(254,251,239);
    color: red;
    line-height: 25px;
    padding: 10px;
}
.body{
    background: rgb(250,250,250);
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

</style>