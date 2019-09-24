<template>
  <div class="translateForm">
    <h1>在线翻译</h1>
    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate"
      placeholder="请输入需要翻译的内容：" >
      <select v-model="language">
      <option value="en">English</option>
      <option value="ru">俄罗斯语</option>
      <option value="ko">韩语</option>
      <option value="ja">日语</option>
      <option value="ar">阿拉伯语</option>
      <option value="de">德语</option>
      <option value="ms">马来语</option>
      <option value="la">拉丁语</option>
      <option value="fr">法语</option>
      <option value="es">西班牙语</option>
      <option value="th">泰语</option>
      
    </select>
    <input type="submit" value="翻译" >
    </form>
    
  </div>
</template>
<script>

export default {
  name: "translateForm",
  data: function() {
    return {
      textToTranslate: "",
      language:""
    };
  },

  methods: {
    formSubmit: function(e) {
      //事件注册
      this.$emit('formSubmit',this.textToTranslate,this.language);
      e.preventDefault();
    }
  }
};
</script>
<style scoped>
</style>