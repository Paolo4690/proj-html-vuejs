<template>
  <footer>
    <div class="footer-top pattern">
      <div class="container">
        <div class="cont-list">
          <h5>{{ about.name }}</h5>
          <hr>
          <div class="cont-info">
            <p>{{ about.text }}</p>
            <img src="../../assets/img/footer-img/logo_footer.png" alt="logo fable">
          </div>
        </div>
        <div class="cont-list">
          <h5>{{ archivies.name }}</h5>
          <hr>
          <div class="cont-info">
            <ul>
              <li class="btn-footer" v-for="(item,index) in  archivies.list" :key="index">
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="cont-list">
          <h5>{{ features.name }}</h5>
          <hr>
          <div class="cont-info">
            <p>{{features.text}}</p>
            <ul class="features">
              <li v-for="(item,index) in  features.list" :key="index">
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="cont-list">
          <h5>{{ posts.name }}</h5>
          <hr>
          <div class="cont-info">
            <ul class="posts">
              <li v-for="item in posts.list" :key="item.name">
                <div class="cont-post">
                  <img :src="item.href" :alt="item.name">
                  <div class="cont-txt-post">
                    <h6>{{ item.name }}</h6>
                    <span>{{ item.data }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import posts1 from '../../assets/img/footer-img/blog_09-150x150.jpg'
import posts2 from '../../assets/img/footer-img/blog_10-150x150.jpg'
import posts3 from '../../assets/img/footer-img/blog_08-150x150.jpg'

export default {
  name: 'FooterTop',
  data() {
    return {
      about: {
        name: 'about us',
        text: 'Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi vehicula morbi.' ,
        list: []
      },
      archivies: {
        name: 'archivies',
        text: '',
        list: [
          {
            name: 'OCTOBER 2014 (2)',
            href: '#'
          },
          {
            name: 'SEPTEMBER 2014 (2)',
            href: '#'
          },
          {
            name: 'AUGUST 2014 (2)',
            href: '#'
          },
          {
            name: 'JULY 2014 (2)',
            href: '#'
          },
          {
            name: 'JUNE 2014 (2)',
            href: '#'
          },
          {
            name: 'MAY 2014 (1)',
            href: '#'
          },
        ]
      },
      features: {
        name: 'our features',
        text: 'Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis ac vene:',
        list: [
          {
            name: 'Friendly and welcoming place',
            href: '#'
          },
          {
            name: 'Science and art classes',
            href: '#'
          },
          {
            name: 'Positive learning environment',
            href: '#'
          },
          {
            name: 'Educational field trips',
            href: '#'
          },
          {
            name: 'Writing and reading classes',
            href: '#'
          },
          {
            name: 'Science and art classes',
            href: '#'
          },
        ]
      },
      posts: {
        name: 'recent posts',
        text: '',
        list: [
          {
            name: 'Drawing and Painting Lessons',
            data: 'October 03, 2014',
            href: posts1
          },
          {
            name: 'Fall Parents Meeting Day',
            data: 'October 03, 2014',
            href: posts2
          },
          {
            name: 'Birthday in Kindergarten',
            data: 'September 20, 2014',
            href: posts3
          },
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
footer {
  color: #CCCAE2;
  .pattern {
    background-image: url('../../assets/img/pattern.png');
    background-attachment: fixed;
    background-size: cover;
  }
  .footer-top {
    padding: 3rem 0;
    margin-bottom: 145px;
    .container {
      display: flex;
      gap: 1.7rem;
      .cont-list {
        display: flex;
        flex-direction: column;
        flex: 0 0 23%;
        h5 {
          font-weight: 500;
          font-size: 1.1rem;
          color: #fff;
          text-transform: uppercase;
          padding-bottom: .5rem;
        }
        hr {
          width: 50px;
          border: 1px solid #a9a6cf;
        }
      }
      .cont-info {
        padding: 1rem 0 2rem 0;
        p {
          font-size: .9rem;
          padding-bottom: 1rem;
          line-height: 1.3;
        }
        ul.features li {
          background-image: url('../../assets/img/footer-img/style_4_alt.png');
          padding-left: 30px;
          background-size: 17px 17px;
          background-repeat: no-repeat;
          margin-bottom: .5rem;
          font-size: .9rem;
        }
        ul.posts span {
          background-image: url('../../assets/img/footer-img/date_footer.png');
          padding-left: 30px;
          background-size: 17px 17px;
          background-repeat: no-repeat;
          margin: .5rem 0;
          font-size: .8rem;
        }
        img {
          width: 75%;
        }
        .btn-footer {
          border: 1px solid #a9a6cf;
          padding: .8rem;
          margin-bottom: .4rem;
          font-size: .9rem;
          cursor: pointer;
          &:hover {
            border: 1px solid #fff;
          }
        }
        .cont-post {
          display: flex;
          margin-bottom: .5rem;
          h6 {
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
            &:hover {
            text-decoration: underline;
            }
          }
          img {
            width: 70px;
            height: 70px;
            margin-right: .5rem;
            cursor: pointer;
          }
          .cont-txt-post {
            display: flex;
            flex-direction: column;
            padding-bottom: .5rem;
          }
        }
      }
    }
  }
}
</style>
