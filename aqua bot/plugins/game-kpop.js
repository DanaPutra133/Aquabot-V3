let timeout = 100000
let poin = 10000
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkpop = conn.tebakkpop ? conn.tebakkpop : {}
  let id = m.chat
  if (id in conn.tebakkpop) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkpop[id][0])
    throw false
  }
  if (!src) src = await (await fetch(`https://api.betabotz.eu.org/api/game/tebakpop?apikey=${lann}`)).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw "Terjadi kesalahan, ulangi lagi perintah!"
  let caption = `
≡ _GAME TEBAK KPOP_

┌─⊷ *SOAL*
▢ Penjelasan: *${json.deskripsi}*
▢ Timeout *${(timeout / 1000).toFixed(2)} detik*
▢ Bonus: ${poin} money
▢ Ketik ${usedPrefix}kpp untuk clue jawaban
▢ *REPLAY* pesan ini untuk\nmenjawab
└──────────────

    `.trim()
  conn.tebakkpop[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption}, { quoted: m }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakkpop[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkpop
        
        
        [id][0])
      delete conn.tebakkpop[id]
    }, timeout)
  ]
}

handler.help = ['tebakkpop']
handler.tags = ['game']
handler.command = /^tebakkpop/i
handler.limit = false
handler.group = true

module.exports = handler