<template>
  <transition name="fade">
    <tr :class="classObject">
      <td>{{ index }}</td>
      <td>
        <figure class="image">
          <img :src="gravatarURL(player.email, {size: 200})">
        </figure>
        {{ player.name }}
      </td>
      <td>{{ player.wins }}</td>
      <td>{{ player.losses }}</td>
      <td>{{ win.toFixed(1) }}%</td>
      <td>{{ player.points }}</td>
    </tr>
  </transition>
</template>

<script>
  const gravatar = require('gravatar');

  export default {
    /* Template Components */
    components: {},

    /* Template Props */
    props: ['player', 'index', 'classObject'],

    /* Template Data */
    data() {
      return {};
    },

    /* Computed Template Data */
    computed: {
      win: function() {
        const win = this.player.wins/this.player.total * 100;
        return isNaN(win) ? 0: win;
      }
    },

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {
      gravatarURL: gravatar.url
    }
  };
</script>

<style scoped lang="scss">
  tr {
    font-size: 27px - 4px;
    transition: all 0.5s ease-in-out;
  }
  
  td {
    color: white;
    text-align: center;
    border-bottom: none;
  }
  
  .image {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 32px;
    height: 32px;
    transition: all 0.5s ease-in-out;
  }
  
  tr:hover {
    color: white;
    background: none;
    font-size: 40px;
    .image {
      width: 128px;
      height: 128px;
    }
  }
  
  img {
    border-radius: 40px;
  }
</style>
