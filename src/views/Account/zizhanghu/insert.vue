<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">新增子账户</a>
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
     :titles="['可选门店', '已选门店']"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(250,250,250)" class="first">
              会员手机号：
            </td>
            <td class="secend">
                <el-input size="small" placeholder="请输入会员手机号" style="width:40%"></el-input>
            </td>
          </tr>
           <tr>
            <td style="background:rgb(250,250,250)" class="first">
              授权码：
            </td>
            <td class="secend">
                <el-input size="small" placeholder="请输入123456" style="width:29%" v-model="yzm"></el-input>
                <el-button size="small" style="background:rgb(255,136,0);color:white;margin-left:10px" @click.native="hq">获取授权码</el-button>
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
        @click.native="qds"
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
            desc: `花生米科技公司（湛江店）`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [],
        yzm:''
      };
    },
    methods:{
      hq(){
          this.$alert('授权码发送成功', '提示', {
          confirmButtonText: '确定',
        });
      },
      qd(){
            if(this.yzm==""){
                this.$alert('请输入验证码', '提示', {
          confirmButtonText: '确定',
        });
            }else if(this.yzm!="123456"){

                this.$alert('验证码输入错误', '提示', {
          confirmButtonText: '确定',
        });
            
          }else{
            this.$router.push({
              path:"/zzh"
            })
          }
    },qds(){
        this.$router.push({
              path:"/zzh"
            })
    }
}
}
</script>
<style  scoped>


.first {
  width: 180px;
  text-align: right;
}
.secend {
  width: 1000px;
}
.box>>>.el-checkbox__input.is-checked+.el-checkbox__label {
    color:rgba(255,136,0) ;
}
.box>>>.el-transfer-panel__item:hover {
    color: rgba(255,136,0);
}
.box>>>.el-button--primary.is-disabled{
    color: #FFF;
    background-color: rgba(255,136,0,.6);
    border-color: rgba(255,136,0,.6);
}
.box>>>.el-button--primary {
    color: #FFF;
    background-color: rgba(255,136,0);
    border-color: rgba(255,136,0);
}
.box>>>.el-checkbox__inner:hover {
    border-color: rgba(255,136,0);
}
.box>>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgba(255,136,0);
}
.box>>>.el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: rgba(255,136,0);
    border-color: rgba(255,136,0);
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