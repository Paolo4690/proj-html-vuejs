<template>
  <footer>
    <div class="social container">
      <div class="cont-social">
        <div v-for="item in $store.state.social" :key="item.name" class="square-social">
          <img :src="item.imgUrl" :alt="'logo' + item.name">
        </div>
      </div>
      <div class="copyright"><span>© Fable - Children Kindergarten WordPress Theme by QuanticaLabs</span></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSocial',
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
footer {
  color: #CCCAE2;
  .social {
    padding: 2rem 0;
    text-align: center;
    .cont-social {
      display: flex;
      justify-content: center;
      gap: 2px;
      .square-social{
        width: 45px;
        height: 45px;
        background-color: $color-secondary;
        cursor: pointer;
        &:hover {
          background-color: $color-primary;
        }
        img {
          width: 100%;
        }
      }
    }
    .copyright {
      margin-top: 1.2rem;
      font-size: .9rem;
    }
  }
}
</style>
