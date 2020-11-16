<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">编辑</a>
        </span>
      </p>
    </div>
    <div class="box">
      <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;">
        <tr>
          <td style="background:rgb(250,250,250)" class="first">
            <span style="color:red">*</span>商品分类：
          </td>
          <td class="secend">
            <el-dropdown trigger="click" style="    border: 1px solid;
    padding: 5px;
">
              <span class="el-dropdown-link">
                {{msg}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="q1">一级菜单</el-dropdown-item>
                <el-dropdown-item @click.native="q2">一级菜单1</el-dropdown-item>
                <el-dropdown-item @click.native="q3">一级菜单2</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown trigger="click" style="margin-left:30px;border:1px solid;padding:5px">
              <span class="el-dropdown-link">
                {{msg1}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="q4">二级菜单</el-dropdown-item>
                <el-dropdown-item @click.native="q5">二级菜单1</el-dropdown-item>
                <el-dropdown-item @click.native="q6">二级菜单2</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">
            <span style="color:red">*</span>已选择分类：
          </td>
          <td class="secend">
            <div class="ss" v-show="fenlei">
              {{msg}}>{{msg1}}
              <el-link
                type="warning"
                style="display: inline-block;
    margin: -5px 0 0 6px;"
                @click.native="deletes"
              >删除</el-link>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">
            <span style="color:red">*</span>支持门店：
          </td>
          <td class="secend">
            <el-transfer
              v-model="value"
               :titles="['可选门店', '已选门店']"
              :props="{
               key: 'value',
               label: 'desc'
    }"
              :data="data"
            ></el-transfer>
          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">基本信息：</td>
          <td class="secend">
              <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="活动名称:" >
    <el-input style="width:250px" maxlength=30 v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域:">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
  </el-form-item>
  
  <el-form-item label="活动性质:">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="免预约" name="type"></el-checkbox-button>
      <el-checkbox-button label="可定做" name="type"></el-checkbox-button>
      <el-checkbox-button label="代金券" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="上传图片">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
  </el-form-item>
 
</el-form>

          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">团购配置：</td>
          <td class="secend">
               <el-form ref="form" label-width="100px" size="mini">
  <el-form-item label="团购开始时间: ">
    <el-input style="width:250px" maxlength=30 ></el-input>
         <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置永不下架】</span></span>

  </el-form-item>
  <el-form-item label="团购结束时间:">
     <el-input style="width:250px" ></el-input>
      <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置永不下架】【结束时间未设置，消费券有效期只能设置指定天数】</span></span>
  </el-form-item>
   <el-form-item label="成团数量:">
    <el-radio-group v-model="radio">
    <el-radio :label="3">按商品数量发券</el-radio>
    <el-radio :label="6">按订单发券</el-radio>
  </el-radio-group>
  </el-form-item>
  <el-form-item label="发券类型:">
      <el-radio-group v-model="radio1">
    <el-radio :label="3">指定日期</el-radio>
    <el-radio :label="6">指定天数</el-radio>
  </el-radio-group>
  </el-form-item>
   <el-form-item label="券生效日期:">
    <el-input style="width:250px" maxlength=30></el-input>
  </el-form-item>
</el-form>
          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">库存/价格：</td>
          <td class="secend">
              <el-form ref="form" label-width="100px" size="mini">
  <el-form-item label="结算费率: ">
    
         <span style="font-size:12px;margin-left:10px">80%</span>

  </el-form-item>
  <el-form-item label="价格:">
   <el-input placeholder="请输入内容" style="width:200px;margin-left:10px">
    <template slot="prepend">原价</template>
  </el-input>
  <el-input placeholder="请输入内容" style="width:200px;margin-left:10px">
    <template slot="prepend">销售价</template>
  </el-input>
  <el-input placeholder="自动计算" style="width:200px;margin-left:10px" :disabled="true">
    <template slot="prepend" style="background:grey">结算价</template>
  </el-input>
  </el-form-item>
  <el-form-item label="库存: ">
    <el-input style="width:250px" maxlength=30 ></el-input>

  </el-form-item>
  <el-form-item label="最大购买量: ">
    <el-input style="width:250px" maxlength=30 ></el-input>

  </el-form-item>
   <el-form-item label="最小购买量: ">
    <el-input style="width:250px" maxlength=30 ></el-input>

  </el-form-item>
     <el-form-item label="虚拟购买量: ">
    <el-input style="width:250px" maxlength=30 ></el-input>

  </el-form-item>
</el-form>
          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">购买须知：</td>
          <td class="secend">
          <quill-editor
              style="width:500px"
              :options="editorOption" 
              >             
          </quill-editor>
         
           </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">电脑端描述：</td>
          <td class="secend">  <quill-editor
              style="width:500px"
              :options="editorOption" 
              >             
          </quill-editor></td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">手机端描述：</td>
          <td class="secend"><el-input
  type="textarea"
  :rows="20"
  placeholder="请输入内容"
 style="width:250px">
</el-input></td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">特权/其他设置：</td>
          <td class="secend">
              <el-checkbox-group v-model="checkList">
    <el-checkbox label="支持退款"></el-checkbox>
    <el-checkbox label="过期自动退款"></el-checkbox>
              </el-checkbox-group>
          </td>
        </tr>
      </table>
      <div style="margin-left: 140px;">
        <el-button type="warning" size="small" @click.native="op">保存</el-button>
        <el-button type="info" size="small">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
             quillEditor
           },
  data() {
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 21; i++) {
          data.push({
            value: i,
            desc: `花生米科技公司（湛江店）`,
          });
        }
        return data;
      };
    return {
      editorOption:{
        modules:{
            toolbar:[
              ['bold','italic','clean','strike','blockquote','code-block','formula','image','video','clean','align']
            ]
        }
      },  
      data: generateData(),
        checkList: ['选中且禁用','复选框 A'],
        value: [1,2,3,4,5,6,7,8,9],
       
      msg: "一级菜单",
      msg1: "二级菜单",
      fenlei: true,
      radio: 3,
      radio1: 3,
       sizeForm: {
          name: '那一朵盛开的玫瑰花呀',
          name1: '玫瑰花',
          date1: '2018-12-12 12:00',
          date2: '2019-12-12 23:59',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        
    };
  },
  methods: {
    q1() {
      this.msg = "一级菜单";
      this.fenlei = true;
    },
    q2() {
      this.msg = "一级菜单1";
      this.fenlei = true;
    },
    q3() {
      this.msg = "一级菜单2";
      this.fenlei = true;
    },
    op(){
        this.$alert('已提交，请等待管理员审核', '提示', {
          confirmButtonText: '确定',
          callback: action => {
         this.$router.push({
           path:'/tgsy'
         })
          }
        });
    },
    q4() {
      this.msg1 = "二级菜单";
      this.fenlei = true;
    },
    q5() {
      this.msg1 = "二级菜单2";
      this.fenlei = true;
    },
    q6() {
      this.msg1 = "二级菜单3";
      this.fenlei = true;
    },
    deletes() {
      this.fenlei = false;
    },
  },
};
</script>
<style  scoped>
.box>>>.el-button--primary.is-disabled{
    color: #FFF;
    background-color: rgba(255,136,0,.6);
    border-color: rgba(255,136,0,.6);
}
.box>>>.el-checkbox__inner:hover {
    border-color: rgba(255,136,0);
}
.box>>>.el-input:hover {
    border-color: rgba(255,136,0);
}
.box>>>.el-input__inner:focus {
    border-color: rgba(255,136,0);
}
.box>>>.el-checkbox-button.is-checked .el-checkbox-button__inner {
  background: rgba(255,136,0);
  border-color: rgba(255,136,0);;
}
.box>>>.el-checkbox-button__inner:hover {
    color: rgba(255,136,0);
}
.box>>>.el-checkbox__input.is-indeterminate .el-checkbox__inner{
     background-color: rgb(255,136,0);
    border-color: rgb(255,136,0);
}
.box>>>.el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: rgb(255,136,0);
    border-color: rgb(255,136,0);
}
   .box>>>.ql-editor{
         height:200px;
     }
.box>>>.el-checkbox__input.is-checked+.el-checkbox__label {
    color:rgba(255,136,0) ;
}
.box>>>.el-transfer-panel__item:hover {
    color: rgba(255,136,0);
}
.box>>>.el-button--primary {
    color: #FFF;
    background-color: rgba(255,136,0);
    border-color: rgba(255,136,0);
}
.box>>>.el-input-group__prepend {
    background: grey;
    color: white;
}
.box {
  width: 1100px;
  background: white;
  margin: 20px auto;
  min-height: 200px;
  padding: 20px 40px;
}
.box>>>font{
  font-size: 12px;
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
.first {
  width: 19%;
  text-align: right;
}
.secend {
  width: 80%;
}
.bg {
  width: 100%;
}
.bg tr td {
  border: 1px solid rgb(215, 215, 215);
  padding: 20px 10px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
}
.secend .el-dropdown {
  cursor: pointer;
}
</style>