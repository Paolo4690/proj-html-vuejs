<template>
    <div class="slider">
      <div class="img1">
        <img src="../../assets/img/main/jumbo-slide/slider_slide3_img2.png" alt="">
      </div>
      <div class="img2">
        <img src="../../assets/img/main/jumbo-slide/slider_slide3_img3.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'MainJumbo',

}
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  background-image: url('../../assets/img/main/jumbo-slide/slider_slide3_background.png');
  background-size: contain;
  height: 500px;
  .img1, .img2 {
    position: absolute;
    img {
      width: 100%;
    }
  }
  .img1 {
    width: 150px;
    bottom: 10%;
    left: 40%;
  }
  .img2 {
    width: 100px;
    bottom: 10%;
    right: 25%;
  }
}
</style>
