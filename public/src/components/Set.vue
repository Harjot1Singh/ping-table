<template>
    <transition name="fade">
      <div class="columns" id="set">
          <div class="column">
              <input class="input" name="player1Score" type="number" placeholder="Score" @input="updateValue" />
          </div>
          <div class="column">
            <h1 class="dash">_</h1>
          </div>
          <div class="column">
              <input class="input" name="player2Score" type="number" placeholder="Score" @input="updateValue" />
          </div>
      </div>
    </transition>
</template>

<script>
  export default {
    /* Template Components */
    components: {},

    /* Component Props */
    props: ['value'],

    /* Template Data */
    data() {
      return {
        player1Score: 0,
        player2Score: 0
      };
    },

    /* Computed Template Data */
    computed() {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {
      updateValue: function(event) {
        const score = +event.target.value;
        if (score < 0) {
          event.target.value = 0;
          return;
        }

        if (event.target.name === 'player1Score') {
          this.player1Score = score;
        } else {
          this.player2Score = score;
        }

        this.$emit('input', {
          player1Score: this.player1Score,
          player2Score: this.player2Score
        });
      }
    }
  };
</script>

<style scoped>
  .dash {
    margin-top: 10px;
  }
</style>
