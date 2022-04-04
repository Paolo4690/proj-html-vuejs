import Vue from 'vue'
import Vuex from 'vuex'

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
