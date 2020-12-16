const DjscordStore = require("../util/DjscordStore");

class ChannelManager {
    constructor(channel, client) {
        this.client = client;

        this.store = new DjscordStore(null, client);
    }

    async fetch(id) {
        
    }
}

module.exports = ChannelManager