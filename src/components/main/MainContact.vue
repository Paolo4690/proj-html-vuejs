<template>
  <section id="contact" class="container">
    <div class="cont-title">
      <h1>Contact Us</h1>
      <span>Our postal address and contact details</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-boxs">
      <div v-for="item in list" :key="item.title" class="box">
        <div class="cont-img">
          <img :src="item.img" alt="">
        </div>
        <div class="cont-text">
          <h4>{{ item.title }}</h4>
          <p>{{ item.text1 }}<br>{{ item.text2 }}<br>{{ item.text3 }}</p>
        </div>
      </div>
    </div>
    <MainForm/>
  </section>
</template>

<script>
import MainForm from './MainForm.vue'

import img1 from '../../assets/img/main/icon/envelope.png'
import img2 from '../../assets/img/main/icon/mobile.png'
import img3 from '../../assets/img/main/icon/clock.png'
import img4 from '../../assets/img/main/icon/document.png'

export default {
  name: 'MainContact',
  components: {
    MainForm,
  },
  data () {
    return {
      list: [
        {
          img: img1,
          title: 'Postal Address',
          text1: 'Fable Care Center',
          text2: '85 Fentiman Ave',
          text3: 'Ottawa, ON K1S 0T7',
        },
        {
          img: img2,
          title: 'Phone & E-mail',
          text1: 'Phone: 1-800-64-38',
          text2: 'Fax: 1-800-64-39',
          text3: 'office@fable.com',
        },
        {
          img: img3,
          title: 'Business Hours',
          text1: 'Monday – Friday',
          text2: '8.00 am – 5.00 pm',
          text3: 'Weekend Close',
        },
        {
          img: img4,
          title: 'Sessions',
          text1: 'Mornings, 8 am – 12 noon',
          text2: 'Afternoons, 1 pm – 5 pm',
          text3: 'Full Day, 8 am – 5 pm',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#contact {
  padding-bottom: 3.5rem;
    .cont-title {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: $color-grey;
      padding: 3.5rem 0;
      h1 {
        font-size: 3rem;
      }
      span {
        padding-top: .5rem;
        font-size: 1.2rem;
        padding-bottom: 1.8rem;
      }
    }
  .cont-boxs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
      .box{
          flex: 0 0 25%;
          padding: .7rem 2rem;
          .cont-img {
          position: relative;
          width: 80px;
          height: 80px;
          background-color: #fff;
          margin: auto;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .cont-text {
          text-align: center;
          h4 {
            font-size: 1.5rem;
            padding: 1rem 0;
          }
          p {
            color: $color-grey;
          }
        }
      }
  }
}
</style>
