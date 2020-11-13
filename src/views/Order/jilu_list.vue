<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">优惠券领取记录</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-input placeholder="领取起始日期" v-model="input" clearable></el-input>
      <i>-</i>
      <el-input placeholder="领取截至日期" v-model="input1" clearable></el-input>
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
        style="    position: absolute;
    background: rgb(255, 136, 0);
    right: 290px;"
      >查询</el-button>

      <el-table
        :data="tableData"
        style="    width: 92%;
    margin-left: 15px;
    margin-top:30px"
      >
        <el-table-column prop="name" label="优惠券名称" width="170"></el-table-column>
        <el-table-column prop="user" label="会员" width="120"></el-table-column>
        <el-table-column prop="lqdate" label="领取时间" width="170"></el-table-column>

        <el-table-column prop="gqdale" label="过期时间" width="170"></el-table-column>
        <el-table-column prop="xfdate" label="消费时间" width="170"></el-table-column>
        <el-table-column prop="addate" label="消费门店" width="170"></el-table-column>
        <el-table-column prop="zt" label="状态" width="120"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="4000"
          style="    padding: 16px 0px 0px 205px;
    margin-bottom: 16px;"
        ></el-pagination>
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
      tableData: [
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "永久有效",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "花生米科技公司（黄埔店）",
          zt: "已使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "永久有效",
          xfdate: "",
          addate: "花生米科技公司（越秀店）",
          zt: "已经使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "永久有效",
          xfdate: " ",
          addate: "花生米科技公司（天河店）",
          zt: "已经使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "未使用",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "已过期",
        },
        {
          name: "测试优惠券",
          user: "十月大神",
          lqdate: "2018-12-12 10:00:00",
          gqdale: "2019-01-12 10:00:00",
          xfdate: "---",
          addate: "---",
          zt: "已过期",
        },
      ],
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
.box >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.box >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}
.box >>> .el-table th.is-leaf {
  background: rgb(242, 242, 242);
  border: 1px solid rgb(228, 228, 228);
  font-weight: normal;
  text-align: center;
  color: #000;
}
.box >>> .el-table__body td {
  text-align: center;
  font-size: 12px;
  border-left: 1px solid rgb(228, 228, 228);
}
.box >>> .el-table__body td:last-of-type {
  border-right: 1px solid rgb(228, 228, 228);
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