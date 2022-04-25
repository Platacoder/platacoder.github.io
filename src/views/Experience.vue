<template>
  <main>
    <div>
      <h2>More about my experience.</h2>
      <p>
        I may still be fairly new to the world of tech but am looking to make a splash! Right now I am working to
        grow quickly within my new team at Chubb. My experience as a former restoration ecologist gives me a fresh perspective as a software developer. Additionally,
        my ability to be easy to work with in a team or as an individual driving forward projects have given me a strong reputation. Right now I am self teaching myself
        as I prepare for the start date of my new position.
      </p>
    </div>
    <div id="work-experience">
      <h2>Where I've worked:</h2>
      <section id="chubb">
        <div>
          <h3>Junior Software Developer @ Chubb</h3>
          <p>February 2021 - Present</p>
          <p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
                Nulla feugiat eu augue semper interdum. Etiam feugiat metus vel consequat efficitur. Maecenas id accumsan dolor. Praesent et augue sed sem mattis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
                Nulla feugiat eu augue semper interdum. Etiam feugiat metus vel consequat efficitur. Maecenas id accumsan dolor. Praesent et augue sed sem mattis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
                Nulla feugiat eu augue semper interdum. Etiam feugiat metus vel consequat efficitur. Maecenas id accumsan dolor. Praesent et augue sed sem mattis.
              </li>
            </ul>
          </p>
        </div>
        <v-img id="chubb-image" src="../assets/chubb-vector-logo.png" max-height="500" max-width="290" contain="false"></v-img>
      </section>
      

    </div>
    <div id="education">
      <h2>Education</h2>
      <section id="tech-elevator">
        <div>
        <h3>.NET Development Student @ Tech Elevator</h3>
        <p>September 2021- December 2021</p>
        <p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
              Nulla feugiat eu augue semper interdum. 
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
              Nulla feugiat eu augue semper interdum. 
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ex, molestie pretium lacinia a, porta pulvinar nisl.
              Nulla feugiat eu augue semper interdum. 
            </li>
          </ul>
        </p>
        </div>
        <v-img src="../assets/TESymbol.png"  max-height="250" max-width="250"></v-img>
      </section>
    </div>   
  </main>
</template>

<script>
export default {
  name:"experience"

}
</script>

<style scoped>
main{
  color:white;
  padding-top: 10vh;
  word-wrap: break-word;
  text-align: initial;
  word-spacing: 3px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width:50vw;
  margin-left:25vw;
  gap:4px;
  padding-bottom: 5vh;

}

h2{
  padding-top:5vh;
}

p{
  margin-top:5px;
}

div{
  margin-top:2vh;
}

#tech-elevator{
  display: flex;
  flex-direction: row;
}

#chubb{
  display: flex;
  flex-direction: row;
}

#chubb-image{
  padding-left:15px;
}


</style>