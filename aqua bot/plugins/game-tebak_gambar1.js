

let timeout = 120000
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
    throw false
  }
  if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakgambar.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `
≡ _GAME TEBAK GAMBAR_

┌─⊷ *SOAL*
▢ Timeout *${(timeout / 1000).toFixed(2)} detik*
▢ Ketik ${usedPrefix}hint untuk clue jawaban
▢ *REPLAY* pesan ini untuk\nmenjawab
└──────────────

    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption}, { quoted: m }),
    json,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}

handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.limit = false
handler.group = true

module.exports = handler