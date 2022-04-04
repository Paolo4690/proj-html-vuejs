<template>
  <section id="parallax-1">
    <div class="container">
      <div class="cont-list-circle">
        <ul>
          <li>
            <div class="circle cir-border">
              <span>507</span>
            </div>
            <div class="cont-text">
              <h4>Our Pupils</h4>
              <p>Pulvinar forte maestro node terminal est elipsis prism.</p>
            </div>
          </li>
          <li>
            <div class="circle cir-border">
              <span>235</span>
            </div>
            <div class="cont-text">
              <h4>Teaching Hours</h4>
              <p>Elipsis morbi nulla a metro interdum vitae elite.</p>
            </div>
          </li>
          <li>
            <div class="circle cir-border">
              <span>100%</span>
            </div>
            <div class="cont-text">
              <h4>Satisfied Parents</h4>
              <p>Elementum pulvinar detos diaspis movum blandit.</p>
            </div>
          </li>
          <li>
            <div class="circle cir-border">
              <span>1050</span>
            </div>
            <div class="cont-text">
              <h4>Meals Per Year</h4>
              <p>Pulvinar forte maestro node terminal est elipsis prism.</p>
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
