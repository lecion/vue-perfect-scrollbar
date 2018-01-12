import 'perfect-scrollbar/css/perfect-scrollbar.css'
import './index.css'
import PerfectScrollbar from 'perfect-scrollbar'

export default 

// require('perfect-scrollbar/css/perfect-scrollbar.css')
// require('./index.css')

// const PerfectScrollbar = require('perfect-scrollbar')

// module.exports =

  {
    name: 'vue-perfect-scrollbar',
    props: {
      settings: {
        type: Object,
        default () {
          return {}
        },
      },

      swicher: {
        type: Boolean,
        default: true,
      },

      tag: {
        type: String,
        default: 'div',
      }
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
      __evt_handle(evt) {
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

    render(createElement, context) {

      const data = {
        class: {
          'v-p-s': true,
        },
        on: {
          'ps-scroll-y': this.__evt_handle,
          'ps-scroll-x': this.__evt_handle,
          'ps-scroll-up': this.__evt_handle,
          'ps-scroll-down': this.__evt_handle,
          'ps-scroll-left': this.__evt_handle,
          'ps-scroll-right': this.__evt_handle,
          'ps-y-reach-start': this.__evt_handle,
          'ps-y-reach-end': this.__evt_handle,
          'ps-x-reach-start': this.__evt_handle,
          'ps-x-reach-end': this.__evt_handle,
        },
      }

      return createElement(
        this.tag,
        data,
        this.$slots.default
      )
    },
  }