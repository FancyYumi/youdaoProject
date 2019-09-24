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
              <a href="/cloudNote">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      imgUrl: [],
      navTitle: [
        { id: 0, title: "云笔记" },
        { id: 1, title: "笔记会员" },
        { id: 2, title: "云协作" },
        { id: 3, title: "下载" }
      ],
      isTitle: "云笔记"
    };
  },

  methods: {
    selected: function(title) {
      this.isTitle = title;
    }
  },

  mounted() {
    let that = this;
    this.axios.get("http://localhost:8888/cloudNote").then(res => {
      that.imgUrl = res.data;
    });
  }
};
</script>
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/cloudNote.css";
</style>