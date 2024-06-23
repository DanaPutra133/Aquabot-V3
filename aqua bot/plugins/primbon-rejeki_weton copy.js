const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Tanggal Lahir!\n\ncontoh: ${usedPrefix + command} 14,05,2006`;

    try {
        let [part1] = text.split('|');
        let [tanggal1, bulan1, tahun1] = part1.split(',');

        
        await m.reply(wait);

        let res = await fetch(`https://api.betabotz.eu.org/api/primbon/rejekiweton?tanggal=${tanggal1}&bulan=${bulan1}&tahun=${tahun1}&apikey=${lann}`);
        let json = await res.json();
        let anu = [
          `―-REJEKI WETON-―\n\nHari lahir: ${json.result.message.hari_lahir}\n\nRejeki:${json.result.message.rejeki}\n\nCatatan:${json.result.message.catatan}`, 
       ]
        if (json.status) {
         conn.reply(m.chat,`${(anu)}`);;
        } else {
            conn.reply(m.chat, `Maaf, terjadi kesalahan: ${json.message}`, m);
        }
    } catch (e) {
    throw e
        //throw `Internal server error!\n\nUlangi lagi perintah.`;
    }
}

handler.help = ['rejekiweton']
handler.tags = ['fun']
handler.command = /^(rejekiweton)$/i
handler.group = true

module.exports = handler;

//danaputra133
//di bantu erlan aka