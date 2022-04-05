<template>
    <div class="slider">
      <!-- SLIDE1  -->      <!-- SLIDE1  -->      <!-- SLIDE1  -->      <!-- SLIDE1  -->
      <img class="img1" src="../../assets/img/main/jumbo-slide/slider_slide1_img1.png" alt="">
      <img class="img2" src="../../assets/img/main/jumbo-slide/slider_slide1_img2.png" alt="">
      <img class="txt" src="../../assets/img/main/jumbo-slide/fable.png" alt="">
      <h1>Perfect education</h1>
      <h2>For You Child</h2>
      <div class="btn">
        <span>SEND MESSAGE</span>
      </div>
      <img class="icon1" src="../../assets/img/main/jumbo-slide/slider_icon1.png" alt="">
      <img class="icon2" src="../../assets/img/main/jumbo-slide/slider_icon2.png" alt="">
      <img class="icon3" src="../../assets/img/main/jumbo-slide/slider_icon3.png" alt="">
      <img class="icon4" src="../../assets/img/main/jumbo-slide/slider_icon4.png" alt="">
      <img class="icon5" src="../../assets/img/main/jumbo-slide/slider_icon5.png" alt="">
      <img class="icon6" src="../../assets/img/main/jumbo-slide/slider_icon6.png" alt="">
      <img class="icon7" src="../../assets/img/main/jumbo-slide/slider_icon7.png" alt="">
      <img class="icon8" src="../../assets/img/main/jumbo-slide/slider_icon8.png" alt="">
      <img class="icon9" src="../../assets/img/main/jumbo-slide/slider_icon9.png" alt="">
      <!-- SLIDE1  -->      <!-- SLIDE1  -->      <!-- SLIDE1  -->      <!-- SLIDE1  -->
      <!-- SLIDE2  -->      <!-- SLIDE2  -->      <!-- SLIDE2  -->      <!-- SLIDE2  -->
      <img class="img3" src="../../assets/img/main/jumbo-slide/slider_slide2_img1.png" alt="">
      <img class="img4" src="../../assets/img/main/jumbo-slide/slider_slide2_img2.png" alt="">
      <img class="icon10" src="../../assets/img/main/jumbo-slide/slider_icon10.png" alt="">
      <img class="icon11" src="../../assets/img/main/jumbo-slide/slider_icon11.png" alt="">
      <img class="icon12" src="../../assets/img/main/jumbo-slide/slider_icon12.png" alt="">
      <img class="icon13" src="../../assets/img/main/jumbo-slide/slider_icon13.png" alt="">
      <img class="icon14" src="../../assets/img/main/jumbo-slide/slider_icon14.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'MainJumbo',
  data() {
    return {
      slide1: true,
      slide2: false,
      slide3: false,
    }
  }

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
.slider {
  position: relative;
  background-image: url('../../assets/img/main/jumbo-slide/slider_slide1_background.png');
  background-size: contain;
  height: 600px;
  animation: change 21s linear;
  @keyframes change {
    0% {
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide1_background.png');
    }
    32% {
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide1_background.png');
    }
    33% {
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide2_background.png');
    }
    66% {
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide2_background.png');
    }
    67%{
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide3_background.png');
    }
    100%{
      background-image: url('../../assets/img/main/jumbo-slide/slider_slide3_background.png');
    }
  }

  img {
    position: absolute;
    width: 40px;
    transform-origin: left;
    opacity: 1;
  }
  h1,
  h2,
  .txt {
    position: absolute;
  }
  .btn {
    position: absolute;
    display: flex;
    align-items: center;
    width: 140px;
    margin: 1.5rem auto 1rem;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    padding: .9rem ;
    background-color: $color-secondary;
    color: #fff;
    cursor: pointer;
      &:hover {
        background-color: $color-primary;
      }
      span {
        margin: 0 auto;
      }
  }
  .img1 {
    top: 19vh;
    left: 13vw;
    width: 435px;
    opacity: 0;
    animation: img1 7s linear;
  }
  @keyframes img1 {
    0% {
      top:16vh;
      left: 14vw;
      opacity: 0;
    }
    8% {
      top: 19vh;
      left: 17vw;
      opacity: 1;
    }
    95%{
      top: 19vh;
      left: 17vw;
      opacity: 1;
    }
  }
  .img2 {
    top: 17vh;
    right: 12vw;
    width: 435px;
    opacity: 0;
    animation: img2 7s linear ;
  }
  @keyframes img2 {
    0% {
      top: 14vh;
      right: 12vw;
      opacity: 0;
    }
    8% {
      top: 14vh;
      right: 12vw;
      opacity: 0;
    }
    16% {
      top: 17vh;
      right: 15vw;
      opacity: 1;
    }
    95% {
      top: 17vh;
      right: 15vw;
      opacity: 1;
    }
  }
  h1,
  h2 {
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.6rem;
  }
  img.txt {
    width: 300px;
    top: 17vh;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    animation: txt 7s linear ;
  }
  @keyframes txt {
    0% {
      top: 17vh;
      opacity: 0;
    }
    16% {
      top: 17vh;
      opacity: 0;
    }
    24% {
      top: 21vh;
      opacity: 1;
    }
    95% {
      top: 21vh;
      opacity: 1;
    }
  }
  h1 {
    font-weight: 700;
    top:29vh;
    opacity: 0;
    animation: h1 7s linear ;
  }
  @keyframes h1 {
    0% {
      top: 29vh;
      opacity: 0;
    }
    16% {
      top: 29vh;
      opacity: 0;
    }
    24% {
      top: 26vh;
      opacity: 1;
    }
    95% {
      top: 26vh;
      opacity: 1;
    }
  }
  h2 {
    font-weight: 300;
    top: 35vh;
    opacity: 0;
    animation: h2 7s linear ;
  }
  @keyframes h2 {
    0% {
      top: 35vh;
      opacity: 0;
    }
    24% {
      top: 35vh;
      opacity: 0;
    }
    32% {
      top: 32vh;
      opacity: 1;
    }
    95% {
      top: 32vh;
      opacity: 1;
    }
  }
  .btn {
    top:38vh;
    left: 50%;
    opacity: 0;
    transform: scale(2) translateX(-50%);
    transform-origin: left;
    animation: btn 7s linear;
  }
  @keyframes btn {
    0% {
      transform: scale(2) translateX(-50%);
      opacity: 0;
    }
    32% {
      transform: scale(2) translateX(-50%);
      opacity: 0;
    }
    40% {
      transform: scale(1) translateX(-50%);
      opacity: 1;
    }
    95% {
      transform: scale(1) translateX(-50%);
      opacity: 1;
    }
  }
  .icon1 {
    top: 42vh;
    left: 15vw;
    opacity: 0;
    animation: icon-anim 4s linear 3s;
  }
  .icon2 {
    top: 25vh;
    left: 17vw;
    opacity: 0;
    animation: icon-anim 3.2s linear 3.8s;
  }
  .icon3 {
    top: 28vh;
    left: 33vw;
    opacity: 0;
    animation: icon-anim 3.6s linear 3.4s;
  }
  .icon4 {
    top: 41vh;
    left: 32vw;
    opacity: 0;
    animation: icon-anim 3.3s linear 3.7s;
  }
  .icon5 {
    top: 25vh;
    right: 40vw;
    opacity: 0;
    animation: icon-anim 3.4s linear 3.6s;
  }
  .icon6 {
    top: 31vh;
    right: 35vw;
    opacity: 0;
    animation: icon-anim 3.6s linear 3.4s;
  }
  .icon7 {
    top: 41vh;
    right: 34vw;
    opacity: 0;
    animation: icon-anim 4s linear 3s;
  }
  .icon8 {
    top: 25vh;
    right: 18vw;
    opacity: 0;
    animation: icon-anim 3.5s linear 3.5s;
  }
  .icon9 {
    top: 37vh;
    right: 15vw;
    opacity: 0;
    animation: icon-anim 3.3s linear 3.7s;
  }
  @keyframes icon-anim {
    0% {
      width: 70px;
      opacity: 0;
    }
    5% {
      transform: translatey(-10vh);
      width: 70px;
      opacity: 1;
    }
    90% {
      transform: translatey(-10vh);
      width: 70px;
      opacity: 1;
    }
  }
  // SLIDER2   // SLIDER2   // SLIDER2   // SLIDER2   // SLIDER2   // SLIDER2
  .img3 {
    top: 13vh;
    left: 46vw;
    width: 400px;
    opacity: 0;
    z-index: 1;
    animation: img3 7s linear 7s;
  }
  @keyframes img3 {
    0% {
      left: 50vw;
      opacity: 0;
    }
    8% {
      left: 46vw;
      opacity: 1;
    }
    95%{
      left: 46vw;
      opacity: 1;
    }
  }
  .img4 {
    top: 13vh;
    right: 16vw;
    width: 400px;
    opacity: 0;
    animation: img4 7s linear 7s;
  }
  @keyframes img4 {
    0% {
      right: 16vw;
      opacity: 0;
    }
    16% {
      right: 20vw;
      opacity: 1;
    }
    95%{
      right: 20vw;
      opacity: 1;
    }
  }
}
</style>
