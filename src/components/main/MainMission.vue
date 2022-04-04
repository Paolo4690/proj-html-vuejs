<template>
  <section id="mission">
    <div class="container">
      <div class="cont-text">
        <div class="cont-btn">
          <div class="btn-mission active">
            <span>Overview</span>
            <div class="arrow"></div>
          </div>
          <div class="btn-mission">
            <span>Our Mission</span>
            <div class="arrow"></div>
          </div>
        </div>
        <h2>Our philosophy is learning through play as we offer a stimulating environment for children.</h2>
        <div class="info">
          <div class="circle even">
            <img src="../../assets/img/main/icon/clock_alt.png" alt="">
          </div>
          <div class="text">
            <h5>Full Day Session</h5>
            <p>Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.</p>
          </div>
        </div>
        <div class="info">
          <div class="circle even">
            <img src="../../assets/img/main/icon/diagram_alt.png" alt="">
          </div>
          <div class="text">
            <h5>Varied Classes</h5>
            <p>Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.</p>
          </div>
        </div>
      </div>
      <div class="cont-slider">
        <div class="img-principal">
          <img src="../../assets/img/main/mission-slide/slide-1.jpg" alt="">
          <div class="arrow left">-</div>
          <div class="arrow right">-</div>
        </div>
        <div class="img-slide">
          <div class="slide-small active">
            <img src="../../assets/img/main/mission-slide/slide-1.jpg" alt="">
          </div>
          <div class="slide-small">
            <img src="../../assets/img/main/mission-slide/slide-2.jpg" alt="">
          </div>
          <div class="slide-small">
            <img src="../../assets/img/main/mission-slide/slide-3.jpg" alt=""></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainMission',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#mission {
  background-color: $back-grey;
  padding: 5rem 0;
  color: $color-grey;
  .container {
    display: flex;
    justify-content: space-between;
    .cont-text {
      display: flex;
      flex-direction: column;
      .cont-btn {
        display: flex;
        align-items: center;
        gap: .5rem;
        .btn-mission {
          position: relative;
          flex: 0 0 140px;
          height: 50px;
          padding: 1rem 1.3rem;
          border-bottom: 1px solid #e8e8e8;
          text-align: center;
          cursor: pointer;
          margin-bottom: 1rem;
          &:hover {
            background-color: $color-secondary;
            border-color: $color-secondary;
            color: #fff;
          }
          &:hover .arrow {
            border-top-color: $color-secondary;
          }
          .arrow {
            position: absolute;
            display: block;
            bottom: -9px;
            left: 50%;
            width: 0px;
            height: 0px;
            margin-left: -8px;
            border-width: 8px 8px 0 8px;
            border-style: solid;
            border-bottom: 0 solid transparent;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }
        }
        .active {
          background-color: $color-secondary;
          border-color: $color-secondary;
          color: #fff;
        }
        .active .arrow {
          border-top-color: $color-secondary;
        }
      }
      h2 {
        padding: 2rem 0 0;
        font-size: 1.9rem;
      }
      .info {
        display: flex;
        align-items: center;
        padding-top: 2.2rem;
        .circle {
          flex: 0 0 auto;
          width: 80px;
          height: 80px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 1.5rem;
          h5 {
            font-size: 1.5rem;
            padding-bottom: 1rem;
          }
        }
      }
    }
    .cont-slider {
      flex: 0 0 50%;
      .img-principal {
        position: relative;
        width: 100%;
        img {
          width: 100%;
        }
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          line-height: 40px;
          text-align: center;
          width: 40px;
          height: 40px;
          background-color: $color-secondary;
          color: #fff;
        }
        .left {
          left: 0;
        }
        .right {
          right: 0;
        }
      }
      .img-slide {
        display: flex;
        gap: .6rem;
        margin-top: .5rem;
        .slide-small {
          padding-bottom: .5rem;
          border-bottom: 2px solid transparent;
          img {
            width: 100%;
            cursor: pointer;
            &:hover {
              opacity: .8;
            }
          }
        }
        .active {
          border-color: $color-secondary;
        }
      }
    }
  }
}
</style>
