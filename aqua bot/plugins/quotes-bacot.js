let fetch = require('node-fetch')
let handler = async (m, { conn } ) => {   
let res = await fetch(`https://api.betabotz.eu.org/api/random/bacot?apikey=${lann}`).then(result => result.json())
let anu =`
─────〔 *Bacot* 〕─────

${res.hasl}
`
conn.reply(m.chat, anu, m) 
}
handler.help = ['bacot']
handler.tags = ['quotes']
handler.command = /^(bacot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
