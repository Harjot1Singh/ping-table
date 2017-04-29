'use strict';
const objection = require('objection');
const Model = objection.Model;

module.exports = class Games extends Model {
    static get tableName() {
        return 'games';
    }

    static get relationMappings() {
        return {
            sets: {
                relation: Model.HasManyRelation,
                modelClass: require('./Sets'),
                join: {
                    from: 'sets.gameId',
                    to: 'games.id'
                }
            },
            player1: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./Players'),
                join: {
                    'from': 'players.id',
                    'to': 'games.player1Id'
                }
            },
            player2: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./Players'),
                join: {
                    'from': 'players.id',
                    'to': 'games.player2Id'
                }
            }
        };
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
};
