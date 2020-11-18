<template>
  <div>
    <div class="nav_top">
      <p>
                <span><a style="    margin-left: 9px;">新增门店</a></span>
      </p>
    </div>
    <div class="box">
     
            <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;" >
                
            <tr>
              <td style="background:rgb(250,250,250)" class="first">供应商标志图片：</td>
              <td class="secend">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  style="display: inline-block"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0"
                  >点击上传</el-button>
                </el-upload>
                <span style="color:gray;font-size:12px;margin-left:5px">上传一张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">门店背景图片：</td>
              <td class="secend">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  style="display: inline-block"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0"
                  >点击上传</el-button>
                </el-upload>
                <span style="color:gray;font-size:12px;margin-left:5px">上传一张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">门店产品图库：</td>
              <td class="secend">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  style="display: inline-block"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0"
                  >点击上传</el-button>
                </el-upload>
                <span style="color:gray;font-size:12px;margin-left:5px">可上传多张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">门店环境图库：</td>
              <td class="secend">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  style="display: inline-block"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0"
                  >点击上传</el-button>
                </el-upload>
                <span style="color:gray;font-size:12px;margin-left:5px">上传一张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">门店其他图库：</td>
              <td class="secend">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  style="display: inline-block"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0"
                  >点击上传</el-button>
                </el-upload>
                <span style="color:gray;font-size:12px;margin-left:5px">上传一张，建议尺寸640*640px</span>
              </td>
            </tr>
            
            <tr>
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>商圈：
              </td>
              <td class="secend">
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>地址：
              </td>
              <td class="secend">
                <el-input v-model="input2" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>联系电话：
              </td>
              <td class="secend">
                <el-input v-model="input3" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>联系人：
              </td>
              <td class="secend">
                <el-input v-model="input4" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">营业时间：</td>
              <td class="secend">
                <el-input v-model="input5" placeholder="请输入内容"></el-input>
              </td>
            </tr>
             <tr>
              <td style="background:rgb(250,250,250)" class="first">地图定位：</td>
              <td class="secend"><img src="../../../assets/img/ditu.png" alt=""></td>
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
          </table>
          <el-button type="warning" size="small" @click.native="bj" >确认提交</el-button>
          <el-button type="success" size="small" @click.native="bj1"  >取消</el-button>
       
    </div>
  </div>
</template>
<script>
export default {
  name: "shouye",
  data() {
    return {
        editorOption:{
        modules:{
            toolbar:[
              ['bold','italic','clean','strike','blockquote','code-block','formula','image','video','clean','align']
            ]
        }
      },  
      gb: true,
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      bk: true,
      gb1: false,
      bk1: false,
      msg: "更多菜单",
      msg1: "--省份--",
      msg2: "--市区--",
      msg3: "--乡镇--",
      checkList: ["甜点饮品"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {

    bj() {
       this.$alert("保存成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$router.push({
            path:'/mdlist',
          });
        },
      });
    },
    bj1() {
     this.$router.push({
          path:'/mdlist',
     })
    },
    
  },
};
</script>
<style scoped>
.el-button {
  margin-bottom: 20px;
  margin-right: 57px;
  margin-left: 74px;
}
.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 1000px;
}

 .box>>>.el-checkbox__input.is-checked+.el-checkbox__label{
    color: rgb(255, 136, 0); 
 }
 .box>>>.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
       background-color: rgb(255, 136, 0);
    border-color: rgb(255, 136, 0);
 }
 .box>>>.el-checkbox__inner:hover{
    border-color: rgb(255, 136, 0)
 }
.bg tr td {
  border: 1px solid rgb(215, 215, 215);
  padding: 20px 10px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
}

.tt {
  line-height: 1.7;
  font-size: 14px;
}
.el-main {
  padding: 0 !important;
  min-height: 1000px;
  margin: 60px 0 0 -61px;
  background: rgb(242, 242, 242);
}
.el-image {
  padding: 4px;
  margin: 0 3px;
  border: 1px solid gray;
}
.el-main p {
      padding: 15px 0 0 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.el-main p span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.box {
  padding: 29px 60px 0 60px;
  background: white;
  min-height: 500px;
  width: 1185px;
  margin: 34px auto;
}
.box h2 {
  margin: 0 0 0 327px;
}
.Newpwd .el-input {
  margin: 0 0 0 146px;
}
.Imgbig {
  background: url(/img/u370.80a172f4.png) no-repeat;
  background-size: 92% 90%;
  width: 1282px;
  height: 1201px;
  margin: 43px 0 0 -50px;
}
.Newpwd {
  width: 505px;

  margin: 45px 0;
}
.Newpwd div {
  margin: 17px 0 -29px 17px;
}
.Newpwd i {
  color: red;
}
.Newpwd .el-link :hover {
  cursor: auto;
  color: rgb(28, 23, 29);
}
.el-link {
  margin-left: 4px;
}
.el-button--success {
  margin-right: 57px;
  margin-left: 74px;
}
   .box>>>.ql-editor{
         height:200px;
     }
</style>