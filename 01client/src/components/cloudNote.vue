<template>
  <div class="cloudNote" v-title data-title="有道云笔记|5000万用户的选择">
    <div class="cn_header">
      <div class="cn_headerBox">
        <a href="/cloudNote" class="logo">
        <img src="url" alt="" srcset="">
        </a>
        <div class="nav"></div>
        <div class="right"></div>
      </div>
    </div>
    <div></div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  data: function() {
    
    return {
      imgUrl:{}
    };
  },

  mounted(){
    this.axios.get('http://localhost:8888/cloudNote').then((res)=>{
      console.log(data)
      this.imgUrl = res.data;
    })
  }
};
</script>
<style scoped>
@import '../assets/css/cloudNote.css'
</style>