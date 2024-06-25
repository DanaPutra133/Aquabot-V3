const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Tanggal Lahir!\n\ncontoh: ${usedPrefix + command} dani,14,05,2006`;

    try {
        let [part1] = text.split('|');
        let [nama, tanggal1, bulan1, tahun1] = part1.split(',');

        
        await m.reply(wait);

        let res = await fetch(`https://api.betabotz.eu.org/api/primbon/sifatkarakter?nama=${nama}&tanggal=${tanggal1}&bulan=${bulan1}&tahun=${tahun1}&apikey=${lann}`);
        let json = await res.json();
        let anu = [
          `―-SIFAT KARAKTER-―\n\nNama: ${json.result.message.nama}\n\nTanggal lahir: ${json.result.message.tgl_lahir}\n\nGaris hidup: ${json.result.message.garis_hidup}`, 
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

handler.help = ['sifatkarakter']
handler.tags = ['fun']
handler.command = /^(sifatkarakter)$/i
handler.group = true

module.exports = handler;

//danaputra133
//di bantu erlan aka