const fs = require('fs');
const path = require('path');

const sendDatabaseToOwners = async (conn) => {
    try {
        const filePath = path.resolve('./database.json'); 
        if (!fs.existsSync(filePath)) {
            console.error('File database.json tidak ditemukan!');
            return;
        }

        const fileBuffer = fs.readFileSync(filePath); 

        for (const owner of global.owner) {
            try {
                await conn.sendMessage(
                    `${owner}@s.whatsapp.net`, 
                    {
                        document: fileBuffer,
                        mimetype: 'application/json',
                        fileName: 'database.json',
                    }
                );
                console.log(`Database berhasil dikirim ke owner: ${owner}`);
            } catch (err) {
                console.error(`Gagal mengirim database ke owner ${owner}:`, err);
            }
        }
    } catch (err) {
        console.error('Error saat mengirim file database:', err);
    }
};

const scheduleSendDatabaseWithInterval = (conn) => {
    const intervalTime = 60 * 1000;
    setInterval(async () => {
        const now = new Date();
        if (now.getHours() === 5 && now.getMinutes() === 0) { 
            console.log('Memulai pengiriman database ke owner pada jam 5:00...');
            // ganti angka 5 nya sama jam yang kalian mau, 9 = 9 pagi, 20 = 8 malam
            try {
                await sendDatabaseToOwners(conn);
            } catch (err) {
                console.error('Terjadi kesalahan saat mengirim database:', err);
            }
        }
    }, intervalTime);

    console.log('Interval untuk pengiriman database ke owner dimulai!');
};

if (global.conn) {
    scheduleSendDatabaseWithInterval(global.conn);
} else {
    console.error('Koneksi ke WhatsApp belum ada!');
}

module.exports = {};
