<template>
  <div id="app">
     <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
    mounted () {
    this.$router.push('./index')

  }
}
</script>

<style>

<<<<<<< HEAD
body,div,ul,li{
=======
*{
  margin: 0px;
  padding: 0px}

body{
>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
  margin: 0;
  padding: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
<<<<<<< HEAD
=======
 
>>>>>>> a2192f30034d235973a2df89edb79c2272e5aa39
}
</style>
