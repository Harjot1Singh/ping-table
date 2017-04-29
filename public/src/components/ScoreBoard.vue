<template>
    <div id="scoreboard" class="paddle board">
        <h2>Latest Games</h2>
        <Score v-for="game in games" :player1="game.player1" :player2="game.player2" :sets="game.sets" :key="game.id"></Score>
        <p class="error" v-if="error">Error: {{ error }}</p>
    </div>
</template>

<script>
  import Score from '@/components/Score';
  
  import EventBus from '@/EventBus';

  export default {
    /* Template Components */
    components: {
      Score
    },

    /* Template Data */
    data() {
      return {
        games: [],
        error: false
      };
    },

    /* Computed Template Data */
    computed: {},
    /* Lifecycle Hooks */
    created() {},

    mounted() {
      this.getLatestGames();
      EventBus.$on('added-game', this.getLatestGames);
    },

    destroyed() {},

    /* Instance Methods */
    methods: {
      getLatestGames: function() {
        this.$http.get('/api/games')
          .then(response => {
            if (response.body.status === 'success') {
              this.games = response.body.games;
              this.error = false;
            } else {
              throw Error(response.body.error);
            }
          })
          .catch(error => {
            this.error = error.statusText || error || 'Unknown';
          });
      }
    }
  };
</script>

<style scoped>
  #scoreboard {
    max-height: 405px;
    overflow-y: auto;
    
  }
</style>
