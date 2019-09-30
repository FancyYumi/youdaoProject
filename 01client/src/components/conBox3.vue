<template>
  <div class="conBox3">
    <div class="scroll">
      <div class="news"  v-for="(item,index) in relist" :key="index">
        <a href>
          <img :src="item.pic" 
          />
        </a>
        <div class="newsDetail">
          <h3>
            <a href>{{item.title}}</a>
          </h3>
          <p>{{item.summary}}</p>
          <div class="note1">
            <span class="icon_comment"></span>
            <span class="comment">0</span>
            <span class="icon_like"></span>
            <span class="like">0</span>
          </div>
          <div class="note2">
            <span class="type">{{item.type}}</span>
            <span class="date">{{item.date}}</span>
          </div>
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
  name: "conBox3",
  data: function() {
    return {
      relist:[]
    };
  },
 mounted() {
    Vue.axios.get(`http://localhost:8888/relist`).then(response => {
      console.log(response);
      this.relist = response.data;
    });
  },
  methods() {}
};
</script>
<style scoped>
@import "../assets/style/conBox1.css";

</style>