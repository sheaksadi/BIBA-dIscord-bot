import axios from "axios";



import dotenv from "dotenv";
dotenv.config();




console.log("helelo world")
let res = await axios.get("https://api.thecatapi.com/v1/images/search")
console.log(res.data);


import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});
client.on(Events.MessageCreate, onMessage)
async function onMessage(msg) {
    console.log(msg.content);
    if (msg.content.toLowerCase() === "cat" && !msg.author.bot) {
        res = await axios.get("https://api.thecatapi.com/v1/images/search")

        let channel = client.channels.cache.get(msg.channelId)
        channel.send(res.data[0].url)
    }
}
// client.on(Events.InteractionCreate, async interaction => {
//     if (!interaction.isChatInputCommand()) return;
//
//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }
// });
client.login(process.env.DISCORD_BOT_TOKEN);
