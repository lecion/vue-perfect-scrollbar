<template>
  <div class="random-list">
    this is random list
    <ul>
      <li v-for="(it,i) in list">{{i}} . the random number is {{it}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    let list = [],
      i = 100
    while (i--) {
      list.push(Math.random())
    }
    return { list }
  }
}
</script>