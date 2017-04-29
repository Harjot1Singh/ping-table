'use strict';
const logger = require('./logger');

/* Read Configuration */
logger.info('Loading configuration');
const nconf = require('nconf');
nconf.argv()
    .env()
    .file({
        file: './config.json'
    });

/* DB setup */
// Connect Knex to DB
const knex = require('knex')({
    client: 'pg',
    connection: nconf.get('database')
});

// Migrate to latest schema
logger.info('Checking for outstanding migrations');
knex.migrate.latest([require('./knexfile.js')])
    .then(() => logger.info('Database connected'))
    .catch(error => logger.error('Error migrating tables:', error));

// Bind all models to Knex instance
const Model = require('objection').Model;
Model.knex(knex);

/* Setup Express */
logger.info('Starting Express Server');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static('public/dist'));

// Enable reading JSON post
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Log each request
app.use((req, res, next) => {
    logger[req.method](req.url);
    next();
});

// Hook in API router
const api = require('./api');
app.use(api);

app.use((err, req, res, next) => res.status(400).json({
    status: app.get('error'),
    error: err.body || err.detail || err.data || err.message || err
}));

const errorHandler = require('errorhandler');
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

const listener = server.listen(nconf.get('server:port'), () => {
    logger.info(`App running on port ${listener.address().port}`);
});
