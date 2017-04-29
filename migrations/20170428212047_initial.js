exports.up = function(knex, Promise) {
    return Promise.all([
        // Players table
        knex.schema.createTable('players', table => {
            table.increments('id').primary();
            table.text('name').notNullable();
            table.text('email');
        }),
        knex.schema.createTable('games', table => {
            table.increments('id').primary();
            table.integer('player1Id').notNullable().references('id').inTable('players');
            table.integer('player2Id').notNullable().references('id').inTable('players');
            table.timestamps();
        }),
        knex.schema.createTable('sets', table => {
            table.increments('id').primary();
            table.integer('gameId').notNullable().references('id').inTable('games');
            table.integer('player1Score').notNullable();
            table.integer('player2Score').notNullable();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('players'),
        knex.schema.dropTable('games'),
        knex.schema.dropTable('sets')
    ]);
};
