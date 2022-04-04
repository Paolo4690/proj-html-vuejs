<template>
  <main>
    <MainJumbo/>
    <MainBtnPattern
      :msg="pattern1Msg"
      :btnTxt="pattern1Btn"
    />
    <MainWelcome/>
    <MainMission/>
    <MainFirstParallax/>
    <MainOurClasses/>
    <MainInfo/>
    <MainGallery/>
    <MainBtnPattern
      :msg="pattern2Msg"
      :btnTxt="pattern2Btn"
    />
    <MainStaff/>
    <MainSecondParallax/>
    <MainNews/>
    <MainMap/>
    <MainContact/>
  </main>
</template>

<script>
import MainJumbo from './main/MainJumbo.vue'
import MainBtnPattern from './main/MainBtnPattern.vue'
import MainWelcome from './main/MainWelcome.vue'
import MainMission from './main/MainMission.vue'
import MainFirstParallax from './main/MainFirstParallax.vue'
import MainOurClasses from './main/MainOurClasses.vue'
import MainInfo from './main/MainInfo.vue'
import MainGallery from './main/MainGallery.vue'
import MainStaff from './main/MainStaff.vue'
import MainSecondParallax from './main/MainSecondParallax.vue'
import MainNews from './main/MainNews.vue'
import MainMap from './main/MainMap.vue'
import MainContact from './main/MainContact.vue'

export default {
  name: 'MainFable',
  data() {
    return {
      pattern1Msg: 'How to Enroll Your Child to a Class?',
      pattern1Btn: 'learn more',
      pattern2Msg: 'See Our Kindergarten Photo Gallery!',
      pattern2Btn: 'view gallery',
    }
  },
  components: {
    MainJumbo,
    MainBtnPattern,
    MainWelcome,
    MainMission,
    MainFirstParallax,
    MainOurClasses,
    MainInfo,
    MainGallery,
    MainStaff,
    MainSecondParallax,
    MainNews,
    MainMap,
    MainContact
  }
}
</script>

<style scoped lang="scss">
main {
  margin-bottom: 625px;
  background-color: #fff;
}
</style>
