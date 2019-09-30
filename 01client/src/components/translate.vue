<template>

  <div class="index">
    <el-container>
      <el-header style="height: 72px;">
        <div class="headerbox">
          <a href="/?keyfrom=fanyi-new.logo" class="fanyi__nav__logo"></a>
          <div class="textbox">
            <ul class="fanyi__nav__list">
              <li v-for="(item,index) in object" :key="index">
                <a class="nav__tongchuan" target="_blank" :href="item.url">
                  {{item.text}}
                  <span class="tongchuan_new" v-if="index==0">new</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </el-header>

      <el-main class="main" style="height: 456px;">
        <div class="mainbox">
          <div class="mainbox2">
            <el-select class="input" v-model="value" placeholder="自动检测语言">
              <el-option
                v-for="item in object"
                :key="item.id"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-row>
              <el-button class="button" type="primary">翻译</el-button>
              <el-button class="buttonn" type="success">人工翻译</el-button>
            </el-row>
          </div>
          <div>
            <input id="ap" type="checkbox" />
            <label for="ap">划词</label>
          </div>
        </div>
        <div class="shuru">
          <el-input
            class="tetxarea"
            style="width:500px"
            type="textarea"
            :rows="10"
            :span="2"
            placeholder="请输入内容"
            v-model="textarea"
          ></el-input>
          <el-input
            class="tetxarea"
            style="width:500px"
            type="textarea"
            :rows="10"
            :span="2"
            v-model="textarea"
            disabled="disabled"
          ></el-input>
        </div>
      </el-main>
      <el-footer class="footer" style="height:120px;">
        <div class="footerbox">
        <div class="footerboxleft">
          <h4>有道人工翻译／母语润色</h4>
          <p class="products__item__desc">全球最优秀的译员时刻待命<br/>专业、精准、地道！</p>
                     
        </div>
         <div class="footerboxright"><h4>有道同传</h4>
                          <p class="products__item__desc">商务会议同传服务提供商<br/>专业、精准、可靠</p></div>
        </div>
      </el-footer>
    </el-container>
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
      object: [],
      textarea: "",
     
      value: ""
    };
  },
  mounted() {
    Vue.axios.get(`http://localhost:8888/head`).then(response => {
      console.log(response);
      this.object = response.data;
    });
  },
  methods() {}
};
</script>
<style scoped>
.nav__tongchuan {
  position: relative;
  overflow: hidden;
}
.fanyi__nav__list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  line-height: 72px;
  font-size: 12px;
  width: 460px;
}
p{
      
    font-size: 12px;
    color: #8d8d8d;
    line-height: 16px;
}
ul,
li {
  list-style: none;
}
.textbox {
  height: 72px;
  width: 540px;
}
.button {
  display: inline-block;

  margin-left: 16px;
  text-align: center;
  width: 108px;
  height: 38px;

  
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
}
.buttonn {
  display: inline-block;

  margin-left: 16px;
  text-align: center;
  width: 108px;
  height: 38px;

  background: #fff;
  border-radius: 3px;
  font-size: 14px;
  color: brown;
}
.button:hover {
  background: #e02433;
}
.buttonn:hover {
  background: #e02433;
}
.tongchuan_new {
  position: absolute;
  top: -36px;
  right: -20px;
  font-size: 12px;
  color: #e02433;
}
.headerbox {
  display: flex;
  justify-content: space-between;
}
.mainbox2 {
  display: flex;
}
.mainbox {
  line-height: 50px;
  width: 85%;
  margin: 0 auto;
  height: 50px;
 
  display: flex;
  justify-content: space-between;
}
.shuru {
  margin-top: 50px;
  width: 85%;
  margin: 0 auto;
  height: 250px;
  
  display: flex;
  justify-content: space-between;
}
.el-header {
  width: 100%;
}
.fanyi__nav__logo {
  margin-left: 97px;
  width: 340px;
  height: 72px;
  background: url(../assets/1.png.png) 50% 50% no-repeat;
}
.fanyi__nav__list li a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.input {
  width: 270px;
  height: 38px;
}

.fanyi__nav__list li a:hover {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.el-main {
  width: 100%;

 
}
.el-footer {
  width: 100%;

  border-top: 1px solid #e8e8e8;

}
.main {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.tetxarea {
  font-size: 16px;
  border-radius: 50px
}
.footerbox{
  width: 80%;
   height: 100%;
  display: flex;
 
  justify-content:space-around;
  margin: 0 auto
}
.footerboxleft{
  width: 40%;
  height: 100%;
 
      background: url(../assets/2.png) 0 50% no-repeat;
}
.footerboxright{
  width: 40%;
  height: 100%;
  
  background: url(../assets/3.jpg) 0 50% no-repeat;
}
h4{
  margin-top: 25px
}
</style>