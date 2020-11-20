
      <template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">商品预售</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button
        type="warning"
        size="small"
        style="margin-left:20px;position: absolute;right: 258px;margin-top: 5px;    z-index: 9;"
        @click.native="xqys"
      >新区预售</el-button>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="全部预售" name="first">
          <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
            <el-select v-model="value" placeholder="全部" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
            <el-table-column label="商品id" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="date" label="预售时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="预售销量" width="130"></el-table-column>
            <el-table-column prop="px" label="排序" width="130"></el-table-column>
            <el-table-column label="状态" width="130">
              <template scope="scope">
                <el-switch
                  v-model="scope.row.value"
                  active-color="rgb(255,136,0)"
                  inactive-color="rgb(242,242,242)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template>
                <el-button size="small" type="primary" @click.native="bj">编辑</el-button>
                <el-button size="small" type="success">查看订单</el-button>
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
        <el-tab-pane label="进行中" name="second">
          <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
            <el-select v-model="value" placeholder="全部" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="warning" size="small" style="margin-left:20px">查询</el-button>
          </div>

          <el-table
            ref="multipleTables"
            :data="tableDatas"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品id" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="date" label="预售时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="预售销量" width="130"></el-table-column>
            <el-table-column prop="px" label="排序" width="130"></el-table-column>
            <el-table-column label="状态" width="130">
              <template scope="scope">
                <el-switch
                  v-model="scope.row.value"
                  active-color="rgb(255,136,0)"
                  inactive-color="rgb(242,242,242)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template>
                <el-button size="small" type="primary" @click.native="bj">编辑</el-button>
                <el-button size="small" type="success">查看订单</el-button>
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
        <el-tab-pane label="未开始" name="third">
          <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
            <el-select v-model="value" placeholder="全部" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="warning" size="small" style="margin-left:20px">查询</el-button>
          </div>

          <el-table
            ref="multipleTabless"
            :data="tableDatass"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品id" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="date" label="预售时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="预售销量" width="130"></el-table-column>
            <el-table-column prop="px" label="排序" width="130"></el-table-column>
            <el-table-column label="状态" width="130">
              <template scope="scope">
                <el-switch
                  v-model="scope.row.value"
                  active-color="rgb(255,136,0)"
                  inactive-color="rgb(242,242,242)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template>
                <el-button size="small" type="primary" @click.native="bj">编辑</el-button>
                <el-button size="small" type="success">查看订单</el-button>
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
        <el-tab-pane label="已结束" name="fourth">
          <div style="margin:10px 0 20px">
            <el-input placeholder="请输入商品id/名称" v-model="input" size="small" clearable></el-input>
            <el-select v-model="value" placeholder="全部" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="warning" size="small" style="margin-left:20px">查询</el-button>
          </div>

          <el-table
            ref="multipleTablesss"
            :data="tableDatasss"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品id" prop="id" width="150"></el-table-column>
            <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
            <el-table-column prop="date" label="预售时间" width="180"></el-table-column>
            <el-table-column prop="xl" label="预售销量" width="130"></el-table-column>
            <el-table-column prop="px" label="排序" width="130"></el-table-column>
            <el-table-column label="状态" width="130">
              <template scope="scope">
                <el-switch
                  v-model="scope.row.value"
                  active-color="rgb(255,136,0)"
                  inactive-color="rgb(242,242,242)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button size="small" type="primary" @click="bj(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="success">查看订单</el-button>
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
      </el-tabs>

      <el-dialog title="添加预售商品" :visible.sync="dialogTableVisible">
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
      sda: "",
      activeName: "first",
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "正常",
        },
        {
          value: "选项3",
          label: "关闭",
        },
      ],
      value: "",
      input: "",
      tableData: [
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
      ],
      multipleSelection: [],
      tableDatas: [
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
      ],
      multipleSelections: [],
      tableDatass: [
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: true,
        },
      ],
      multipleSelectionss: [],
      tableDatasss: [
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
        {
          id: "1001",
          name: "商城商品名称",
          date: "2019-02-01 10:00:00  开始\n2019-02-14 18:00:00  结束",
          xl: "0",
          px: "10",
          value: false,
        },
      ],
      multipleSelectionsss: [],
      dialogTableVisible: false,
      gridData: [
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
        {
          date: "1001",
          name: "商城商品名称",
        },
      ],
    };
  },
  methods: {
      bj(){
          this.$router.push({
              path:'/spys/bj',
          })
      },
    xqys() {
      this.dialogTableVisible = true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
 qds(){
   this.$alert('添加成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          this.dialogTableVisible=false
          }
        });
  
       
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
  color: rgb(255, 136, 0);
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