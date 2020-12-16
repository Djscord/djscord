const fetch = require('node-fetch');
const djscord = require('../')

const bot = new djscord.Client({ 
    token: "NDQ1OTU4MDAzNTgyMTczMjA0.WvrwwQ.Cm4XauAXn6mA0XF3KsTQvzV5Mek",
});

bot.on('ready', () => {
    console.log(bot.user.username+` is ready!`);
    console.log(bot.user.avatarURL({ type: "png", dynamic: true, size: 2048 }))
})

bot.on('message', message => {
    if (message.author.bot) return;

    fetch(`https://discord.com/api/channels/${message.channel_id}/messages`, {
        method: "POST",
        headers: { Authentication: `Bot ${bot.token}`, "User-Agent": "Djscord" },
        body: JSON.stringify({
            content: message.content
        })
    })
})

bot.start();
