let timeout = 100000
let poin = 10000
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
  let id = m.chat
  if (id in conn.tebaklogo) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklogo[id][0])
    throw false
  }
  if (!src) src = await (await fetch(`https://api.betabotz.eu.org/api/game/tebaklogo?apikey=${lann}`)).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw "Terjadi kesalahan, ulangi lagi perintah!"
  let caption = `
≡ _GAME TEBAK LOGO_

┌─⊷ *SOAL*
▢ Penjelasan: *${json.deskripsi}*
▢ Timeout *${(timeout / 1000).toFixed(2)} detik*
▢ Bonus: ${poin} money
▢ Ketik ${usedPrefix}lgo untuk clue jawaban
▢ *REPLAY* pesan ini untuk\nmenjawab
└──────────────

    `.trim()
  conn.tebaklogo[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption}, { quoted: m }),
    json, poin,
    setTimeout(() => {
      if (conn.tebaklogo[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklogo
        
        
        [id][0])
      delete conn.tebaklogo[id]
    }, timeout)
  ]
}

handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo/i
handler.limit = false
handler.group = true

module.exports = handler