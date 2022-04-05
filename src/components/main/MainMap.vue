<template>
  <section id="map">
    <img v-for="(item, i) in img" :key="i" :src="item.imgUrl" alt="">
  </section>
</template>

<script>
import map1 from '../../assets/img/maps/map1.png'
import map2 from '../../assets/img/maps/map2.png'
import map3 from '../../assets/img/maps/map3.png'
import map4 from '../../assets/img/maps/map4.png'
import map5 from '../../assets/img/maps/map5.png'
import map6 from '../../assets/img/maps/map6.png'
import map7 from '../../assets/img/maps/map7.png'
import map8 from '../../assets/img/maps/map8.png'
import map9 from '../../assets/img/maps/map9.png'
import map10 from '../../assets/img/maps/map10.png'
import map11 from '../../assets/img/maps/map11.png'
import map12 from '../../assets/img/maps/map12.png'
import map13 from '../../assets/img/maps/map13.png'
import map14 from '../../assets/img/maps/map14.png'
import map15 from '../../assets/img/maps/map15.png'
import map16 from '../../assets/img/maps/map16.png'
import map17 from '../../assets/img/maps/map17.png'
import map18 from '../../assets/img/maps/map18.png'
import map19 from '../../assets/img/maps/map19.png'
import map20 from '../../assets/img/maps/map20.png'
import map21 from '../../assets/img/maps/map21.png'
import map22 from '../../assets/img/maps/map22.png'
import map23 from '../../assets/img/maps/map23.png'
import map24 from '../../assets/img/maps/map24.png'
import map25 from '../../assets/img/maps/map25.png'
import map26 from '../../assets/img/maps/map26.png'
import map27 from '../../assets/img/maps/map27.png'
export default {
  name: 'MainMap',
  data() {
    return {
      img: [
        {
          imgUrl: map1
        },
        {
          imgUrl: map2
        },
        {
          imgUrl: map3
        },
        {
          imgUrl: map4
        },
        {
          imgUrl: map5
        },
        {
          imgUrl: map6
        },
        {
          imgUrl: map7
        },
        {
          imgUrl: map8
        },
        {
          imgUrl: map9
        },
        {
          imgUrl: map10
        },
        {
          imgUrl: map11
        },
        {
          imgUrl: map12
        },
        {
          imgUrl: map13
        },
        {
          imgUrl: map14
        },
        {
          imgUrl: map15
        },
        {
          imgUrl: map16
        },
        {
          imgUrl: map17
        },
        {
          imgUrl: map18
        },
        {
          imgUrl: map19
        },
        {
          imgUrl: map20
        },
        {
          imgUrl: map21
        },
        {
          imgUrl: map22
        },
        {
          imgUrl: map23
        },
        {
          imgUrl: map24
        },
        {
          imgUrl: map25
        },
        {
          imgUrl: map26
        },
        {
          imgUrl: map27
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
section#map {
  display: flex;
  flex-wrap: wrap;
  img {
    width: calc(100% / 9);
    flex: 1 1 auto;
  }
}
</style>
