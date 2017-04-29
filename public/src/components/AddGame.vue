<template>
    <div id="addGame" class="paddle board">
        <h2>Add Games</h2>
        <div class="columns">
            <div class="column">
                <Dropdown :options="players" v-model="player1"></Dropdown>
            </div>
            <div class="column">
                <h2 id="vs">vs</h2>
            </div>
            <div class="column">
                <Dropdown :options="players" v-model="player2"></Dropdown>
            </div>
        </div>
        <h3>Score (max of 5)</h3>
        <Set v-for="index in setCount" :key="index" @input="set => updateSet(set, index)"></Set>
        <button v-if="setCount < 5" class="button is-medium" id="addSet" @click="addSet">Add Set</button>
        <button class="button is-medium" id="addGame" @click="addGame">Add Game</button>
        <transition name="fade">
          <p class="error" v-if="error">Error: {{ error }}</p>
        </transition>
    </div>
</template>

<script>
  import Set from '@/components/Set';
  import Dropdown from '@/components/Dropdown';

  import EventBus from '@/EventBus';

  export default {
    /* Template Components */
    components: {
      Set,
      Dropdown
    },

    /* Template Data */
    data() {
      return {
        error: false,
        setCount: 1,
        sets: [{}],
        players: [],
        player1: null,
        player2: null
      };
    },

    /* Computed Template Data */
    computed: {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {
      this.getPlayers();
      EventBus.$on('added-player', this.getPlayers);
    },

    destroyed() {},

    /* Instance Methods */
    methods: {
      addSet: function() {
        if (this.setCount < 5) {
          this.setCount++;
        }
        this.sets.push({});
      },

      addGame: function(event) {
        if (!this.player1 || !this.player2) {
          this.error = 'Please choose the match competitors';
          return;
        }

        if (this.player1.id === this.player2.id) {
          this.error = 'The match competitors are the same';
          return;
        }

        for (const set of this.sets) {
          if (!(set.player1Score + 1) || !(set.player2Score + 1)) {
            this.error = 'Please fill in all set scores';
            return;
          }
        }

        this.$http.post('/api/game', JSON.stringify({
          sets: this.sets,
          player1Id: this.player1.id,
          player2Id: this.player2.id
        }))
          .then(function({
            body
          }) {
            if (body.status === 'success') {
              this.error = false;
              this.sets = [];
              this.setCount = 1;
              this.player1 = null;
              this.player2 = null;
              EventBus.$emit('added-game');
            } else {
              throw Error(body.error);
            }
          })
          .catch(function(error) {
            this.error = error.statusText || error || 'Unable to add game';
          });
      },

      updateSet: function(set, index) {
        this.sets[index - 1] = set;
        console.log(this.sets);
      },

      getPlayers: function() {
        this.$http.get('/api/players')
          .then(function(response) {
            if (response.body.status === 'success') {
              this.error = false;
              this.players = response.body.players;
            } else {
              throw Error(response.body.error);
            }
          })
          .catch(function(error) {
            this.error = error.statusText || error || 'Unable to fetch player list';
          });
      }
    }
  };
</script>

<style scoped lang="scss">
  #vs {
    margin-top: 20px;
  }
  
  #set {
    margin-bottom: 0;
  }
  
  #addSet {
    margin-top: 0px;
    background: rgba(0, 0, 0, 0.2);
  }
  
  #addSet:hover {
    background: rgb(25, 65, 83)
  }
</style>
