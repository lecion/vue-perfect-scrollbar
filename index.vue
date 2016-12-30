<template>
  <section class="ps-scoller">
    <slot></slot>
  </section>
</template>
<style lang="scss">
@import '~perfect-scrollbar/src/css/main.scss';
</style>
<script>
import PsScroll from 'perfect-scrollbar'

function vuePScroller(settings) {
  return {
    methods: {},
    mounted() {
      PsScroll.initialize(this.$el, settings)
    },
    beforeDestroy() {
      PsScroll.destroy(this.$el)
    }
  }
}
export default vuePScroller
</script>
