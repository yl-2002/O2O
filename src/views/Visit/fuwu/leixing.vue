<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">服务类型</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div class="body">
        <table class="bg" style="border-collapse:collapse;">
        <tr>
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span> 服务类型：
            </td>
            <td class="secend zs">
                 <el-radio-group v-model="radio" @change="change">
              <el-radio :label="3">标准服务（直接同步通用服务库数据，商家无法修改服务信息）</el-radio><br>
              <el-radio :label="6">自定义服务（调用通用服务库中的服务为模版，商家可修改服务信息）</el-radio><br>
              <el-radio :label="9">全新服务（自主创建服务）</el-radio>
               </el-radio-group>
            </td>
          </tr>
          <tr v-show="aa">
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span>选择服务：
            </td>
            <td class="secend">
                <el-button size="small" style="background:Rgb(255,136,0);color:white" @click="dialogTableVisible=true">添加服务</el-button>
            </td>
          </tr>
         
        </table>
      </div>
     
      <el-button
        style="background:Rgb(255,136,0);margin-left:210px;margin-top:20px;color:white"
        size="small"
        @click.native="qd"
      >{{msg}}</el-button>
       <el-button
        style="background:Rgb(0,190,127);margin-left:20px;margin-top:20px;color:white"
        size="small"
        @click.native="qx"
      >取消</el-button>
       <el-dialog title="添加服务" :visible.sync="dialogTableVisible">
        <div style="margin: -10px 0 20px -20px;">
          <el-input v-model="sda" size="small" placeholder="商品名称或id"></el-input>
          <el-button size="small" style="background:rgb(255,136,0);color:white">查询</el-button>
        </div>
        <el-table :data="gridData" class="ts"  highlight-current-row >
          <el-table-column property="date" label="商品id" width="200"></el-table-column>
          <el-table-column property="name" label="商品名称" width="400"></el-table-column>
        </el-table>
        <div class="foot">
          <el-pagination
            :page-sizes="[1000, 2000, 3000, 4000]"
            :page-size="1000"
            layout="total, sizes, prev, pager, next, jumper"
            :total="4000"
            style="margin-top:10px;margin-buttom:10px;margin-left: 15px;"
          ></el-pagination>
        </div>  
        <div style="    width: 123px;
    margin: 12px auto 0px;">
          <el-button type="warning" size="small" @click.native="qds">确定</el-button>   
          <el-button type="success" size="small" @click.native="dialogTableVisible=false">取消</el-button>
        </div>
      </el-dialog>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
        msg:'确认提交',
         sda: "",
        aa:true,
      radio: 3,
      dialogTableVisible:false,
       gridData: [
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        },
        {
          date: "25",
          name: "除尘除螨",
        }
      ],
  }
},
 methods: {
      change(val){
         if(val==6){
             this.msg="下一步"
         }else if(val==9){
             this.msg="下一步",
             this.aa=false
         }else{
             this.aa=true,
             this.msg='确认提交'
         }
      },
      qd(){
          if(this.msg=="确认提交"){
              this.$alert('添加成功，请等待管理员审核', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
                path: "/fws",
            })
          }
        });
          }else if(this.msg=='下一步'){
              this.$router.push({
                path: '/fws/xz',
            })
          }
      },
      qds(){
             this.$alert('提交成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           this.dialogTableVisible=false
          }
        });
      }
  }
}
</script>
<style  scoped>
.box >>> .el-dialog {
  width: 600px;
}
.box >>> .el-dialog .el-table th {
  padding: 3px 0;
  text-align: center;
color: #000;
  background: rgb(242, 242, 242);
}
.box>>>.el-table__body tr.current-row>td{
  background-color: rgb(255, 136, 0) !important;
  color: #fff;
}
.box >>> .el-dialog .el-table tr:hover {
  background-color: rgb(255, 136, 0) !important;
  color: white;
}
.box >>> .el-dialog .el-table td {
  padding: 3px 0;
  text-align: center;
  cursor: pointer;

}
.box >>> .el-dialog__header {
  background: rgb(255, 136, 0);
}
.box >>> .el-dialog__title {
  color: white;
  font-weight: bold;
}
.box >>> .el-dialog__headerbtn .el-dialog__close {
  color: white;
  font-weight: bold;
}
.box >>> .el-table {
  border-left: 1px solid rgb(242, 242, 242);
  border-right: 1px solid rgb(242, 242, 242);
}
.el-input {
  margin: 0 20px;
  width: 201px;
  height: 31px;
}
.box >>> .el-select .el-input__inner {
  border: 0;
  width: 100px;
  color: black;
}

.box >>> .el-checkbox__inner:hover {
  border-color: rgb(255, 136, 0);
}
.box >>> .el-dialog__header {
  background: rgb(255, 136, 0);
}
.box >>> .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: rgb(255, 136, 0);
  border-color: rgb(255, 136, 0);
}
.box >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(255, 136, 0);
  border-color: rgb(255, 136, 0);
}
.box >>> .el-dialog__title {
  color: white;
}
.box >>> .el-dialog__headerbtn .el-dialog__close {
  color: white;
}

.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 1000px;
}
.box>>>.el-radio__label{
    font-size: 12px;
    line-height: 29px;
    color: rgb(44, 44, 44);
}
.box >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: rgb(255, 136, 0);
  background: rgb(255, 136, 0);
}
.box >>> .el-radio__input.is-checked + .el-radio__label {
  color: rgb(255, 136, 0);
}
.bg tr td {
  border: 1px solid rgb(215, 215, 215);
  padding: 20px 10px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
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

.body {
  border: 1px solid rgb(228, 228, 228);
  width: 1148px;
  min-height: 100px;
  margin-left: 19px;
  margin-top: 15px;
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
</style>