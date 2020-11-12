<template>
    <div>
        <div class="nav_top">
      <p>
        <span>
          <a style="margin-left: 9px;">验证优惠券</a>
        </span>
      </p>
    </div> 
    <div class="box">
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
          <el-input placeholder="请输入活动序列号如：123456" v-model="input" style="width:260px" clearable></el-input>

          <el-button
            type="warning"
            style="top: 331px;
    left: 791px;
    background:rgb(255, 136, 0);
    position: absolute;"
            @click.native="yanzheng"
          >验证优惠券</el-button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             msg: "花生米科技公司总部",
             input: ""
        }
    },methods:{
        msg3() {
      this.msg = "花生米科技公司(天河店)";
    },
    msg1() {
      this.msg = "花生米科技公司总部";
    },
    msg4() {
      this.msg = "花生米科技公司(黄埔店)";
    },
     msg2() {
      this.msg = "花生米科技公司(越秀店)";
    },yanzheng() {
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
          "活动名称：花生米科技公司总部试吃活动<br>有效期：2018-12-12 至 2019-01-12<br>活动券码：123456<br>是否有效：有效！","提示",
          {
            confirmButtonText: "确定",
             dangerouslyUseHTMLString: true,
            cancelButtonText: "取消",
            type: "warning",
          }
        )
          .then(() => {
            this.$message({
              type: "success",
              message: "验证成功",
            });
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消验证",
            });
          });
      }
    },
    }
}
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