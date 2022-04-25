<template>
  <div class="home">
    <intro-text/>
    <about-me/>
    <technologies></technologies>
    <projects></projects>
    <contact-info></contact-info>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import ContactInfo from '../components/ContactInfo.vue'

import IntroText from '../components/IntroText.vue'
import Technologies from '../components/Technologies.vue'
import Projects from './Projects.vue'


export default {
  name: 'home',
  components: {
    IntroText,
    AboutMe,
    ContactInfo,
    Technologies,
    Projects

  }
}
</script>

<style scoped>

.home{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#breakup-line{
  background-color: white;
  height:1vh;
  width:100vw;
  color:white;
}

svg{
  width:100vw;
}

</style>
