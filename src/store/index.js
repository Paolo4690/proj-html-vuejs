import Vue from 'vue'
import Vuex from 'vuex'

import posts1 from '../assets/img/footer-img/blog_09-150x150.jpg'
import posts2 from '../assets/img/footer-img/blog_10-150x150.jpg'
import posts3 from '../assets/img/footer-img/blog_08-150x150.jpg'

import behance from '../assets/img/footer-img/behance.png'
import dribbble from '../assets/img/footer-img/dribbble.png'
import envato from '../assets/img/footer-img/envato.png'
import facebook from '../assets/img/footer-img/facebook.png'
import twitter from '../assets/img/footer-img/twitter.png'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {
        name: 'home',
        img: 'home',
      },
      {
        name: 'pages',
        img: 'document',
      },
      {
        name: 'blog',
        img: 'printer',
      },
      {
        name: 'shop',
        img: 'cart',
      },
      {
        name: 'shortcodes',
        img: 'lab',
      },
      {
        name: 'support',
        img: 'chat',
      },
      {
        name: 'contact',
        img: 'envelope',
      }
    ],
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
    footer:{
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
    },
    social: [
      {
        name:'behance',
        imgUrl: behance
      },
      {
        name:'dribbble',
        imgUrl: dribbble
      },
      {
        name:'envato',
        imgUrl: envato
      },
      {
        name:'facebook',
        imgUrl: facebook
      },
      {
        name:'twitter',
        imgUrl: twitter
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
