
<<<<<<< HEAD
<template >
  <div id="index">
    <div class="header">
      <a class="wljb">
        <img src="https://shared.ydstatic.com/dict/v2016/entry/wljb.jpg" title="举报信息" />
      </a>
      <div class="more">
        <div>
          <span></span>
          <a>更多产品</a>
        </div>
      </div>
      <ul>
        <li>
          <a href>惠惠</a>
        </li>
        <li>
          <a href>人工翻译</a>
        </li>
        <li>
          <a href>云笔记</a>
        </li>
        <li>
          <a href>精品课</a>
        </li>
        <li>
          <a href>翻译</a>
        </li>
        <li>
          <a href>背单词</a>
        </li>
        <li>
          <a href>词典</a>
        </li>
      </ul>
    </div>

    <div class="margin1"></div>
    <div class="logo">
      <img src="https://shared-https.ydstatic.com/dict/v2016/logo.png" />
    </div>
    <div class="margin2"></div>
    <div class="search" id="totop">
      <translateForm v-on:formSubmit="translateText"></translateForm>
      <h2>{{translatedText}}</h2>
    </div>
    <div class="margin3">
      <span>
        <a href>下载词典客户端</a>
      </span>|
      <span>
        <a href>下载词典移动端</a>
      </span>|
      <span>
        <a href>查看单词本</a>
      </span>|
      <span>
        <a href>
          秒懂释义
          <sup>•</sup>
        </a>
      </span>
    </div>
    <div class="content">
      <div class="wrap">
        <div class="conLeft">
          <div class="titleBox">
            <a>精品阅读</a>
            <a>必备课程</a>
            <a>折扣精选</a>
          </div>
          <conBox1></conBox1>
          <!-- <conBox2></conBox2>
          <conBox3></conBox3>-->
        </div>
        <div class="conRight">
          <div class="attach">
            <img src="https://oimagec3.ydstatic.com/image?id=8507829891421075759&product=xue" alt />
            <div class="hd">
              <a>热门课程</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" >
      <div class="wrap">
        <ul>
          <li>
            <a href>关于有道</a>
          </li>
          <li>
            <a href>有道智选</a>
          </li>
          <li>
            <a href>有道智云</a>
          </li>
          <li>
            <a href>官方博客</a>
          </li>
          <li>
            <a href>技术博客</a>
          </li>
          <li>
            <a href>诚聘英才</a>
          </li>
          <li>
            <a href>联系我们</a>
          </li>
          <li>
            <a href>站点地图</a>
          </li>
          <li>
            <a href>网络举报</a>
          </li>
          <li>
            <a href>营业执照</a>
          </li>
          <li>
            <a href>出版物经营许可证</a>
          </li>
        </ul>
        <p class="phone">
          违法和不良信息举报电话：010-82558163
          <span class="copy-right">
            © 2019
            <a href>网易公司</a>
            <a href>隐私政策</a>
            <a href>服务条款</a> 京ICP证080268号
            <a href>京ICP备10005211号</a>
            <a
              href
              style="margin-left:5px;display:inline-block;text-decoration:none;vertical-align:-9%"
            >
              <img
                src="https://shared.ydstatic.com/images/icons/jgw.jpg"
                style="float:left;width:14px"
              />
              <span style="float:left;line-height:17px">京公网安备 11010802020092号</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
=======
<template>
  <div class="index" v-title data-title="有道背单词">
    <h1>hello</h1>
 </div>


>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import translateForm from "./translateForm";
<<<<<<< HEAD
import conBox1 from "./conBox1";

=======
>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
export default {
  name: "index",
  data: function() {
    return {
      translatedText: ""
    };
  },
  components: {
<<<<<<< HEAD
    translateForm,
    conBox1
=======
     translateForm
>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
  },
  methods: {
    translateText: function(text, language) {
      let source = text; //要翻译的内容
      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=zh-${language}&key=trnsl.1.1.20190924T033746Z.4cb4c7ecce0cfb43.346aebc6960c70a9d1c8cce69af049058a0867a3
            &text=${source}`;
      axios
        .get(url)
        .then(res => {
          this.translatedText = res.data.text[0]; //翻译结果
        })
        .catch(err => {
          alert("请求失败");
        });
    }
  }

  //   $(function(){
  //         //获取导航距离页面顶部的距离
  //         var toTopHeight = $(".timeNav").offset().top;
  //         //监听页面滚动
  //         $(window).scroll(function() {
  //             //判断页面滚动超过导航时执行的代码
  //             if( $(document).scrollTop() > toTopHeight ){
  //                     //fixed定位
  //                     $("#nav").addClass("nav_fixed");
  //             }else{//
  //                     //移除fixed定位，采用默认流布局
  //                     $("#nav").removeClass("nav_fixed");
  //             }
  //         });
};
</script>
<style scoped>
<<<<<<< HEAD
@import "../assets/style/index.css";
=======


>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
</style>