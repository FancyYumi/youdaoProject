<template >
  <div id="index" >
  hello
    <!-- <translateForm v-on:formSubmit="translateText"></translateForm> -->
    <div>
      <!-- <h2>{{translatedText}}</h2> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// import translateForm from "./translateForm";
export default {
  name: "index",
  data: function() {
    return {
      translatedText: ""
    };
  },
  components: {
    // translateForm
  },
  methods: {
    translateText: function(text, language) {
      let source = text; //要翻译的内容
      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=zh-${language}&key=trnsl.1.1.20190924T033746Z.4cb4c7ecce0cfb43.346aebc6960c70a9d1c8cce69af049058a0867a3
            &text=${source}`;
      axios
        .get(url)
        .then(res => {
          this.translatedText = res.data.text[0]; //翻译结果
        })
        .catch(err => {
          alert("请求失败");
        });
    }
  }
};
</script>
<style scoped>
</style>