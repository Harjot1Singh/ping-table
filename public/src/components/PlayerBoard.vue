<template>
    <div id="playerboard" class="board">
    <h2>Top 5 Players</h2>
        <table class="table">
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Win %</th>
                    <th>Points</th>
                </tr>
                <PlayerEntry v-for="(player, index) in players" :classObject="'pos-'+index" :index="index + 1" :player="player" :key="player.id"></PlayerEntry>
            </tbody>
        </table>
    </div>
</template>

<script>
  import PlayerEntry from '@/components/PlayerEntry';

  import EventBus from '@/EventBus';

  export default {
    /* Template Components */
    components: {
      PlayerEntry
    },

    /* Template Data */
    data() {
      return {
        players: []
      };
    },

    /* Computed Template Data */
    computed: {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {
      this.getTopPlayers();
      EventBus.$on('added-player', this.getTopPlayers);
      EventBus.$on('added-game', this.getTopPlayers);
    },

    destroyed() {},

    /* Instance Methods */
    methods: {
      getTopPlayers: function() {
        this.$http.get('/api/playerboard')
          .then(response => {
            if (response.body.status === 'success') {
              this.players = response.body.players;
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

<style scoped lang="scss">
  table {
    background: none;
    border-collapse: collapse;
    margin-bottom: 0;
  }
  
  th {
    color: white;
    font-weight: bolder;
    border-bottom: 2px solid white;
    text-align: center;
  }
  
  @for $i from 0 through 4 {
    .pos-#{$i} {
      font-size: 27px - $i*3px;
    }
  }
  
  tr:hover {
    color: white;
    background: none;
  }
</style>
