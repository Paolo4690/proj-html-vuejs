<template>
  <header id="header">
    <div class="container">
      <nav>
        <div class="logo">
          <img src="../assets/img/header-img/logo.png" alt="logo fable">
        </div>
        <div class="nav-right">
          <ul>
            <li
              v-for="(item, index) in $store.state.menu"
              :key="item.name"
              :class="index== currentMenu? 'active' : ''"
              >
              <span :class="item.img" :style="index== currentMenu? 'background-position: 0px -32px' : ''" class="icon-menu"></span>
              <span>
                {{ item.name }}
              </span>
             </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderFable',
  data() {
    return {
      currentMenu: 0
    }
  },
  props: {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/partial/variables';
#header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 3px 20px 3px rgba($color: #000000, $alpha: .3);
  nav {
    display: flex;
    justify-content: space-between;
    .logo {
      width: 110px;
      img {
        width: 100%;
        display: block;
      }
    }
    .nav-right {
      ul {
        display: flex;
        height: 100%;
        .active {
          color: $color-white;
          background-color: $color-secondary;
          cursor: pointer;
        }
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: $color-primary;
          padding: 1rem 1rem;
          text-transform: capitalize;
          &:hover {
            color: $color-white;
            background-color: $color-secondary;
            cursor: pointer;
          }
          span.icon-menu {
            width: 32px;
            height: 32px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 15px;
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-size: 32px 64px;
          }

          span.icon-menu.home {
            background-image: url('../assets/img/header-img/ok/home.png');
          }

          span.icon-menu.document {
            background-image: url('../assets/img/header-img/ok/document.png');
          }

          span.icon-menu.printer {
            background-image: url('../assets/img/header-img/ok/printer.png');
          }

          span.icon-menu.cart {
            background-image: url('../assets/img/header-img/ok/cart.png');
          }

          span.icon-menu.lab {
            background-image: url('../assets/img/header-img/ok/lab.png');
          }

          span.icon-menu.chat {
            background-image: url('../assets/img/header-img/ok/chat.png');
          }

          span.icon-menu.envelope {
            background-image: url('../assets/img/header-img/ok/envelope.png');
          }

          &:hover span.icon-menu{
            background-position: 0px -32px;
          }
          span.active {
            background-position: 0px -32px;
          }
        }
      }
    }
  }
}

</style>
