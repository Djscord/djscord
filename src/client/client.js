const { EventEmitter } = require('events')
const Init = require('../gateway/init');
const hb = require('../gateway/heartbeat')
const { GuildManager, UserManager, ChannelManager } = require('../index')

/**
 * A basic Djscord Client. The starting point for any bot.
 * @param {Object} ClientOptions
 */
class Client extends EventEmitter {
    constructor(ClientOptions={intents: 32509}) {
        super()

        this.users
        this.guilds
        this.channels
        this.user;

        this.readyAt = null;

        this.ws = {
            ping: 0,
            socket: null,
            heartbeat: {
                interval: 0,
                recieved: false,
                last: 0,
                startHeartBeat: hb
            },
        }

        this.options = ClientOptions

        this.token = ClientOptions.token

        // this.
    }

    start() {
        Init(this);
    }
}

module.exports = Client