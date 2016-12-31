<template>
  <div id="app">
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHanle">
      <img src="./assets/azusa.jpg" height="720" width="1280" alt="">
    </VuePerfectScrollbar>
  </div>
</template>
<script>
import VuePerfectScrollbar from '../dist'

export default {
  components: {
    VuePerfectScrollbar
  },
  name: 'app',
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
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
