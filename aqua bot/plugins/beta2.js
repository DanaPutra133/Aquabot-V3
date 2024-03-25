const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let uptime = await fetch(`https://api.betabotz.eu.org/main/uptime`)
    .then(response => response.text());
  let message = `⚡ uptime: ${uptime}`
m.reply(message)
};

handler.help = ['beta2']
handler.tags = ['info']
handler.customPrefix = /^(beta2)$/i 
handler.command = new RegExp

module.exports = handler;