// var fetch = require('node-fetch');
// var handler = async (m, {
//  text, 
//  usedPrefix, 
//  command
//  }) => {
// if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
// try {
//   var apii = await fetch(`https://tools.betabotz.eu.org/tools/openai?q=${text}`)
//   var res = await apii.json()
//   await m.reply(res.result)
// } catch (err) {
//   console.error(err)
//   throw "Terjadi kesalahan dalam menjawab pertanyaan \n ulangi lagi!"
// }
// }
// handler.command = handler.help = ['ai','openai','chatgpt'];
// handler.tags = ['tools'];
// handler.premium = false
// handler.group = false
// handler.limit = 2


// module.exports = handler;

// var fetch = require('node-fetch');
// var handler = async (m, {
//  text, 
//  usedPrefix, 
//  command
//  }) => {
// if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
// try {
//   var apii = await fetch(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${lann}`)
//   var res = await apii.json()
//   await m.reply(res.message)
// } catch (err) {
//   console.error(err)
//   throw "Terjadi kesalahan dalam menjawab pertanyaan \n ulangi lagi!"
// }
// }
// handler.command = handler.help = ['ai','openai','chatgpt'];
// handler.tags = ['tools'];
// handler.premium = false
// handler.group = true
// handler.limit = 2


// module.exports = handler;



var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  var apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.help = ['ai']
handler.tags = ['search']
handler.customPrefix = /(\?$)/
handler.command = /^siapa|apa|kapan|bagaimana|berapa|$/i
handler.owner = false
handler.group = true
handler.fail = null
module.exports = handler;
