<template>
    <div id="playerboard" class="board">
        <table class="table">
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Winning %</th>
                    <th>Points</th>
                </tr>
                <tr v-for="player in players">
                    <td>{{ player.id }}</td>
                    <td>{{ player.name }}</td>
                    <td>{{ player.won }}</td>
                    <td>{{ player.lost }}</td>
                    <td>{{ player.won/player.games * 100}}%</td>
                    <td>{{ player.points }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    /* Template Components */
    components: {},

    /* Template Data */
    data() {
      return {
        players: [
          {
            id: 1,
            name: 'Harjot',
            won: 1,
            lost: 2,
            games: 1
          }
        ]
      };
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
  @import "../../node_modules/bulma/sass/utilities/_all";
  @import "../../node_modules/bulma/sass/elements/table";
  
  .table {
    background: none;
  }
  
  .table th {
    color: white;
    font-weight: bolder;
  }
  
  .table td {
    color: white;
  }
  
  .table tr:hover {
    color: white;
    background: none;
  }
</style>
