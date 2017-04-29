'use strict';
const objection = require('objection');
const Model = objection.Model;

module.exports = class Sets extends Model {
    static get tableName() {
        return 'sets';
    }
};
