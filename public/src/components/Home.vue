<template>
    <div class="container">
      <Title></Title>
      <PlayerBoard></PlayerBoard>
      <div class="columns">
        <div class="column">
          <AddPlayer></AddPlayer>
        </div>
        <div class="column">
          <AddGame></AddGame>
        </div>
        <div class="column">
          <ScoreBoard></ScoreBoard>
        </div>
      </div>
    </div>
</template>

<script>
  /* Component Imports */
  import Title from '@/components/Title';
  import PlayerBoard from '@/components/PlayerBoard';
  import AddPlayer from '@/components/AddPlayer';
  import AddGame from '@/components/AddGame';
  import ScoreBoard from '@/components/ScoreBoard';

  export default {
    /* Template Components */
    components: {
      Title,
      PlayerBoard,
      AddPlayer,
      AddGame,
      ScoreBoard
    },

    /* Template Data */
    data() {
      return {};
    },

    /* Computed Template Data */
    computed() {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {}
  };
</script>

<style scoped lang="scss">
  .columns {
    margin: initial;
  }
</style>
