<template>
  <section ref="container">
    <slot></slot>
  </section>
</template>
<style lang="scss">
@import '~perfect-scrollbar/src/css/main.scss';
</style>
<script>
import scrollBar from 'perfect-scrollbar'
export default {
  props: {
    settings: {
      default: undefined
    }
  },
  mounted() {
    let container = this.$refs.container
    this.width = container.offsetWidth
    this.height = container.offsetHeight
    scrollBar.initialize(container, this.settings)
  },
  beforeDestroy() {
    scrollBar.destroy(this.$refs.container)
  },
  updated() {
    let width = container.offsetWidth,
      height = container.offsetHeight

    if (width != this.width || height != this.width) {
      scrollBar.update(this.$refs.container)
    }
  }
}
</script>
