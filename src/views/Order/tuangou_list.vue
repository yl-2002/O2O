<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">团购订单列表</a>
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
          <p>红包</p>
          <p>优惠券</p>
          <p>结算金额</p>
          <p>数量</p>
          <p>状态</p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
        </div>
        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <img src="../../assets/img/tu.png" alt />
            </div>
            <div class="t2">
              <div>
                <el-link type="warning" style="color:rgb(255,136,0)">团购商品名称</el-link>
              </div>

              <div>下单会员：shiyue</div>
              <div>手机号：18800000000</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">140</p>
          <p>1</p>
          <p>未消费</p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
        </div>
        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <img src="../../assets/img/tu.png" alt />
            </div>
            <div class="t2">
              <div>
                <el-link type="warning" style="color:rgb(255,136,0)">团购商品名称</el-link>
              </div>

              <div>下单会员：shiyue</div>
              <div>手机号：18800000000</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">140</p>
          <p>1</p>
          <p>未消费</p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
        </div>
        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <img src="../../assets/img/tu.png" alt />
            </div>
            <div class="t2">
              <div>
                <el-link type="warning" style="color:rgb(255,136,0)">团购商品名称</el-link>
              </div>

              <div>下单会员：shiyue</div>
              <div>手机号：18800000000</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">1</p>
          <p style="color:rgb(255, 136, 0)">140</p>
          <p>1</p>
          <p>未消费</p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
        </div>
        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <img src="../../assets/img/tu.png" alt />
            </div>
            <div class="t2">
              <div>
                <el-link type="warning" style="color:rgb(255,136,0)">团购商品名称</el-link>
              </div>

              <div>下单会员：shiyue</div>
              <div>手机号：18800000000</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">2</p>
          <p style="color:rgb(255, 136, 0)">140</p>
          <p>1</p>
          <p>
            订单已完结
            <br />
            <span style="color:rgb(255,136,0)">已点评</span>
          </p>
        </div>
        <div class="flex2">
          订单号：
          <span>2018122800300557</span>，交易时间：
          <span>2018-12-28 00:30:05</span>
        </div>
        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <img src="../../assets/img/tu.png" alt />
            </div>
            <div class="t2">
              <div>
                <el-link type="warning" style="color:rgb(255,136,0)">团购商品名称</el-link>
              </div>

              <div>下单会员：shiyue</div>
              <div>手机号：18800000000</div>
            </div>
          </div>
          <p style="color:rgb(255, 136, 0)">不开发票</p>
          <p style="color:rgb(255, 136, 0)">0</p>
          <p style="color:rgb(255, 136, 0)">1</p>
          <p style="color:rgb(255, 136, 0)">140</p>
          <p>1</p>
          <p>未消费</p>
        </div>
         <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4000" style="padding: 16px 0px 0px 205px;
    margin-bottom: 16px">
    </el-pagination>
  </div>
      </div>
       
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
    };
  },
  methods: {
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
.box>>>.el-pager li:hover{
    color: rgb(255, 136, 0);
}
.box>>>.el-pager li.active{
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
.tt {
  margin-top: 10px;
  flex: 1;
  margin-left: 16px;
}
.t2 {
  line-height: 22px;
  flex: 2;
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
  height: 760px;
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