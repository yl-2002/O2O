
      <template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">服务管理</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button
        type="warning"
        size="small"
        style="margin-left:20px;position: absolute;right: 258px;margin-top: 5px;    z-index: 9;"
        @click.native="xqys"
      >新增服务</el-button>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="出售中" name="first">
          <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
         
            <el-button type="warning" size="small" style="margin-left:20px">查询</el-button>
          </div>

          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="服务ID" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="服务名称" width="150"></el-table-column>
            <el-table-column prop="date" label="上架时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="售价" width="130"></el-table-column>
            <el-table-column prop="px" label="销量" width="130"></el-table-column>
            <el-table-column prop="fw" label="服务类型" width="130">
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template>
                <el-button size="small" type="primary" @click.native="bj">编辑</el-button>
                <el-button size="small" type="success" @click.native="xj">下架</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        <el-tab-pane label="已下架" name="second">
            <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
         
            <el-button type="warning" size="small" style="margin-left:20px">查询</el-button>
          </div>

          <el-table
            ref="multipleTables"
            :data="tableDatas"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="服务ID" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="服务名称" width="150"></el-table-column>
            <el-table-column prop="date" label="上架时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="售价" width="130"></el-table-column>
            <el-table-column prop="px" label="销量" width="130"></el-table-column>
            <el-table-column prop="fw" label="服务类型" width="130">
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template>
                <el-button size="small" type="primary" @click.native="bj">编辑</el-button>
                <el-button size="small" type="success" @click.native="sj">上架</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        <el-tab-pane label="审核记录" name="third">
          <div class="body">
            <el-row :gutter="1" class="top" style="font-size:15px">
              <el-col :span="3">编号</el-col>
              <el-col :span="6">详情</el-col>
              <el-col :span="3">提交时间</el-col>
              <el-col :span="3"><el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{msg}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="s1">全部类型</el-dropdown-item>
        <el-dropdown-item @click.native="s2">发布申请</el-dropdown-item>
        <el-dropdown-item @click.native="s3">修改申请</el-dropdown-item>
        <el-dropdown-item @click.native="s4">上架申请</el-dropdown-item>
        <el-dropdown-item @click.native="s5">下架申请</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></el-col>
              <el-col :span="3"><el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{msg1}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="s6">全部状态</el-dropdown-item>
        <el-dropdown-item @click.native="s7">申请通过</el-dropdown-item>
        <el-dropdown-item @click.native="s8">未申请</el-dropdown-item>
        <el-dropdown-item @click.native="s9">拒绝申请</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></el-col>
              <el-col :span="6">操作</el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                  <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                   服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:red">未审核</el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                  <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                 <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
              服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:Red">未审核</el-col>
              <el-col :span="6">
                   <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                  <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                 服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                   <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">上架申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                 <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                 服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:red">未审核</el-col>
              <el-col :span="6">
                  <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                 <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                   服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">拒绝申请<br>

审核备注：标题不符合规范</p></el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                  <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                 服务名称
                  </div>
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">上架申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
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
        </el-tab-pane>
       
      </el-tabs>

      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sda: "",
      activeName: "first",
     
      input: "",
      tableData: [
        {
          id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
          id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
            id: "1001",
          name: "修指甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '自定义服务',
        },
        {
           id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
          id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
          id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
      ],
      multipleSelection: [],
      tableDatas: [
        {
          id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
           id: "1001",
          name: "美甲",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
       
       
        {
          id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
        {
          id: "1001",
          name: "擦玻璃",
          date: "永久",
          xl: "26",
          px: "0",
          fw: '标准服务',
        },
      ],
      multipleSelections: [],
   msg:'全部类型',
      msg1:'全部状态',
    
    };
  },
  methods: {
      xqys(){
          this.$router.push({
              path:'/fws/xzlx'
          })
      },
      scd(){
          this.$alert('确定删除吗', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `删除成功！`
            });
          }
        });
      },
       sj(){
          this.$alert('确定上架吗', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `上架成功！`
            });
          }
        });
      },
        xj(){
          this.$alert('确定下架吗', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `下架成功！`
            });
          }
        });
      },
 s1(){
      this.msg='全部类型'
    },
    s2(){
      this.msg='发布申请'
    },s3(){
      this.msg='修改申请'
    },s4(){
      this.msg='上架申请'
    },s5(){
      this.msg='下架申请'
    },s6(){
      this.msg1='全部审核'
    },s7(){
      this.msg1='审核通过'
    },s8(){
      this.msg1='未审核'
    },s9(){
      this.msg1='拒绝审核'
    },
    bj(){
        this.$router.push({
            path:'/fwx/bianji'
        })
    }
  },
};
</script>
<style  scoped>
.box >>> .el-dialog {
  width: 600px;
}
.box >>> .el-dialog .el-table th {
  padding: 3px 0;
  background: rgb(242, 242, 242);
}
.box >>> .el-dialog .el-table tr:hover {
  background-color: rgb(255, 136, 0) !important;
  color: white;
}
.box >>> .el-dialog .el-table td {
  padding: 3px 0;
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
.box >>> .el-table tr td {
  text-align: center;
  font-size: 12px;
}
.box >>> .el-table tr td .cell {
  white-space: pre-wrap;
}
.box >>> .el-tabs__nav-wrap {
  border-bottom: 2px solid rgb(255, 136, 0);
}
.box >>> .el-table th {
  text-align: center;
  background: rgb(242, 242, 242);
}
.box >>> .el-table th > .cell {
  font-weight: normal;
  color: black;
}
.box >>> .el-tabs__item:hover {
  color: rgb(255, 136, 0);
}
.box >>> .el-tabs__item.is-active {
  color: #fff;
    background: rgb(255,136,0);
}

.box {
  width: 1165px;
  background: white;
  margin: 20px auto;
  min-height: 200px;
  padding: 20px 40px;
}

.pj1 {
  padding: 8px 0 8px 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
</style>