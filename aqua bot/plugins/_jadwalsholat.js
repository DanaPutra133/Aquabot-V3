let fetch = require('node-fetch');

function getPrayerTimes(jsonData) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const todayString = `${day}-${month}-${year}`;

    for (const item of jsonData.result.data) {
        if (item.date.gregorian.date === todayString) {
            return item;
        }
    }
    return null;
}

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Gunakan contoh: ${usedPrefix}${command} semarang`;

    try {
        const res = await (await fetch(`https://api.betabotz.eu.org/api/tools/jadwalshalat?kota=${text}&apikey=${lann}`)).json();
        
        if (!res.status || res.result.code !== 200) {
            throw 'Error: API response tidak valid';
        }

        const prayerTimes = getPrayerTimes(res);
        
        if (prayerTimes) {
            let timings = prayerTimes.timings;
            let jadwalSholat = Object.entries(timings)
                .map(([name, time]) => `*${name}:* ${time}`)
                .join('\n');
            
            let message = `
Jadwal Sholat untuk *${text}*
${jadwalSholat}
`.trim();
            
            m.reply(message);
        } else {
            throw 'Error: Tidak ada data untuk tanggal hari ini';
        }
    } catch (error) {
        m.reply('Terjadi kesalahan: ' + error);
    }
};

handler.help = ['salat <daerah>'];
handler.tags = ['islam'];
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i;
handler.limit = true;

module.exports = handler;
