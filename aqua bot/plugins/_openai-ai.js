var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  var apii = await fetch(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${lann}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan \n ulangi lagi!"
}
}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
handler.group = true
handler.limit = 2


module.exports = handler;
