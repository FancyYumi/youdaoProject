<template >
  <div class="index" >
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