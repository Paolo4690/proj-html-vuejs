<template>
  <footer>
    <FooterTop />
    <FooterSocial />
  </footer>
</template>

<script>
import FooterTop from './footer/FooterTop.vue'
import FooterSocial from './footer/FooterSocial.vue'

export default {
  name: 'FooterFable',
  components: {
    FooterTop,
    FooterSocial
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/partial/variables';
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  color: #CCCAE2;
}
</style>
