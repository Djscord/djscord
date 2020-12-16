
const ClientUser = require('../structures/ClientUser');
const GuildManager = require('../structures/GuildManager');

module.exports = {
    'ready': (client, obj) => {
        client.user = new ClientUser(obj.d.user, client);
        
        client.guilds = new GuildManager(obj.d.guilds, client);

        client.emit('ready')
    },

    'guildCreate': (client, obj) => {

    },

    'message': (client, obj) => {
        client.emit('message', obj.d)
    } 
}