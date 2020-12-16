const DjscordStore = require("../util/DjscordStore");

class UserManager {
    constructor(users, client) {
        this.cache = new DjscordStore();

        for (const user of users) {
            this.cache.set(user)
        }
    }
}

module.exports = UserManager