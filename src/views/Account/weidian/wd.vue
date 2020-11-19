<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">微店设置</a>
        </span>
        <el-button size="small" @click.native="fg" style="position: absolute;
    right: 205px">返回列表</el-button>
      </p>
    </div>
    <div class="box">
      <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;">
        
        <tr>
          <td style="background:rgb(250,250,250)" class="first">
              <span style="color:Red;margin-right:5px">*</span>购买须知：</td>
          <td class="secend">
              <el-input style="width:40%" size="small"></el-input>
         
           </td>
        </tr>
         <tr>
          <td style="background:rgb(250,250,250)" class="first">
           微店logo：</td>
          <td class="secend">
             <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="1"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">图片上传</el-button>
</el-upload>
         <p class="ssss">上传一张，建议尺寸640*640px</p>
           </td>
        </tr>
         <tr>
          <td style="background:rgb(250,250,250)" class="first">
           微店logo：</td>
          <td class="secend">
             <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :on-exceed="handleExceed"
  :file-list="fileLists">
  <el-button size="small" type="primary">图片上传</el-button>
</el-upload>
         <p class="ssss">可上传多张，建议尺寸640*640px</p>
           </td>
        </tr>
      </table>
      <el-button size="small" type="primary" style="
    margin-left: 187px;
"
@click.native="qr">确认提交</el-button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
          fileList: [],
           fileLists: [],
    };
  },
  methods: {
    fg(){
        this.$router.push({
            path:'/mdlist'
        })
    },
    qr(){
         this.$alert('微店设置成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
            path:'/mdlist'
        })
          }
        });
    }
  },
};
</script>
<style  scoped>
.ssss{
        margin-left: 95px;
    color: gray;
    font-size: 12px;
    margin-top: -24px;

}
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
    width: 1165px;
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