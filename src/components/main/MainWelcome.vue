<template>
  <section id="welcome" class="container">
    <div class="cont-title">
      <h1>Welcome to Fable</h1>
      <span>Fable daycare,preschool, and kindergarten</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-list-circle">
      <ul>
        <li v-for="item in list" :key="item.title">
          <div class="circle">
            <img :src="item.img" alt="">
          </div>
          <div class="cont-text">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import img1 from '../../assets/img/main/icon/schoolbag_alt.png'
import img2 from '../../assets/img/main/icon/stroller_alt.png'
import img3 from '../../assets/img/main/icon/globe_alt.png'
import img4 from '../../assets/img/main/icon/bell_alt.png'

export default {
  name: 'MainWelcome',
  data() {
    return {
      list: [
        {
          img: img1,
          title: 'Morbi Etos',
          text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.'
        },
        {
          img: img2,
          title: 'Congue Gravida',
          text: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.'
        },
        {
          img: img3,
          title: 'Maecenas Node',
          text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.'
        },
        {
          img: img4,
          title: 'Praesent Morbi',
          text: 'lipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#welcome {
  padding-bottom: 3.5rem;
    .cont-list-circle {
      ul {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        li:nth-of-type(2n + 1) .circle {
          background-color: $color-secondary;
        }
        li:nth-of-type(2n + 2) .circle {
          background-color: $color-primary;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .circle {
          width: 180px;
          height: 180px;
        }
        .cir-border {
          border: 2px solid #fff;
        }
        .cont-text {
          text-align: center;
          h4 {
            font-size: 1.5rem;
            padding-bottom: 1rem;
          }
        }
      }
    }
    .cont-title {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: $color-grey;
      padding: 3.5rem 0;
      h1 {
        font-size: 3rem;
      }
      span {
        padding-top: .5rem;
        font-size: 1.2rem;
        padding-bottom: 1.8rem;
      }
    }
  p {
    color: $color-grey;
  }
}

</style>
