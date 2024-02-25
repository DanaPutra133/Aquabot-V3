
let handler = async (m, { conn, command }) => {
    await conn.reply(m.chat, wait, m)
    try {
      if (command == 'jmk', 'jomok') {
        const res = `https://api.betabotz.eu.org/api/nsfw/gay?apikey=${lann}`;
        await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
      }
     } catch (err) {
    console.error(err)
    throw "🚩 Terjadi kesalahan"
     };
  };
  handler.command = handler.help = ['jmk', 'jomok']
  handler.tags = ['fun']
  handler.limit = 10
  handler.group = true
  module.exports = handler;
  