<template>
    <section class="pattern">
      <div class="container">
        <h2>{{ msg }}</h2>
        <div class="btn-violet">
          <span>{{ btnTxt }}</span>
          <img class="fix" src="../../assets/img/slider_next.png" alt="">
          <img class="hov" src="../../assets/img/slider_next-hov.png" alt="">
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'MainBtnPattern',
  props: {
    msg: String,
    btnTxt: String
  }

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';

section.pattern {
  padding: 2.5rem 0;
  color: #fff;
  background-image: url('../../assets/img/pattern.png');
  background-attachment: fixed;
  background-size: cover;
  .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
    h2 {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
    }
    .btn-violet {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: .8rem;
      font-weight: 600;
      padding: .5rem .6rem .5rem 1.2rem;
      border: 2px solid #fff;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: $color-primary;
      }
      &:hover img.fix {
        display: none;
      }
      &:hover img.hov {
        display: block;
      }
      img {
        width: 30px;
      }
      img.fix {
        display: block;
      }
      img.hov {
        display: none;
      }
    }
  }
}
</style>
