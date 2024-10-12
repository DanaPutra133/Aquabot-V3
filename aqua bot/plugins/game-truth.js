let fetch = require('node-fetch');

let handler = async (m, { conn }) => {
	let img = 'https://btch.pages.dev/file/48a1b702c88c96a977e67.jpg'
        let truth = await fetch(`https://api.betabotz.eu.org/api/random/truth?apikey=${lann}`).then(result => result.json()) 
	conn.sendFile(m.chat, img, 'truth.png', `*TRUTH*\n\n“${truth.result}”`, m)
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
handler.limit = true
handler.group = true


module.exports = handler