const fs = require('fs');
const path = require('path');

const sendDatabaseToGroup = async (conn, groupJid) => {
    try {
        const filePath = path.resolve('./database.json'); 
        if (!fs.existsSync(filePath)) {
            console.error('File database.json tidak ditemukan!');
            return;
        }

        const fileBuffer = fs.readFileSync(filePath); 
        await conn.sendMessage(
            groupJid,
            {
                document: fileBuffer,
                mimetype: 'application/json',
                fileName: 'database.json',
            }
        );
        console.log(`Database berhasil dikirim ke grup: ${groupJid}`);
    } catch (err) {
        console.error('Error saat mengirim file database:', err);
    }
};

const scheduleSendDatabaseWithInterval = (conn, groupJid) => {
    const intervalTime = 60 * 1000; // jangan di hapus ini buat cek interval

    setInterval(async () => {
        const now = new Date();
        if (now.getHours() === 5 && now.getMinutes() === 0) {
            console.log('Memulai pengiriman database pada jam 5:00...');
            // ganti angka 5 nya sama jam yang kalian mau, 9 = 9 pagi, 20 = 8 malam
            try {
                await sendDatabaseToGroup(conn, groupJid);
            } catch (err) {
                console.error('Terjadi kesalahan saat mengirim:', err);
            }
        }
    }, intervalTime);

    console.log('interval untuk pengiriman db ke group di mulai!.');
};

const groupJid = '120363216901617825@g.us'; //isi dengan id grub

if (global.conn) {
    scheduleSendDatabaseWithInterval(global.conn, groupJid);
} else {
    console.error('Koneksi ke grup belum ada!');
}

module.exports = {};