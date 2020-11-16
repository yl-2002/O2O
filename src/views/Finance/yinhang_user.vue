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
        <el-col :span="18" >
          <p>
            商户名称：
            <span>花生米科技有限公司</span>
          </p>
        </el-col>
      </el-row>

      <el-row class="top" style="    margin-top: 11px;">
        <el-col>
          <el-row class="bods">
            <el-col :span="6" style="border-right:1px solid rgb(228,228,228)">开户行名称：</el-col>
            <el-col :span="18" style="padding: 21px;scolor:rgb(255,136,0)">
              <el-input style="width:320px" size="small" placeholder="请输入开户银行账户名称"></el-input>
            </el-col>
          </el-row>
          <el-row class="bods">
            <el-col :span="6" style="border-right:1px solid rgb(228,228,228)">开户行账号：</el-col>
            <el-col :span="18" style="padding: 21px;scolor:rgb(255,136,0)">
              <el-input style="width:320px" size="small" placeholder="请输入银行账户"></el-input>
            </el-col>
          </el-row>
          <el-row class="bods">
            <el-col :span="6" style="border-right:1px solid rgb(228,228,228)">真实姓名：</el-col>
            <el-col :span="18" style="padding: 21px;scolor:rgb(255,136,0)">
              <el-input style="width:320px" size="small" placeholder="请输入开户银行账户名称"></el-input>
            </el-col>
          </el-row>
          <el-row class="bods">
            <el-col :span="6" style="border-right:1px solid rgb(228,228,228)">图形校验码：</el-col>
            <el-col :span="18" style="padding: 21px;scolor:rgb(255,136,0)">
              <el-input style=" width: 200px;" size="small" placeholder="图形验证码"></el-input>
              <img
                style="
    margin-left: 16px;
    position: absolute;
    margin-top: -8px;
"
                src="../../assets/img/Management_img/yzm.png"
                alt
              />
            </el-col>
          </el-row>
          <el-row class="bods">
            <el-col :span="6" style="border-right:1px solid rgb(228,228,228)">短信验证码：</el-col>
            <el-col :span="18" style="padding: 21px;scolor:rgb(255,136,0)">
              <el-input style=" width: 200px;" size="small" placeholder="短信验证码"></el-input>
              <el-button
                style="background:rgb(255,136,0);color:#fff;margin-left:20px"
                size="small"
                @click.native="fs"
              >发送验证码</el-button>
            </el-col>
          </el-row>

          <el-button
            style="background:rgb(255,136,0);color:#fff;
    margin-left: 240px;
    margin-top: 21px;
"
            size="small"
            @click.native="tj"
          >提交申请</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fs() {
      this.$alert("发送验证码成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    tj() {
      this.$alert("提交成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
  },
};
</script>
<style  scoped>
.top {
  min-height: 20px;
}
.top h4 {
  font-family: "等线";
}
.box >>> .el-form-item__label {
  font-size: 12px;
}
.el-col-6 {
  border-right: 1px solid;
  height: 70px;
  padding: 27px;
  text-align: right;
}
.el-col-18 {
  height: 70px;
  padding: 27px;
  text-align: left;
}
.bods {
  text-align: center;
  font-size: 12px;
  border: 1px solid rgb(228, 228, 228);
  border-bottom: none;
  min-height: 50px;
}

.bods:last-of-type {
  border-bottom: 1px solid rgb(228, 228, 228);
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
</style>