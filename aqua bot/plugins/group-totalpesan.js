let handler = async (m, { conn, groupMetadata }) => {
    let user = global.db.data.chats[m.chat].memgc;
    let memgc = Object.keys(user).filter(v => v != conn.user.jid).sort((a, b) => {
        const totalA = user[a].chat;
        const totalB = user[b].chat;
        return totalB - totalA;
    });
    let nomor = 1;
    let chatToday = 0;
    let chatTotal = 0;
    for (let number of memgc) {
        chatToday += user[number].chat;
        chatTotal += user[number].chatTotal;
    }
    let head = `Total chat group hari ini: ${toRupiah(chatToday)} \nTotal semua chat: ${toRupiah(chatTotal)} \n\n`;
    let caption = '';
    for (let i = 0; i < memgc.length; i++) {
        if (typeof user[memgc[i]] != 'undefined' && nomor != 21) {
            caption += `*${nomor++}.* ${conn.getName(memgc[i])}\n`;
            caption += `Chat Today : ${toRupiah(user[memgc[i]].chat)}\n`;
            caption += `Total Chat : ${toRupiah(user[memgc[i]].chatTotal)} \n`;
            caption += `Last Chat : ${getTime(user[memgc[i]].lastseen)}\n\n`;
        }
    }
    await m.reply(head + caption.trim());
}

handler.help = ['totalchatgc'];
handler.tags = ['group'];
handler.command = /^(totalchatgc)$/i;
handler.admin = true;
handler.group = true;

module.exports = handler;

function parseMs(ms) {
    if (typeof ms !== 'number') throw 'Parameter must be filled with number';
    return {
        days: Math.trunc(ms / 86400000),
        hours: Math.trunc(ms / 3600000) % 24,
        minutes: Math.trunc(ms / 60000) % 60,
        seconds: Math.trunc(ms / 1000) % 60,
        milliseconds: Math.trunc(ms) % 1000,
        microseconds: Math.trunc(ms * 1000) % 1000,
        nanoseconds: Math.trunc(ms * 1e6) % 1000
    };
}

function getTime(ms) {
    let now = parseMs(+new Date() - ms);
    if (now.days) return `${now.days} days ago`;
    else if (now.hours) return `${now.hours} hours ago`;
    else if (now.minutes) return `${now.minutes} minutes ago`;
    else return `a few seconds ago`;
}

const toRupiah = number => parseInt(number).toLocaleString().replace(/,/gi, ".");