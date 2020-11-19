<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">权限管理</a>
        </span>
      </p>
    </div>
    <div class="box">
        <div class="bo" >
<el-checkbox-group v-model="checkList">
    <el-checkbox label="验证管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="验证消费券"></el-checkbox>
    <el-checkbox label="验证优惠券"></el-checkbox>
    <el-checkbox label="验证活动报名"></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList1">
    <el-checkbox label="订单管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="团购订单列表"></el-checkbox>
    <el-checkbox label="商品订单列表"></el-checkbox>
    <el-checkbox label="优惠券领取记录"></el-checkbox>
      <el-checkbox label="活动报名"></el-checkbox>
    <el-checkbox label="到店付"></el-checkbox>
      <el-checkbox label="买单记录"></el-checkbox>
    <el-checkbox label="预售订单"></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList2">
    <el-checkbox label="评论管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="消费评价"></el-checkbox>
    <el-checkbox label="优惠券评价"></el-checkbox>
    <el-checkbox label="活动评价"></el-checkbox>
     <el-checkbox label="门店评价"></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList3">
    <el-checkbox label="验证管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="验证消费券"></el-checkbox>
    <el-checkbox label="验证优惠券"></el-checkbox>
    <el-checkbox label="验证活动报名    "></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList4">
    <el-checkbox label="项目管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="团购"></el-checkbox>
    <el-checkbox label="商品"></el-checkbox>
    <el-checkbox label="优惠券"></el-checkbox>
    <el-checkbox label="活动"></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList5">
    <el-checkbox label="验证管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="验证消费券"></el-checkbox>
    <el-checkbox label="验证优惠券"></el-checkbox>
    <el-checkbox label="验证活动报名    "></el-checkbox>
  </el-checkbox-group>
        </div>
        <div class="bo" >
<el-checkbox-group v-model="checkList6">
    <el-checkbox label="验证管理" style="margin-right:20%"></el-checkbox>
    <el-checkbox label="验证消费券"></el-checkbox>
    <el-checkbox label="验证优惠券"></el-checkbox>
    <el-checkbox label="验证活动报名    "></el-checkbox>
  </el-checkbox-group>
        </div>
        <el-button size="small" @click.native="tj" style="background:rgb(255,136,0);color:white;margin: 0 40px 0 125px;">确认提交</el-button>
        <el-button size="small" @click.native="fs" style="background:rgb(0,190,127);color:white">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
            checkList: [],
            checkList1:[],
            checkList2: [],
            checkList3:[],
            checkList4: [],
            checkList5:[],
              checkList6:[],
    }
},methods:{
    fs(){
        this.$router.push({
            path:'/zzh'
        })
    },  tj(){
          this.$alert('权限修改成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
            path:'/zzh'
        })
          }
        });
        
    }
}
}
</script>
<style  scoped>
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
.bo>>>.el-checkbox__input.is-checked+.el-checkbox__label {
    color: rgb(255, 136, 0);
   
}
.bo>>>.el-checkbox__label{
 font-size: 12px;
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

.bo{
    margin: 10px 0 20px;
width: 1153px;
    min-height: 33px;
    line-height: 33px;
    border: 1px solid rgb(228, 228, 228);
    padding: 25px 15px;
}
</style>