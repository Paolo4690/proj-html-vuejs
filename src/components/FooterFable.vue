<template>
  <footer>
    <div class="footer-top">
      <div class="container">
  <!-- CREARE V-FOR PER LISTE FOOTER          CREARE V-FOR PER LISTE FOOTER        CREARE V-FOR PER LISTE FOOTER -->
        <div class="cont-list">
          <h5>about us</h5>
          <hr>
          <div class="cont-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis placeat facilis. Culpa asperiores recusandae
            </p>
            <img src="../assets/img/footer-img/logo_footer.png" alt="logo fable">
          </div>
        </div>
        <div class="cont-list">
          <h5>about us</h5>
          <hr>
          <div class="cont-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis placeat facilis. Culpa asperiores recusandae
            </p>
            <img src="../assets/img/footer-img/logo_footer.png" alt="logo fable">
          </div>
        </div>
        <div class="cont-list">
          <h5>about us</h5>
          <hr>
          <div class="cont-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis placeat facilis. Culpa asperiores recusandae
            </p>
            <img src="../assets/img/footer-img/logo_footer.png" alt="logo fable">
          </div>
        </div>
        <div class="cont-list">
          <h5>about us</h5>
          <hr>
          <div class="cont-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis placeat facilis. Culpa asperiores recusandae
            </p>
            <img src="../assets/img/footer-img/logo_footer.png" alt="logo fable">
          </div>
        </div>
      </div>
    </div>
    <!-- CREARE COMPONENTE SOCIAL         CREARE COMPONENTE SOCIAL        CREARE COMPONENTE SOCIAL -->
    <div class="cont-social container">
      <div class="square-social">
        <img src="../assets/img/footer-img/behance.png" alt="logo behance">
      </div>
      <div class="square-social">
        <img src="../assets/img/footer-img/dribbble.png" alt="logo dribbble">
      </div>
      <div class="square-social">
        <img src="../assets/img/footer-img/envato.png" alt="logo envato">
      </div>
      <div class="square-social">
        <img src="../assets/img/footer-img/facebook.png" alt="logo facebook">
      </div>
      <div class="square-social">
        <img src="../assets/img/footer-img/twitter.png" alt="logo twitter">
      </div>
    </div>
    <!-- CREARE COMPONENTE COPYRIGHT???        CREARE COMPONENTE COPYRIGHT???       CREARE COMPONENTE COPYRIGHT???-->
    <div class="copyright">
      <span>Lorem ipsum dolor sit amet consectetur </span>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'FooterFable',
  data() {
    return {

    }
  },
  props: {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/partial/variables';
footer {
  color: #999999;
  .footer-top {
    padding: 2rem 0;
    background-image: url('../assets/img/pattern.png');
    .container {
      display: flex;
      .cont-list {
        display: flex;
        flex-direction: column;
        flex: 0 0 25%;
        h5 {
          font-weight: 500;
          color: #fff;
          text-transform: uppercase;
          padding-bottom: .5rem;
        }
        hr {
          width: 15%;
        }
      }
      .cont-info {
        padding: 1rem 2rem 2rem 0;
        p {
          font-size: .8rem;
        }
        img {
          padding-top: 1rem;
          width: 75%;
        }
      }
    }
  }
  .cont-social {
    display: flex;
    justify-content: center;
    gap: 2px;
    padding: 1rem 0;
    .square-social{
      width: 35px;
      height: 35px;
      background-color: $color-secondary;
      img {
        width: 100%;
      }
    }
  }
  .copyright {
    width: 1000px;
    text-align: center;
    margin: 0 auto;
    font-size: .7rem;
  }
}
</style>
