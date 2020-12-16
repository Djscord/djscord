const Constants = require('../util/Constants')

class User {
    constructor(obj, client) {
        this.client = client

        this.id = obj.id
        this.username = obj.username
        this.avatarHash = obj.avatar
        this.bot = obj.bot
        this.avatarURL = (options = { type: "png", dynamic: true, size: 256 }) => {
            var type = options.type

            if (options.dynamic && this.avatarHash.startsWith("a_")) type = "gif";

            return Constants.CDN.Avatar(this.id, this.avatarHash, type)
        }
    }

    send(content) {
        return new Promise(async (resolve,reject) => {
            const response = await this.client.rest.post(`/channels/${this.id}/messages`);

            if (response.status == 200) {
                resolve(new this.constructor(response.body, this.client))
            } else {
                reject(new DjscordError())
            }
        })
    }
}

module.exports = User