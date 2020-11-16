<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">新增实体券</a>
        </span>
      </p>
    </div>
    <div class="box">
      <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;">
       
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
              <el-form ref="form" :model="sizeForm" label-width="110px" size="mini">
   <el-form-item label="优惠券名称:" >
    <el-input style="width:250px" maxlength=30 v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="优惠券简述:">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
  </el-form-item>
  <el-form-item label="优惠券面额:">
     <el-input style="width:250px" ></el-input><span style="margin-left:10px;font-size:12px"><a  style="color:rgb(255,136,0)">元</a>（只能输入1-999的整数）</span>
  </el-form-item>
  <el-form-item label="有效期类型:">
    <el-checkbox-group v-model="sizeForm.type">
      <el-radio label="1" v-model="sss">指定日期</el-radio>
      <el-radio label="2" v-model="sss">领券后有效天数</el-radio>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="有效期天数">
  <el-input style="width:250px" maxlength=30 ></el-input>
         <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置表示现在开始】</span></span>
  </el-form-item>
  <el-form-item label="发券开始日期">
  <el-input style="width:200px" maxlength=30 ></el-input>
         <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置永不下架】</span></span>
  </el-form-item>
   <el-form-item label="发券结束时间">
  <el-input style="width:200px" maxlength=30 ></el-input>
         <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置永不下架】</span></span>
  </el-form-item>
</el-form>

          </td>
        </tr>
        <tr>
          <td style="background:rgb(250,250,250)" class="first">团购配置：</td>
          <td class="secend">
               <el-form ref="form" label-width="110px" size="mini">
  <el-form-item label="优惠券总量: ">
    <el-input style="width:250px" maxlength=30 ></el-input>
         <span style="font-size:12px;margin-left:10px">张<span style="color:rgb(255,136,0)">（不填或-1表示无数量限制）</span></span>

  </el-form-item>
  <el-form-item label="消费用">
     <el-input style="width:250px" ></el-input>
      <span style="font-size:12px;margin-left:10px">元可用<span style="color:rgb(255,136,0)">（金额为整数，不填或-1表示无数量限制）</span></span>
  </el-form-item>
   <el-form-item label="每人最多可领取：">
    <el-input style="width:250px" maxlength=30></el-input><span style="font-size:12px;margin-left:10px">张</span>
    
  </el-form-item>
   <el-form-item label="成团数量:">
    <el-radio-group v-model="radio">
    <el-radio :label="3">商品</el-radio>
    <el-radio :label="6">团购</el-radio>
     <el-radio :label="9">外卖预订</el-radio>
    <el-radio :label="12">上门服务</el-radio>
  </el-radio-group>
  </el-form-item>
  <el-form-item label="发券类型:">
      <el-radio-group v-model="radio1">
    <el-radio :label="3">无限制 </el-radio>
    <el-radio :label="6">指定分类</el-radio>
     <el-radio :label="9">指定商品</el-radio>
  </el-radio-group>
  </el-form-item>
  
</el-form>
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
    <el-checkbox label="订单退款，优惠券跟随退款"></el-checkbox>
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
        value: [],
       
      msg: "一级菜单",
      msg1: "二级菜单",
      fenlei: true,
      radio: 3,
      radio1: 3,
      sss:'1',
       sizeForm: {
          name: '',
          name1: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        
    };
  },
  methods: {
    
    op(){
        this.$alert('已提交，请等待管理员审核', '提示', {
          confirmButtonText: '确定',
          callback: action => {
         this.$router.push({
           path:'/yhqs'
         })
          }
        });
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
.secend>>>.el-form-item__label {
  font-size: 12px!important;
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