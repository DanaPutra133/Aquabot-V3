var fetch = require('node-fetch');

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah aqua Bot Whatsapp Yang Dikembangkan Oleh dana,Saya Bernama aqua,Saya Dibuat Oleh dana Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://api.betabotz.org'
await m.reply(wait)
  var js = await fetch(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${lann}`)
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2'];
handler.tags = ['info'];
handler.premium = false
handler.group = true

module.exports = handler;
