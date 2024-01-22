let fetch = require('node-fetch');
let handler = async (m, { conn }) => {
  try {
    let res = await fetch(`https://api.betabotz.eu.org/api/random/quotesanime?apikey=${lann}`);
    let json = await res.json();

    if (json.status && json.result && json.result.length > 0) {
      let randomIndex = Math.floor(Math.random() * json.result.length);
      let animeQuote = json.result[randomIndex];
      let cleanQuotes = animeQuote.quotes.replace(/[\n\r\t]/g, ' ');

      let replyMessage = `${cleanQuotes}\n\nCharacter: ${animeQuote.karakter}\nAnime: ${animeQuote.anime}\nEpisode: ${animeQuote.episode}`;

      conn.sendFile(m.chat, animeQuote.gambar, 'image.jpg', replyMessage, m, false, { contextInfo: { mentionedJid: [m.sender] } });
    } else {
      throw 'Invalid API response';
    }
  } catch (e) {
    throw `Error: ${e.message || 'Internal server error!'}`;
  }
};

handler.help = ['anime'];
handler.tags = ['quotes'];
handler.command = /^(anime)$/i;
handler.group = true;

module.exports = handler;
