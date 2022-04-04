<template>
  <section id="news" class="container">
    <div class="cont-title">
      <h1>What's New</h1>
      <span>Keep up to date with the latest news</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-boxs">
      <div class="box">
        <span>October 03, 2014</span>
        <div class="cont-img">
          <img src="../../assets/img/main/news/blog_09-525x315.jpg" alt="">
          <div class="plus"></div>
            <div class="square-social">
              <span>65</span>
            </div>
        </div>
        <div class="cont-text">
          <h2>Drawing and Painting Lessons</h2>
          <p>Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum</p>
        </div>
        <div class="info">
          <span class="first">Anna Brown</span>
          <span class="second">Events, Fun</span>
        </div>
      </div>
      <div class="box">
        <span>October 03, 2014</span>
        <div class="cont-img">
          <img src="../../assets/img/main/news/blog_10-525x315.jpg" alt="">
          <div class="plus"></div>
            <div class="square-social">
              <span>19</span>
            </div>
        </div>
        <div class="cont-text">
          <h2>Fall Parents Meeting Day</h2>
          <p>Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum</p>
        </div>
        <div class="info">
          <span class="first">Anna Brown</span>
          <span class="second">Events, Fun</span>
        </div>
      </div>
      <div class="box">
        <span>September 20, 2014</span>
        <div class="cont-img">
          <img src="../../assets/img/main/news/blog_08-525x315.jpg" alt="">
          <div class="plus"></div>
            <div class="square-social">
              <span>23</span>
            </div>
        </div>
        <div class="cont-text">
          <h2>Birthday in Kindergarten</h2>
          <p>Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum</p>
        </div>
        <div class="info">
          <span class="first">Anna Brown</span>
          <span class="second">Events, Fun</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <span>GO TO BLOG</span>
      <img class="fix" src="../../assets/img/slider_next.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainNews',
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#news {
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
  .cont-boxs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: .5rem;
    padding-top: 3.5rem;
    .box {
      display: flex;
      flex-direction: column;
      flex: 0 0 calc(100% / 3 - 1rem);
      span {
        font-size: 1rem;
        color: #a0a0a0;
      }
      .cont-img {
        position: relative;
        margin: 1.2rem 0;
        width: 100%;
        cursor: pointer;
        &:hover .plus {
          opacity: 1;
        }
        img {
          width: 100%;
          display: block;
        }
        .plus {
          opacity: 0;
          transition: opacity .3s;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-image: url('../../assets/img/main/gallery/image_overlay.png');
          background-repeat: no-repeat;
          background-position: center center;
          background-color: rgba($color: #56509F, $alpha: .5);
          transform: translate(-50%, -50%);
        }
        .square-social{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 45px;
          height: 45px;
          background-color: $color-secondary;
          text-align: center;
          span {
            line-height: 45px;
            color: #fff;
            font-size: 1.2rem;
          }
        }
      }
      .cont-text {
        border-bottom: 1px solid #e8e8e8;
        h2 {
          padding-bottom: 1rem;
          &:hover {
            text-decoration: underline;
          }
        }
        p {
          color: $color-grey;
          padding-bottom: 1.2rem;
        }
      }
      .info {
        span {
          width: 50%;
          display: inline-block;
          padding: .8rem 0 0 1.7rem;
          background-repeat: no-repeat;
          background-position: 0 15px;
          background-size: 18px;
        }
        span.first {
          background-image: url('../../assets/img/main/news/author.png');
        }
        span.second {
          background-image: url('../../assets/img/main/news/category.png');
        }
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    width: 140px;
    margin: 2.5rem auto 0;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    padding: .5rem .6rem .5rem 1.2rem;
    background-color: $color-secondary;
    color: #fff;
    cursor: pointer;
      &:hover {
        background-color: $color-primary;
      }
    img {
      width: 30px;
    }
  }
}
</style>
