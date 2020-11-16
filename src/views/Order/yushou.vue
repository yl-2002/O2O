<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">预售订单</a>
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
          <p>操作</p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
          下单会员：
          <span>十月大神</span>，订单金额：
          <span>￥28</span>
        </div>
        <div class="flex3">
          <div class="t1">
            
            <div class="t2">
              <div>预定商品名称</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">￥140</p>
          <p >1</p>
          <p style="color:rgb(255, 136, 0)">待付订金</p>
          <p>
            <el-button type="success" size="small"  @click.native="xiangqing">详情</el-button>
          </p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
          下单会员：
          <span>十月大神</span>，订单金额：
          <span>￥28</span>
        </div>
        <div class="flex3" style="border-bottom:none">
          <div class="t1">
           
            <div class="t2">
              <div>预定商品名称</div>
            </div>
          </div>
         <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">￥140</p>
          <p >1</p>
          <p style="color:rgb(255, 136, 0)">待付订金</p>
          <p>
               <el-button type="primary" size="small"  @click.native="fahuo">发货</el-button>
            <el-button type="success" size="small"  @click.native="xiangqing">详情</el-button>
          </p>
        </div>
       
       
       
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
          下单会员：
          <span>十月大神</span>，订单金额：
          <span>￥28</span>
        </div>
        <div class="flex3">
          <div class="t1">
           
            <div class="t2">
              <div>预定商品名称</div>
            </div>
          </div>
         <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">￥140</p>
          <p >1</p>
          <p style="color:rgb(255, 136, 0)">待付订金</p>
          <p>
                         <el-button type="primary" size="small"  @click.native="fahuo">发货</el-button>
            <el-button type="success" size="small"  @click.native="xiangqing">详情</el-button>
          </p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
          下单会员：
          <span>十月大神</span>，订单金额：
          <span>￥28</span>
        </div>
        <div class="flex3">
          <div class="t1">
         
            <div class="t2">
              <div>预定商品名称</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">￥140</p>
          <p >1</p>
          <p style="color:rgb(255, 136, 0)">待付订金</p>
          <p>
            <el-button type="success" size="small"  @click.native="xiangqing">详情</el-button>
          </p>
        </div>

        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
          下单会员：
          <span>十月大神</span>，订单金额：
          <span>￥28</span>
        </div>
        <div class="flex3">
          <div class="t1">
           
            <div class="t2">
              <div>预定商品名称</div>
            </div>
          </div>
        <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">￥140</p>
          <p >1</p>
          <p style="color:rgb(255, 136, 0)">待付订金</p>
          <p>
            <el-button type="success" size="small"  @click.native="xiangqing">详情</el-button>
          </p>
        </div>

      
      
        <div class="block">
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
      <el-dialog title="详情" :visible.sync="list_xq">

        <div style="border-top:1px solid gainsboro" class="ddd">下单时间：2018-12-12 21:20:20</div>
        <div class="ddd">下单会员：十月大神</div>
        <div class="ddd">商品总价：￥2800</div>
        <div class="ddd">实际支付金额：￥2800</div>
        <div class="ddd">结算金额：￥2100</div>
        <div class="ddd">配送信息：十月大神，18800000000，广东省广州市越秀区东园横路1号</div>
        <table class="tabs">
          <tr>
            <td>商品名称</td>
            <td>商品单价</td>
            <td>结算单价</td>
            <td>数量</td>
            <td>总价</td>
          </tr>
          <tr>
            <td>商城商品名称</td>
            <td>￥500</td>
            <td>￥300</td>
            <td>1</td>
            <td>￥500</td>
          </tr>
          <tr>
            <td>商城商品名称</td>
            <td>￥500</td>
            <td>￥300</td>
            <td>1</td>
            <td>￥500</td>
          </tr>
        </table>
        <p
          style="border: 1px solid gainsboro;
    width: 511px;
    margin-top: 15px;
    padding: 11px 0 10px 17px;
    margin-bottom: -20px;"
        >包裹1：菜鸟裹裹 602822999，备注：无</p>
        <table class="tabs">
          <tr>
            <td>商品名称</td>
            <td>商品单价</td>
            <td>结算单价</td>
            <td>数量</td>
            <td>总价</td>
          </tr>
          <tr>
            <td>商城商品名称</td>
            <td>￥500</td>
            <td>￥300</td>
            <td>1</td>
            <td>￥500</td>
          </tr>
        </table>
      </el-dialog>
      <el-dialog title="发货信息" :visible.sync="list_xq1">
        <el-table
         border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChanges">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="结算单价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="数量"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="sum"
      label="总价"

      show-overflow-tooltip>
    </el-table-column>
  </el-table>
   <table class="tabs">
          <tr>
            <td>发货人</td>
            <td>结算合计</td>
            <td>配送信息</td>
            <td>快递公司</td>
            <td>配送</td>
          </tr>
          <tr>
            <td>xxx</td>
            <td>￥500</td>
            <td>十月大神，<br>18800000000，广东省广州市越秀区东园横路1号</td>
            <td>顺丰</td>
            <td>快递</td>
          </tr>
          <tr>
            <td>xxx</td>
            <td>￥500</td>
            <td>十月大神，<br>18800000000，广东省广州市越秀区东园横路1号</td>
            <td>顺丰</td>
            <td>快递</td>
          </tr>
          <tr>
            <td>xxx</td>
            <td>￥500</td>
            <td>十月大神，<br>18800000000，广东省广州市越秀区东园横路1号</td>
            <td>顺丰</td>
            <td>快递</td>
          </tr>
        </table>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click.native="tcc">确 定</el-button>
  </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
     handleSelectionChanges(val) {
      this.multipleSelection = val;
    
    },
    xiangqing() {
      this.list_xq = true;
    },

    tcc() {
      if(this.multipleSelection.length==0){
       this.$alert("请选择您发货", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
        },
      });
      }else{this.$alert("发货成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.list_xq1 = false;
        },
      });}
      
    },
    fahuo() {
      this.list_xq1 = true;
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

.box>>>.el-form{
    border: 1px solid gainsboro;
}

.box>>>.dialog-footer .el-button--primary {
    background-color: rgb(255, 136, 0);
    border-color: rgb(255, 136, 0);
}
.box>>> .el-checkbox__inner:hover{
    border-color:rgb(255, 136, 0);
}

.box>>> .el-checkbox__input.is-indeterminate .el-checkbox__inner{
            background-color: rgb(255, 136, 0);
    border-color:rgb(255, 136, 0);
}
.box>>>.el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: rgb(255, 136, 0);
    border-color:rgb(255, 136, 0);
}
.tabs {
  margin-top: 20px;
  border-collapse: collapse;
}
.tabs td {
  border: 1px solid gainsboro;
  width: 106px;
  text-align: center;
  height: 38px;
}
.box >>> .el-dialog {
  width: 30%;
  border-radius: 10px;
}
.box >>> .el-dialog__body .ddd{
  border: 1px solid gainsboro;
  height: 40px;
  line-height: 40px;
  padding-left: 23px;
  border-top: none;
}
.box >>> .el-dialog__header {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: rgb(255, 136, 0);
}
.box >>> .el-dialog__title {
  color: white;
}
.box >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.box >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}
.flex3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-top: none;
  font-size: 13px;
  height: 90px;
}
.t1 {
  flex: 3;
  display: flex;
  flex-direction: row;
}

.t2 {
  line-height: 64px;
  flex: 2;
  margin-left: 20px;
}
.flex3 p {
  flex: 1;
  text-align: center;
}
.flex2 span {
  color: rgb(255, 136, 0);
}
.flex2 {
  background: rgb(254, 251, 239);
  font-size: 13px;
  border: 1px solid rgb(221, 221, 221);
  border-top: none;
  height: 30px;
  padding: 10px 0 0 20px;
}
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
  min-height: 760px;
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