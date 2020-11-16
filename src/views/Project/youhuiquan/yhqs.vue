<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">优惠券</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button
        type="warning"
        size="small"
        style="position: absolute;
    top: 168px;
    right: 290px;;
    z-index: 3;"
        @click.native="cx"
      >新增优惠券</el-button>
      <div
        style="position: relative;
    top: -20px;
    background: rgb(255,136,0);
    height: 2px;"
      ></div>
      <div class="body">
        <el-row :gutter="1" class="top">
          <el-col :span="2">编号</el-col>
          <el-col :span="2">优惠券名称</el-col>
          <el-col :span="2">券总数</el-col>
          <el-col :span="2">已领取量</el-col>
          <el-col :span="4">上线时间</el-col>
          <el-col :span="2">面值</el-col>
          <el-col :span="2">使用范围</el-col>
          <el-col :span="2">类型</el-col>
          <el-col :span="2">状态</el-col>
          <el-col :span="4">操作</el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1s" active-color="rgb(255,136,0)"
  ></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row>
 <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1ss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1sss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1ssss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1sssss" active-color="rgb(255,136,0)"> </el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1ssssss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1sssssss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1sssssssss" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">电子券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1s1" active-color="rgb(255,136,0)"> </el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
          </el-col>
        </el-row> <el-row :gutter="1" class="top">
          <el-col :span="2">1001</el-col>
          <el-col :span="2">优惠券名称1</el-col>
          <el-col :span="2">1000</el-col>
          <el-col :span="2">489</el-col>
          <el-col :span="4">
            2018-12-12 10:00:00 开始
            <br />2018-12-30 23:59:58 结束
          </el-col>
          <el-col :span="2">20</el-col>
          <el-col :span="2">商场</el-col>
          <el-col :span="2">实体券</el-col>
          <el-col :span="2">
            <el-switch v-model="value1s2" active-color="rgb(255,136,0)"></el-switch>
          </el-col>
          <el-col :span="4">
            <el-button size="mini" type="primary" @click.native="bj1">编辑</el-button>
            <el-button size="mini" type="success" @click.native="sc">删除</el-button>
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
    </div>
    <el-dialog title="选择优惠券类型" :visible.sync="dialogFormVisible">
        <p style="font-size:12px;color:Red">注意：优惠券类型选择后，不可修改</p>
  <el-form :model="form">
    <el-form-item label="优惠券名称：" :label-width="formLabelWidth" style="margin-top:20px">
     <el-radio v-model="radio1" label="1" >实体券（线下门店扫码核销）</el-radio>
     <br>
    <el-radio v-model="radio1" label="2">电子券（在线下单选择用来抵扣部分订单金额）</el-radio>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="xyn">下一步</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1s: true,
      value1ss: true,
      value1sss: true,
      value1ssss: true,
      value1sssss: true,
      value1ssssss: true,
      value1sssssss: true,
      value1ssssssss: true,
      value1s1: true,
      value1s2: true,
      radio1:'1',
      value1sssssssss: true,
      dialogFormVisible:false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  methods: {
      bj(){
          this.$router.push({
              path:'/yhqs/update'
          })
      }, bj1(){
          this.$router.push({
              path:'/yhqs/update_shiti'
          })
      },
    sc() {
      this.$confirm(
        "确定删除吗？, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          dangerouslyUseHTMLString: true,
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    cx(){
        this.dialogFormVisible=true
        
    },
    xyn(){
        if (this.radio1=='1') {
            this.dialogFormVisible = false;
            this.$router.push({
                path:'/yhqs/insert_shiti'
            })
        }
        if(this.radio1=='2'){
            this.dialogFormVisible = false;
            this.$router.push({
                path:'/yhqs/insert_dianzi'
            })
        }
        

    }
  },
};
</script>
<style  scoped>
.box {
  padding: 99px 60px 35px 60px;
  background: white;
  min-height: 200px;
  width: 1128px;
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
  display: flex;
  text-align: center;
  margin-left: 0 !important;
  padding: 20px 0;
  border: 1px solid rgb(228, 228, 228);
  border-bottom: none;
  align-items: center;
  font-size: 12px;
}
.top:nth-of-type(1) {
  background: rgb(242, 242, 242);
  padding: 10px 0;
  font-size: 14px;
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