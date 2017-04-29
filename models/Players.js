'use strict';
const objection = require('objection');
const Model = objection.Model;

module.exports = class Players extends Model {
    static get tableName() {
        return 'players';
    }

    static get relationMappings() {
        return {
            player1: {
                relation: Model.HasManyRelation,
                modelClass: require('./Games'),
                join: {
                    'from': 'players.id',
                    'to': 'games.player1Id'
                }
            },
            player2: {
                relation: Model.HasManyRelation,
                modelClass: require('./Games'),
                join: {
                    'from': 'players.id',
                    'to': 'games.player2Id'
                }
            }
        };
    }
};
