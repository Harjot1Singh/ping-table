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
  @import "../node_modules/bulma/sass/elements/image";
  @import "../node_modules/bulma/sass/elements/table";
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
    overflow: hidden;
  }
  
  @media only screen and (max-width: 768px) {
    #app {
      padding: 0;
      padding-top: 20px;
    }
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
    transition: all 0.3s ease-in-out;
    box-shadow: none;
    text-align: center;
    font-size: 20px;
  }
  
  .input:focus {
    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
  }
  
  .button {
    font-weight: bold;
    height: 60px;
    margin: 10px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 7px;
    background: rgb(114, 22, 37);
    border: none;
    box-shadow: none;
    color: white;
    font-family: 'Varela Round';
    transition: all 0.3s ease-in-out;
  }
  
  .button:hover {
    color: white;
    background: rgb(140, 22, 37);
  }
  
  .button:focus {
    color: white;
  }
  
  .board {
    background-color: rgb(14, 45, 63);
    border-radius: 10px;
    padding: 20px;
    padding-right: 40px;
    margin: 15px;
    text-align: center;
    overflow-x: auto;
  }
  
  .board {
    background-image: url("./assets/background.png");
    background-size: 200px 200px;
    background-blend-mode: color-dodge;
    background-origin: content-box;
    background-position: 100% 50%
  }
  
  .error {
    padding-left: 10px;
    text-align: left;
    color: rgb(130, 20, 30);
    font-weight: bolder;
    font-size: 20px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
  
   ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
  }
</style>
