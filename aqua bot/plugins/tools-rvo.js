/* 
Script By dana -> sumpah susah banget ini sc 

const { downloadContentFromMessage } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
  if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw 'Ini bukan pesan viewonce.\njangan gunakan di whatsapp web!'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}

handler.help = ['readvo']
handler.tags = ['tools']
handler.command = ['readviewonce', 'read', 'rvo', 'liat', 'readvo']
handler.premium = false
handler.register = false
handler.limit = false
handler.group = true

module.exports = handler
