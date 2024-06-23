const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Nama dan Tanggal Lahir!\n\ncontoh: ${usedPrefix + command} dani,14,05,2006`;

    try {
        //sengaja ada split gak ngaruh ke program kok
        let [part1] = text.split('|');
        let [nama1, tanggal1, bulan1, tahun1] = part1.split(',');        
        await m.reply(wait);

        let res = await fetch(`https://api.betabotz.eu.org/api/primbon/kecocokannama?nama=${nama1}&tanggal=${tanggal1}&bulan=${bulan1}&tahun=${tahun1}&apikey=${lann}`);
        let json = await res.json();
        let anu = [
          `―-KECOCOKAN NAMA-―\n\nNama kamu:${json.result.message.nama}\n\nTanggal lahir kamu:${json.result.message.tgl_lahir}\n\nDaya hidup:${json.result.message.life_path}\n\nDestiny:${json.result.message.destiny}\n\nPersonality:${json.result.message.persentase_kecocokan}\n\nPersentase kecocokan:${json.result.message.personality}\n\nCatatan:${json.result.message.catatan}`, 
       ]
       //thorw data when this buffer end
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

handler.help = ['kecocokannama']
handler.tags = ['fun']
handler.command = /^(kecocokannama)$/i
handler.group = true

module.exports = handler;

//danaputra133
//di bantu erlan aka