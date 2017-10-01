<template>
  <div class="panel">
    <h2>
      <router-link to="/mysite">mysite list</router-link>
      <router-link to="/random">random list</router-link>
    </h2>
    <VuePerfectScrollbar class="scroll-area">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
#app {}

.scroll-area {
  width: 800px;
  height: 600px;
  background: #f9f9f9;
}

.router-link-active {
  color: red;
}
</style>