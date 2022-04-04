<template>
  <footer>
    <div class="social container">
      <div class="cont-social">
        <div v-for="item in social" :key="item.name" class="square-social">
          <img :src="item.imgUrl" :alt="'logo' + item.name">
        </div>
      </div>
      <div class="copyright"><span>© Fable - Children Kindergarten WordPress Theme by QuanticaLabs</span></div>
    </div>
  </footer>
</template>

<script>
import behance from '../../assets/img/footer-img/behance.png'
import dribbble from '../../assets/img/footer-img/dribbble.png'
import envato from '../../assets/img/footer-img/envato.png'
import facebook from '../../assets/img/footer-img/facebook.png'
import twitter from '../../assets/img/footer-img/twitter.png'

export default {
  name: 'FooterSocial',
  data() {
    return {
      social: [
        {
          name:'behance',
          imgUrl: behance
        },
        {
          name:'dribbble',
          imgUrl: dribbble
        },
        {
          name:'envato',
          imgUrl: envato
        },
        {
          name:'facebook',
          imgUrl: facebook
        },
        {
          name:'twitter',
          imgUrl: twitter
        },
      ],
    }
  }
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
