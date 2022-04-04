<template>
  <section id="info">
    <div class="container">
      <div class="left">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <ul>
          <li v-for="item in listCheck" :key="item.text">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div v-for="item in listInfo" :key="item.title" class="cont-box">
          <div class="circle">
            <img :src="item.img" alt="">
          </div>
          <div class="cont-text">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icon1 from '../../assets/img/main/icon/toy.png'
import icon2 from '../../assets/img/main/icon/meal.png'
import icon3 from '../../assets/img/main/icon/toy.png'
import icon4 from '../../assets/img/main/icon/toy.png'

export default {
  name: 'MainInfo',
  data() {
    return {
      title: 'We have been educating children for over fifteen years. Our goal is to create a place that engages each child.',
      text: 'Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.',
      listCheck: [
        {
          text:'Comprehensive reporting on individual achievement'
        },
        {
          text:'Educational field trips and school presentations'
        },
        {
          text:'Individual attention in a small-class setting'
        },
        {
          text:'Learning program with after-school care'
        },
        {
          text:'Opportunities to carry out scientific investigations'
        },
        {
          text:'Positive learning environment for your child'
        },
      ],
      listInfo: [
        {
          title: 'Learning & Fun',
          text: 'Praesent modea est gravida node vehicula luctus.',
          img: icon1
        },
        {
          title: 'Healthy Meals',
          text: 'Terminal interdum a eleifend maecenas est morbi.',
          img: icon2
        },
        {
          title: 'Friendly Place',
          text: 'Terminal interdum a eleifend maecenas est morbi.',
          img: icon3
        },
        {
          title: 'Children Safety',
          text: 'Praesent modea est gravida node vehicula luctus.',
          img: icon4
        }
      ]
    }
  }
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
