let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
try { 
let img = await fetch(`https://api.betabotz.eu.org/api/wallpaper/meme?apikey=${lann}`).then(result => result.buffer())
await conn.sendFile(m.chat, img, 'file.jpg', wm, m)
} catch (e) {
throw `Error ${eror}`
 }
}
handler.command = /^(meme)$/i
handler.tags = ['fun']
handler.help = ['meme']
handler.limit = true
handler.group = true

module.exports = handler
