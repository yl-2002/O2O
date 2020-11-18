<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">上门服务设置</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div
        style="font-size: 12px;
    border: 1px solid rgb(228,228,228);
    padding: 11px 0 12px 12px;
    background: rgb(254,251,239);"
      >温馨提示：可以点击【外卖分类】和【外卖商品】进行添加或修改</div>
      <div class="body">
        <el-row :gutter="1" class="top">
          <el-col :span="3">编号</el-col>
          <el-col :span="6">门店名称</el-col>
          <el-col :span="8">服务</el-col>
          <el-col :span="7">操作</el-col>
        </el-row>

        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="1" class="top">
          <el-col :span="3">1001</el-col>
          <el-col :span="6">
            <div class="ox">
              <div style="    width: 95px;">
                <img src="../../../assets/img/tu.png" alt />
              </div>

              <div style="font-size:12px;
    padding-top: 11px;
">
                花生米科技公司（越秀店）
                <br />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-link type="warning" @click.native="fls">服务（5）</el-link>
          </el-col>
          <el-col :span="7">
            <el-button type="warning" size="mini" @click.native="shxg">服务管理</el-button>
            <el-button type="primary" size="mini" @click.native="gx">上门设置</el-button>
            <el-button type="success" size="mini">暂停营业</el-button>
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

      <el-dialog title="提示" :visible.sync="outerVisible">
        <el-dialog width="15%" title="提示" :visible.sync="innerVisible" append-to-body>
          <div>取消上架成功！</div>
          <div slot="footer" class="dialog-footer">
            <el-button
              style="background:rgb(255,136,0);color:white"
              @click="    outerVisible=false,innerVisible = false"
            >确 定</el-button>
          </div>
        </el-dialog>
        <div>确定取消上架吗？</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button style="background:rgb(255,136,0);color:white" @click="innerVisible = true">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      shxg(){

      },
      gx(){
          this.$router.push({
               path:'/shangmen/shangmensz',
          })
      }
  },
};
</script>
<style  scoped>
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgb(254, 245, 215);
  color: grey;
}

.body {
  margin-top: 5px;
}
.box {
  padding: 29px;
  background: white;
  min-height: 200px;
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