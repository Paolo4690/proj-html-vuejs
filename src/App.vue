<template>
  <div id="app">
    <HeaderFable />
    <MainFable />
    <FooterFable />
    <div class="arrow-top">
      <a href="#app"><img src="./assets/img/go_to_top.png" alt=""></a>
    </div>
  </div>
</template>

<script>
import HeaderFable from './components/HeaderFable.vue'
import MainFable from './components/MainFable.vue'
import FooterFable from './components/FooterFable.vue'

export default {
  name: 'App',
  components: {
    HeaderFable,
    MainFable,
    FooterFable
  }
}
</script>

<style lang="scss">
@import './assets/styles/style';
#app {
  position: relative;
  .arrow-top {
    position: fixed;
    top: 91vh;
    right: 40px;
    width: 45px;
    height: 45px;
    background-color: rgba($color: #554e9e, $alpha: .6);
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
