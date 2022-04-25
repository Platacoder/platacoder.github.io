<template>
  <div id="app">
    <header>
     <nav-bar/>
    </header>
    <router-view/>
    <a class="portfolio-source" href="">Designed & Built by Steven Garcia</a>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components:{
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

body{
  background-color: black;
  height: 100vh;
}

html {
  scroll-behavior: smooth;
}

.portfolio-source {
  text-decoration: none;
  color:white;
  padding-bottom: 5vh;
}

.portfolio-source:hover {
  color: #4690F9;
}

</style>
