<template>
  <div id="nav-bar">
      <a type="button" label="Test" onClick="document.getElementById('about-me').scrollIntoView();">About Me</a>
      <a type="button" label="Test" onClick="document.getElementById('technologies').scrollIntoView();">Technologies</a>
      <a type="button" label="Test" onClick="document.getElementById('projects').scrollIntoView();">Projects</a>
      <a type="button" label="Test" onClick="document.getElementById('contact-me').scrollIntoView();">Contact Me</a>
  </div>
</template>

<script>
export default {
    name:'nav-bar',
}
</script>

<style scoped>
#nav-bar{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    background-color: none;
    height:7.5vh;
    width:100vw;
    position:fixed;
    
}

a{
    font-family: "Rockwell",sans-serif;
    text-decoration: none;
    color: white;
    padding-right:25px;
}

a:hover{
    color: #4690F9;
}

a:last-child{
    margin-right: 3vw;
}
</style>