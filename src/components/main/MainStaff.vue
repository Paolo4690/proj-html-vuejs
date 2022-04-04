<template>
  <section id="team" class="container">
    <div class="cont-title">
      <h1>Meet Our Staff</h1>
      <span>With education and experience in early childhood care</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="sub-title">
      <h2>Our staff consists of three teachers and one assistant with experience in early childhood care.</h2>
      <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas.</p>
    </div>
    <div class="cont-boxs">
      <div class="box">
        <div class="quotes"></div>
        <div class="left">
          <div class="cont-transf">
            <div class="plus"></div>
            <img src="../../assets/img/main/team/team_04.jpg" alt="">
            <div class="cont-rule">
              <h2>Ruth Richie</h2>
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div class="right">
          <p>I have just finished my studies in Early Childhood Education, and I am also the kid’s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.</p>
          <div class="cont-social">
            <div class="square-social">
              <img src="../../assets/img/main/icon/mail.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/facebook.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/pinterest.png" alt="'logo' + item.name">
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="quotes"></div>
        <div class="left">
          <div class="cont-transf">
            <div class="plus"></div>
            <img src="../../assets/img/main/team/team_03.jpg" alt="">
            <div class="cont-rule">
              <h2>Katie Willmore</h2>
              <span>Assistant Teacher</span>
            </div>
          </div>
        </div>
        <div class="right">
          <p>My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.</p>
          <div class="cont-social">
            <div class="square-social">
              <img src="../../assets/img/main/icon/dribbble.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/stumbleupon.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/instagram.png" alt="'logo' + item.name">
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="quotes"></div>
        <div class="left">
          <div class="cont-transf">
            <div class="plus"></div>
            <img src="../../assets/img/main/team/team_02.jpg" alt="">
            <div class="cont-rule">
              <h2>Angelica Watson</h2>
              <span>Lead Teacher</span>
            </div>
          </div>
        </div>
        <div class="right">
          <p>I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.</p>
          <div class="cont-social">
            <div class="square-social">
              <img src="../../assets/img/main/icon/bing.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/skype.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/linkedin.png" alt="'logo' + item.name">
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="quotes"></div>
        <div class="left">
          <div class="cont-transf">
            <div class="plus"></div>
            <img src="../../assets/img/main/team/team_01.jpg" alt="">
            <div class="cont-rule">
              <h2>Angela Lynn</h2>
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div class="right">
          <p>I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.</p>
          <div class="cont-social">
            <div class="square-social">
              <img src="../../assets/img/main/icon/youtube.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/twitter.png" alt="'logo' + item.name">
            </div>
            <div class="square-social">
              <img src="../../assets/img/main/icon/googleplus.png" alt="'logo' + item.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainStaff',
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
section#team {
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
    gap: .5rem;
    padding-top: 4rem;
    .box {
      position: relative;
      display: flex;
      flex: 0 0 49.5%;
      overflow: hidden;
      padding-bottom: 2.2rem;
      .quotes {
        position: absolute;
        top: 8%;
        left: 45%;
        z-index: 1;
        background-image: url('../../assets/img/main/icon/quote.png');
        background-repeat: no-repeat;
        background-position: 58px 10px;
        padding: 1.5rem 3.5rem;
        border: 2px solid $color-secondary;
      }
      .left {
        flex: 0 0 50%;
        transition: background-color .3s;
        &:hover {
        background-color: $back-grey;
        }
        &:hover .cont-transf {
          transform: translateY(-30px);
        }
        .cont-transf {
          position: relative;
          transition: transform .3s;
          &:hover  .plus{
            opacity: 1;
          }
          img {
            width: 100%;
            display: block;
            cursor: pointer;
          }
          .plus {
            opacity: 0;
            transition: opacity .3s;
            position: absolute;
            top: 132px;
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
          .cont-rule {
            height: 100%;
            padding-top: 1rem;
            text-align: center;
            h2 {
              padding-bottom: .5rem;
            }
            span {
              color: #a0a0a0;
            }
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        flex: 0 0 50%;
        padding: 1rem;
        p {
        margin-top: auto;
        padding-bottom: 2rem;
        color: $color-grey;
        }
        .cont-social {
          display: flex;
          gap: 2px;
          .square-social{
            width: 45px;
            height: 45px;
            background-color: $color-secondary;
            cursor: pointer;
            &:hover {
              background-color: $color-primary;
            }
            img {
              width: 100%;
            }
          }
        }
      }
      span {
        font-size: .9rem;
        font-weight: 600;
      }
    }
  }
}
</style>
