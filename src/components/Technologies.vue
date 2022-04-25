<template>
  <section id="technologies">
      <h2>My Technologies</h2>
      <div class="logos-container">
          <div class="logo-container">
              <img src="../assets/javascript-seeklogo.com.svg" >
              <p>Javascript</p>
          </div>
          <div class="logo-container">
              <img src="../assets/html5-icon.svg">
              <p>HTML5</p>
          </div>
          <div class="logo-container ">
              <img src="../assets/CSS3_logo.svg">
              <p>CSS</p>
          </div>
          <div class="logo-container ">
              <img src="../assets/Angular_full_color_logo.svg">
              <p>Angular</p>
          </div>
          <div class="logo-container">
              <img src="../assets/Vue.js_Logo_2.svg">
              <p>Vue.js</p>
          </div>
          <div class="logo-container ">
              <img src="../assets/c-sharp-c-seeklogo.com.svg">
              <p>C#</p>
          </div>
          <div class="logo-container ">
              <img src="../assets/NET_Core_Logo.png">
              <p>.NET Core</p>
          </div>
          <div class="logo-container ">
              <img src="../assets/sql-database-generic.svg">
              <p>SQL</p>
          </div>
          
      </div>
  </section>
</template>

<script>
export default {
    name:"technologies",
}
//TODO: Implement Intersection Observers


const logos = document.querySelectorAll('img');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        entry.target.classList.toggle(".appear", entry.isIntersecting);
        entry.target.classList.toggle(".from-left", entry.isIntersecting);
        if (entry.isIntersecting){
            appearOnScroll.unobserve(entry.target);
        }
        })
    },
    appearOptions
)


    logos.forEach(logo => {
        appearOnScroll.observe(logo);
        console.log("Observed Logo")
    });

</script>

<style>

h2 {
    font-family: "Roboto",sans-serif;
    font-weight:300;
    color: white;
    padding-bottom: 6vh;
    padding-top: 12vh;
    padding-bottom: 10vh;
}
.logos-container {
    font-family: "Rockwell",sans-serif;
    display: flex;
    flex-direction: row;
    gap: 6vw;
    flex-wrap: wrap;
    width: 60vw;
    justify-content: center;
    align-items:flex-end
}

.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:8vw;
}

.logo-container p {
    color: white;
    padding: 1vh;
}

img {
    width:100%;
    height: 100%;
}

.fade-in {
    opacity: 0;
    transition: opacity 250ms ease-in;
}

.fade-in .appear {
    opacity: 1;
}

.from-left {
    transform: translateX(-50%);
}

.from-right {
    transform: translateX(50%);
}

.from-left,
.from-right {
    transition: 
        opacity 250ms ease-in, 
        transform 400ms ease-in;
    opacity: 0;
}

.from-left.appear,
.from-right.appear {
    transform: translate(0);
    opacity: 1;
}

</style>