const User = require('./User')

class ClientUser extends User {
    constructor(obj, client) {
        super(obj, client)
    }

    setAvatar() {
        
    }
}

module.exports = ClientUser