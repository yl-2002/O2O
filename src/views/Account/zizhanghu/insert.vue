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
              <span style="color:red">*</span>授权管理门店：
            </td>
            <td class="secend">
                <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
            </td>
          </tr>
         
          
        </table>
      </div>
  
      <el-button
        style="background:Rgb(255,136,0);margin-left:210px;margin-top:20px;color:white"
        size="small"
        @click.native="qd"
      >确认提交</el-button>
      <el-button
        style="background:Rgb(242,242,242);margin-left:10px;margin-top:20px;color:black"
        size="small"
        @click.native="qd"
      >取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
};
</script>
<style  scoped>


.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 1000px;
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

.body {
  width: 1148px;
  min-height: 100px;
  margin-left: 19px;
  margin-top: 15px;
}
</style>