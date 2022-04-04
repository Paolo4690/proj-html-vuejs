<template>
  <section id="gallery">
    <div class="box-img">
      <img src="../../assets/img/main/gallery/gallery_01-690x506.jpg" alt="">
      <div class="plus"></div>
    </div>
    <div class="box-img">
      <img src="../../assets/img/main/gallery/gallery_02-690x506.jpg" alt="">
      <div class="plus"></div>
    </div>
    <div class="box-img">
      <img src="../../assets/img/main/gallery/gallery_03-690x506.jpg" alt="">
      <div class="plus"></div>
    </div>
    <div class="box-img">
      <img src="../../assets/img/main/gallery/gallery_04-690x506.jpg" alt="">
      <div class="plus"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainGallery',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#gallery {
  display: flex;
  .box-img {
    position: relative;
    width: 25%;
    cursor: pointer;
      &:hover .plus {
        opacity: 1;
    }
    img {
      width: 100%;
      display: block;
    }
    .plus {
      opacity: 0;
      transition: opacity .3s;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-image: url('../../assets/img/main/gallery/image_overlay.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-color: rgba($color: #56509F, $alpha: .5);
      transform: translate(-50%, -50%);
    }
  }
}
</style>
