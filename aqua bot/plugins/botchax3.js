
const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let runtime = await fetch(`https://api.botcahx.eu.org/main/runtime`)
    .then(response => response.text());
  let message = `⚡ runtime: ${runtime}`
m.reply(message)
};


handler.help = ['botchax3']
handler.tags = ['info']
handler.customPrefix = /^(botchax3)$/i 
handler.command = new RegExp

module.exports = handler;