const ws = require('ws')
const socket = new ws(`wss://gateway.discord.gg?v=6&encoding=json`)

module.exports = (client) => {
    socket.on('message', (a) => {
        const d = JSON.parse(a) || a;

        switch(d.op) {
            case 
        }

    })
}