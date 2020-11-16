<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">财务报表</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="财务概况" name="first">
          <div class="body">
            <div class="i_top">
              <el-input
                size="small"
                placeholder="查询起始日期"
                style="margin-right:20px;display: inline-block;
    width: 160px;"
              ></el-input>
              <span>-</span>
              <el-input
                size="small"
                placeholder="查询截至日期"
                style="margin-left:20px;display: inline-block;
    width: 160px;"
              ></el-input>
              <el-button
                size="small"
                @click.native="cx"
                style="background:rgb(255,136,0);margin-left:20px;color:white "
              >查询</el-button>
            </div>
            <div class="e_top">
              <div class="e1">
                <img src="../../assets/img/haoye.png" alt />
              </div>
              <div class="e2">
                <div>
                  <p>
                    总销售额：
                    <a style="color:rgb(255,136,0)">¥21091.78</a>
                  </p>
                  <p>
                    退款金额：
                    <a style="color:rgb(255,136,0)">¥1537</a>
                  </p>
                  <p>
                    未消费：
                    <a style="color:rgb(255,136,0)">¥14034.46</a>
                  </p>
                  <p>
                    未提现：
                    <a style="color:rgb(255,136,0)">¥188 <el-link type="warning" @click.native="sqtx">【申请提现】</el-link></a>
                  </p>
                  <p>
                    已提现：
                    <a style="color:rgb(255,136,0)">¥4734.9</a>
                  </p>
                </div>
                <div>
                  <h5 style="color:rgb(255,136,0)">2019-01 报表</h5>
                  <p>
                    2019-01 销售额：
                    <a style="color:rgb(255,136,0)">¥10</a>
                  </p>
                  <p>
                    2019-01 退款金额：
                    <a style="color:rgb(255,136,0)">¥0</a>
                  </p>
                  <p>
                    2019-01 消费：
                    <a style="color:rgb(255,136,0)">¥0</a>
                  </p>
                  <p>
                    2019-01 提现：
                    <a style="color:rgb(255,136,0)">¥1</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="销售走势" name="second">
          <div class="i_top">
             <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{msg}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="msg='2019年'">2019年</el-dropdown-item>
        <el-dropdown-item @click.native="msg='2018年'">2018年</el-dropdown-item>
        <el-dropdown-item @click.native="msg='2017年'">2017年</el-dropdown-item>
        <el-dropdown-item @click.native="msg='2016年'">2016年</el-dropdown-item>
        <el-dropdown-item @click.native="msg='2015年'">2015年</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
              <el-button
                size="small"
                @click.native="cx"
                style="background:rgb(255,136,0);margin-left:20px;color:white "
              >查询</el-button>
            </div>
            <img src="../../assets/img/hs.png" style="margin-top:20px;margin-left:20px" alt="">
        </el-tab-pane>
        <el-tab-pane label="财务明细" name="third">
            <div class="i_top">
              <el-input
                size="small"
                placeholder="查询起始日期"
                style="margin-right:20px;display: inline-block;
    width: 160px;"
              ></el-input>
              <span>-</span>
              <el-input
                size="small"
                placeholder="查询截至日期"
                style="margin-left:20px;display: inline-block;
    width: 160px;"
              ></el-input>
              <el-dropdown trigger="click" style="margin-left:20px">
      <span class="el-dropdown-link">
        {{msg1}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="msg1='销售明细'">销售明细</el-dropdown-item>
        <el-dropdown-item @click.native="msg1='销售明细'">销售明细</el-dropdown-item>
        <el-dropdown-item @click.native="msg1='退款明细'">退款明细</el-dropdown-item>
        <el-dropdown-item @click.native="msg1='打款明细'">打款明细</el-dropdown-item>
        <el-dropdown-item @click.native="msg1='买单明细'">买单明细</el-dropdown-item>
         <el-dropdown-item @click.native="msg1='配送明细'">配送明细</el-dropdown-item>
        <el-dropdown-item @click.native="msg1='收银明细'">收银明细</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
              <el-button
                size="small"
                @click.native="cx"
                style="background:rgb(255,136,0);margin-left:20px;color:white "
              >查询</el-button>
            </div>
            <div>
              <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:30px">
    <el-table-column
      prop="date"
      label="日志"
      width="700">
    </el-table-column>
    <el-table-column
      prop="name"
      label="金额"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发生时间">
    </el-table-column>
  </el-table>
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        msg:'2019年',
        msg1:'销售明细',
        activeName: "first", 
        tableData: [{
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }, {
          date: 'ID：10001  商品名称  订单：20181220100878',
          name: '￥10',
          address: '2018-12-12 12:00:12'
        }]
    };
  },
  methods: {
  cx(){
      this.$router.go(0)
  },
  sqtx(){
     this.$router.push({
       path:'/shtixian'
     })
  }
  },
};
</script>
<style  scoped>
.box >>> .el-tabs__nav-wrap {
  border-bottom: 2px solid rgb(255, 136, 0);
}
.i_top {
  padding: 10px;
  border: 1px solid rgb(200, 200, 200);
}
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgb(254, 245, 215);
  color: grey;
}
.box >>> .el-tabs--card > .el-tabs__header {
  width: 1100px !important;
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
  background: rgb(255, 136, 0);
  color: #fff;
}
.box >>> .el-tabs__item:hover {
  color: rgb(255, 136, 0);
}

.box {
  padding: 29px 0 35px 60px;
  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.e_top {
  display: flex;
}
.e1 {
  flex: 1;
}
.e2 {
  flex: 1;
}
.e2 div {
  padding: 10px;
  line-height: 25px;
  border: 1px solid rgb(228, 228, 228);
  background: rgb(254, 251, 239);
  font-size: 12px;
  margin: 24px 0;
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
.box >>> .el-tabs__content {
  width: 1100px;
  overflow: hidden;
  position: relative;
}
#tab-second {
  margin-left: 10px;
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
.el-dropdown{
    margin-left: 7px;
}
.top {
  display: flex;
  text-align: center;
  margin-left: 0 !important;
  padding: 20px 0;
  border: 1px solid rgb(228, 228, 228);
  border-bottom: none;
  align-items: center;
  font-size: 12px;
}
.box>>>.el-table--border th{
  text-align: center;
  background: rgb(228, 228, 228);
  font-weight: normal;
  font-size: 12px;
  color: #000;
}
.top:nth-of-type(1) {
  background: rgb(242, 242, 242);
  padding: 10px 0;
  font-size: 16px;
}
.top:last-of-type {
  border-bottom: 1px solid rgb(228, 228, 228);
}
.ox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.foot {
  border: 1px solid rgb(228, 228, 228);
}
</style>