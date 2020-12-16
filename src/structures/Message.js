const { User } = require("../index")

class Message {
    constructor(obj, client) {
        this.id = obj.id
        this.content = obj.content
        this.author = new User(obj.author, client)
    }
}

module.exports = Message