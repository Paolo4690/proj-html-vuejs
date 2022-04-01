<template>
  <div id="app">
    <HeaderFable />
    <MainFable />
    <FooterFable />
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

</style>
