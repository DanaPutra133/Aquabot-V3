let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`@${m.sender.split`@`[0]} sekarang AFK 😴 ${text ? '\nDengan Alasan 🗒️ : ' + text : 'Tanpa Alasan'}
    `)
    }
    handler.help = ['afk [alasan]']
    handler.tags = ['main']
    handler.command = /^afk$/i
    handler.group = true
    
    module.exports = handler
    //@${who.split`@`[0]}        /////@${m.sender.split`@`[0]