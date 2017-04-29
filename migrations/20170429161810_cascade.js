exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('games', table => {
            table.dropForeign('player1Id');
            table.dropForeign('player2Id');
            table.foreign('player1Id').references('id').inTable('players').onDelete('cascade');
            table.foreign('player2Id').references('id').inTable('players').onDelete('cascade');
        }),
        knex.schema.table('sets', table => {
            table.dropForeign('gameId');
            table.foreign('gameId').references('id').inTable('games').onDelete('cascade');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('sets', table => {
            table.dropForeign('gameId');
            table.foreign('gameId').references('id').inTable('games')
        }),
        knex.schema.table('games', table => {
            table.dropForeign('player1Id');
            table.dropForeign('player2Id');
            table.foreign('player1Id').references('id').inTable('players');
            table.foreign('player2Id').references('id').inTable('players');
        })
    ]);
};
