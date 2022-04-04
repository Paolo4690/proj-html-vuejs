<template>
  <section id="welcome" class="container">
    <div class="cont-title">
      <h1>Welcome to Fable</h1>
      <span>Fable daycare,preschool, and kindergarten</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-list-circle">
      <ul>
        <li>
          <div class="circle even">
            <img src="../../assets/img/main/icon/schoolbag_alt.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Morbi Etos</h4>
            <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.</p>
          </div>
        </li>
        <li>
          <div class="circle odd">
            <img src="../../assets/img/main/icon/stroller_alt.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Morbi Etos</h4>
            <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.</p>
          </div>
        </li>
        <li>
          <div class="circle even">
            <img src="../../assets/img/main/icon/globe_alt.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Morbi Etos</h4>
            <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.</p>
          </div>
        </li>
        <li>
          <div class="circle odd">
            <img src="../../assets/img/main/icon/bell_alt.png" alt="">
          </div>
          <div class="cont-text">
            <h4>Morbi Etos</h4>
            <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainWelcome',

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
