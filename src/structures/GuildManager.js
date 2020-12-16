const DjscordStore = require("../util/DjscordStore")

class GuildManager {
    constructor(guild, client) {
        this.guild = guild
        this.client = client

        this.cache = new DjscordStore()
    }


}

module.exports = GuildManager