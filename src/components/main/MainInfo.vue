<template>
  <section id="info">
    <div class="container">
      <div class="left">
        <h2>We have been educating children for over fifteen years. Our goal is to create a place that engages each child.</h2>
        <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.</p>
        <ul>
          <li>Comprehensive reporting on individual achievement</li>
          <li>Educational field trips and school presentations</li>
          <li>Individual attention in a small-class setting</li>
          <li>Learning program with after-school care</li>
          <li>Opportunities to carry out scientific investigations</li>
          <li>Positive learning environment for your child</li>
        </ul>
      </div>
      <div class="right">
        <div class="cont-box">
          <div class="circle">
            <img src="../../assets/img/main/icon/toy.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Learning & Fun</h4>
            <p>Praesent modea est gravida node vehicula luctus.</p>
          </div>
        </div>
        <div class="cont-box">
          <div class="circle">
            <img src="../../assets/img/main/icon/meal.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Healthy Meals</h4>
            <p>Terminal interdum a eleifend maecenas est morbi.</p>
          </div>
        </div>
        <div class="cont-box">
          <div class="circle">
            <img src="../../assets/img/main/icon/school.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Friendly Place</h4>
            <p>Terminal interdum a eleifend maecenas est morbi.</p>
          </div>
        </div>
        <div class="cont-box">
          <div class="circle">
            <img src="../../assets/img/main/icon/shield.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Children Safety</h4>
            <p>Praesent modea est gravida node vehicula luctus.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainInfo',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#info {
  background-color: $back-grey;
  padding: 5rem 0;
  color: $color-grey;
  .container {
    display: flex;
    .left {
      width: 50%;
      padding-right: 1.2rem;
      h2 {
        font-size: 1.8rem;
        margin-bottom: 1.8rem;
      }
      p {
        margin-bottom: 1.8rem;
      }
      li {
        background-image: url('../../assets/img/style_1.png');
        background-position:  0 2px;
        background-repeat: no-repeat;
        background-size: 17px;
        padding-left: 40px;
        padding-bottom: .6rem;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      padding-left: 1.2rem;
        .cont-box{
          flex: 0 0 50%;
          padding: .7rem;
          .circle {
          width: 80px;
          height: 80px;
          background-color: #fff;
          margin: auto;
        }
        .cont-text {
          text-align: center;
          h4 {
            font-size: 1.5rem;
            padding: 1rem 0;
          }
        }
      }

    }
  }
}

</style>
