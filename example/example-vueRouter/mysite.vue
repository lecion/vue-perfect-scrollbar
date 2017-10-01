<template>
  <div class="random-list">
    mysite is：
    <a href="https://fanqier.com">番茄表单</a>
    <VuePerfectScrollbar class="inner-perfect-scrollbar">
      I am the inner perfect-scrollbar.
      <br/> Every time when router change,I also change my content.
      <br/> And my parent Vue components is
      <a target="_blank" href="https://cn.vuejs.org/v2/api/#keep-alive">Keep Alive</a>.
      <br/> However, I can update my scrollbar length,becase i register the hook of
      <a target="_blank" href="https://cn.vuejs.org/v2/api/#activated">activated</a> and
      <a target="_blank" href="https://cn.vuejs.org/v2/api/#deactivated">activated</a>.
      <br/>
      <br/> {{innerContent}}
    </VuePerfectScrollbar>
    <ul>
      <li v-for="({name,link},i) in list" :key="i">
        this is my site:
        <a :href="link" target="_blank">{{name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

const _randomSeed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.'

export default {
  components: {
    VuePerfectScrollbar,
  },

  methods: {
    randomHeightContentGen() {
      let size = Math.ceil(Math.random() * 5000),
        len = _randomSeed.length,
        str = ''

      while (size-- > 0) {
        if (size % 10 === 0) {
          str += ' '
        }
        str += _randomSeed[Math.floor(Math.random() * len)]
      }

      return str
    },
  },

  data() {
    let list = [],
      i = 100

    while (i--) {
      list.push({
        name: '番茄表单',
        link: 'https://fanqier.com',
      })
    }

    const innerContent = this.randomHeightContentGen()

    return { list, innerContent }
  },

  activated() {
    this.innerContent = this.randomHeightContentGen()
  },
}
</script>
<style lang="scss">
.inner-perfect-scrollbar {
  position: relative;
  margin: 10px;
  padding: 10px;
  width: 500px;
  height: 400px;
  background: #99583D;
  color: #ffffff;
}
</style>