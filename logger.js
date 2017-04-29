/* Custom logger */
module.exports = require('custom-logger')
    .config({
        format: "[%timestamp%][%event%]:%padding%%message%"
    })
    .new({
        GET: {
            level: 1,
            event: "GET",
            color: "blue"
        },
        POST: {
            level: 1,
            event: "POST",
            color: "blue"
        },
        PUT: {
            level: 1,
            event: "PUT",
            color: "blue"
        },
        DELETE: {
            level: 1,
            event: "DELETE",
            color: "blue"
        },
        PATCH: {
            level: 1,
            event: "PATCH",
            color: "blue"
        },
        speech: {
            level: 1,
            event: "speech",
            color: "cyan"
        },
        socket: {
            level: 1,
            event: "socket",
            color: "yellow"
        }
    });
