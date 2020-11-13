<template>
  <div>
   <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">团购</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button type="warning" style="position: absolute;
    top: 168px;
    right: 294px;
    z-index: 99;" @click.native="cx">新增团购</el-button>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="出售中" name="first">
   <el-row :gutter="1" class="top">
  <el-col :span="3">1</el-col>
  <el-col :span="6">2</el-col>
  <el-col :span="3">3</el-col>
  <el-col :span="3">4</el-col>
  <el-col :span="3">5</el-col>
  <el-col :span="6">6</el-col>
</el-row>
        </el-tab-pane>
        <el-tab-pane label="已售罄" name="second">
         
        </el-tab-pane>
        <el-tab-pane label="仓库中" name="third">
            
        </el-tab-pane>
         <el-tab-pane label="审核记录" name="forth"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
      cx(){
          this.$router.go(0)
      },
    

  },
};
</script>
<style  scoped>


.box >>> .el-tabs--card > .el-tabs__header {
width: 1100px!important;
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

#tab-second {
  margin-left: 10px;
}
.top{
    text-align: center;
}
</style>