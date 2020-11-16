<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">开票设置</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-row class="top">
        <el-col :span="18">
          <label>开票设置：</label>
          <el-radio v-model="radio" label="1"  @click.native="ii=false">不开票</el-radio>
          <el-radio v-model="radio" label="2" @click.native="ii=true">开票</el-radio>
        </el-col>
      </el-row>
<el-row class="top" v-show="ii" style="     height: 172px;
   margin-top: 20px;">
        <el-col :span="18">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="发票内容：">
    <el-input  placeholder="请输入发票内容" maxlength=6 v-model="ss3"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button style="background:rgb(255,136,0);color:white" size="small">开票</el-button>
    <label style="font-size:12px;margin-left:20px">请输入要增加的内容选项，每项不能超过6个字</label>
  </el-form-item>
 
          </el-form>
        <div><el-input
    style="width:150px"
  v-model="ss3"
  :disabled="true">
</el-input> </div>
        </el-col>
      </el-row>
      <el-button
        style="background:rgb(255,136,0);color:#fff;
    margin-left: 110px;
    margin-top: 21px;
"
        size="small"
        @click.native="tj"
      >保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      ii:false,
      ss3:'',

    };
  },
  methods: {
    tj() {
      this.$alert("开票保存成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
  },
};
</script>
<style  scoped>
.box >>> .el-form-item__label {
  font-size: 12px;
}

.el-col-18 {
  height: 70px;
  padding: 27px;
  text-align: left;
}

.box {
  padding: 29px 27px 28px 27px;

  background: white;
  min-height: 100px;
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
.top >>> .el-radio__input.is-checked + .el-radio__label {
  font-size: 12px;
  color: grey;
}
.top >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: rgb(255, 136, 0);
  background: rgb(255, 136, 0);
}
.top >>> .el-radio__label {
  font-size: 12px;
  padding-left: 10px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.top {
  font-size: 12px;
  line-height: 25px;
  padding: 10px;
  background: rgb(240, 240, 240);
  border: 1px solid rgb(228, 228, 228);
}
</style>