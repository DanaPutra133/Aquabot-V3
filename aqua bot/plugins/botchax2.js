const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let uptime = await fetch(`https://api.botcahx.eu.org/main/uptime`)
    .then(response => response.text());
  let message = `⚡ uptime: ${uptime}`
m.reply(message)
};


handler.help = ['botchax2']
handler.tags = ['info']
handler.customPrefix = /^(botchax2)$/i 
handler.command = new RegExp

module.exports = handler;