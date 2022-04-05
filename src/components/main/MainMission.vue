<template>
  <section id="mission">
    <div class="container">
      <div class="cont-text">
        <div class="cont-btn">
          <div @click="missionOpen=false" :class="missionOpen==false ? 'active' : ''" class="btn-mission">
            <span>Overview</span>
            <div class="arrow"></div>
          </div>
          <div @click="missionOpen=true" :class="missionOpen ? 'active' : ''" class="btn-mission">
            <span>Our Mission</span>
            <div class="arrow"></div>
          </div>
        </div>
        <div v-if="missionOpen == false" id="overview">
          <h2>Our philosophy is learning through play as we offer a stimulating environment for children.</h2>
          <div v-for="list in overview.list" :key="list.title" class="info">
            <div class="circle even">
              <img :src="list.img" :alt="list.title">
            </div>
            <div class="text">
              <h5>{{ list.title }}</h5>
              <p>{{ list.text }}</p>
            </div>
          </div>
        </div>
        <div v-if="missionOpen" id="mission">
          <div v-for="list in mission.list" :key="list.title" class="info">
            <div class="circle">
              <img :src="list.img" :alt="list.title">
            </div>
            <div class="text">
              <h5>{{ list.title }}</h5>
              <p>{{ list.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cont-slider">
        <div class="img-principal">
          <img :src="slides[counterIndex].img" alt="">
          <div @click="prev()" class="arrow left">
            <img src="../../assets/img/slider_previous.png" alt="">
          </div>
          <div @click="next()" class="arrow right">
            <img src="../../assets/img/slider_next.png" alt="">
          </div>
        </div>
        <div class="img-slide">
          <div
            v-for="(item, index) in slides"
            :key="index"
            @click="counterIndex = index"
            :class="index == counterIndex ? 'active' : ''"
            class="slide-small"
            >
            <img :class="index == counterIndex ? 'active' : ''" :src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icon1 from '../../assets/img/main/icon/clock_alt.png'
import icon2 from '../../assets/img/main/icon/diagram_alt.png'
import icon3 from '../../assets/img/main/icon/screen.png'
import icon4 from '../../assets/img/main/icon/heart.png'
import icon5 from '../../assets/img/main/icon/lab.png'

import slide1 from '../../assets/img/main/mission-slide/slide-1.jpg'
import slide2 from '../../assets/img/main/mission-slide/slide-2.jpg'
import slide3 from '../../assets/img/main/mission-slide/slide-3.jpg'

export default {
  name: 'MainMission',
  data() {
    return {
      missionOpen: false,
      overview: {
        title: 'Our philosophy is learning through play as we offer a stimulating environment for children.',
        list: [
          {
            title: 'Full Day Session',
            text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.',
            img: icon1
          },
          {
            title: 'Varied Classes',
            text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.',
            img: icon2
          }
        ]
      },
      mission: {
        title: '',
        list: [
          {
            title: 'Online Access',
            text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.',
            img: icon3
          },
          {
            title: 'Maecenas Node',
            text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.',
            img: icon4
          },
          {
            title: 'Praesent Morbi',
            text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.',
            img: icon5
          }
        ]
      },
      counterIndex: 0,
      slides: [
        {
          img: slide1
        },
        {
          img: slide2
        },
        {
          img: slide3
        },
      ],
      timer: ''
    }
  },
  methods: {
    next() {
        if (this.counterIndex == this.slides.length - 1) {
            this.counterIndex = 0
        } else {
            this.counterIndex++
        }
    },
    prev() {
        if (this.counterIndex == 0) {
            this.counterIndex = this.slides.length - 1
        } else {
            this.counterIndex--
        }
    },
    startRotation() {
        this.timer = setInterval(this.next, 3000);
    },
  },
  created() {
      this.startRotation()
  }
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
        .active {
          background-color: $color-secondary;
          border-color: $color-secondary;
          color: #fff;
        }
        .active .arrow {
          border-top-color: $color-secondary;
          cursor: pointer;
        }
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
      #mission .circle {
        flex: 0 0 auto;
        width: 80px;
        height: 80px;
        border: 2px solid $color-secondary;
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
          cursor: pointer;
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
          img.active {
            opacity: .8;
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
