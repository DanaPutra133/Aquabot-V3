/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
*/

const similarity = require('similarity')
const threshold = 0.72
let poin = 10000
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tebe/i.test(m.quoted.text)) return !0
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
  if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    if (['.tebe', 'Bantuan', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.name.toLowerCase()) {
      global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
      users.money += poin
      await this.reply(m.chat, `*Benar!* +${this.tebakbendera[id][2]} money`, m)
      clearTimeout(this.tebakbendera[id][3])
      delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler

//danaputra133