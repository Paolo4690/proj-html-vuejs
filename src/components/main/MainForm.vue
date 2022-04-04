<template>
  <section id="form">
    <div class="cont-input">
      <div class="left">
        <input placeholder="Your Name *" type="text" id="name">
        <input placeholder="Your E-mail *" type="email" name="mail" id="mail">
        <input placeholder="Subject" type="text" name="" id="">
      </div>
      <div class="right">
        <textarea placeholder="Your Message *" name="message" id="message" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div class="btn">
      <span>SEND MESSAGE</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainForm',

}
</script>

<style scoped lang="scss">
@import '../../assets/styles/partial/variables';
#form {
  .cont-input {
    display: flex;
    padding: 2rem 0;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      width: calc(100% - 1rem);
      margin-right: 2rem;
      input {
        width: 100%;
        height: 2.8rem;
        padding: 0 1rem;
        border: 1px solid #e8e8e8;
        &:focus-visible{
          border: 1px solid transparent;
          box-shadow: inset 0px -2px $color-secondary;
          outline: 0;
        }
      }
    }
    .right {
      display: flex;
      width: calc(100% - 1rem);
      textarea {
        width: 100%;
        padding: 01rem;
        border: 1px solid #e8e8e8;
        &:focus-visible{
          border: 1px solid transparent;
          box-shadow: inset 0px -2px $color-secondary;
          outline: 0;
        }
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    width: 140px;
    margin: 1.5rem auto 1rem;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    padding: .9rem ;
    background-color: $color-secondary;
    color: #fff;
    cursor: pointer;
      &:hover {
        background-color: $color-primary;
      }
      span {
        margin: 0 auto;
      }
  }
}
</style>
