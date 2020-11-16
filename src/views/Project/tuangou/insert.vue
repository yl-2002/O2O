<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">新增活动</a>
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
              <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
  <el-form-item label="活动名称:" >
    <el-input style="width:350px" maxlength=30 v-model="sizeForm.name"></el-input>
  </el-form-item>

  <el-form-item label="上传图片">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
      <img style="margin-left:10px" src="../../../assets/img/tu.png" alt="">
  </el-form-item>
 <el-form-item label="活动开始时间：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
     <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置表示现在开始】</span></span>
  </el-form-item>
    <el-form-item label="活动结束时间：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
          <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置表示永久有效】</span></span>
  </el-form-item>
 <el-form-item label="报名开始时间：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
      <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置表示现在开始】</span></span>
  </el-form-item>
  <el-form-item label="报名结束时间：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
       <span style="font-size:12px;margin-left:10px">清空<span style="color:rgb(255,136,0)">【不设置表示永久有效】</span></span>
  </el-form-item>
  <el-form-item label="活动名额：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
  </el-form-item>
  <el-form-item label="消耗积分：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
  </el-form-item>
  <el-form-item label="经验限制：">
     <el-input style="width:250px" v-model="sizeForm.name1"></el-input>
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

      fenlei: true,

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
           path:'/hdProject'
         })
          }
        });
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
.secend>>>.el-form-item__label{
    font-size: 12px;
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