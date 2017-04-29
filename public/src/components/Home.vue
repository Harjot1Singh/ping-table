<template>
    <div class="container">
      <Heading></Heading>
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
  import Heading from '@/components/Heading';
  import PlayerBoard from '@/components/PlayerBoard';
  import AddPlayer from '@/components/AddPlayer';
  import AddGame from '@/components/AddGame';
  import ScoreBoard from '@/components/ScoreBoard';
  import TweetBox from '@/components/TweetBox';

  export default {
    /* Template Components */
    components: {
      Heading,
      PlayerBoard,
      AddPlayer,
      AddGame,
      ScoreBoard,
      TweetBox
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
