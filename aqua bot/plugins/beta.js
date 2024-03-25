const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let statistic = await fetch(`https://api.betabotz.eu.org/main/statistic`)
    .then(response => response.text());
  let message = `⚡ statistic: ${statistic}`
m.reply(message)
};

handler.help = ['beta']
handler.tags = ['info']
handler.customPrefix = /^(beta)$/i 
handler.command = new RegExp

module.exports = handler;