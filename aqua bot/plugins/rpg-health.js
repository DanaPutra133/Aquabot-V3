let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.healt >= 10000) return m.reply(`
health ❤️kamu sudah penuh!
`.trim())
    const heal = 50
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
ramuan🧃kamus tidak cukup, kamu memiliki *${user.potion}* ramuan!
ketik *${usedPrefix}buy potion ${count - user.potion}* untuk membeli ramuan
`.trim())
    user.potion -= count * 1
    user.healt += heal * count
    m.reply(`
Sukses menggunakan *${count}* ramuan
`.trim())
}

handler.help = ['heal *jumlah*']
handler.tags = ['rpg']
handler.command = /^(heal|use)$/i
handler.limit = true
handler.rpg = true
module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
