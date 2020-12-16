module.exports = {
    Client: require('./client/client'),
    DjscordStore: require('./util/DjscordStore'),
    ChannelManager: require('./structures/ChannelManager'),
    GuildManager : require('./structures/GuildManager'),
    UserManager : require('./structures/UserManager'),
    User : require('./structures/User'),
    ClientUser : require('./structures/ClientUser'),
    Message : require('./structures/Message'),
    version : require('../package.json').version,
    User : require('./structures/User')
}