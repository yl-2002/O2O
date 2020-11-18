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
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>名称：
              </td>
              <td class="secend">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">开启外卖或预定模块：</td>
              <td class="secend">十月大神</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">开启上门服务模块：</td>
              <td class="secend">十月大神</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">标签：</td>
              <td class="secend">十月大神</td>
            </tr>
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
                <span style="color:red">*</span>分类：
              </td>
              <td class="secend">
                <el-dropdown>
                  <el-button
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0 "
                    size="mini"
                  >
                    {{msg}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="cy">餐饮美食</el-dropdown-item>
                    <el-dropdown-item @click.native="cy1">休闲娱乐</el-dropdown-item>
                    <el-dropdown-item @click.native="cy2">美容美发</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">子分类：</td>
              <td class="secend">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="甜点饮品" style="font-size:12px"></el-checkbox>
                  <el-checkbox label="小吃快餐" style="font-size:12px"></el-checkbox>
                  <el-checkbox label="日韩料理" style="font-size:12px"></el-checkbox>
                </el-checkbox-group>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">城市：</td>
              <td class="secend">
                <el-dropdown>
                  <el-button
                    type="primary"
                    style="margin:0;background:rgb(255, 136, 0);border:0 "
                    size="mini"
                  >
                    {{msg1}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="cy11">广东省</el-dropdown-item>
                    <el-dropdown-item @click.native="cy12">湖南省</el-dropdown-item>
                    <el-dropdown-item @click.native="cy23">四川省</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <el-button
                    type="primary"
                    style="margin-top:0;margin-bottom:0;background:rgb(255, 136, 0);border:0 "
                    size="mini"
                  >
                    {{msg2}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="cy111">广州</el-dropdown-item>
                    <el-dropdown-item @click.native="cy121">深圳</el-dropdown-item>
                    <el-dropdown-item @click.native="cy222">佛山</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <el-button
                    type="primary"
                    style="margin-top:0;margin-bottom:0;margin-left:0;background:rgb(255, 136, 0);border:0 "
                    size="mini"
                  >
                    {{msg3}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="cy1111">越秀区</el-dropdown-item>
                    <el-dropdown-item @click.native="cy122">天河区</el-dropdown-item>
                    <el-dropdown-item @click.native="cy223">黄埔区</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
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
    cy() {
      this.msg = "餐饮美食";
    },
    cy1() {
      this.msg = "休闲娱乐";
    },
    cy2() {
      this.msg = "美容美发";
    },

    fh() {
      this.$router.push({
        path: "/houtai",
      });
    },
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
    cy11() {
      this.msg1 = "广东";
    },
    cy12() {
      this.msg1 = "湖南";
    },
    cy23() {
      this.msg1 = "四川";
    },
    cy111() {
      this.msg2 = "广州";
    },
    cy121() {
      this.msg2 = "深圳";
    },
    cy222() {
      this.msg2 = "佛山";
    },
    cy1111() {
      this.msg3 = "天秀";
    },
    cy122() {
      this.msg3 = "天河";
    },
    cy223() {
      this.msg3 = "黄埔";
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