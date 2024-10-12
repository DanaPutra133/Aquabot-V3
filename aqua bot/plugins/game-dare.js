let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let img = 'https://btch.pages.dev/file/48a1b702c88c96a977e67.jpg'
	let dare = await fetch(`https://api.betabotz.eu.org/api/random/dare?apikey=${lann}`).then(result => result.json())
	conn.sendFile(m.chat, img, 'dare.png', `*DARE*\n\n“${dare.result}”`, m)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare|berani|tantangan)$/i
handler.limit = true
handler.group = true


module.exports = handler