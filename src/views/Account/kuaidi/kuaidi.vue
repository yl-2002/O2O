<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">快递列表</a>
        </span>
      </p>
    </div>
    <div class="box">
        <div>
            <el-button style="background:rgb(255,136,0);color:white;margin-left: 1073px;margin-bottom: 20px;" size="small" @click.native="xg">新增快递</el-button>
        </div>
      <div class="bo">
        <el-row class="top">
          <el-col :span="4">编号</el-col>
          <el-col :span="8">快递名称</el-col>
          <el-col :span="6">发货显示</el-col>
          <el-col :span="6">操作</el-col>
        </el-row>
        <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="dd">
          <el-col :span="4">1001</el-col>
          <el-col :span="8">韵达快递</el-col>
          <el-col :span="6">
            <el-switch
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(228,228,228)"
            ></el-switch>
          </el-col>
          <el-col :span="6">
            <el-link type="warning" style="margin:0 10px" @click.native="xg">修改</el-link>
            <el-link type="warning" @click.native="sc">删除</el-link>
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
 <el-dialog title="提示" :visible.sync="dialogFormVisible">
   <el-form :model="form">
    <el-form-item label="请选择快递公司：" :label-width="formLabelWidth">
        <el-select v-model="values" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      dialogFormVisible:false,
       
        formLabelWidth: '110px',
          options: [{
          value: '选项1',
          label: '顺丰快递'
        }, {
          value: '选项2',
          label: '圆通速递'
        }, {
          value: '选项3',
          label: '中通快递'
        }, {
          value: '选项4',
          label: '韵达快递'
        }, {
          value: '选项5',
          label: '申通快递'
        }],
        values: ''
    };
  },
  methods: {
      xg(){
          this.dialogFormVisible=true
      },
      sc(){
              this.$alert('确认删除吗', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
             type: 'info',
              message: `操作成功`
            });
          }
        });
      }
  },
};
</script>
<style  scoped>
.box>>>.el-form-item__label{
    font-size: 12px;
}
.el-button--primary {
    color: #FFF;
    background-color: rgb(255,136,0);
    border-color: rgb(255,136,0);
}
.el-button--primary :hover{
    color: #FFF;
    background-color: rgba(255,136,0,.7);
    border-color: rgba(255,136,0,.7);
}
.box>>>.el-dialog{
    width: 400px;
}
.box>>>.el-dialog__header{
    background: rgb(255,136,0);
}
.box>>>.el-dialog__title{
    color: white;
}
.box>>>.el-dialog__headerbtn .el-dialog__close{
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
.top {
  border-bottom: 1px solid rgb(228, 228, 228);
  background: rgb(242, 242, 242);
  text-align: center;
  font-size: 14px;
}
.dd {
  font-size: 12px !important;
  padding: 8px 0;
 border-bottom: 1px solid rgb(228, 228, 228);
  text-align: center;
  font-size: 14px;
}
.box {
  padding: 29px;
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

.bo {
  margin: 10px 0 20px;
  width: 1153px;
  min-height: 33px;
  line-height: 33px;
  border: 1px solid rgb(228, 228, 228);
}
</style>