<template>
  <section ref="container" 
    @ps-scroll-y="scrollHanle"
    @ps-scroll-x="scrollHanle"
    @ps-scroll-up="scrollHanle"
    @ps-scroll-down="scrollHanle"
    @ps-scroll-left="scrollHanle"
    @ps-scroll-right="scrollHanle"
    @ps-y-reach-start="scrollHanle"
    @ps-y-reach-end="scrollHanle"
    @ps-x-reach-start="scrollHanle"
    @ps-x-reach-end="scrollHanle">
    <slot></slot>
  </section>
</template>
<style lang="scss">
@import '~perfect-scrollbar/src/css/main.scss';
</style>
<script>
import scrollBar from 'perfect-scrollbar'
// import scrollBar from 'psScrollbar'
export default {
  props: {
    settings: {
      default: undefined
    }
  },
  methods: {
    scrollHanle(evt) {
      this.$emit(evt.type, evt)
    },update(){
        let container = this.$refs.container;
        scrollBar.update(container)
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
    let container = this.$refs.container,
      width = container.offsetWidth,
      height = container.offsetHeight

    if (width != this.width || height != this.width) {
      scrollBar.update(container)
    }
  }
}
</script>
