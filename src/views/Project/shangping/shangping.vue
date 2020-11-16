<template>
  <div>
    <div class="nav_top">
      <p class="pj1">
        <span>
          <a style="margin-left: 9px;">商品</a>
        </span>
      </p>
    </div>
    <div class="box">
      <el-button
        type="warning"
        style="position: absolute;
    top: 168px;
    right: 294px;
    z-index: 3;"
        @click.native="cx"
      >新增商品</el-button>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="出售中" name="first">
          <div class="body">
            <el-row :gutter="1" class="top">
              <el-col :span="3">编号</el-col>
              <el-col :span="6">详情</el-col>
              <el-col :span="3">团购价/结算价</el-col>
              <el-col :span="3">销量/库存</el-col>
              <el-col :span="3">商品分类</el-col>
              <el-col :span="6">操作</el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">餐饮美食</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">生活服务</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">美容美发</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <div class="foot">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4000"
                style="padding: 16px 0px 0px 205px;
    margin-bottom: 16px"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已售罄" name="second">
          <div class="body">
            <el-row :gutter="1" class="top">
              <el-col :span="3">编号</el-col>
              <el-col :span="6">详情</el-col>
              <el-col :span="3">团购价/结算价</el-col>
              <el-col :span="3">销量/库存</el-col>
              <el-col :span="3">商品分类</el-col>
              <el-col :span="6">操作</el-col>
            </el-row>
         <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
             <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="仓库中" name="third">
          <div class="body">
            <el-row :gutter="1" class="top">
              <el-col :span="3">编号</el-col>
              <el-col :span="6">详情</el-col>
              <el-col :span="3">团购价/结算价</el-col>
              <el-col :span="3">销量/库存</el-col>
              <el-col :span="3">商品分类</el-col>
              <el-col :span="6">操作</el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">餐饮美食</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">生活服务</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">美容美发</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div class="ox">
                  <div style="    width: 95px;">
                    <img src="../../../assets/img/tu.png" alt />
                  </div>

                  <div style="font-size:12px">
                    团购商品名称
                    <br />
                    <p style="margin-top:10px ;font-weight:bold">已0人分销</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="3">98/68.6</el-col>
              <el-col :span="3">12/100</el-col>
              <el-col :span="3">暂无分类</el-col>
              <el-col :span="6">
                <el-button type="warning" size="mini" @click.native="ups">编辑</el-button>
                <el-button type="primary" size="mini">下架</el-button>
                <el-button type="info" size="mini">预览</el-button>
              </el-col>
            </el-row>

            <div class="foot">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4000"
                style="padding: 16px 0px 0px 205px;
    margin-bottom: 16px"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="审核记录" name="forth">
          <div class="body">
            <el-row :gutter="1" class="top" style="font-size:15px">
              <el-col :span="3">编号</el-col>
              <el-col :span="6">详情</el-col>
              <el-col :span="3">提交时间</el-col>
              <el-col :span="3"><el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{msg}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="s1">全部类型</el-dropdown-item>
        <el-dropdown-item @click.native="s2">发布申请</el-dropdown-item>
        <el-dropdown-item @click.native="s3">修改申请</el-dropdown-item>
        <el-dropdown-item @click.native="s4">上架申请</el-dropdown-item>
        <el-dropdown-item @click.native="s5">下架申请</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></el-col>
              <el-col :span="3"><el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{msg1}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="s6">全部状态</el-dropdown-item>
        <el-dropdown-item @click.native="s7">申请通过</el-dropdown-item>
        <el-dropdown-item @click.native="s8">未申请</el-dropdown-item>
        <el-dropdown-item @click.native="s9">拒绝申请</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></el-col>
              <el-col :span="6">操作</el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
                  团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:red">未审核</el-col>
              <el-col :span="6">
                <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
                  团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
                   <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
                  团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:Red">未审核</el-col>
              <el-col :span="6">
                   <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                 <div style="text-align:left;line-height:22px">
                  团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
                  <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
                团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">上架申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
                  <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
               团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3" style="color:red">未审核</el-col>
              <el-col :span="6">
                  <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
                团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">修改申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">拒绝申请<br>

审核备注：标题不符合规范</p></el-col>
              <el-col :span="6">
                  <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="1" class="top">
              <el-col :span="3">1001</el-col>
              <el-col :span="6">
                <div style="text-align:left;line-height:22px">
              团购商品名称团购商品名称团购商品名称团购商品名称团购商品名称
                </div>
              </el-col>
              <el-col :span="3">2018-12-12 12:00:00</el-col>
              <el-col :span="3">上架申请</el-col>
              <el-col :span="3"><p style="text-align:left;margin-left:40px;line-height:20px">审核通过<br>
审核备注：系统自动审核</p></el-col>
              <el-col :span="6">
              <el-button type="success" size="mini" @click.native="scd">删除</el-button>
              </el-col>
            </el-row>
            <div class="foot">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4000"
                style="padding: 16px 0px 0px 205px;
    margin-bottom: 16px"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      msg:'全部类型',
      msg1:'全部状态'
    };
  },
  methods: {
    cx() {
      this.$router.push({
        path:'/spgl/insert'
      });
    },
    ups(){
      this.$router.push({
        path: "/spgl/update",
      });
    },
    scd(){
      this.$confirm('--待审核数据将会永久删除--<br>--审核通过的仅删除申请记录--<br>确定删除吗？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning',
          center:true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    s1(){
      this.msg='全部类型'
    },
    s2(){
      this.msg='发布申请'
    },s3(){
      this.msg='修改申请'
    },s4(){
      this.msg='上架申请'
    },s5(){
      this.msg='下架申请'
    },s6(){
      this.msg1='全部审核'
    },s7(){
      this.msg1='审核通过'
    },s8(){
      this.msg1='未审核'
    },s9(){
      this.msg1='拒绝审核'
    }
  },
};
</script>
<style  scoped>
.el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: rgb(254,245,215);
    color: grey;
}
.box >>> .el-tabs--card > .el-tabs__header {
  width: 1100px !important;
}
.box>>>.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{
  border-left: 1px solid rgb(228, 228, 228) !important;
}
.box >>> .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 0;
}
.box >>> .el-tabs__item {
  margin: 0 10px 0 0;
  border: 1px solid gainsboro;
  border-radius: 4px 4px 0 0;
  background: rgb(242, 242, 242);
}
.box >>> .el-tabs__item.is-active {
  background: orange;
  color: #fff;
}
.box >>> .el-tabs__item:hover {
  color: orange;
}

.box {
  padding: 29px 0 35px 60px;
  background: white;
  min-height: 200px;
  width: 1185px;
  margin: 34px auto;
}
.pj1 {
  padding: 15px 0 0 191px;
  height: 36px;
  text-indent: 17px;
  background: white;
  line-height: 36px;
}
.pj1 span {
  line-height: 1.7;
  border-left: 3px solid rgb(255, 136, 0);
}
.box >>> .el-tabs__content {
  width: 1100px;
  overflow: hidden;
  position: relative;
}
#tab-second {
  margin-left: 10px;
}
.foot >>> .el-pager li:hover {
  color: rgb(255, 136, 0);
}
.foot >>> .el-pager li.active {
  color: rgb(255, 136, 0);
}
 .el-dropdown-link {
    cursor: pointer;
    color: #000;
  }
.top {
  display: flex;
  text-align: center;
  margin-left: 0 !important;
  padding: 20px 0;
  border: 1px solid rgb(228, 228, 228);
  border-bottom: none;
  align-items: center;
  font-size: 12px;
}
.top:nth-of-type(1) {
  background: rgb(242, 242, 242);
  padding: 10px 0;
  font-size: 16px;
}
.top:last-of-type {
  border-bottom: 1px solid rgb(228, 228, 228);
}
.ox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.foot {
  border: 1px solid rgb(228, 228, 228);
}
</style>