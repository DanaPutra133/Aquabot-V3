const fs = require = ('fs');

const prem = ''; //xp yang di dapat buat user prem
const free = ''; //xp yang di dapat buat user free

try {
let handler = async (m, {conn, text}) => {
    let time = global.db.data.users[m.sender].lastclaim + 500
    if (new Date - global.db.data.users[m.sender].lastclaim < 10) throw `🎁 *Anda telah mengumpulkan hadiah harian Anda*\n\n🕚 Masuk kembali *${msToTime(time - new Date())}* `
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
🎁 *HADIAH XP*
*Spam terus untuk mendapatkan xp*
cek .balance jumlah xp mu!
🆙 *XP* : +${isPrems ? prem : free}`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
} catch (e) {
    throw `Error: daily tidak dapat di ambil`;
}
handler.help = ['daily']
handler.tags = ['rpg']
handler.command = ['']

module.exports = handler