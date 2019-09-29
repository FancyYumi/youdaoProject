<template>
  <div>
    <div class="headerbox" v-title data-title="有道精品课-为你精选好课">
      <div class="headerbox2">
        <div class="headerbox3">
          <a href="/?keyfrom=dict2.index&amp;Pdt=CourseWeb" id="LMmqN" data-reactid="4">
            <img
              src="https://shared-https.ydstatic.com/ke/web/v1.1.3/0dfa30bc.png"
              class="_2in7G"
              alt="有道精品课"
              data-reactid="5"
            />
          </a>

          <a href="/?keyfrom=dict2.index&amp;Pdt=CourseWeb" data-reactid="7">首页</a>
          <a href="/download?keyfrom=dict2.index&amp;Pdt=CourseWeb" data-reactid="8">APP下载</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://c.youdao.com/market/best/bestPc/index.html"
            data-reactid="9"
          >同道计划</a>
          <el-input class="input" placeholder="请输入课程或老师的名字" prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="headerbox4">
          <a href="#">登陆</a>
        </div>
      </div>
    </div>

    <div class="mainbox">
      <div class="mainbox2">
        <a class="alin" :href="item.url" v-for="(item,index) in grade" :key="index">
          <div class="grade">{{item.title}}</div>
          <div class="display"></div>
        </a>
      </div>

      <div class="block">
        <div class="span"></div>
        <el-carousel trigger="click" height="360px" width="1300px">
          <el-carousel-item v-for="(item,index) in box" :key="index">
            <img class="img" :src="item.lunbotu" alt srcset />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="hot">热门课程</div>
      <div class="boxbox">
        <a :href="item.url" v-for="(item,index) in box" :key="index">
          <div class="itembox">
            <div class="he">
              <span class="yingyu">{{item.heder}}</span>
              <div class="text">{{item.text}}</div>
            </div>
            <div class="data">
              {{item.data}}
              <ins>|</ins>
              {{item.id}}
            </div>
            <div class="touxiangbox">
              <div class="touxiang">
                <img :src="item.touxiang" alt />
              </div>
              <div class="mingzi">{{item.mingzi}}</div>
            </div>

            <div class="mianfei">
              <span class="renshu">已有{{item.number}}人购买</span>
              <span class="m">免费</span>
            </div>
          </div>
        </a>
      </div>
      <div class="hot">发现好课</div>
      <div class="tupian">
        <a v-for="(item,index) in tupian" :key="index" :href="item.url">
          <div class="position">
            <img class="tu1" :src="item.src" />
            <h4 class="htext">{{item.text}}</h4>
            <span class="button">查看详情</span>
          </div>
        </a>
      </div>
      <div class="secondbody">
        <div class="hot">四六级</div>
        <div class="bigbox">
          <div class="pp">
            <a class="ab" href="#">
              <img
                class="op"
                src="https://oimagec5.ydstatic.com/image?id=8210937125911694050&product=xue"
                alt
              />
            </a>
            <a class="pq" href="#">
              <div class="itembox">
                <div class="he">
                  <span class="yingyu">实用英语</span>
                  <div class="text">明星私教拯救你的“中式英文”</div>
                </div>
                <div class="data">
                  时间：2019.09.29 20:00
                  <ins>|</ins>
                  5
                </div>
                <div class="touxiangbox">
                  <div class="touxiang">
                    <img
                      class="io"
                      src="https://oimageb7.ydstatic.com/image?id=-4266532191108521123&product=bisheng"
                      alt
                    />
                  </div>
                  <div class="mingzi">刘亚男</div>
                </div>

                <div class="mianfei">
                  <span class="renshu">已有5123人购买</span>
                  <span class="m">免费</span>
                </div>
              </div>
            </a>
            <a class="pq" href="#">
              <div class="itembox">
                <div class="he">
                  <span class="yingyu">实用英语</span>
                  <div class="text">明星私教拯救你的“中式英文”</div>
                </div>
                <div class="data">
                  时间：2019.09.29 20:00
                  <ins>|</ins>
                  5
                </div>
                <div class="touxiangbox">
                  <div class="touxiang">
                    <img
                      class="io"
                      src="https://oimageb7.ydstatic.com/image?id=-4266532191108521123&product=bisheng"
                      alt
                    />
                  </div>
                  <div class="mingzi">刘亚男</div>
                </div>

                <div class="mianfei">
                  <span class="renshu">已有5123人购买</span>
                  <span class="m">免费</span>
                </div>
              </div>
            </a>
          </div>

          <div class="boxboxe">
            <a class="p" :href="item.url" v-for="(item,index) in box" :key="index">
              <div class="itembox">
                <div class="he">
                  <span class="yingyu">{{item.heder}}</span>
                  <div class="text">{{item.text}}</div>
                </div>
                <div class="data">
                  {{item.data}}
                  <ins>|</ins>
                  {{item.id}}
                </div>
                <div class="touxiangbox">
                  <div class="touxiang">
                    <img class="io" :src="item.touxiang" alt />
                  </div>
                  <div class="mingzi">{{item.mingzi}}</div>
                </div>

                <div class="mianfei">
                  <span class="renshu">已有{{item.number}}人购买</span>
                  <span class="m">免费</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="n">
          <img class="r" src="../assets/5.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: function() {
    return {
      box: [],
      tupian: [],
      grade: []
    };
  },
  mounted() {
    Vue.axios.get(`http://localhost:8888/course`).then(response => {
      console.log(response);
      this.box = response.data.cidian;
      this.tupian = response.data.tupian;
      this.grade = response.data.grade;
    });
  },
  methods() {}
};
</script>
<style scoped>
@import "../assets/courses.css";
</style>