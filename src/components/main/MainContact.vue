<template>
  <section id="contact" class="container">
    <div class="cont-title">
      <h1>Contact Us</h1>
      <span>Our postal address and contact details</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-boxs">
      <div class="box">
        <div class="cont-img">
          <img src="../../assets/img/main/icon/envelope.png" alt="">
        </div>
        <div class="cont-text">
          <h4>Postal Address</h4>
          <p>Fable Care Center <br> 85 Fentiman Ave <br> Ottawa, ON K1S 0T7</p>
        </div>
      </div>
      <div class="box">
        <div class="cont-img">
          <img src="../../assets/img/main/icon/mobile.png" alt="">
        </div>
        <div class="cont-text">
          <h4>Phone & E-mail</h4>
          <p>Phone: 1-800-64-38 <br> Fax: 1-800-64-39 <br> office@fable.com</p>
        </div>
      </div>
      <div class="box">
        <div class="cont-img">
          <img src="../../assets/img/main/icon/clock.png" alt="">
        </div>
        <div class="cont-text">
          <h4>Business Hours</h4>
          <p>Monday – Friday <br> 8.00 am – 5.00 pm Weekend Close</p>
        </div>
      </div>
      <div class="box">
        <div class="cont-img">
          <img src="../../assets/img/main/icon/document.png" alt="">
        </div>
        <div class="cont-text">
          <h4>Sessions</h4>
          <p>Mornings, 8 am – 12 noon <br> Afternoons, 1 pm – 5 pm <br> Full Day, 8 am – 5 pm</p>
        </div>
      </div>
    </div>
    <MainForm/>
  </section>
</template>

<script>
import MainForm from './MainForm.vue'

export default {
  name: 'MainContact',
  components: {
    MainForm,
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
