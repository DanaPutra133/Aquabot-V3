const fs = require  ('fs');
const axios = require ('axios');


let handler = async (m, {text, prefix, command}) => {
    if (!text) {
        throw `masukan jumlah limit! contoh ${prefix + command} 10`
    }
    let users = global.db.data.users;
    if (!users[mentionedJid]) {
        users[mentionedJid] = {
          limit: 0,
          exp: 0,
          lastclaim: 0
        };
      }

      users[mentionedJid].limit += pointsToAdd;
      conn.reply(m.chat, `Berhasil Membeli ${pointsToAdd} limit.`, m, {
        mentions: [mentionedJid]
      });
}


handler.help = ['']
handler.tags = ['']
handler.command = ['']

MediaSourceHandle.export = handler