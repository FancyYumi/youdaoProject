<template>
  <div class="translateForm">
    <form v-on:submit="formSubmit">
      <select class="select1" v-model="language">
        <option :value="Langua.id" v-for="Langua in options" :key="Langua">{{Langua.name}}</option>
      </select>
      <div class="border">
        <input class="text" type="text" v-model="textToTranslate" placeholder="在此输入要翻译的单词或文字" />
      </div>
      <button class="submit" type="submit">翻译</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "translateForm",
  data: function() {
    return {
      textToTranslate: "",
      language: "",
      options: [
        { id: "en", name: "英语" },
        { id: "ru", name: "俄罗斯语" },
        { id: "ko", name: "韩语" },
        { id: "ja", name: "日语" },
        { id: "de", name: "德语" },
        { id: "fr", name: "法语" },
        { id: "ar", name: "阿拉伯语" },
        { id: "ms", name: "马来语" },
        { id: "la", name: "拉丁语" },
        { id: "es", name: "西班牙语" },
        { id: "th", name: "泰语" }
      ]
    };
  },
  created() {
    this.language = this.options[0].id;
  },

  methods: {
    formSubmit: function(e) {
      //事件注册
      this.$emit("formSubmit", this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
};
</script>
<style scoped>
button {
  cursor: pointer;
}
.translateForm form {
  margin: auto;
  width: 644px;
  position: relative;
}
.select1 {
  position: absolute;
  left: 5px;
  top: 5px;
  margin-right: 10px;
  width: 105px;
  height: 33px;
  border-radius: 7px;
  background-color: #f3f3f3;
  padding-left: 30px;
  border: none;
  outline: 0;
  cursor: pointer;
}
.select1 option {
  outline: 0;
  border: none;
}
.text {
  outline: 0;
  border: none;
  width: 383px;
  font-size: 13px;
  margin-left: 115px;
  margin-top: 12px;
}
.border {
  width: 514px;
  height: 42px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  float: left;
}
.submit {
  float: left;
  height: 44px;
  width: 113px;
  text-align: center;
  background-color: #dd0a20;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
  outline: 0;
}
</style>