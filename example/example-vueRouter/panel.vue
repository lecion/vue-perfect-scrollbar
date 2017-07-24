<template>
  <div class="panel">
    <h2>this is panel header</h2>
    <VuePerfectScrollbar class="scroll-area">
      <router-view></router-view>
    </VuePerfectScrollbar>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'panel',
  components: {
    VuePerfectScrollbar,
  },
  mounted() {
    console.log('this is a test')
  }
}
</script>
<style lang="scss">
#app{

}
.scroll-area {
  width: 800px;
  height: 600px;
  background: #f9f9f9;
}
</style>