
<template>
  <div class="cloudNote">
    <div class="cn_header">
      <div class="cn_headerBox">
        <div class="cn_headerBoxLeft">
          <a href="/cloudNote" class="logo">
            <img src="https://shared-https.ydstatic.com/market/ynote-website/logo.svg" alt="有道云笔记" />
          </a>
          <ul class="cn_nav">
            <li
              v-for="item in navTitle"
              v-bind:key="item.id"
              v-bind:class="[isTitle ===item.title ? 'cnhb-nav-itemSele' : 'cnhb-nav-itemNoSele']"
              v-on:click="selected(item.title)"
            >
              <a href="#">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="cnhb-right">
          <a href="http://note.youdao.com/charge/setMeal.html" class="freeVip">免费体验会员</a>
          <div class="webBox">
            <div class="cnhb-right-web">
              <a>进入网页版</a>
              <span
                v-bind:class="['iconfont',isWeb?'icon-shangla-blue':'icon-xiala']"
                v-on:click="zhuxiao"
              ></span>
            </div>
            <div
              v-if="isWeb"
              v-bind:class="[isWeb?'animated fadeInDown':'animated fadeOutUp','web']"
            >注销</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="bannerBox">
        <div class="banner-left">
          <img :src="img.banner1Left" />
        </div>
        <div class="banner-right">
          <p class="p1">欢迎使用 有道云笔记</p>
          <p class="p2">3G免费超大空间，开启你的高效办公之旅</p>
          <div class="banner-rrBox">
            <a
              class="btn-down"
              href="http://download.ydstatic.com/notewebsite/downloads/YNote.exe"
            >立即下载</a>
            <a class="btn-to" href="https://note.youdao.com/web/">进入网页版</a>
            <p class="btn-infor">官网版本V6.9.2</p>
          </div>
        </div>
      </div>
      <div class="detailBox">
        <div class="wrapBox wrapBox-a">
          <div class="wrap wrap-a">
            <div class="a-imgBox">
              <img
                class="ic-cone"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-cone.svg"
                alt
              />
              <img
                class="bigOne"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-01-win@2x.png"
                alt
              />
              <div class="icBox">
                <img
                  class="ic-item ic-red"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-01-red.svg"
                  alt
                />
                <img
                  class="ic-item ic-yellow"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-01-yellow.svg"
                  alt
                />
                <img
                  class="ic-item ic-green"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-01-green.svg"
                  alt
                />
                <img
                  class="ic-item ic-blue"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-01-blue-1.svg"
                  alt
                />
              </div>
            </div>
            <div class="a-textBox textBox">
              <p class="title">
                <span class="other">文档管理</span>
                ，高效记录
              </p>
              <p
                class="text"
              >文字/图片/语音/手写/OCR/Markdown等多种形式，随时随地记录你的精彩。全面兼容office、PDF等办公常用文档，无需下载即可查看编辑。</p>
            </div>
          </div>
        </div>
        <div class="wrapBox wrapBox-b">
          <img
            class="ic-minCube"
            src="https://shared-https.ydstatic.com/market/ynote-website/ic_02_cube2.svg"
            alt
          />
          <div class="wrap wrap-b">
            <div class="b-textBox textBox">
              <p class="title">
                <span class="other">收藏</span>
                ，精彩不错过
              </p>
              <p class="text">支持微信、微博、链接收藏和网页剪报等多种形式，优秀内容一键保存永不丢失，搭建属于你的知识体系。</p>
            </div>
            <div class="b-imgBox">
              <img
                class="ic-cube"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic_02_cube2.svg"
                alt
              />
              <div class="ic-phoneBox">
                <img
                  class="ic-phone"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-02-phone@2x.png"
                  alt
                />
              </div>
              <img
                class="ic-logo"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-02-logo.svg"
                alt
              />
            </div>
          </div>
        </div>
        <div class="wrapBox wrapBox-c">
          <div class="wrap wrap-c">
            <div class="c-imgBox">
              <img
                class="ic-wave"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-03-wave.svg"
                alt
              />
              <img
                class="ic-page2"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-03-page-2@3x.png"
                alt
              />
              <img
                class="ic-page1"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-03-page-1.png"
                alt
              />
              <div class="ic-scanbarBox">
                <img
                  class="ic-scanbar"
                  src="https://shared-https.ydstatic.com/market/ynote-website/ic-03-scanbar.svg"
                  alt
                />
              </div>
              <img
                class="ic-02-blue"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-03-blue.svg"
                alt
              />
            </div>
            <div class="c-textBox textBox">
              <p class="title">
                <span class="other">OCR扫描</span>
                ，快捷准确
              </p>
              <p class="text">满足文档、手写、名片等多场景需求，特别支持PDF转Word功能，无需繁琐操作，一键轻松搞定。</p>
            </div>
          </div>
        </div>
        <div class="wrapBox wrapBox-b">
          <img
            class="ic-04-minCube"
            src="https://shared-https.ydstatic.com/market/ynote-website/ic_02_cube2.svg"
            alt
          />
          <img
            class="ic-04-cone"
            src="https://shared-https.ydstatic.com/market/ynote-website/ic-cone.svg"
            alt
          />
          <div class="wrap wrap-d">
            <div class="d-textBox textBox">
              <p class="title">
                <span class="other">多端同步</span>
                ，随时查看
              </p>
              <p
                class="text"
              >PC/iPhone/Android/web/iPad/Mac/Wap……随时备份，云端同步，重要资料还可加密保存。 无惧断网/断电困扰，任何情况下都能轻松查阅。</p>
            </div>
            <div class="d-imgBox">
              <img
                class="ic-04-computer"
                src="https://shared-https.ydstatic.com/market/ynote-website/s4-computer-win.png"
                alt
              />
              <img
                class="ic-04-iphone"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-04-iphone@2x.png"
                alt
              />
              <img
                class="ic-04-android"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-04-android@2x.png"
                alt
              />
              <img
                class="ic-04-ipad"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-04-ipad@2x.png"
                alt
              />
              <img
                class="ic-04-shadow"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-04-sync-shadow.svg"
                alt
              />
              <img
                class="ic-04-sync"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-04-sync.svg"
                alt
              />
            </div>
          </div>
        </div>
        <div class="wrapBox wrapBox-e">
          <div class="wrap wrap-e">
            <div class="e-imgBox">
              <img
                class="ic-05-wave"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-wave.png"
                alt
              />
              <img
                class="ic-05-phone"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-phone@2x.png"
                alt
              />
              <img
                class="ic-05-neteasemain"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-neteasemail.png"
                alt
              />
              <img
                class="ic-05-friends"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-friends.png"
                alt
              />
              <img
                class="ic-05-qq"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-qq.png"
                alt
              />
              <img
                class="ic-05-qqzone"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-qqzone.png"
                alt
              />
              <img
                class="ic-05-weibo"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-weibo.png"
                alt
              />
              <img
                class="ic-05-mail"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-mail.png"
                alt
              />
              <img
                class="ic-05-weChat"
                src="https://shared-https.ydstatic.com/market/ynote-website/ic-05-wechat.png"
                alt
              />
            </div>
            <div class="c-textBox textBox">
              <p class="title">
                <span class="other">轻松分享</span>
                ，协同处理
              </p>
              <p class="text">文档一键分享微信、QQ、微博、邮件等平台。团队协作修改，实时处理更高效。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="security">
      <div class="security-link">
        <a href="http://note.youdao.com/certification/certification-csa.html">
          <img src="https://shared-https.ydstatic.com/market/ynote-website/ic-csa.svg" alt />
        </a>
        <a href="http://note.youdao.com/certification/certification-cans.html">
          <img src="https://shared-https.ydstatic.com/market/ynote-website/ic-cans.svg" alt />
        </a>
        <a href="http://note.youdao.com/certification/certification-ukas.html">
          <img src="https://shared-https.ydstatic.com/market/ynote-website/ic-ukas.svg" alt />
        </a>
      </div>
    </div>
    <div id="footer">
      <ul class="follow-us">
        <li>
          <a href="https://weibo.com/youdaonote">
            <div class="weibo"></div>
          </a>
        </li>
        <li>
          <a>
            <div class="wechat">
              <img class="wechatImg" :src="img.weChat" alt />
            </div>
          </a>
        </li>
      </ul>
      <ul class="follow-link">
        <li>
          <a href="http://note.youdao.com/iyoudao/">博客</a>
        </li>&nbsp;·&nbsp;
        <li>
          <a href="http://tieba.baidu.com/f?kw=%E6%9C%89%E9%81%93%E4%BA%91%E7%AC%94%E8%AE%B0">官方贴吧</a>
        </li>&nbsp;·&nbsp;
        <li>
          <a href="http://note.youdao.com/vipexchange">会员兑换</a>
        </li>&nbsp;·&nbsp;
        <li>
          <a href="http://note.youdao.com/open">开放平台</a>
        </li>
      </ul>
      <ul class="follow-about">
        <li>
          <a href>关于我们</a>
          &nbsp;|&nbsp;
        </li>
        <li>
          <a href>联系我们</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>服务条款</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>隐私协议</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>有道云笔记会员包月协议</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>帮助</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>未成年人个人信息保护政策</a>
        </li>&nbsp;|&nbsp;
        <li>
          <a href>网易网站相关资质证明</a>
        </li>
      </ul>
      <div class="line"></div>
      <div class="copyRight">
        ©2019&nbsp;北京网易有道计算机系统有限公司&nbsp;京ICP证080268号&nbsp;&nbsp;&nbsp;&nbsp;违法和不良信息举报电话：010-82558163
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      img: [],
      imgUrl: [],
      navTitle: [
        { id: 0, title: "云笔记" },
        { id: 1, title: "笔记会员" },
        { id: 2, title: "云协作" },
        { id: 3, title: "下载" }
      ],
      isTitle: "云笔记",
      isWeb: false
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    },
    zhuxiao: function() {
      this.isWeb = !this.isWeb;
    }
  },

  mounted() {
    let that = this;
    this.axios.get("http://localhost:8888/cloudNote").then(res => {
      that.img = res.data;
    });
    this.axios.get("http://localhost:8888/cloudNoteUrl").then(res => {
      that.imgUrl = res.data;
    });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/cloudNote.css";
</style>