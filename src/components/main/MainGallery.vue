<template>
  <section id="gallery">
    <div @click="open=true, currentGallery=index" v-for="(item, index) in gallery" :key="index" class="box-img">
      <img :src="item" alt="">
      <div class="plus"></div>
    </div>
    <div v-if="open" :class="open ? 'active' : ''" class="fix-img">
      <div class="cont-img">
        <img :src="gallery[currentGallery]" alt="">
        <img @click="open=false" class="close" src="../../assets/img/main/gallery/close.png" alt="">
        <img @click="prev()" class="prev" src="../../assets/img/main/gallery/prev.png" alt="">
        <img @click="next()" class="next" src="../../assets/img/main/gallery/next.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import imgGallery1 from '../../assets/img/main/gallery/gallery_01.jpg'
import imgGallery2 from '../../assets/img/main/gallery/gallery_02.jpg'
import imgGallery3 from '../../assets/img/main/gallery/gallery_03.jpg'
import imgGallery4 from '../../assets/img/main/gallery/gallery_04.jpg'

export default {
  name: 'MainGallery',
  data() {
    return {
      open: false,
      currentGallery: 0,
      gallery: [
        imgGallery1,
        imgGallery2,
        imgGallery3,
        imgGallery4
      ]
    }
  },
  methods: {
    next() {
        if (this.currentGallery == this.gallery.length - 1 ) {
            this.currentGallery = 0
        } else {
            this.currentGallery++
        }
    },
    prev() {
        if (this.currentGallery == 0) {
            this.currentGallery = this.gallery.length - 1
        } else {
            this.currentGallery--
        }
    },
  },
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
    .plus {
    background-image: url('../../assets/img/main/gallery/image_overlay.png');
    }
    img {
      width: 100%;
      display: block;
    }
  }
  .fix-img {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: .4);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .cont-img {
      position: relative;
      padding: 1rem;
      background-color: #fff;
      .close,
      .prev,
      .next {
        position: absolute;
        cursor: pointer;
      }
      .close{
        top: -15px;
        right: -20px;
      }
      .prev {
        left: 20px;
        top:50%;
        transform: translateY(-50%);
      }
      .next {
        right: 20px;
        top:50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
