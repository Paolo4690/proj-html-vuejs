<template>
  <section id="team" class="container">
    <div class="cont-title">
      <h1>Meet Our Staff</h1>
      <span>With education and experience in early childhood care</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="sub-title">
      <h2>{{ title }}</h2>
      <p>{{ subTitle }}</p>
    </div>
    <div class="cont-boxs">
      <div v-for="item in list" :key="item.name" class="box">
        <div class="quotes"></div>
        <div class="left">
          <div class="cont-transf">
            <div class="plus"></div>
            <img :src="item.img" alt="">
            <div class="cont-rule">
              <h2>{{ item.name }}</h2>
              <span>{{ item.rules }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <p>{{ item.text }}</p>
          <div class="cont-social">
            <div v-for="social in social" :key="social.name" class="square-social">
              <img :src="social.imgSocial" :alt="'logo' + social.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '../../assets/img/main/team/team_04.jpg'
import social1 from '../../assets/img/main/icon/mail.png'
import social2 from '../../assets/img/main/icon/facebook.png'
import social3 from '../../assets/img/main/icon/pinterest.png'
import img2 from '../../assets/img/main/team/team_03.jpg'
import social4 from '../../assets/img/main/icon/dribbble.png'
import social5 from '../../assets/img/main/icon/stumbleupon.png'
import social6 from '../../assets/img/main/icon/instagram.png'
import img3 from '../../assets/img/main/team/team_03.jpg'
import social7 from '../../assets/img/main/icon/bing.png'
import social8 from '../../assets/img/main/icon/skype.png'
import social9 from '../../assets/img/main/icon/linkedin.png'
import img4 from '../../assets/img/main/team/team_01.jpg'
import social10 from '../../assets/img/main/icon/youtube.png'
import social11 from '../../assets/img/main/icon/twitter.png'
import social12 from '../../assets/img/main/icon/googleplus.png'

export default {
  name: 'MainStaff',
  data() {
    return {
      title:'Our staff consists of three teachers and one assistant with experience in early childhood care.',
      subTitle: 'Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas.',
      list:[
        {
          img: img1,
          name: 'Ruth Richie',
          rules: 'Teacher',
          text: 'I have just finished my studies in Early Childhood Education, and I am also the kid’s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.',
          social: [
            {
              name:'mail',
              imgSocial: social1
            },
            {
              name:'facebook',
              imgSocial: social2
            },
            {
              name:'printerest',
              imgSocial: social3
            }
          ]
        },
        {
          img: img2,
          name: 'Katie Willmore',
          rules: 'Assistant Teacher',
          text: 'My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.',
          social: [
            {
              name:'dribbble',
              imgSocial: social4
            },
            {
              name:'stumbleupon',
              imgSocial: social5
            },
            {
              name:'instagram',
              imgSocial: social6
            }
          ]
        },
        {
          img: img3,
          name: 'Katie Willmore',
          rules: 'Assistant Teacher',
          text: 'My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.',
          social: [
            {
              name:'bing',
              imgSocial: social7
            },
            {
              name:'skype',
              imgSocial: social8
            },
            {
              name:'linkedin',
              imgSocial: social9
            }
          ]
        },
        {
          img: img4,
          name: 'Angela Lynn',
          rules: 'Teacher',
          text: 'I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.',
          social: [
            {
              name:'youtube',
              imgSocial: social10
            },
            {
              name:'twitter',
              imgSocial: social11
            },
            {
              name:'googleplus',
              imgSocial: social12
            }
          ]
        },
      ]
    }
  }
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
