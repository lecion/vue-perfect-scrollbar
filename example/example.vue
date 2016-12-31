<template>
  <div id="app">
    <VuePerfectScrollbar class="scroll-area">
      <img src="./assets/azusa.jpg" height="720" width="1280" alt="">
    </VuePerfectScrollbar>
  </div>
</template>
<script>


import VuePerfectScrollbar from '../dist'

console.log(VuePerfectScrollbar)

export default {
  components: {
    VuePerfectScrollbar
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>
