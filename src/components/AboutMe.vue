<template>
  <section id="about-me">
      <div id="text-div">
        <h2>About Me</h2>
      <p>
          Hey there! I'm Steven and I enjoy creating technologies that improve the life of others.
          I have always been interested in technology and its ability to augment our productivity and 
          imagination. However, I always thought that a career as an engineer was out of reach for me.
          <br><br>
          Luckily, I pushed the doubt and decided to learn to code in my free time. Not only did I love
          to code and solve problems but I found that I picked up new material fairly quickly! After half 
          a year, I decided to risk it all and leave a successful career in Environmental Restoration to pursue my love of Tech. 
          <br><br>
          I currently work at <a href="https://www.chubb.com/us-en/">Chubb</a> where I work with a great team, building innovative insurance software.
          <br><br>
      </p>
      </div>
      <div id="photo-container">
        <img id="about-me-pic" v-on:click="nextPicture()" src="../assets/AboutMePics/about-me-pic1.jpg"/>
      </div>
  </section>
</template>

<script>
//TODO: Implement clickable changing pictures.
export default {
    name: 'about-me',
    data() {
      return {
          pictureCounter: 0,
          images: [
            "/img/about-me-pic1.f0825a89.jpg",
            "/img/about-me-pic2.61ac0e61.jpg",
            "/img/about-me-pic3.cca9bd37.jpg"
          ] 
      }
      
    },
    methods: {
      nextPicture() {
        this.pictureCounter++;
    },

    imageSrc() {
        if(this.pictureCounter > 2){
          this.pictureCounter = 0;
        }
       this.currentPic[this.images[this.pictureCounter]];
       return this.currentPic;
    }
}



}
</script>

<style scoped>
section {
  color:white;
  padding-top: 15vh;
  display:grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  justify-items: center;
  padding-bottom: 25vh;
  gap: 0;
}

p{
    word-wrap: break-word;
    color:white;
    text-align: initial;
    word-spacing: 3px;
}

#photo-container{
  max-width: 50vw;
}

#about-me-pic {
  max-width: 70%;
  transition: 0.1s;
}

#about-me-pic:hover {
  max-width: 72%;
  transition: 0.1s;
}

h2{
  font-family: "Roboto",sans-serif;
  font-weight:300;
  padding-bottom: 4vh;
  text-align: initial;
}
#text-div{
  width:70%;
}

#list{
  display:flex;
  justify-content: center;
  flex-direction: row;
  gap: 20%;
  margin-top: 4vh;
  margin-bottom:4vh;
}

a{
    text-decoration: none;
    color: #4690F9;

}

a:hover{
    color:rgb(200,75,49);
}

img {
  transition: 2s ease-in;
  
}

</style>