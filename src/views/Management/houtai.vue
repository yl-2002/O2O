<template>
  <div>
    <el-container>
      <el-header>
        <Top></Top>
      </el-header>
      <el-container>
        <el-aside>
          <Nav></Nav>
        </el-aside>
        <el-main>
       <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Top from "../../components/header";
import Nav from "../../components/nav";
import Main from './shouye';
import Xg from './xiugai';
import Sh from './shangping'
export default {
  components: {
    Top,
    Nav,
    Main,
    Xg,
    Sh
  },
};
</script>
<style  scoped>
.el-header {
  padding: 0 0 0 0 !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  left: 0;
}
.el-main {
  padding: 0 !important;
  min-height: 1000px;
  margin: 60px 0 0 -61px;
  background: rgb(242, 242, 242);
}
  .element::-webkit-scrollbar {display:none}
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
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.box h2 {
  margin: 0 0 0 327px;
}
.Imgbig {
  background: url("../../assets/img/Management_img/u370.png") no-repeat;
  background-size: 92% 90%;
  width: 1282px;
  height: 1201px;
  margin: 43px 0 0 -50px;
}

</style>