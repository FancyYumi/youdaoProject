<template>
  <div class="recite">
    <div class="nav">
      <div class="wrap">
        <img class="i1" :src="img.logo" />
        <span class="text">
          <img class="i2" :src="img.recitelogo" alt />
        </span>
        <div class="top-menu">
          <a href>首页</a>
          <a>有道词典</a>
          <a>有道翻译</a>
          <a>有道云笔记</a>
          <a>精品课</a>
          <a>有道翻译官</a>
          <a>更多</a>
        </div>
      </div>
    </div>
    <div class="home">
      <section class="download">
        <img class="logo" :src="img.download" alt />
        <span>快速补充你的单词食粮</span>
        <div class="box">
          <img :src="img.download1" alt />
          <img :src="img.download2" alt />
        </div>
        <img class="card" :src="img.card" />
      </section>
      <section class="remenber">
        <div>
          <img :src="img.phoneShow" width="330" />
          <div class="re">
            <span>独创BREAKI记忆法</span>
            <p>
              艾宾浩斯记忆曲线 + Leitner System 五盒理论
              <br />= 有道独家BREAKI记忆法
              <br />精准判断遗忘界点&nbsp;
              有效提升背词效率
            </p>
          </div>
          <img src />
        </div>
      </section>
      <section class="perfect">
        <div>
          <div class="perf">
            <span class="title">
              趣味记忆面包
              <br />陪你背单词
            </span>
            <span class="split"></span>
            <p>
              清爽简洁的可爱界面
              <br />面包君伴你轻松背词
            </p>
          </div>
          <img :src="img.perfect" width="561" />
        </div>
      </section>
    </div>
    <div class="footer"></div>
    <div class="qr-code">
      <img :src="img.QR" width="100" />
      <span>扫一扫即可下载</span>
    </div>
    <div class="foot">
      <a href>@网易公司</a>
      <a href>服务条款</a>
      <a href>京ICP证080268号</a>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "recite",
  data: function() {
    return { img: [] };
  },
  mounted() {
    let that = this;
    this.axios.get("http://localhost:8888/pic").then(res => {
      that.img = res.data;
    });
  }
};
</script>
<style scoped>
@import "../assets/style/recite.css";
</style>