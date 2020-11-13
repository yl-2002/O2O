<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="    margin-left: 9px;">消费评论</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-input placeholder="评论起始日期" v-model="input" clearable></el-input>
      <i>-</i>
      <el-input placeholder="评论截至日期" v-model="input1" clearable></el-input>
      <el-input placeholder="请输入商品名..." v-model="input2" clearable></el-input>
      <el-dropdown>
        <el-button type="primary" class="xl">
          {{msg}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="qb">全部评价</el-dropdown-item>
          <el-dropdown-item @click.native="yxf">五星评价</el-dropdown-item>
          <el-dropdown-item @click.native="wxf">四星评价</el-dropdown-item>
          <el-dropdown-item @click.native="wxfs">三星评价</el-dropdown-item>
          <el-dropdown-item @click.native="wxfss">二星评价</el-dropdown-item>
          <el-dropdown-item @click.native="wxfsss">一星评价</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary" class="xl">
          {{msgs}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="qbs">全部评论</el-dropdown-item>
          <el-dropdown-item @click.native="yt">有图评论</el-dropdown-item>
          <el-dropdown-item @click.native="wt">无图评论</el-dropdown-item>
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
          <div style="border-right:1px solid rgb(221,221,221);padding: 11px 0;">评论星级</div>
          <p style="flex: 2;">评论内容</p>
          <p>评论人</p>
          <p>被评论来源</p>
          <p>操作</p>
        </div>

        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <el-rate v-model="value" disabled></el-rate>
            </div>
            <div class="t2">
              <div>文字评价内容</div>
              <div>【2018-12-12 00:12:28】</div>
            </div>
          </div>
          <div>
              
          </div>
          <p>十月大神</p>
          <p style="color:rgb(255, 136, 0)">被评论商品名称</p>
          <p>
            <el-button type="success" size="small" @click.native="dialogFormVisible = true">回复</el-button>
          </p>
        </div>

        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <el-rate v-model="value1" disabled></el-rate>
            </div>
            <div class="t2">
              <div>文字评价内容</div>
              <div>【2018-12-12 00:12:28】</div>
            </div>
          </div>
          <p>十月大神</p>
          <p style="color:rgb(255, 136, 0)">被评论商品名称</p>
          <p>
            <el-button type="success" size="small" @click.native="dialogFormVisible = true">回复</el-button>
          </p>
        </div>

        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <el-rate v-model="value3" disabled></el-rate>
            </div>
            <div class="t2">
              <div style="width: 300px;">文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容</div>
              <div><i class="tu"></i><i class="tu"></i><i class="tu"></i><i class="tu"></i></div>
              <div>【2018-12-12 00:12:28】</div>
            </div>
          </div>
          <p>十月大神</p>
          <p style="color:rgb(255, 136, 0);">被评论商品名称</p>
          <p>
            <el-button type="success" size="small" @click.native="dialogFormVisible = true">回复</el-button>
          </p>
        </div>

        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <el-rate v-model="value4" disabled></el-rate>
            </div>
            <div class="t2">
            <div style="width: 300px;">文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容文字评价内容</div>
              <div><i class="tu"></i><i class="tu"></i><i class="tu"></i><i class="tu"></i></div>
              <div>【2018-12-12 00:12:28】</div>
              <div class="mm">
                  {{mu}}
              </div>
            </div>
          </div>
          <p>十月大神</p>
          <p style="color:rgb(255, 136, 0)">被评论商品名称</p>
          <p>
            <el-button type="success" size="small" @click.native="dialogFormVisibles=true">修改</el-button>
          </p>
        </div>

        <div class="flex3">
          <div class="t1">
            <div class="tt">
              <el-rate v-model="value4" disabled></el-rate>
            </div>
             <div class="t2">
              <div>文字评价内容</div>
              <div>【2018-12-12 00:12:28】</div>
            </div>
          </div>
          <p>十月大神</p>
          <p style="color:rgb(255, 136, 0)">被评论商品名称</p>
          <p>
            <el-button type="success" size="small" @click.native="dialogFormVisible = true">回复</el-button>
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
      <el-dialog title="回复信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="请评论回复" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" type="textarea" rows="5"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="bgl">确 定</el-button>
  </div>
</el-dialog>

<el-dialog title="修改信息" :visible.sync="dialogFormVisibles">
  <el-form :model="form1">
    <el-form-item label="请修改回复" :label-width="formLabelWidth">
      <el-input v-model="mu" autocomplete="off" type="textarea" rows="5"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibles = false">取 消</el-button>
    <el-button type="primary" @click.native="bg2">确 定</el-button>
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
      form: {
          name: '',
          region: '',
         
        },form1: {
          name: '',
          region: '',
         
        },
      input1: "",
      value: 5,
      dialogFormVisibles:false,
      value1: 4,
      value2: 3,
      value3: 3,
      value4: 2,
      input2: "",
      msg: "全部评论",
      msgs: "全部内容",
      mu:'【回复】感谢您的反馈，我们会努力改善~期待您的再次光临',
      dialogFormVisible:false
    };
  },
  methods: {
bgl(){
     this.$alert('回复成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.dialogFormVisible=false
          }
        });
   
},
bg2(){ this.$alert('修改成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.dialogFormVisibles=false
          }
        });},

    qb() {
      this.msg = "全部评价";
    },
    yxf() {
      this.msg = "五星评价";
    },
    wxf() {
      this.msg = "四星评价";
    },
    wxfs() {
      this.msg = "三星评价";
    },
    wxfss() {
      this.msg = "二星评价";
    },
    wxfsss() {
      this.msg = "一星评价";
    },
    qbs() {
      this.msgs = "全部评论";
    },
    yt() {
      this.msgs = "有图评论";
    },
    wt() {
      this.msgs = "无图评论";
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
.flex3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-top: none;
  font-size: 13px;
  min-height: 90px;
  padding: 10px 0;
}
.mm{
    width: 300px;
    padding: 5px;
    background: rgb(242,242,242);
    color: red;
}
.t1 {
 width: 532px;
  display: flex;
  font-size: 12px;
  flex-direction: row;
}
.tt {
  padding-top: 14px;
  width: 158px;
  padding-left: 16px;
}
.t2 {
  padding-left: 40px;
  line-height: 22px;
}
.flex3 p {
  flex: 1;
  text-align: center;
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
  width: 158px;
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
.tu{
    display: inline-block;
    margin: 5px;
    background-image: url("../../assets/img/tu.png");
     width: 54px;
  height: 43px;
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