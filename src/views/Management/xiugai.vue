<template>
  <div>
    <div class="nav_top">
      <p>
        <span> <a style="    margin-left: 9px;">修改密码</a></span>
      </p>
    </div>
    <div class="box">
      <div class="Newpwd">
        <div>
          <i>*</i>
          <el-link :underline="false">旧密码</el-link>
        </div>

        <el-input placeholder="请输入旧密码" v-model="input_oldpwd" show-password></el-input>
      </div>
      <div class="Newpwd">
        <div>
          <i>*</i>
          <el-link :underline="false">新密码</el-link>
        </div>
        <el-input placeholder="请输入新密码" v-model="input_newpwd" show-password></el-input>
      </div>
      <div class="Newpwd">
        <div>
          <i>*</i>
          <el-link :underline="false">确认新密码</el-link>
        </div>

        <el-input placeholder="请确认新密码" v-model="input_oldnewpwd" show-password></el-input>
      </div>
      <el-button type="success" @click.native="bc">保存</el-button>
      <el-button type="info" @click="fh">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "shouye",
  data() {
    return {
      input_oldpwd: "",
      input_newpwd: "",
      input_oldnewpwd: "",
    };
  },
  methods: {
    fh() {
      this.$router.push({
        path: "/houtai",
      });
    },
    bc() {
      if (
        this.input_oldpwd == "" ||
        this.input_newpwd == "" ||
        this.input_oldnewpwd == ""
      ) {
        this.$alert("请填写必填字段", "提示", {
          confirmButtonText: "确定",
        });
      } else if (this.input_newpwd != this.input_oldnewpwd) {
        this.$alert("两次输入新密码不一致", "提示", {
          confirmButtonText: "确定",
        });
      } else {
        this.$alert('修改成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           this.$router.push({
            path: "/houtai",
          });

          }
        });

          
      }
    },
  },
};
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
.Newpwd .el-input {
  margin: 0 0 0 146px;
}
.Imgbig {
  background: url(/img/u370.80a172f4.png) no-repeat;
  background-size: 92% 90%;
  width: 1282px;
  height: 1201px;
  margin: 43px 0 0 -50px;
}
.Newpwd {
  width: 505px;

  margin: 45px 0;
}
.Newpwd div {
  margin: 17px 0 -29px 17px;
}
.Newpwd i {
  color: red;
}
.Newpwd .el-link :hover {
  cursor: auto;
  color: rgb(28, 23, 29);
}
.el-link {
  margin-left: 4px;
}
.el-button--success {
  margin-right: 57px;
  margin-left: 74px;
}
</style>