<template>
  <main id="projects">
    <h2>Projects</h2>
    <div class="cards-container">
        <div class="card">
            <div class="link-header">
                <!--TODO:Implement Card Flip Functionality
                <img src="../assets/flip-over.png" style="height: 20px; width:auto;">-->
                <a href="https://github.com/Platacoder/TEnmoApp">
                <v-icon x-large class="gitHub">
                mdi-github
                </v-icon>
                </a>
            </div>
            <h4>Tenmo</h4>
            <div class="text">
                <p class="project-description">Venmo mock app with a command line interface, custom made API, and backend. Users can create an account,
                   login, send and receive money, review transfers and their unique status, and approve and reject request. Data is persisted in a database.
                </p>
            </div>
            <div class="skills">
                <p>C#</p>
                <p>SQL</p>
                <p>ASP.NET</p>
            </div>
        </div>
        <div class="card">
            <div class="link-header">
                <!--TODO:Implement Card Flip Functionality
                <img src="../assets/flip-over.png" style="height: 20px; width:auto;">-->
                <a href="https://github.com/Platacoder/VendingMachineCLP">
                <v-icon x-large class="gitHub">
                mdi-github
                </v-icon>
                </a>
            </div>
            <h4>Vendomatic</h4>
            <div class="text">
                <p class="project-description">Vending Machine simulator with a command line interface. One of my first projects. 
                   Puts many programming fundamentals and OOP into practice.
                </p>
            </div>
            <div class="skills">
                <p>C#</p>
                <p>OOP</p>
                <p>File I/O</p>
            </div>
            
        </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'projects'
}
</script>

<style scoped>

h2 {
    font-family: "Roboto",sans-serif;
    font-weight:300;
    margin-top: 20vh;

}
.cards-container {
   display: grid;
   font-family: "Rockwell",sans-serif;
   grid-template-columns: 1fr 1fr;
   width: 50vw;
   gap: 20px;
}

.card {
    background: #d0d1d1;
    border-radius: 10px;
    height: auto;
    width: auto;
    transition: 0.3s;
    color: black;
    display:grid;
    grid-column: 1fr;
    grid-template-rows: 1fr .5fr 2fr .5fr;
}

.card:hover {
    background: #4690F9;
    transition: 0.3s;
}

.text {
    max-width: 90%;
    margin-left:auto;
    margin-right: auto;
}

.project-description {
    text-align: left;
}

h4 {
    margin-bottom: 5%;
}


a {
    text-decoration: none;
    color: white;
}


.theme--light.v-icon.gitHub {
    color:black;
}
.theme--light.v-icon.gitHub:hover {
    color: white;
}



.link-header {
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 2%;
    margin-top: 2%;
}

.skills {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: end;
    gap: 5%;
    width: 100%;
    margin-bottom: 5px;

}

</style>