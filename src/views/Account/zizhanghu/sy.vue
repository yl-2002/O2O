<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">子账户管理</a>
        </span>
      </p>
    </div>
    <div class="box">
      <div class="s_Top">
        <span>当前登录账号：180****8888</span>
        <el-button
          style="    color: white;
    background: rgb(255,136,0);
    margin-left: 886px;"
          size="small"
          @click.native="xzz"
        >新增子账户</el-button>
      </div>

      <div class="s_Body">
        <el-row class="top">
          <el-col :span="3">账号名称</el-col>
          <el-col :span="6">管理门店</el-col>
          <el-col :span="5">账号说明</el-col>
          <el-col :span="5">状态</el-col>
          <el-col :span="5">操作</el-col>
        </el-row>
        <el-row class="bodys">
          <el-col :span="3" class="s">18888888888</el-col>
          <el-col :span="6" style="margin:10px 0">
            花生米科技公司总部
            <br />花生米科技公司（越秀店）
            <br />花生米科技公司（天河店）
            <br />花生米科技公司（黄埔店）
            <br />花生米科技公司（花都店）
            <br />花生米科技公司（宝安店）
            <br />花生米科技公司（禅城店）
            <br />花生米科技公司（顺德店）
            <br />花生米科技公司（长安店）
            <br />花生米科技公司（江门店）
            <br />花生米科技公司（韶关店）
            <br />花生米科技公司（清远店）
            <br />花生米科技公司（汕尾店）
            <br />花生米科技公司（汕头店）
            <br />花生米科技公司（河源店）
            <br />花生米科技公司（茂名店）
            <br />花生米科技公司（湛江店）
            <br />花生米科技公司（云浮店）
            <br />花生米科技公司（梅州店）
            <br />花生米科技公司（揭阳店）
            <br />花生米科技公司（阳江店）
            <br />
          </el-col>
          <el-col :span="5" class="s">总经理</el-col>
          <el-col :span="5" class="s">
            <el-switch
              style="display: block"
              v-model="value"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(242,242,242)"
            ></el-switch>
          </el-col>
          <el-col :span="5" class="s">
            <el-link @click.native="qx">权限设置</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="xg">修改</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="bodys">
          <el-col :span="3" class="s">18888888888</el-col>
          <el-col :span="6" style="margin:10px 0">
            花生米科技公司总部
            <br />花生米科技公司（越秀店）
            <br />花生米科技公司（天河店）
            <br />花生米科技公司（黄埔店）
            <br />花生米科技公司（花都店）
            <br />花生米科技公司（宝安店）

            <br />
          </el-col>
          <el-col :span="5" class="s">总经理</el-col>
          <el-col :span="5" class="s">
            <el-switch
              style="display: block"
              v-model="value1"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(242,242,242)"
            ></el-switch>
          </el-col>
          <el-col :span="5" class="s">
            <el-link @click.native="qx">权限设置</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="xg">修改</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="bodys">
          <el-col :span="3" class="s">18888888888</el-col>
          <el-col :span="6" style="margin:10px 0">
            花生米科技公司总部
            <br />
          </el-col>
          <el-col :span="5" class="s">总经理</el-col>
          <el-col :span="5" class="s">
            <el-switch
              style="display: block"
              v-model="value2"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(242,242,242)"
            ></el-switch>
          </el-col>
          <el-col :span="5" class="s">
            <el-link @click.native="qx">权限设置</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="xg">修改</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
         <el-row class="bodys" style="border-bottom:1px solid rgb(228,228,228)">
          <el-col :span="3" class="s">18888888888</el-col>
          <el-col :span="6" style="margin:10px 0">
            花生米科技公司总部


            <br />
          </el-col>
          <el-col :span="5" class="s">总经理</el-col>
          <el-col :span="5" class="s">
            <el-switch
              style="display: block"
              v-model="value3"
              active-color="rgb(255,136,0)"
              inactive-color="rgb(242,242,242)"
            ></el-switch>
          </el-col>
          <el-col :span="5" class="s">
            <el-link @click.native="qx">权限设置</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="xg">修改</el-link>&nbsp;&nbsp;&nbsp;
            <el-link @click.native="sc">删除</el-link>
          </el-col>
        </el-row>
      </div>
      <div class="s_Button">
        <p>账号说明 ：</p>
        <p>1、账号数量：每个商家只有一个管理员账号，可以为每个门店创建多个门店账号</p>
        <p>2、账号权限：商家管理员账号给门店账号分配权限</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: true,
       value1: true,
        value: true,
         value3: true,
    };
  },
  methods: {
    sc(){
          this.$alert('删除成功', '提示', {
          confirmButtonText: '确定',
        });
    },
    xg(){
         this.$router.push({
                path:'/zzh/xg',
          })
    },
      xzz(){
          this.$router.push({
                path:'/zzh/insert',
          })
      },qx(){
          this.$router.push({
                path:'/zzh/qx',
          })
      }
  },
};
</script>
<style  scoped>
.s_Top {
  padding: 10px 0 10px 10px;
  font-size: 12px;
  color: red;
  background: rgb(254, 251, 239);
}
.s_Button {
  padding: 10px 0 10px 10px;
  font-size: 12px;
  background: rgb(242, 242, 242);
  line-height: 26px;
  margin-top: 20px;
  border: 1px solid rgb(228, 228, 228);
}
.s_Body {
  margin-top: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;

}
.s_Body>>>.el-row{
  border: 1px solid rgb(228, 228, 228);
border-bottom: none;
        display: flex;
}
.box>>>.s{
    display: flex;
    justify-content: center;
    align-items: center;
}
.top {
  font-size: 14px;
  text-align: center;
  background: rgb(242, 242, 242);
  border: 1px solid rgb(228, 228, 228);

  padding: 7px 0;
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
</style>