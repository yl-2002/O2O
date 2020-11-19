<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">异常订单处理</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-input placeholder="下单起始日期" v-model="input" clearable></el-input>
      <i>-</i>
      <el-input placeholder="下单截至日期" v-model="input1" clearable></el-input>
      <el-input placeholder="请输入商品名..." v-model="input2" clearable></el-input>
      <el-dropdown>
        <el-button type="primary" class="xl">
          {{msg}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="qb">全部</el-dropdown-item>
          <el-dropdown-item @click.native="yxf">已消费</el-dropdown-item>
          <el-dropdown-item @click.native="wxf">未消费</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button
        type="warning"
        @click.native="cx"
        style="position: absolute;
    background: rgb(255, 136, 0);
    right: 290px;"
      >查询</el-button>
      <div class="tb">
        <div class="flex1">
          <div>详情</div>
          <p>发票信息</p>
          <p>单价</p>
          <p>数量</p>
          <p>状态</p>
          <p style="flex:3">操作</p>
        </div>
         <div style="    font-size: 12px;
    width: 100px;
    margin: 30px auto;">
        没有相关数据
      </div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisibles: false,
      input: "",
      input1: "",
      input2: "",
      msg: "全部",
      list_xq: false,
      list_xq1: false,
      tableData: [
        {
          date: "商城商品名称",
          name: "￥250",
          address: "2",
          sum: "￥500",
        },
        {
          date: "商城商品名称",
          name: "￥500",
          address: "1",
          sum: "￥500",
        },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      multipleSelection: [],
    };
  },
  methods: {
      ljdy(){
          this.$alert('打印成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
           this.dialogVisibles=false
          }
        });
      },
    dyxp() {
      this.dialogVisibles = true;
    },
    handleSelectionChanges(val) {
      this.multipleSelection = val;
    },
    xiangqing() {
      this.list_xq = true;
    },

    
    fahuo() {
      this.$alert('操作成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
    },

    qb() {
      this.msg = "全部";
    },
    yxf() {
      this.msg = "已消费";
    },
    wxf() {
      this.msg = "未消费";
    },
    cx() {
      this.$router.go(0);
    },
  },
};
</script>
<style scoped>

.flex1 {
  background: rgb(242, 242, 242);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-align: center;
  font-size: 14px;
  border: 1px solid rgb(221, 221, 221);
}
.flex1 div {
  flex: 3;
}
.flex1 p {
  flex: 1;
}
.tb {
  width: 1100px;
  min-height: 200px;
  margin: 35px 0;
  border: 1px solid rgb(242, 242, 242);
}
.xl {
  background: white;
  font-size: 13px;
  color: #000;
  border-color: transparent;
  margin: 0 0 0 58px;
}
.box {
  padding: 29px 0 1px 60px;
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
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.el-input {
  margin: 0 20px;
  width: 141px;
  height: 31px;
}
.box >>> .el-input__inner:focus {
  border-color: rgb(255, 136, 0);
  outline: 0;
}
</style>