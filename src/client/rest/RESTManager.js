const { version } = require('../../index')

const fetch = require('node-fetch')

class RESTManager {
    constructor(client) {
        this.userAgent = `Djscord (https://github.com/djscord/djscord, ${version})`;
        this.auth = `Bot ${client.options.token}`;
    }

    
}

module.exports = RESTManager