# `vue-perfect-scrollbar`

[perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) vue version

## 1.install

```
npm install vue-perfect-scrollbar
```

## 2. example

### 2.1 base example

```html
<template>
  <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHandle">
    <img src="./assets/azusa.jpg" height="720" width="1280" alt="">
  </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    VuePerfectScrollbar
  },
  name: 'app',
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    scrollHandle(evt) {
      console.log(evt)
    }
  }
}

</script>
<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>

```
Also,you can clone this repository to run the example:

```shell
git clone git@github.com:lecion/vue-perfect-scrollbar.git
cd vue-perfect-scrollbar
npm install
npm run example
```
### 2.2 example with vuerouter
```shell
git clone git@github.com:lecion/vue-perfect-scrollbar.git
cd vue-perfect-scrollbar
npm install
npm run example:vuerouter
```

## 3. props

### settings:please refer to [optional-parameters of perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar#optional-parameters)

## 4. events

please refer to [events of perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar#events)

## 5. use vue and webpack
you can do it like this:

### install
```shell
npm install sass-loader node-sass --save-dev
npm install vue-perfect-scrollbar perfect-scrollbar --save
```

### use
```js
import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue'
export default {
  components: {
    VuePerfectScrollbar
  },
  //...
}
```

## License

[MIT](https://github.com/lecion/vue-perfect-scrollbar/blob/master/LICENSE.md)
