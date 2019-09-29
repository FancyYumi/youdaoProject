<template>
  <div class="humanTrans">
    <div class="ht_headerBox">
      <div class="ht_header">
        <div class="ht_headerBox">
          <div class="ht_headerBoxLeft">
            <a href="/humanTrans" class="logo">
              <img
                src="https://shared.ydstatic.com/at/2.0.6fs/styles/indexb/logo_large.png"
                alt="有道云笔记"
              />
            </a>
            <ul class="ht_nav">
              <li
                v-for="item in navTitle"
                v-bind:key="item.id"
                v-bind:class="[isTitle ===item.title ? 'hthb-nav-itemSele' : 'hthb-nav-itemNoSele']"
                v-on:click="selected(item.title)"
              >
                <a href="#">{{item.title}}</a>
                <span class="icon-down" v-if="item.more"></span>
              </li>
            </ul>
          </div>
          <div class="hthb-right">
            <a href="http://note.youdao.com/charge/setMeal.html" class="login">登录</a>
            <a href="#" class="hthb-right-regist">注册</a>
          </div>
        </div>
      </div>
      <div class="headerBox"></div>
    </div>
    <div class="ht_banner">
      <ul class="ht_imgBox">
        <li v-for="item in imgUrl" v-bind:key="item.id" class="lunbo_item animated fadeIn">
          <img :src="item.imgUrl" alt />
        </li>
      </ul>
      <ul class="circle">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="pay_price">
      <span class="pay_price_text">
        超过
        <span class="text_notice">4387</span>
        名译员正在待命
      </span>
    </div>
    <ul class="pay_priceList">
      <li class="fast_cell pp_listItem">
        <img class="cell_icon" :src="img.fast_icon" />
        <span class="cell_intro">
          <div class="cell_title">快速翻译</div>
          <p class="cell_text">
            中英
            <span class="cell_notice_text1">0.25元/字</span>
            ， 中日
            <span class="cell_notice_text1">0.22元/字</span>
            ，立等可取， 适用于日常用语、工作沟通、地址信息等紧急的短文本
          </p>
          <a class="cell_click" href>立即下单</a>
        </span>
      </li>
      <li class="fast_cell pp_listItem">
        <img class="cell_icon" :src="img.ic_document_gold" />
        <span class="cell_intro">
          <div class="cell_title">文档翻译</div>
          <p class="cell_text">
            最低
            <span class="cell_notice_text1">0.11元/字</span>
            ，最快当天返稿，适用于学术论文、合同标书、产品介绍等专业性强的内容
          </p>
          <a class="cell_click" href>立即上传</a>
        </span>
      </li>
      <li class="fast_cell pp_listItem">
        <img class="cell_icon" :src="img.ic_local_gold" />
        <span class="cell_intro">
          <div class="cell_title">本地化翻译</div>
          <p class="cell_text">
            全球
            <span class="cell_notice_text2">50+国家</span>
            和地区的译员团队，多年本地化翻译经验，助您开拓国际市场
          </p>
          <a class="cell_click" href>了解详情</a>
        </span>
      </li>
      <li class="fast_cell pp_listItem">
        <img class="cell_icon" :src="img.ic_modify_gold" />
        <span class="cell_intro">
          <div class="cell_title">母语润色</div>
          <p class="cell_text">
            涵盖
            <span class="cell_notice_text2">1117门学科</span>
            ，900+专家团队，96项检查项目，适用于国际论文发表，SCI/SSCI/EI
          </p>
          <a class="cell_click" href>了解详情</a>
        </span>
      </li>
    </ul>
    <div class="ht_type">
      <ul class="ht_typeBox">
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_paper_gray" alt />
            <p class="type_title">论文翻译</p>
          </a>
          <p class="type_infor">
            匹配对口领域的资深专家译员,
            <br />适用于论文投稿发表等
            <br />重要场合
          </p>
        </li>
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_company_gray" alt />
            <p class="type_title">公司产品介绍</p>
          </a>
          <p class="type_infor">
            助力企业（海外）推广和市场,
            <br />扩展用信达雅的翻译
            <br />彰显企业品牌实力
          </p>
        </li>
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_law_gray" alt />
            <p class="type_title">法律合同标书</p>
          </a>
          <p class="type_infor">
            服务于企业合作及投标竞标需
            <br />求法律专家审校润色，
            <br />确保严谨专业
          </p>
        </li>
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_abroad_gray" alt />
            <p class="type_title">留学移民</p>
          </a>
          <p class="type_infor">
            积累大量出国资料案例确保各
            <br />项申请资料译法准备
          </p>
        </li>
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_certificate_gray" alt />
            <p class="type_title">证件翻译</p>
          </a>
          <p class="type_infor">
            多种证件翻译并精心制作版
            <br />式盖章证件官方认可，助
            <br />您全球畅通
          </p>
        </li>
        <li class="type_item">
          <a href>
            <img class="type_icon" :src="img.ic_resume_gray" alt />
            <p class="type_title">简历介绍</p>
          </a>
          <p class="type_infor">
            丰富的英文简历制作经验，专业
            <br />地道的求职外语表达，让
            <br />您的简历脱颖而出
          </p>
        </li>
      </ul>
    </div>
    <div class="brand_customer">
      <div class="brand_customer_content">
        <span class="brand_title">品牌客户</span>
        <span class="brand_line"></span>
      </div>
      <div class="brand_customer_image">
        <img class="brand_customer_image" :src="img.pic_CustomerLogo" />
      </div>
    </div>
    <div class="interpreter">
      <div class="interpreter_content">
        <div class="interpreter_infor">
          <div class="interpreter_title">我们的译员</div>
          <div class="interpreter_line"></div>
          <div
            class="interpreter_text"
          >我们汇聚全球50多个国家和地区的4000多名专业译者，根据细分的专业领域，以严格的测试标准招募译员，确保每名译员在各自擅长的领域里都有丰富的翻译经验。我们通过先进、安全的订单处理云平台及严格的质量管控体系，已为国内外数百万个人客户、上万家企业客户提供精准地道的翻译服务。</div>
        </div>
        <img class="img_1x" :src="img.experts" />
      </div>
    </div>
    <div class="client_thinking_wrap">
      <div class="client_thinking">
        <div class="client_title">客户心声摘录</div>
        <div class="client_sub_title">累计服务客户超过100万，用户满意度高达99%</div>
        <ul class="client_tags_con">
          <li>挺专业的</li>
          <li>超快</li>
          <li>有保障</li>
          <li>朋友推荐的</li>
          <li>客服声音好听</li>
          <li>信赖有道</li>
        </ul>
        <ul class="client_thinking_list">
          <li v-for="item in comments" v-bind:key="item.id">
            <span class="comma"></span>
            <span class="comma_reverse"></span>
            <div class="thinking">{{item.text}}</div>
            <div class="client_infoBox">
              <img class="client_info_img" :src="item.headUrl" />
              <div class="client_info">
                <div class="client_name">{{item.name}}</div>
                <div
                  class="order_info"
                >{{item.charNumber}}字，{{item.level}}，{{item.type}}，{{item.time}}天交稿</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="ft">
      <p>
        <a href="http://fanyi.youdao.com" target="_blank" rel="nofollow">有道翻译</a>-
        <a href="http://www.youdao.com" target="_blank" rel="nofollow">有道首页</a>-
        <a href="https://ke.youdao.com/?keyfrom=f.youdao" target="_blank" rel="nofollow">有道精品课</a>-
        <a href="http://www.youdao.com/about/index.html" target="_blank" rel="nofollow">关于有道</a>-
        <a href="http://i.youdao.com" target="_blank" rel="nofollow">官方博客</a>-
        <a href="http://dsp.youdao.com" target="_blank" rel="nofollow">有道智选</a>-
        <a href="/?path=terms-of-service" target="_blank" rel="nofollow">有道人工翻译服务条款</a>-
        <a
          href="http://survey2.163.com/html/zyfy_satisfiction/paper.html?site=fankui"
          class="clog-js"
          data-act="feedback"
          target="_blank"
          rel="nofollow"
        >意见反馈</a>
      </p>

      <p>
        <span>©2019</span>
        <span>网易公司</span>
        <span>京ICP证080268号</span>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import banner from "../assets/js/humanTrans/banner";
Vue.use(VueAxios, axios);
export default {
  data: function() {
    return {
      img: [],
      imgUrl: [],
      comments: [],
      navTitle: [
        { id: 0, title: "首页" },
        { id: 1, title: "快速翻译" },
        { id: 2, title: "文档翻译", more: true },
        { id: 3, title: "本地化翻译" },
        { id: 4, title: "母语润色" },
        { id: 5, title: "更多", more: true }
      ],
      isTitle: "首页",
      isWeb: false
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    bianhuan: function() {
      this.isWeb = !this.isWeb;
    }
  },

  mounted() {
    let that = this;
    this.axios.get("http://localhost:8888/cloudNote").then(res => {
      that.img = res.data;
    });
    this.axios.get("http://localhost:8888/humanTrans").then(res => {
      that.imgUrl = res.data;
    });
    this.axios.get("http://localhost:8888/humanTransComments").then(res => {
      that.comments = res.data;
    });
    banner();
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/humanTrans.css";
</style>