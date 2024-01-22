const fetch = require("node-fetch");
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Domain!\n\n*Contoh:* betabotz.eu.org`;
  if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan tanpa domain *https/http!*. Contoh: betabotz.eu.org`;  
  try {
    const waiting = `_Sedang mencari informasi WHOIS untuk ${text}..._`;
    m.reply(waiting);    
    let data = fetch(`https://api.betabotz.eu.org/api/webzone/whois?query=${text}&apikey=${lann}`)
    .then(result => result.json())
    .then(response => {
      m.reply(response.result);
    })
    .catch(error => {
      console.error(error);
      m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
    });
  } catch (error) {
    console.error(error);
    m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
  }
};

handler.command = ['whois', 'whoislookup'];
handler.help = ['whois', 'whoislookup'];
handler.tags = ['tools'];
handler.premium = false;
handler.limit = true
handler.group = true
module.exports = handler;
