'use strict';
const express = require('express');
const router = module.exports = express.Router();

const Players = require('./models/Players');
const Games = require('./models/Games');

// Gets a list of all the players
router.get('/api/players', (req, res, next) => {
    Players
        .query()
        .select(['id', 'name'])
        .then(players => res.json({
            status: 'success',
            players
        }))
        .catch(next);
});

// Gets the top 5 players and associated details
router.get('/api/playerboard', (req, res, next) => {
    // Brace yourself
    Games
        .raw(`
            with players1Totals as (
                select players.id, sum(sets."player1Score") as p1Total 
                from players
                join games on players.id = games."player1Id"
                join sets on sets."gameId" = games.id
                group by players.id
            ),
            players2Totals as (
                select players.id, sum(sets."player2Score") as p2Total 
                from players
                join games on players.id = games."player2Id"
                join sets on sets."gameId" = games.id
                group by players.id
            ),
            playerPoints as (
                select players.id, 
                ( select p1Total from players1Totals where players1Totals.id = players.id ) p1Total,
                ( select p2Total from players2Totals where players2Totals.id = players.id ) p2Total                
                from players
            )
            select players.id, players.name, players.email, (COALESCE(p1Total, 0)  + COALESCE(p2Total, 0) ) as points
            from players
            natural join playerPoints
            order by points desc
            limit 5
            `)
        .then(result => result.rows.map(row => Players.fromDatabaseJson(row)))
        .then(players => Players.loadRelated(players, '[player1.sets, player2.sets]'))
        .then(players => players.map(player => {
            const result = {
                id: player.id,
                name: player.name,
                email: player.email,
                points: player.points,
                wins: 0,
                losses: 0,
                total: player.player1.length + player.player2.length
            };

            result.wins = player.player1.reduce((acc, val) => {
                    return acc + win(val.sets, true);
                }, 0) +
                player.player2.reduce((acc, val) => {
                    return acc + win(val.sets, false);
                }, 0);

            result.losses = result.total - result.wins;
            return result;
        }))
        .then(players => res.json({
            status: 'success',
            players
        }))
        .catch(next);
});

function win(sets, isPlayer1) {
    const player1Wins = setWins(sets, true);
    const player2Wins = setWins(sets, false);
    if (isPlayer1)
        return (player1Wins > player2Wins);
    else
        return (player2Wins > player1Wins);
}

function setWins(sets, isPlayer1) {
    let total = 0;
    for (const set of sets) {
        if ((isPlayer1 && set.player1Score > set.player2Score) || (!isPlayer1 && set.player1Score < set.player2Score)) {
            total++;
        }
    }
    return total;

}

// Creates a new player
router.post('/api/player', (req, res, next) => {
    Players
        .query()
        .insert(req.body)
        .then(() => res.json({
            status: 'success'
        }))
        .catch(next);
});

// Gets the latest 30 games
router.get('/api/games', (req, res, next) => {
    Games
        .query()
        .eager('[sets, player1, player2]')
        .orderBy('id', 'desc')
        .limit('30')
        .then(games => res.json({
            status: 'success',
            games
        }))
        .catch(next);
});

// Creates a game
router.post('/api/game', (req, res, next) => {
    Games
        .query()
        .insertGraph(req.body)
        .then(() => res.json({
            status: 'success',
        }))
        .catch(next);
});
