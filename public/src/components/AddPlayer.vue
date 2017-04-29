<template>
    <div id="addPlayer" class="paddle board">
        <h2>Add a new player</h2>
        <input class="input" name="name" placeholder="Name" v-model.trim="name" @keyup.enter="addPlayer"></input>
        <input class="input" name="email" type="email" placeholder="Email Address" v-model.trim="email" @keyup.enter="addPlayer"></input>
        <button class="button is-medium" id="add" @click="addPlayer">Add Player</button>
        <transition name="fade">
          <p class="error" v-if="error">Error: {{ error }}</p>
        </transition>
    </div>
</template>

<script>
  import EventBus from '@/EventBus';

  export default {
    /* Template Components */
    components: {},

    /* Template Data */
    data() {
      return {
        name: '',
        email: null,
        error: false
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
      addPlayer: function(event) {
        if (this.name.length < 3) {
          this.error = 'Name must be longer than 3 characters';
          return;
        }

        this.$http.post('/api/player', JSON.stringify({
          name: this.name,
          email: this.email
        }))
          .then(function({
            body
          }) {
            if (body.status === 'success') {
              this.error = false;
              this.name = '';
              this.email = null;
              EventBus.$emit('added-player');
            } else {
              throw Error(body.error);
            }
          })
          .catch(function(error) {
            this.error = error.statusText || error || 'Unknown';
          });
      }
    }
  };
</script>

<style scoped lang="scss">
  .input {
    text-align: center;
  }
</style>
