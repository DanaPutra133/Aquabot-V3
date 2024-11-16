const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

exports.before = async function(m, { isAdmin, isBotAdmin }) {
  if (global.db.data.users[m.sender].limit > 0) {
    if (m.isBaileys && m.fromMe) return;
    let chat = global.db.data.chats[m.chat]
    let isFoto = m.mtype
    if (chat.autosticker && isFoto ) {
      if (!isBotAdmin) {
      } let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ''
      if (/image/.test(mime)) {
        let media = await q.download()
      
        let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
        if ((q.msg || q).seconds > 7) return m.reply('maksimal 6 detik!')
        let media = await q.download()
      
        let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
        } else {
        }
    }
    
    return true
  }
  }