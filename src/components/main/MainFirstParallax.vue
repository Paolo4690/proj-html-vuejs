<template>
  <section id="parallax-1">
    <div class="container">
      <div class="cont-list-circle">
        <ul>
          <li v-for="item in list" :key="item.title">
            <div class="circle cir-border">
              <span>{{ item.num }}</span>
            </div>
            <div class="cont-text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainFirstParallax',
  data() {
    return {
      list: [
        {
          title: 'Our Pupils',
          text: 'Pulvinar forte maestro node terminal est elipsis prism.',
          num: '507'
        },
        {
          title: 'Teaching Hours',
          text: 'Elipsis morbi nulla a metro interdum vitae elite.',
          num: '235'
        },
        {
          title: 'Satisfied Parents',
          text: 'Elementum pulvinar detos diaspis movum blandit.',
          num: '100%'
        },
        {
          title: 'Meals Per Year',
          text: 'Pulvinar forte maestro node terminal est elipsis prism.',
          num: '1050'
        },
      ]
    }
  }

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#parallax-1 {
  display: flex;
  align-items: center;
  background-image: url('../../assets/img/main/parallax_01.jpg');
  background-attachment: fixed;
  background-size: cover;
  height: 500px;
    .cont-list-circle {
    ul {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
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
  h4 {
    color: #fff;
  }
  p {
    color: #fff;
  }
}
</style>
