<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">新增模板</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div class="body">
        <table class="bg" style="border-collapse:collapse;">
          <tr>
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span>模板名称：
            </td>
            <td class="secend">
              <el-input v-model="input" placeholder="请输入内容" style="    width: 174px;"></el-input>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span>发货地址：
            </td>
            <td class="secend">
              <el-select v-model="value" placeholder="--省份--" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="value1" placeholder="--市区--" size="small">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="value2" placeholder="--乡，镇--" size="small">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span> 发货方式：
            </td>
            <td class="secend">
              <el-radio v-model="radio" label="1">是否包邮：</el-radio>
              <el-radio v-model="radio" label="2">平台/卖家承担运费（免运费）</el-radio>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(250,250,250)" class="first">
              <span style="color:red">*</span>计价方式：
            </td>
            <td class="secend">
              <el-radio v-model="radio1" label="1">按件数</el-radio>
              <el-radio v-model="radio1" label="2">按重量</el-radio>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(250,250,250)" class="first">配送区域：</td>
            <td class="secend">
              <el-row class="ts">
                <el-col :span="4">配送至</el-col>
                <el-col :span="4">起步数量（件）</el-col>
                <el-col :span="4">起步价（元）</el-col>
                <el-col :span="4">递增数量（件）</el-col>
                <el-col :span="4">递增价格（元）</el-col>
                <el-col :span="4" style="border-right:1px solid rgb(242,242,242)">操作</el-col>
              </el-row>
              <el-button
                style="background:rgb(242,242,242);    margin: 21px 0 -21px 0px;"
                size="small"
                @click.native="ss"
              >增加区域配送列表</el-button>
            </td>
          </tr>
        </table>
      </div>
      <el-dialog title="选择发货区域" :visible.sync="dialogTableVisible">
 
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <el-button
        style="background:Rgb(255,136,0);margin-top:20px;color:white"
        size="small"
        @click.native="dialogTableVisible=false"
      >确认</el-button>
      </el-dialog>
      <el-button
        style="background:Rgb(255,136,0);margin-left:210px;margin-top:20px;color:white"
        size="small"
        @click.native="qd"
      >确认提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const cityOptions = ["上海", "北京", "广州", "深圳"];
    return {
      checkedCities: [],
      cities: cityOptions,
      input: "",
      dialogTableVisible: false,
      options: [
        {
          value: "选项1",
          label: "广东省",
        },
        {
          value: "选项2",
          label: "湖南省",
        },
        {
          value: "选项3",
          label: "山东省",
        },
      ],
      options1: [
        {
          value: "选项1",
          label: "广州市",
        },
        {
          value: "选项2",
          label: "深圳市",
        },
        {
          value: "选项3",
          label: "佛山市",
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "越秀区",
        },
        {
          value: "选项2",
          label: "天河区",
        },
        {
          value: "选项3",
          label: "黄埔区",
        },
      ],
      value: "",
      value1: "",
      value2: "",
      radio1: "1",
      radio: "1",
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
   qd(){
         this.$alert('新增模板成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
              path:'/peisongmb'
            })
          }
        });
   },
    ss() {
      this.dialogTableVisible = true;
    },
  },
};
</script>
<style  scoped>
.box >>> .el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(255, 136, 0);
}
.box >>> .el-checkbox__inner:hover {
  border-color: rgb(255, 136, 0);
}
.box >>> .el-dialog__header {
  background: rgb(255, 136, 0);
}
.box >>> .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: rgb(255, 136, 0);
  border-color: rgb(255, 136, 0);
}
.box >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(255, 136, 0);
  border-color: rgb(255, 136, 0);
}
.box >>> .el-dialog__title {
  color: white;
}
.box >>> .el-dialog__headerbtn .el-dialog__close {
  color: white;
}

.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 1000px;
}
.box >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: rgb(255, 136, 0);
  background: rgb(255, 136, 0);
}
.box >>> .el-radio__input.is-checked + .el-radio__label {
  color: rgb(255, 136, 0);
}
.bg tr td {
  border: 1px solid rgb(215, 215, 215);
  padding: 20px 10px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
}

.box {
  padding: 29px;
  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.pj1 {
  padding: 7px 0 7px 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.body >>> .el-select .el-input__inner {
  width: 150px;
}
.ts {
  text-align: center;
  background: rgb(242, 242, 242);
}
.ts >>> .el-col {
  padding: 10px;
  border: 1px solid rgb(228, 228, 228);
  border-right: none;
}
.body {
  border: 1px solid rgb(228, 228, 228);
  width: 1148px;
  min-height: 100px;
  margin-left: 19px;
  margin-top: 15px;
}
</style>