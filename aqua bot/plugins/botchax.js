const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let statistic = await fetch(`https://api.botcahx.eu.org/main/statistic`)
    .then(response => response.text());
  let message = `⚡ statistic: ${statistic}`
m.reply(message)
};


handler.help = ['botchax']
handler.tags = ['info']
handler.customPrefix = /^(botchax)$/i 
handler.command = new RegExp

module.exports = handler;