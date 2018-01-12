<template>
  <div>
    <h1>Hello world!</h1>
    <Ps class="wrap" :settings="settings" @ps-scroll-y="evtTest">
      <h2 v-for="i in 100"> this is a test;test test test test test test test test </h2>
      <div>author:degfy</div>
    </Ps>
  </div>
</template>
<script>
// import Ps from 'vue-perfect-scrollbar'
import Ps from '../../../dist/vps.min.js'


export default {
  components: {
    Ps,
  },
  data() {
    return {
      settings: {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
      }
    }
  },

  methods: {
    evtTest(evt) {
      console.log(evt)
    }
  },
  
}
</script>
<style>
.wrap {
  width: 400px;
  height: 300px;
  overflow: hidden;
  border: 1px solid red;
}

.wrap h2 {
  word-break: none;
  white-space: nowrap;
}
</style>