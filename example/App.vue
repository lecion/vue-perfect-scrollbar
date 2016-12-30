<template>
  <div id="app">
    <vue-ps-scroll class="container">
      <img src="./img/azusa.jpg" height="720" width="1280">
    </vue-ps-scroll>
  </div>
</template>
<script>
import vuePsScroll from '../index.vue'

export default {
  components: {
    vuePsScroll
  }
}
</script>
<style>
.container {
  width: 300px;
  height: 200px;
  position: relative;
}
</style>
