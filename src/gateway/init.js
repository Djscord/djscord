const ws = require('ws')
const socket = new ws(`wss://gateway.discord.gg?v=6&encoding=json`)
const { Codes } = require('../util/Constants')
const json = require('../util/Constants').JSON
const { Identify } = json
const Client = require('../client/client')

/**
 * 
 * @param {Client} client 
 */
module.exports = (client) => {
    client.ws.socket = socket

    socket.on('message', (a) => {
        const data = JSON.parse(a) || a;

        switch(data.op) {
            case Codes.WS.Gate_Codes.HELLO:
                client.ws.heartbeat.recieved = true;
                client.ws.heartbeat.interval = data.d.heartbeat_interval;

                client.ws.heartbeat.startHeartBeat(client);

                const payload = JSON.stringify({
                    op: 2,
                    d: {
                        token: client.token || client.options.token,
                        intents: client.options.intents,
                        properties: Identify.d.properties,

                    }
                })

                socket.send(payload)
            break;

            case Codes.WS.Gate_Codes.DISPATCH:
                const Events = require('../util/Constants').Gateway_Events;
                if (!Events.hasOwnProperty(data.t)) return;

                if (data.t == "READY") client.readyAt = Date.now();

                const e = require('./handler')[Events[data.t]]
                if (e) e(client, data)
            break;

            case Codes.WS.Gate_Codes.HEARTBEAT_ACK:
                client.ws.heartbeat.last = Date.now()
                client.ws.heartbeat.recieved = true;
            break;
        }

    })
}