let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
// if (!text) throw `Masukkan Nama!\n\ncontoh: ${usedPrefix + command} "dana"`;
if (!text) throw `Masukkan Nomor nya!\n\ncontoh: ${usedPrefix + command} 6281289694906\n\n*Gunakan 62!*`;
try {
  await m.reply(wait)
  let res = await fetch(`https://api.betabotz.eu.org/api/primbon/nomerhoki?nomer=${text}&apikey=${lann}`);
  let json = await res.json()
  let anu = [
       `―-NOMOR HOKI-―\n\nNomor hp: ${json.result.message.nomer_hp}\n\nAngka shuzi: ${json.result.message.angka_shuzi}\n\n
--Energi positif: \nKekayaan: ${json.result.message.energi_positif.kekayaan}\nkesehatan: ${json.result.message.energi_positif.kesehatan}\ncinta: ${json.result.message.energi_positif.cinta}\nkestabilan: ${json.result.message.energi_positif.kestabilan}\npersentase: ${json.result.message.energi_positif.persentase}\n\n
--Energi negatif: \nperselisihan: ${json.result.message.energi_positif.perselisihan}\nkehilangan: ${json.result.message.energi_positif.kehilangan}\nmalapetaka: ${json.result.message.energi_positif.malapetaka}\nkehancuran: ${json.result.message.energi_positif.kehancuran}\npersentase: ${json.result.message.energi_positif.persentase}\n\n
--Catatan: ${json.result.message.catatan}`, 
    ]
conn.reply(m.chat,`${(anu)}`);;
} catch (e) {
throw `Internal server eror!\n\nulangi lagi perintah`
  }
}
  
    handler.help = ['nomerhoki nomor?']
    handler.tags = ['fun']
    handler.command = /^(nomerhoki)$/i
    handler.group = true
    
    module.exports = handler
    



//danaputra133