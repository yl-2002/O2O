<template>
  <div id="app">

    <el-row>
      <el-col :span="5" :offset="16">
        <div class="grid-content bg-purple-dark">
          <p class="title">O2O商城商家后台系统</p>
          <div class="input_list">
            <div>
              <el-input placeholder="请输入账号" v-model.trim="username" clearable ref="input"  @keyup.enter.native="denglu">
                <i slot="prefix" class="el-icon-user"></i>
              </el-input>
              <el-alert title="账号不能为空" type="error" :closable="false" show-icon v-if="usernameF"></el-alert>
              <el-alert
                title="请输入正确的账号"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameF1"
              ></el-alert>
            </div>
            <div>
              <el-input type="password" placeholder="请输入密码" v-model.trim="pwd" clearable  ref="input1" @keyup.enter.native="denglu">
                <i slot="prefix" class="el-icon-lock"></i>
              </el-input>
              <el-alert title="密码不能为空" type="error" :closable="false" show-icon v-if="usernameP"></el-alert>
              <el-alert
                title="请输入正确的密码"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameP1"
               
              ></el-alert>
            </div>
            <div>
              <el-input placeholder="请输入验证码" v-model.trim="num" clearable class="yzm"  ref="input2"  @keyup.enter.native="denglu">
                <i slot="prefix" class="el-icon-document"></i>
              </el-input>
              <el-alert
                title="图形验证码不能为空"
                type="error"
                :closable="false"
                show-icon
                @keydown.native="denglu"
                v-if="usernameY"
              ></el-alert>
              <el-alert
                title="请输入正确的图形验证码"
                type="error"
                :closable="false"
                show-icon
                v-if="usernameY1"
              ></el-alert>
              <img
                class="yzms"
                src="../../assets/img/Management_img/yzm.png"
                width="102"
                height="44"
                alt
              />
            </div>
          </div>
          <el-button type="primary" @click="denglu()">登录</el-button>
          <router-link to="/houtai"> <el-link :underline="false" type="warning">免校验直接登录</el-link></router-link>
         
          <p></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name: "login",

  data() {
    return {
      username: "",
      pwd: "",
      num1: "",
      usernameF: false,
      usernameY: false,
      usernameP: false,
      usernameF1: false,
      usernameY1: false,
      usernameP1: false,
    };
  },
  computed: {
    num: {
      get: function () {
        return this.num1;
      },
      set: function (val) {
        this.num1 = val.toUpperCase();
      },
    },
  },
  methods: {
    denglu() {
      if (this.username == "") {
        this.usernameF = true;
        this.usernameF1 = false;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = false;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else if (this.pwd == "") {
       this.usernameF = false;
        this.usernameF1 = false;
        this.usernameP1 = false;
        this.usernameP = true;
        this.usernameY = false;
        this.usernameY1 = false;
        this.$nextTick(() => {
          this.$refs.input1.focus();
        });
      } else if (this.num1 == "") {
        this.usernameF = false;
        this.usernameF1 = false;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = true;
        this.usernameY1 = false;
        this.$nextTick(() => {
          this.$refs.input2.focus();
        });
      }
      else if (this.username != "admin") {
        this.usernameF = false;
        this.usernameF1 = true;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = false;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else if (this.pwd != "123") {
       this.usernameF = false;
        this.usernameF1 = false;
        this.usernameP1 = true;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = false;
        this.$nextTick(() => {
          this.$refs.input1.focus();
        });
      } else if (this.num1 != "3UDR") {
       this.usernameF = false;
        this.usernameF1 = false;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = true;
        this.$nextTick(() => {
          this.$refs.input2.focus();
        });
      } else {
        this.usernameF1 = false;
        this.usernameF = false;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = false;

         this.$alert('登录成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
            path:"/houtai"
        })
          }
        });
        
      }
    },
  },
};
</script>
<style scoped>
#app {
  background: url("../../assets/img/Management_img/index_bg.png");
  width: 100%;
  height: 968px;
}
.logo {
  margin: 50px 0 0 78px;
}
.el-link {
  margin: 14px 0 0 254px;
}
.el-button {
  margin: 15px 0 0 50px;
  width: 302px;
  background: repeating-linear-gradient(
    to right,
    rgb(255, 136, 0),
    rgb(255, 185, 0)
  ) !important;
  border: 0;
}
.el-button:hover {
  background: repeating-linear-gradient(
    to right,
    rgba(255, 136, 0, 0.7),
    rgba(255, 185, 0, 0.7)
  ) !important;
}
.el-alert--error {
  position: absolute;
  width: 269px;
  margin: -27px 0 0 -47px;
  background: transparent !important;
  color: red !important  ;
}
.yzms {
  position: absolute;
  top: 474px;
  right: 290px;
}
.el-col {
  background: rgba(255, 255, 255, 0.8);
  height: 400px;
  margin-top: 225px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title {
  margin: 20px 0;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: #ff8800;
  text-align: center;
}
.el-input {
  width: 300px;
  height: 60px;
  margin: 18px 0 0 -37px;
}
.yzm {
  width: 170px !important;
}
i {
  font-size: 20px;
  margin-top: 10px;
}
.input_list {
  margin: 0 0 0 86px;
}
.el-input:focus {
    border-color: red!important;
    outline: 0;
}
</style>