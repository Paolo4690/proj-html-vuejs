<template>
  <section id="our-classes" class="container">
    <div class="cont-title">
      <h1>Our Classes</h1>
      <span>Our preschool program has four dedicated classes</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="sub-title">
      <h2>We provided four classes with nine to twenty children each aged twelve month to five years of age.</h2>
      <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas.</p>
    </div>
    <div class="cont-boxs">
      <div v-for="box in mainClass" :key="box.title" class="box">
        <div class="box-left">
          <h2>{{ box.title }}</h2>
          <span>Class name</span>
          <div class="class-type">
            <div class="years">
              <h4>{{ box.olds }}</h4>
              <span>{{ box.oldType }}</span>
            </div>
            <div class="class-size">
              <h4>{{ box.classSize }}</h4>
              <span>Class size</span>
            </div>
          </div>
        </div>
        <div :class="box.img" class="box-right sfondo1">
          <div class="btn-read">
            <span>READ MORE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainOurClasses',
  data() {
    return {
      mainClass: [
        {
          title: 'Little Lambs',
          olds: '12-24',
          oldType: 'Month olds',
          classSize: '9',
          img: 'sfondo1'
        },
        {
          title: 'Bouncy Bears',
          olds: '2-3',
          oldType: 'Years olds',
          classSize: '12',
          img: 'sfondo2'
        },
        {
          title: 'Tenderhearts',
          olds: '3-4',
          oldType: 'Years olds',
          classSize: '15',
          img: 'sfondo3'
        },
        {
          title: 'Shining Stars',
          olds: '4-5',
          oldType: 'Years olds',
          classSize: '20',
          img: 'sfondo4'
        }
      ],
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#our-classes {
  padding-bottom: 3.5rem;
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
    .sub-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 2rem;
      h2 {
        flex: 0 0 47%;
        font-size: 2rem;
      }
      p {
        flex: 0 0 47%;
        color: $color-grey;
      }
    }
  .cont-boxs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 4rem;
    .box {
      display: flex;
      flex: 0 0 48%;
      span {
        color: #cccae2;
        font-size: .9rem;
        font-weight: 600;
      }
      .box-left {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 190px;
        padding: 1.2rem;
        background-color: $color-primary;
        h2 {
          color: #fff;
          padding-bottom: .3rem;
        }
        .class-type {
          display: flex;
          margin-top: auto;
          .class-size,
          .years {
            width: 50%;
            text-align: center;
            h4 {
              color: #fff;
            }
          }
          .years {
            border-right: 1px solid #cccae2;
          }
        }
      }
      .sfondo1 {
        background-image: url('../../assets/img/main/our-classes/class_01-690x506.jpg');
      }
      .sfondo2 {
        background-image: url('../../assets/img/main/our-classes/class_02-690x506.jpg');
      }
      .sfondo3 {
        background-image: url('../../assets/img/main/our-classes/class_03-690x506.jpg');
      }
      .sfondo4 {
        background-image: url('../../assets/img/main/our-classes/class_04-690x506.jpg');
      }
      .box-right {
        display: flex;
        width: 50%;
        background-size: cover;
        .btn-read {
          width: 60%;
          padding: 0.6rem 1.2rem 0.8rem;
          background-color: $color-secondary;
          background-image: url('../../assets/img/slider_next.png');
          background-position:  110px 6px;
          background-repeat: no-repeat;
          background-size: 30px;
          margin-top: auto;
          margin-left: auto;
          cursor: pointer;
          &:hover {
            background-color: $color-primary;
          }
          span {
            color: #fff;
            padding-right: .5rem;
          }
        }
      }
    }
  }
}
</style>
