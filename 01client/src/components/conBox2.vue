<template>
  <div class="conBox2">
    <div class="scroll">
      <div class="course" v-for="(item,index) in relist" :key="index">
        <img :src="item.url" />
        <h3>{{item.name}}</h3>
        <div>
          <div class="price free">{{item.price}}</div>
          <div class="name">{{item.author}}</div>
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
  name: "conBox2",
  data: function() {
    return {
      relist: []
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
/* @import "../assets/style/conBox2.css"; */

.scroll {
    width: 628px;
    height: 500px;
    overflow: auto;
  }
.course {
  width: 250px;
  float: left;
  height: 206px;
  margin-right: 20px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.course > img {
  width: 250px;
  height: 150px;
}
.free {
  color: #2fba6b;
}
.price {
  float: left;
  font-size: 16px;
  line-height: 16px;
  color: #e00013;
  font-weight: 700;
  margin-top: 9px;
}
.name {
  float: right;
  font-size: 12px;
  color: #999;
  margin-top: 11px;
  width: 11em;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
h3{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>