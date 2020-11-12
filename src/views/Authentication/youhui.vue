<template>
  <div>
    <div class="nav_top">
      <p>
        <span>
          <a style="    margin-left: 9px;">验证消费券</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button type="warning" style="position: absolute;
  top: 168px;
  right: 280px;
  z-index: 99;" @click.native="cx">查询</el-button>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="消费券验证" name="first">
          <div style="    margin: 10px 0;
    font-size: 14px;">选择门店</div>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary">
              {{msg}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="msg1">花生米科技公司总部</el-dropdown-item>
              <el-dropdown-item @click.native="msg2">花生米科技公司(越秀店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg3">花生米科技公司(天河店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg4">花生米科技公司(黄埔店)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div style="    margin: 25px 0;
    font-size: 14px;">请先验证消费券，再接待</div>
          <el-input placeholder="请输入消费券如：123456" v-model="input" style="width:260px" clearable></el-input>

          <el-button
            type="warning"
            style="top: 158px;
    left: 291px;
    background:rgb(255, 136, 0);
    position: absolute;"
            @click.native="yanzheng"
          >验证优惠券</el-button>
        </el-tab-pane>
        <el-tab-pane label="消费券批量验证" name="second">
          <div style="    margin: 10px 0;
    font-size: 14px;">选择门店</div>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary">
              {{msg}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="msg1">花生米科技公司总部</el-dropdown-item>
              <el-dropdown-item @click.native="msg2">花生米科技公司(越秀店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg3">花生米科技公司(天河店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg4">花生米科技公司(黄埔店)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div style="    margin: 25px 0;
    font-size: 14px;">请先验证消费券，再接待</div>
          <el-input placeholder="请输入消费券如：123456" v-model="input1" style="width:260px;margin:0 0 10px 0" clearable></el-input><el-alert
    title="消费券输入正确"
    type="success"
      :closable="false"
    show-icon>
  </el-alert><br>
            <el-input placeholder="请输入消费券如：123456" v-model="input2" style="width:260px;margin:10px 0" clearable></el-input><el-alert
    title="没有消费券记录"
    type="error"
      :closable="false"
    show-icon>
  </el-alert><br>
              <el-input placeholder="请输入消费券如：123456" v-model="input3" style="width:260px;margin:10px 0" clearable></el-input><el-alert
    title="该券已于2018-12-12-12 12:12:12:12过期"
    type="error"
      :closable="false"
    show-icon>
  </el-alert><br>
                <el-input placeholder="请输入消费券如：123456" v-model="input4" style="width:260px;margin:10px 0" clearable></el-input><el-alert
    title="该券已于2018-12-12-12 12:12:12:12使用过"
    type="error"
      :closable="false"
    show-icon>
  </el-alert><br>
                  <el-input placeholder="请输入消费券如：123456" v-model="input5" style="width:260px;margin:10px 0" clearable></el-input><el-alert
    title="  验证码格式错误"
    type="info"
    :closable="false"
    show-icon>
  </el-alert><br>
          <el-button
            type="warning"
            style="   margin: 21px -0; 
    background:rgb(255, 136, 0)"
            @click.native="yanzheng1"
          >验证优惠券</el-button>
        </el-tab-pane>
        <el-tab-pane label="超级验证" name="third">
             <div style="    margin: 10px 0;
    font-size: 14px;">选择门店</div>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary">
              {{msg}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="msg1">花生米科技公司总部</el-dropdown-item>
              <el-dropdown-item @click.native="msg2">花生米科技公司(越秀店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg3">花生米科技公司(天河店)</el-dropdown-item>
              <el-dropdown-item @click.native="msg4">花生米科技公司(黄埔店)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div style="    margin: 25px 0;
    font-size: 14px;">请先验证消费券，再接待</div>
          <el-input placeholder="请输入消费券如：123456" v-model="input" style="width:260px" clearable></el-input>

          <el-button
            type="warning"
            style="top: 158px;
    left: 291px;
    background:rgb(255, 136, 0);
    position: absolute;"
            @click.native="yanzheng"
          >验证优惠券</el-button>
          <div style="  margin-top:20px ;    border-radius: 9px;  width: 1110px;
background:rgb(254,251,239);
padding:10px">
<h3>温馨提示</h3>
<br>
    <div style="    margin: 0 0 0 23px;">超级验证，输入其中一个消费券可以查询出该订单下所有可用消费券；</div><br>

    <div style="    margin: 0 0 0 23px;">根据输入的张数随机抽取你要使用的消费券，但必须是同一款商品；</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      msg: "花生米科技公司总部",
      input: "",
        input1:"",
        input2:"",
        input3:"",
        input4:"",
        input5:"",
    };
  },
  methods: {
      cx(){
          this.$router.go(0)
      },
    msg2() {
      this.msg = "花生米科技公司(越秀店)";
    },
yanzheng1(){
this.$confirm(
          "商品名称（购买数量：N），有效<br/>是否确定使用消费券",
          "提示",
          {
              dangerouslyUseHTMLString: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            
          }
        )
          .then(() => {
            this.$message({
              type: "success",
              message: "使用成功",
            });
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消",
            });
          });
},
    msg3() {
      this.msg = "花生米科技公司(天河店)";
    },
    msg1() {
      this.msg = "花生米科技公司总部";
    },
    msg4() {
      this.msg = "花生米科技公司(黄埔店)";
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    yanzheng() {
      if (this.input == "") {
        this.$alert("请输入消费券序列号", "错误", {
          confirmButtonText: "确定",
        });
      } else if (this.input != "123456") {
        this.$alert("请输入正确的序列号", "错误", {
          confirmButtonText: "确定",
        });
      } else {
        this.$confirm(
          "商品名称（购买数量：N），有效<br>是否确定使用消费券",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
              dangerouslyUseHTMLString: true,
          }
        )
          .then(() => {
            this.$message({
              type: "success",
              message: "使用成功",
            });
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消",
            });
          });
      }
    },
  },
};
</script>
<style  scoped>
.box>>>.el-alert{
    display: inline;
    margin-left: 10px;
}
.box >>> .el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgb(255, 136, 0);
  color: #fff;
}
.box >>> .el-button--primary {
  margin-top: 10px;
  background: none;
  color: black;
  width: 260px;

  border: 1px solid rgb(255, 136, 0);
}
.el-dropdown-menu {
  width: 260px;
}
.box >>> .el-input__inner:focus {
  border-color: rgb(255, 136, 0);
  outline: 0;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.box >>> .el-tabs--card > .el-tabs__header {
  width: 1125px;
}
.box >>> .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 0;
}
.box >>> .el-tabs__item {
  margin: 0 10px 0 0;
  border: 1px solid gainsboro;
  border-radius: 4px 4px 0 0;
  background: rgb(242, 242, 242);
}
.box >>> .el-tabs__item.is-active {
  background: orange;
  color: #fff;
}
.box >>> .el-tabs__item:hover {
  color: orange;
}

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
#tab-second {
  margin-left: 10px;
}
.box {
  padding: 29px 0 0 60px;
  background: white;
  min-height: 500px;
  width: 1185px;
  margin: 34px auto;
}
</style>