require('dotenv').config();
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log(`Logged in as ${Client.user.tag}`);
});

Client.on('message', (message) => {
    console.log(message.author.username, Client.user.username)
    if (message.content.includes('ok') && message.author.username != Client.user.username) {
        message.channel.send('alaaaaaa dijo ok')
    }

    if (message.content.includes('oc') && message.author.username != Client.user.username) {
        message.channel.send('alaaaaaa dijo oc')
    }
})

Client.login(process.env.TOKEN);