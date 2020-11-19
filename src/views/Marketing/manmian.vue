
      <template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">满免运费</a>
        </span>
       
      </p>
    </div>
    <div class="box">
       <div class="s_Button">
        <p>减免运费：<el-switch
  v-model="value"
  active-color="rgb(255,136,0)"
  inactive-color="rgb(242,242,242)">
</el-switch></p>
        <p>温馨提示：若开启满免运费，则当订单中的商品金额大于设定值时，免除运费</p>
      </div>
      <div class="s_Button">
满免方式：订单金额满<el-input size="small" v-model="sd" style="width:100px;margin:0 10px"></el-input>元，免运费【只能填写数字】
      </div>
      <el-button style="background:rgb(255,136,0);margin-left:70px;margin-top:20px;color:white" size="small" @click.native="bc">保存</el-button>
  </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
       value:true,sd:''
    };
  },
  methods: {
  bc(){
          this.$alert('保存成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            
          }
        });
  }
  },
};
</script>
<style  scoped>
.s_Button {
  padding: 10px 0 10px 10px;
  font-size: 12px;
  background: rgb(242, 242, 242);
  line-height: 26px;
  margin-top: 20px;
  border: 1px solid rgb(228, 228, 228);
}
.box {
    width: 1165px;
  background: white;
  margin: 20px auto;
  min-height: 200px;
  padding: 20px 40px;
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

</style>