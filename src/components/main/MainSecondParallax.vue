<template>
  <section id="parallax-1">
    <div class="container">
      <div class="cont-list-circle">
        <ul>
          <li>
            <div class="circle cir-border">
              <img src="../../assets/img/main/icon/quote_alt.png" alt="">
            </div>
            <div class="cont-text">
              <h1>Fable Kindergarten is a great place for my daughter to start her schooling experience. It's welcoming and safe and my daughter loves being there.</h1>
              <span class="line"></span>
              <p>Joe R. Hamblen</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainSecondParallax',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#parallax-1 {
  display: flex;
  align-items: center;
  background-image: url('../../assets/img/main/parallax_02.jpg');
  background-attachment: fixed;
  background-size: cover;
  height: 500px;
    .cont-list-circle {
    ul {
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .circle {
        width: 80px;
        height: 80px;
        margin-bottom: 2rem;
      }
      .cir-border {
        border: 2px solid #fff;
      }
      .cont-text {
        text-align: center;
        h1 {
          font-size: 2.5rem;
          padding-bottom: 1rem;
          color: #fff;
        }
        p {
          color: #fff;
        }
        span.line {
          padding: 1px 2rem;
          border-bottom: 1px solid #fff;
        }
        p {
          padding-top: 1.5rem;
        }
      }
    }
  }
}
</style>
