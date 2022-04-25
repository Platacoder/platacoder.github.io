<template>
  <main id="contact-me">
    <h1>Contact Me.</h1> 
    <p>
        Interested in my work, collaboration, or anything else?
    </p>
    <a href="mailto:garciaintech@gmail.com"><p>garciaintech@gmail.com</p></a>
    <div id="links">
        <a href="https://www.linkedin.com/in/stevejgarcia/">
                <v-icon x-large class="linkedIn" >
                mdi-linkedin
                </v-icon>
        </a>
        <a href="https://github.com/Platacoder">
                <v-icon x-large class="gitHub">
                mdi-github
                </v-icon>
        </a>
    </div>
    <v-btn outlined small><a href="./Resume.pdf" target=_blank style="font-family: 'Rockwell',sans-serif;" >Resume</a></v-btn>
    
  </main>
</template>

<script>
export default {
    name:'contact-info'
}
</script>

<style scoped>

#links {
    display: flex;
    flex-direction: row;
    align-content: center;
}
.theme--light.v-icon.linkedIn {
    color:#0072b1;
}

.theme--light.v-icon.gitHub {
    color:white;
}

.theme--light.v-btn {
    color:white;
}
main {
  color:white;
  word-wrap: break-word;
  text-align: initial;
  word-spacing: 3px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width:100vw;
  height:38vh;
  margin-top: 50vh;
  margin-bottom: 28vh;
  gap:8px;

}

section {
    color:rgb(255, 255, 255);
    text-align:initial;
    align-content: center;
    align-items:center;
    width:89vw;
    margin-top:20vh;
    margin-bottom: 31vh;
    padding-left: 10vw;
    
}

#intro-hello {
    margin-bottom:10px;
    color:rgb(52,103,81);
}

h1 {
    margin-bottom: 10px;
    font-size: 2em;
    font-family: "Roboto",sans-serif;
    font-weight:300;
    color:white;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #4690F9;
}
.theme--light.v-icon:hover {
    color: #4690F9;
}

p {
    font-family: "Rockwell",sans-serif;
    word-spacing: 3px;
    font-size: .9em;
}



</style>