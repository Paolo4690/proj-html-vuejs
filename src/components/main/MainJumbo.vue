<template>
    <div class="slider">
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

    </div>
</template>

<script>
export default {
  name: 'MainJumbo',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
.slider {
  position: relative;
  background-image: url('../../assets/img/main/jumbo-slide/slider_slide1_background.png');
  background-size: contain;
  height: 600px;
  img {
    position: absolute;
    width: 70px;
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
    left: 17vw;
    width: 435px;
    opacity: 1;
    animation: img1 .5s linear;
  }
  @keyframes img1 {
    0% {
      top:16vh;
      left: 14vw;
      opacity: 0;
    }
  }
  .img2 {
    top: 17vh;
    right: 15vw;
    width: 435px;
    opacity: 1;
    animation: img2 1s linear ;
  }
  @keyframes img2 {
    0% {
      top: 14vh;
      right: 15vw;
      opacity: 0;
    }
    50% {
      top: 14vh;
      right: 12vw;
      opacity: 0;
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
    top: 21vh;
    left: 50%;
    opacity: 1;
    transform: translateX(-50%);
    animation: txt 1.5s linear ;
  }
  @keyframes txt {
    0% {
      top: 17vh;
      opacity: 0;
    }
    75% {
      top: 17vh;
      opacity: 0;
    }
  }
  h1 {
    font-weight: 700;
    top:26vh;
    opacity: 1;
    animation: h1 1.5s linear ;
  }
  @keyframes h1 {
    0% {
      top: 29vh;
      opacity: 0;
    }
    75% {
      top: 29vh;
      opacity: 0;
    }
  }
  h2 {
    font-weight: 300;
    top: 32vh;
    animation: h2 2s linear ;
  }
  @keyframes h2 {
    0% {
      top: 32vh;
      opacity: 0;
    }
    75% {
      top: 35vh;
      opacity: 0;
    }
  }
  .btn {
    top:38vh;
    left: 50%;
    transform: scale(1) translateX(-50%);
    transform-origin: left;
    animation: btn 2.5s linear;
  }
  @keyframes btn {
    0% {
      opacity: 0;
    }
    80% {
    transform: scale(2) translateX(-50%);
      opacity: 0;
    }
  }
  .icon1 {
    top: 32vh;
    left: 15vw;
    animation: icon-anim 3s linear;
  }
  .icon2 {
    top: 15vh;
    left: 17vw;
    animation: icon-anim 3.3s linear;
  }
  .icon3 {
    top: 18vh;
    left: 33vw;
    animation: icon-anim 3.6s linear;
  }
  .icon4 {
    top: 31vh;
    left: 32vw;
    animation: icon-anim 3.9s linear;
  }
  .icon5 {
    top: 15vh;
    right: 40vw;
    animation: icon-anim 3.6s linear;
  }
  .icon6 {
    top: 21vh;
    right: 35vw;
    animation: icon-anim 3.3s linear;
  }
  .icon7 {
    top: 31vh;
    right: 34vw;
    animation: icon-anim 3s linear;
  }
  .icon8 {
    top: 15vh;
    right: 18vw;
    animation: icon-anim 3.9s linear;
  }
  .icon9 {
    top: 27vh;
    right: 15vw;
    animation: icon-anim 4.1s linear;
  }
  @keyframes icon-anim {
    0% {
      transform: translatey(10vh);
      width: 20px;
      opacity: 0;
    }
    85% {
      transform: translatey(10vh);
      width: 20px;
      opacity: 0;
    }
  }
}
</style>
