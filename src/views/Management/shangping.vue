<template>
  <div>
    <div class="nav_top">
      <p>
                <span><a style="    margin-left: 9px;">商户资料管理</a></span>
      </p>
    </div>
    <div class="box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商户资料管理" name="first">
          <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;" v-show="gb">
            <tr>
              <td style="background:rgb(250,250,250)" class="first">商家名称：</td>
              <td class="secend">十月大神商家</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">申请会员：</td>
              <td class="secend">十月大神</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">营业执照：</td>
              <td class="secend">
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">其它资质：</td>
              <td class="secend">
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">商户商标：</td>
              <td class="secend">
                <el-image style="width: 50px; height: 50px" :src="url"></el-image>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">门店默认图片：</td>
              <td class="secend">
                <el-image style="width: 50px; height: 50px " :src="url"></el-image>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">分类：</td>
              <td class="secend">餐饮美食</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">子分类：</td>
              <td class="secend">西餐 料理 烧烤</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">城市：</td>
              <td class="secend">广东省 广州市 越秀区</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">商圈：</td>
              <td class="secend">天河商圈</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">地址：</td>
              <td class="secend">东园横路1号</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">联系电话：</td>
              <td class="secend">18812345678</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">联系人：</td>
              <td class="secend">十月大神</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">营业时间：</td>
              <td class="secend">周一至周五8点至20点，周六周日全天</td>
            </tr>
          </table>
          <table class="bg" style="border-collapse:collapse;    margin-bottom: 30px;" v-show="gb1">
            <tr>
              <td style="background:rgb(250,250,250)" class="first">
                <span style="color:red">*</span>商家名称：
              </td>
              <td class="secend">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">申请会员：</td>
              <td class="secend">十月大神</td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">营业执照：</td>
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
                <span style="color:gray;font-size:12px">上传一张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">其它资质：</td>
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
                <span style="color:gray;font-size:12px">可上传多张，建议尺寸640*640px</span>
              </td>
            </tr>
            <tr>
              <td style="background:rgb(250,250,250)" class="first">商户商标：</td>
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
              <td style="background:rgb(250,250,250)" class="first">门店默认图片：</td>
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
                <span style="color:gray;font-size:12px">上传一张，建议尺寸640*640px</span>
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
          </table>
          <el-button type="warning" @click.native="bj" v-show="bk">编辑</el-button>
          <el-button type="warning" @click.native="bj1" v-show="bk1" style="  margin-left: 74px;">确定</el-button>
          <el-button type="success" @click="fh">取消</el-button>
        </el-tab-pane>

        <el-tab-pane label="加盟协议" name="second" class="tt">
          <h3>O2O商城系统服务协议</h3>
          <br />您确认，在开始"实名认证"前，您已详细阅读了本协议所有内容，一旦您开始认证流程，即表示您充分理解并同意接受本协议的全部内容。
          <br />为了提高服务的安全性和我们的商户身份的可信度，我们向您提供认证服务。在您申请认证前，您必须先注册成为用户。商户认证成功后，我们将给予每个商户一个认证标识。本公司有权采取各种其认为必要手段对商户的身份进行识别。但是，作为普通的网络服务提供商，本公司所能采取的方法有限，而且在网络上进行商户身份识别也存在一定的困难，因此，本公司对完成认证的商户身份的准确性和绝对真实性不做任何保证。
          <br />本公司有权记录并保存您提供给本公司的信息和本公司获取的结果信息，亦有权根据本协议的约定向您或第三方提供您是否通过认证的结论以及您的身份信息。
          <br />
          <br />
          <h3>一、关于认证服务的理解与认同</h3>
          <br />认证服务是由本公司提供的一项身份识别服务。除非本协议另有约定，一旦您的账户完成了认证，相应的身份信息和认证结果将不因任何原因被修改或取消；如果您的身份信息在完成认证后发生了变更，您应向本公司提供相应有权部门出具的凭证，由本公司协助您变更账户的对应认证信息。
          <br />本公司有权单方随时修改或变更本协议内容，并通过网站公告变更后的协议文本，无需单独通知您。本协议进行任何修改或变更后，您还继续使用我们的服务和/或认证服务的，即代表您已阅读、了解并同意接受变更后的协议内容；您如果不同意变更后的协议内容，应立即停用我们的服务和认证服务。
          <br />
          <br />
          <h3>二、实名认证</h3>
          <br />个体工商户类商户向本公司申请认证服务时，应向本公司提供以下资料：中华人民共和国工商登记机关颁发的个体工商户营业执照或者其他身份证明文件。
          <br />企业类商户向本公司申请认证服务时，应向本公司提供以下资料：中华人民共和国工商登记机关颁发的企业营业执照或者其他身份证明文件。
          <br />其他类商户向本公司申请认证服务时，应向本公司提供以下资料：能够证明商户合法身份的证明文件，或者其他本公司认为必要的身份证明文件。
          <br />如商户在认证后变更任何身份信息，则应在变更发生后三个工作日内书面通知本公司变更认证，否则本公司有权随时单方终止提供服务，且因此造成的全部后果，由商户自行承担。
          <br />通过实名认证的商户不能自行修改已经认证的信息，包括但不限于企业名称、姓名以及身份证件号码等。
          <br />
          <br />
          <h3>三、特别声明</h3>

          <br />认证信息共享：
          <br />为了使您享有便捷的服务，您经由其它网站向本公司提交认证申请即表示您同意本公司为您核对所提交的全部认证信息，并同意本公司将是否通过认证的结果及相关认证信息提供给该网站。
          <br />认证资料的管理：
          <br />您在认证时提交给本公司的认证资料，即不可撤销的授权由本公司保留。本公司承诺除法定或约定的事由外，不公开或编辑或透露您的认证资料及保存在本公司的非公开内容用于商业目的，但本条第1项规定以及以下情形除外：
          <br />您授权本公司透露的相关信息；
          <br />本公司向国家司法及行政机关提供；
          <br />本公司向本公司关联企业提供；
          <br />第三方和本公司一起为商户提供服务时，该第三方向您提供服务所需的相关信息；
          <br />基于解决您与第三方民事纠纷的需要，本公司有权向该第三方提供您的身份信息。
          <br />
          <br />
          <h3>四、第三方网站的链接</h3>

          <br />为实现认证信息审查，我们网站上可能包含了指向第三方网站的链接（以下简称"链接网站"）。"链接网站"非由本公司控制，对于任何"链接网站"的内容，包含但不限于"链接网站"内含的任何链接，或"链接网站"的任何改变或更新，本公司均不予负责。自"链接网站"接收的网络传播或其它形式之传送，本公司不予负责。
          <br />
          <br />
          <h3>五、不得为非法或禁止的使用</h3>

          <br />接受本协议全部的说明、条款、条件是您申请认证的先决条件。您声明并保证，您不得为任何非法或为本协议、条件及须知所禁止之目的进行认证申请。您不得以任何可能损害、使瘫痪、使过度负荷或损害网站或其他网站的服务、或干扰本公司或他人对于认证申请的使用等方式使用认证服务。您不得经由非本公司许可提供的任何方式取得或试图取得任何资料或信息。
          <br />
          <br />
          <h3>六、有关免责</h3>

          <br />下列情况时本公司无需承担任何责任：
          <br />由于您将账户密码告知他人或未保管好自己的密码或与他人共享账户或任何其他非本公司的过错，导致您的个人资料泄露。
          <br />任何由于黑客攻击、计算机病毒侵入或发作、电信部门技术调整导致之影响、因政府管制而造成的暂时性关闭、由于第三方原因(包括不可抗力，例如国际出口的主干线路及国际出口电信提供商一方出现故障、火灾、水灾、雷击、地震、洪水、台风、龙卷风、火山爆发、瘟疫和传染病流行、罢工、战争或暴力行为或类似事件等)及其他非因本公司过错而造成的认证信息泄露、丢失、被盗用或被篡改等。
          <br />由于与本公司链接的其它网站所造成的商户身份信息泄露及由此而导致的任何法律争议和后果。
          <br />任何商户向本公司提供错误、不完整、不实信息等造成不能通过认证或遭受任何其他损失，概与本公司无关。
          <br />
          <el-button type="success" style="margin: 29px 0 32px 42px;" @click.native="fh">返回</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "shouye",
  data() {
    return {
      activeName: "first",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    fh() {
      this.$router.push({
        path: "/houtai",
      });
    },
    bj() {
      this.gb = false;
      this.gb1 = true;
      this.bk = false;
      this.bk1 = true;
    },
    bj1() {
      this.$alert("保存成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$router.push({
            path: "/houtai",
          });
        },
      });
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
.box>>>.el-tabs__item:hover {
    color: rgb(255, 136, 0);  
  }
.box>>>.el-tabs__item.is-active {
     color: rgb(255, 136, 0); 
  }
 .box>>> .el-tabs__active-bar{
       background-color: rgb(255, 136, 0);
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
.image-slot {
}
</style>