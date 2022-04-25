<template>
  <pdf src='src\assets\Resume.pdf' height="50%" width="50%" >Test</pdf>
</template>

<script>
import pdf from 'vue-pdf'

export default {
    name:'resume',
    components:{
      pdf
    }
}
</script>

<style scoped>
pdf{
    height:50vh;
    width:50vw;
    background-color: white;
}
</style>