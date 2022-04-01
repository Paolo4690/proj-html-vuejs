<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <img src="../assets/img/header-img/logo.png" alt="logo fable">
        </div>
        <div class="nav-right">
          <ul> <!-- CREARE V-FOR PER MENU --><!-- CREARE V-FOR PER MENU --><!-- CREARE V-FOR PER MENU -->
            <li>
              <img src="../assets/img/header-img/home.png" alt="logo home-page">
              <span>Home</span>
            </li>
            <li>
              <img src="../assets/img/header-img/document.png" alt="logo home-page">
              <span>Pages</span>
            </li>
            <li>
              <img src="../assets/img/header-img/printer.png" alt="logo home-page">
              <span>Blog</span>
            </li>
            <li>
              <img src="../assets/img/header-img/cart.png" alt="logo home-page">
              <span>Shop</span>
            </li>
            <li>
              <img src="../assets/img/header-img/lab.png" alt="logo home-page">
              <span>Shortcodes</span>
            </li>
            <li>
              <img src="../assets/img/header-img/chat.png" alt="logo home-page">
              <span>Support</span>
            </li>
            <li>
              <img src="../assets/img/header-img/envelope.png" alt="logo home-page">
              <span>Contact</span>
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
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        color: $color-primary;
        padding: 0 .9rem;
        &:hover {
          color: $color-white;
          background-color: $color-secondary;
          cursor: pointer;
        }
        img {
          width: 20px;
        }
        span {
          font-size: .8rem;
        }
      }
    }
  }

}
</style>
