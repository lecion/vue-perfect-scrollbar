<template>
  <div class="v-ps" 
    @mouseover.once="update" 
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
  </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar'

export default {
  name: 'vue-perfect-scrollbar',
  props: {
    settings: {
      type: Object,
      default: {},
    },
    swicher: {
      type: Boolean,
      default: true,
    },
  },

  methods: {

    __init() {
      if (!this._ps_bar)
        this._ps_bar = new PerfectScrollbar(this.$el, this.settings)
    },

    __uninit() {
      if (this._ps_bar) {
        this._ps_bar.destroy()
        this._ps_bar = null
      }
    },

    __update() {
      if (this._ps_bar) {
        this._ps_bar.update()
      }
    },

    //deal event 
    /*
      ps-scroll-y
      ps-scroll-x
      ps-scroll-up
      ps-scroll-down
      ps-scroll-left
      ps-scroll-right
      ps-y-reach-start
      ps-y-reach-end
      ps-x-reach-start
      ps-x-reach-end
     */
    scrollHanle(evt) {
      this.$emit(evt.type, evt)
    },

    update() {
      this.__update()
    },
  },

  mounted() {
    if (!this.$isServer) {
      this.__init()
    }
  },

  updated() {
    this.$nextTick(this.update)
  },

  activated() {
    this.__init()
  },

  deactivated() {
    this.__uninit()
  },

  beforeDestroy() {
    this.__uninit()
  },
}
</script>
<style>
@import url('~perfect-scrollbar/css/perfect-scrollbar.css');
#v-ps {
  position: relative;
}
</style>