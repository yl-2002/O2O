<template>
  <div>
    <div class="nav_top">
      <p>
        <span>
          <a style="    margin-left: 9px;">预约项目设置</a>
        </span>
         <el-button style="position: absolute;
    right: 182px;" size="small" @click.native="fh">返回列表</el-button>
      </p>
     
    </div>
    <div class="box">
      <div
        style="font-size: 12px;
    border: 1px solid rgb(228,228,228);
    padding: 11px 0 12px 12px;
    background: rgb(254,251,239);"
      >
        温馨提示：可以点击【排序】和【状态】直接修改
        <el-button
          style="margin-left: 777px;"
          type="warning"
          size="small"
          @click.native="dialogTableVisible=true"
        >新增商品</el-button>
      </div>
      <div class="body">
        <el-row class="top">
          <el-col :span="2">编号</el-col>
          <el-col :span="5">名称</el-col>
          <el-col :span="3">图片</el-col>
          <el-col :span="3">分类</el-col>
           <el-col :span="3">排序</el-col>
          <el-col :span="4">状态</el-col>
          <el-col :span="4">操作</el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
           <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
        <el-row class="sec">
          <el-col :span="2">1001</el-col>
          <el-col :span="5">红海帝王蟹</el-col>
          <el-col :span="3" style="    margin-top: -6px;
">
            <img src="../../../assets/img/tu.png" alt="">
          </el-col>
          <el-col :span="3">飘香烧烤</el-col>
          <el-col :span="3">
            <el-input style="
    margin-top: -10px;
" size="small" v-model="input.input"></el-input>
          </el-col>
          
          <el-col :span="4">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-link
              type="warning"
              style=" color:rgb(255,136,0) ;  margin: 0 10px;
"
              @click.native="dialogTableVisible1=true"
            >修改</el-link>
            <el-link type="warning" style="color:rgb(255,136,0) ;" @click.native="de">删除</el-link>
          </el-col>
        </el-row>
      </div>

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
      <el-dialog title="新增商品" :visible.sync="dialogTableVisible">
        <el-row>
            <el-col :span="10" style="margin-top:5px">请正确填写分类名称：</el-col>
            <el-col :span="14"><el-input size="small"  v-model="a"></el-input></el-col>
        </el-row>
      </el-dialog>

      <el-dialog title="编辑商品" :visible.sync="dialogTableVisible1">
        <el-row>
            <el-col :span="10" style="margin-top:5px">请正确填写分类名称：</el-col>
            <el-col :span="14"><el-input size="small"  v-model="as"></el-input></el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "shouye",
  data() {
    return {
      value: true,
      value2: true,
      valuev: true,
      a: "",
    as:'',
      dialogTableVisible: false,
      dialogTableVisible1: false,
      input: {
        input: "10",
        input1: "10",
        input2: "10",
        input3: "10",
        input4: "10",
       input5: "10",
        input6: "10",
        input7: "10",
      },
    };
  },
  methods: {
      fh(){
          this.$router.push({
              path:'/waimaiy'
          })
      },
      de(){
          this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
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
.top_s {
  border-bottom: none;
  border: 1px solid rgb(228, 228, 228);
  background: rgb(242, 242, 242);
  text-align: center;
  padding: 7px 0;
  margin-top: 10px;
}
.box >>> .el-dialog__header {
  background-color: rgb(255, 136, 0);
}
.top_ss {
  border-top: none;
  border: 1px solid rgb(228, 228, 228);
  text-align: center;
  padding: 10px 0;
}
.box >>> .el-dialog__title {
  color: white;
}
.box >>> .el-dialog__headerbtn .el-dialog__close {
  color: white;
}
.foot >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.foot >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
.bg tr td {
  border: 1px solid rgb(215, 215, 215);
  padding: 20px 10px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
}
.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 400px;
}
.box >>> .el-dialog {
  width: 400px;
}
.el-main p {
  padding: 7px 0 7px 165px;
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
  padding: 29px 60px 1px 60px;
  background: white;
  min-height: 500px;
  width: 1185px;
  margin: 34px auto;
}
.box h2 {
  margin: 0 0 0 327px;
}
.top {
  text-align: center;
  padding: 13px 0;
  background: rgb(242, 242, 242);
  border-bottom: 1px solid rgb(228, 228, 228);
}
.sec {
  text-align: center;
  padding: 13px 0;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.sec >>> .el-col {
  margin-top: 6px;
}
.sec:last-of-type {
  border-bottom: none;
}
.body {
  font-size: 14px;
  margin-top: 20px;
  border: 1px solid rgb(228, 228, 228);
  border-bottom: none;
  min-height: 100px;
}

.foot {
  margin: 0 0 20px 0;
  border-top: none;
  border: 1px solid rgb(228, 228, 228);
}
</style>