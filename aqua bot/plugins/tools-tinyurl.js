let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Masukan url/link nya mana?\n> .tinyurl https://google.com'
  let res = await fetch(`https://api.betabotz.eu.org/api/tools/tinyurl?link=${text}&apikey=${lann}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['tinyurl'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^tinyurl$/i
handler.group = true

module.exports = handler
