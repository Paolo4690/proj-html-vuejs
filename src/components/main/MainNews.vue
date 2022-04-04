<template>
  <section id="news" class="container">
    <div class="cont-title">
      <h1>What's New</h1>
      <span>Keep up to date with the latest news</span>
      <img src="../../assets/img/header_divider.png" alt="">
    </div>
    <div class="cont-boxs">

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
    padding-top: 4rem;

  }
}
</style>
