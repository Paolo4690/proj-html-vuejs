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
  color: #CCCAE2;
}
</style>
