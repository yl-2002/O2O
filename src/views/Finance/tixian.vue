<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">商户提现</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-row class="top">
        <el-col :span="18">
          <p>
            当前账户余额：
            <span>￥188</span>
          </p>
          <p>
            冻结余额：
            <span>￥0</span>[包含订单完成后1天内的冻结贷款、提现审核中的冻结提现款
          </p>
          <p>
            可提现余额：
            <span>￥188</span>
          </p>
          <p>
            提现银行名称：
            <span>中国建设银行</span>
          </p>
          <p>
            提现银行账户：
            <span>6221 0000 0000 0000 0000</span>
          </p>
        </el-col>
      </el-row>
          <el-row class="top">
        <el-col :span="18">
         <el-form ref="form"  label-width="90px" style="margin-top:20px">
  <el-form-item label="提现金额：">
    <el-input style="width:40%" size="small" placeholder="请输入用户名称"></el-input>
  </el-form-item>
  
  <el-form-item label="图形验证码：">
<el-input style="width:25%" size="small" placeholder="请输入图形验证码"></el-input><img style="
    margin-left: 16px;
    position: absolute;
" src="../../assets/img/Management_img/yzm.png" alt="">
  </el-form-item>
  <el-form-item label="短信验证码：">
<el-input style="width:25%" size="small" placeholder="请输入短信验证码"></el-input>
<el-button style="background:rgb(255,136,0);color:#fff;margin-left:20px" size="small" @click.native="fs">发送验证码</el-button>
  </el-form-item>
  <el-form-item>
    <el-button style="background:rgb(255,136,0);color:#fff;margin-left:20px" size="small" @click.native="tj">提交申请</el-button>
  </el-form-item>
</el-form>
        </el-col>
      </el-row>
      <el-row class="top" style="    margin-top: 11px;">
        <el-col>
          <h4>提现记录</h4>
          <el-row  class="bod" style="    margin-top: 21px;">
            <el-col :span="6">提现时间</el-col>
            <el-col :span="5">提现金额</el-col>
            <el-col :span="5">状态</el-col>
            <el-col :span="8">备注</el-col>
          </el-row>
          <el-row  class="bods" >
            <el-col :span="6">2018-12-12 10:00:00</el-col>
            <el-col :span="5" style="color:rgb(255,136,0)">￥100</el-col>
            <el-col :span="5">提现成功</el-col>
            <el-col :span="8"> </el-col>
          </el-row>
          <el-row  class="bods" >
            <el-col :span="6">2018-12-12 10:00:00</el-col>
            <el-col :span="5" style="color:rgb(255,136,0)">￥100</el-col>
            <el-col :span="5">提现成功</el-col>
            <el-col :span="8"> </el-col>
          </el-row>
             <el-row  class="bods">
           <el-col :span="6">2018-12-12 10:00:00</el-col>
            <el-col :span="5" style="color:rgb(255,136,0)">￥100</el-col>
            <el-col :span="5">提现成功</el-col>
            <el-col :span="8">银行账户与账户名对应错误 </el-col>
          </el-row>
          <el-row  class="bods">
           <el-col :span="6">2018-12-12 10:00:00</el-col>
            <el-col :span="5" style="color:rgb(255,136,0)">￥100</el-col>
            <el-col :span="5">提现成功</el-col>
            <el-col :span="8">银行账户与账户名对应错误 </el-col>
          </el-row>
          <el-row  class="bods">
           <el-col :span="6">2018-12-12 10:00:00</el-col>
            <el-col :span="5" style="color:rgb(255,136,0)">￥100</el-col>
            <el-col :span="5">提现成功</el-col>
            <el-col :span="8">银行账户与账户名对应错误 </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="foot">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
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
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      fs(){
this.$alert('发送验证码成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
      },
      tj(){
this.$alert('提交成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
      }
  },
};
</script>
<style  scoped>
.top {
  min-height: 120px;
}
.top h4 {
  font-family: "等线";
}
.box >>> .el-form-item__label {
  font-size: 12px;
}
.bods{
    text-align: center;
    font-size: 12px;
    padding: 15px 0;
    border: 1px solid rgb(228,228,228);
    border-bottom: none;
}
.bods:first-of-type{
    border-top: none;
}
.bods:last-of-type{
    border-bottom: 1px solid rgb(228,228,228);
}
.box {
  padding: 29px 27px 28px 27px;

  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}

.pj1 {
  padding: 7px 0 7px 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.bod{
    text-align: center;
    margin-top: 21px;
    padding: 10px 0;
    background: rgb(242,242,242);
    border: 1px solid rgb(228,228,228);
    font-size: 14px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.top:nth-of-type(1) {
  font-size: 12px;
  line-height: 25px;
  padding: 10px;
  background: rgb(254, 251, 239);
  border: 1px solid rgb(228, 228, 228);
}
.top:nth-of-type(1) p span {
  color: rgb(255, 136, 0);
}
.foot >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.foot >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}.foot {
  border: 1px solid rgb(228, 228, 228);
}
</style>