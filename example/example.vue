<template>
  <div id="app">
    <VuePerfectScrollbar ref="ps" class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
      <!-- <img src="./assets/azusa.jpg" width="1280" height="720" :class="{bigger:sizeChange}"> -->
      <img ref="imgnode" src="./assets/azusa.jpg" width="1280" height="720">
    </VuePerfectScrollbar>
    <template v-if="sizeChange">
      this is a test
    </template>
  </div>
</template>
<script>
// import VuePerfectScrollbar from '../dist'
import VuePerfectScrollbar from '../index.vue'
export default {
  components: {
    VuePerfectScrollbar
  },
  name: 'app',
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
      },
      sizeChange: false,
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
  mounted() {
    setTimeout(() => {
      //Can not trigger the update, because it is not done through vue reactivity system
      this.$refs.imgnode.className = 'bigger'

      //you can trigger the update of of perfect-scrollbar like this
      this.$refs.ps.update()
    }, 3000)
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

.bigger {
  width: 1280px * 2;
  height: 720px * 2;
}
</style>
