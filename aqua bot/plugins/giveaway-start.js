let handler = async (m, { usedPrefix, text, command, participants  }) => {
    conn.giveway = conn.giveway ? conn.giveway : {}
    let id = m.chat
    let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
	if (!text) throw `Example : ${usedPrefix + command} GIVEAWAY BOKEP 500TB`
    if (id in conn.giveway) {
        throw `_*Masih ada GIVEAWAY di chat ini!*_`
    }
    let capt = `Berhasil memulai giveaway!\n\n*${usedPrefix}ikut* - untuk ikut giveaway\n*${usedPrefix}cekgiveaway* - untuk cek yang ikut\n*${usedPrefix}rollgiveaway* - untuk mencari pemenang\n*${usedPrefix}deletegiveaway* - untuk hapus giveaway\n\n*INFORMASI:*\n\n${text}`
    conn.giveway[id] = [
        conn.sendMessage(m.chat, { text: capt, mentions: participants.map(a => a.id) }),
                [],
        text
    ]
}
handler.help = ['mulaigiveaway'].map(v => v + ' <text>')
handler.tags = ['adminry', 'group']
handler.command = /^(start|mulai)giveaway$/i
handler.group = true
handler.admin = true
module.exports = handler