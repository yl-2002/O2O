<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">配送模板</a>
        </span>
      </p>
    </div>
    <div class="box">
          <el-input placeholder="请输入模板日期" v-model="input" size="small" clearable></el-input>
           <el-select v-model="value" placeholder="全部" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                 <el-button size="small" type="success" style="margin-left: 741px;">查询</el-button>
                <el-button size="small" type="warning" @click.native="xz">新增模板</el-button>
  
  <div class="body">
      <el-row class="top">
          <el-col :span="4" style="    padding: 6px;">模板名称</el-col>
          <el-col :span="3" style="    padding: 6px;">计价方式</el-col>
          <el-col :span="4" style="    padding: 6px;">配送地区</el-col>
          <el-col :span="2" style="    padding: 6px;">起步数量</el-col>
          <el-col :span="3" style="    padding: 6px;">起步价（元）</el-col>
          <el-col :span="2" style="    padding: 6px;">递增数量</el-col>
          <el-col :span="3" style="    padding: 6px;">加价（元）</el-col>
          <el-col :span="3" style="    padding: 6px;">操作</el-col>
      </el-row>
     <el-row>
          <el-col :span="4" >按重量计费模板</el-col>
          <el-col :span="3" >按重量</el-col>
          <el-col :span="4" style="text-align:center;display:block;"><p>广东省</p><p>内蒙古，青海省，宁夏...</p><p>西藏</p><p>安徽省、福建省、湖南...</p><p>北京市，天津市，河北...</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block"><p>8.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block;border-right:1px solid rgb(228,228,228)"><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="3"><el-link type="warning" style="color:rgb(255,136,0);margin: 0 8px;" @click.native="xg">修改</el-link><el-link style="color:rgb(255,136,0);margin: 0 8px;"  type="warning" @click.native="sc">删除</el-link></el-col>
      </el-row>
     <el-row>
          <el-col :span="4" >按件数计费模板</el-col>
          <el-col :span="3" >按件数</el-col>
          <el-col :span="4" style="text-align:center;display:block;"><p>广东省</p><p>内蒙古，青海省，宁夏...</p><p>西藏</p><p>安徽省、福建省、湖南...</p><p>北京市，天津市，河北...</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block"><p>8.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block;border-right:1px solid rgb(228,228,228)"><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="3"><el-link type="warning" style="color:rgb(255,136,0);margin: 0 8px;" @click.native="xg">修改</el-link><el-link style="color:rgb(255,136,0);margin: 0 8px;"  type="warning" @click.native="sc">删除</el-link></el-col>
      </el-row>
      <el-row>
          <el-col :span="4" style="min-height: 42px;">按重量计费模板</el-col>
           <el-col :span="3" >按件数</el-col>
          <el-col :span="4" style="text-align:center;display:block;"><p>广东省</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block"><p>8.00</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block;border-right:1px solid rgb(228,228,228)"><p>12.00</p></el-col>
          <el-col :span="3"><el-link type="warning" style="color:rgb(255,136,0);margin: 0 8px;" @click.native="xg">修改</el-link><el-link style="color:rgb(255,136,0);margin: 0 8px;"  type="warning" @click.native="sc">删除</el-link></el-col>
      </el-row>
      <el-row>
          <el-col :span="4" >双十一包邮模板</el-col>
          <el-col :span="3">按件数</el-col>
          <el-col :span="4" style="text-align:center;display:block;"><p>广东省</p><p>内蒙古，青海省，宁夏...</p><p>西藏</p><p>安徽省、福建省、湖南...</p><p>北京市，天津市，河北...</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block"><p>8.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="2" style="text-align:center;display:block"><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p><p>1（KG）</p></el-col>
          <el-col :span="3" style="text-align:center;display:block;border-right:1px solid rgb(228,228,228)"><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p><p>12.00</p></el-col>
          <el-col :span="3"><el-link type="warning" style="color:rgb(255,136,0);margin: 0 8px;" @click.native="xg">修改</el-link><el-link style="color:rgb(255,136,0);margin: 0 8px;"  type="warning" @click.native="sc">删除</el-link></el-col>
      </el-row>
      
  </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
         options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '按件数'
        }, {
          value: '选项3',
          label: '按重量'
        }],
        value: '',
        input:''
    };
  },
  methods: {
    xg(){
 this.$router.push({
                path:'/peisongmb/xg',
          })
    },
      xz(){
           this.$router.push({
                path:'/peisongmb/xinzeng',
          })
      },
      sc(){
 this.$alert('确定删除吗？', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: '删除成功'
            });
          }
        });
      },
      gx(){
          this.$router.push({
               path:'/shangmen/shangmensz',
          })
      }
  },
};
</script>
<style  scoped>
.box>>>input::-webkit-input-placeholder {
    color: rgb(139, 139, 139);
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
.el-input {
  margin: 0 20px;
  width: 141px;
  height: 31px;
}
.el-row{
        border-bottom: none;
        display: flex;
}
.box>>>.el-select .el-input__inner{
        border: 0;
    width: 100px;
    color: black;
}

.box>>>.el-link.el-link--default:hover{
    color:rgb(255,136,0);
}
.body{
    border: 1px solid rgb(228,228,228);
}
.el-col{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
}
.el-col p{
    border-bottom: 1px solid rgb(228,228,228);
        line-height: 37px;
}
.box>>>.el-col{
    font-size: 14px;
    border: 1px solid rgb(228,228,228);
    border-right: none;
}
.top{

    background: rgb(242,242,242);
}
.body{

        width: 1148px;
    margin-left: 19px;
    margin-top: 15px;
}
</style>