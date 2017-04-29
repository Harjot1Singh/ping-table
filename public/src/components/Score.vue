<template>
  <transition name="fade">
    <div class="score" >
      <figure class="image is-48x48 left">
        <img :src="gravatarURL(player1.email, {size: 200})">
      </figure>
      <h3 class="name">{{ player1.name }}</h3> 
      <h3>{{ player1Total }} - {{ player2Total }}</h3>
      <h3 class="name">{{ player2.name }}</h3>
      <figure class="image is-48x48 right">
        <img :src="gravatarURL(player2.email, {size: 200})">
      </figure>
      <div class="sets">
        <span v-for="(set, index) in sets">
        <span v-if="index > 0" class="separator">|</span>
          {{ set.player1Score }} - {{ set.player2Score }}
        </span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  figure {
    display: inline-block;
    position: relative;
    top: 30px;
  }
  
  .left {
    left: -40px;
  }
  
  .right {
    left: 40px;
  }
  
  img {
    border-radius: 40px;
  }
  
  h3 {
    display: inline;
    font-weight: bolder;
  }
  
  .name {
    font-weight: normal;
    padding: 10px;
  }
  
  .sets {
    margin-top: 5px;
  }
  
  .seperator {
    margin-left: 5px;
    margin-right: 5px;
  }
  
  .trophy {
    color: gold;
    vertical-align: middle;
  }
</style>

<script>
  const gravatar = require('gravatar');

  export default {
    /* Template Components */
    components: {},

    /* Expected Props */
    props: ['player1', 'player2', 'sets'],

    /* Template Data */
    data() {
      return {};
    },

    /* Computed Template Data */
    computed: {
      player1Total: function() {
        return this.totalWins(true);
      },

      player2Total: function() {
        return this.totalWins(false);
      }
    },
    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {
      totalWins: function(isPlayer1) {
        let total = 0;
        for (const set of this.sets) {
          if ((isPlayer1 && set.player1Score > set.player2Score) || (!isPlayer1 && set.player1Score < set.player2Score)) {
            total++;
          }
        }
        return total;
      },
      gravatarURL: gravatar.url
    }
  };
</script>
