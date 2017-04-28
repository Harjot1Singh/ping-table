<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

  ;
</script>
<style lang="scss">
  /*Global Styles*/
  
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  @import "../node_modules/bulma/sass/utilities/_all";
  @import "../node_modules/bulma/sass/elements/button";
  @import "../node_modules/bulma/sass/elements/form";
  @import "../node_modules/bulma/sass/grid/columns";
  * {
    margin: 0;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  #app {
    font-family: 'Varela Round', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    animation: fadein 0.5s;
    background: rgb(2, 22, 30);
    color: white;
    box-sizing: border-box;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 15px;
  }
  
  .input {
    margin: 10px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 7px;
    height: 60px;
    font-family: 'Varela Round';
    color: white;
    box-sizing: border-box;
  }
  
  .button {
    height: 60px;
    margin: 10px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 7px;
    background: rgb(114, 22, 37);
    border: none;
    color: white;
    font-family: 'Varela Round';
    transition: all 0.3s ease-in-out;
  }
  
  .button:hover {
    color: white;
    background: rgb(140, 22, 37);
  }
  
  .board {
    background-color: rgb(14, 45, 63);
    border-radius: 10px;
    padding: 20px;
    padding-right: 40px;
    margin: 15px;
    text-align: center;
  }
  
</style>
