<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
     <router-view/> 
  </div>
</template>

<script> 
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
   
  }
}
</script>

<style>
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale; 
   color: #2c3e50; 
   /* text-align: center;
   margin-top: 60px; */
 }
</style>
