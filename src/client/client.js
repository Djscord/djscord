const { EventEmitter } = require('events')
const Init = require('../gateway/init');

/**
 * A basic Djscord Client. The starting point for any bot.
 * @param {Object} ClientOptions
 */
class Client extends EventEmitter {
    constructor(token, ClientOptions) {
        super()

        this.users;
        this.guilds;
        this.channels;
        this.user;

        this.token = token

        this.ws = {
            ping: 0,
            socket: null,
            heartbeat: {},
        }
    }

    start() {
        Init(this);
    }
}

module.exports = Client