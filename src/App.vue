<!--
 * @Descripttion: 
 * @Author: luxiyuan
 * @Date: 2021-07-15 15:53:30
 * @LastEditors: luxiyuan
 * @LastEditTime: 2021-07-15 17:11:22
-->
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
