<template>
  <div class="index" v-title data-title="有道精品课-为你精选好课">
    <h1>hello</h1>

    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: function() {
    return {};
  },

  methods() {}
};
</script>
<style scoped>
</style>