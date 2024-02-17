
// let handler = async(m, { conn, usedPrefix, command }) => {

//     let don = `
// *List harga limit bot*

// 2k = 100 limit
// 5k = 300 limit
// 8k = 500 limit
// 10k = 1000 limit
    
// Nomor 6281289694906
// (Pulsa, gopay, dana)
    
// Kirim bukti pembayaran ke .owner dan akan segera di proses :)

// • *Nomor :* ${dana} ( Dana, Gopay, Shopeepay)`

// }
// handler.help = ['buy']
// handler.tags = ['main']
// handler.command = ['buy'] 

// export default handler


let handler = async (m, { conn, args, command }) => {
    let totalf = Object.values(global.plugins).filter(
        (v) => v.help && v.tags
      ).length;
    conn.reply(m.chat, `*List harga limit bot*

2k = 100 limit
5k = 500 limit
10k = unlimited limit 

        
Nomor 6281289694906
(gopay, dana)
        
Kirim bukti pembayaran ke .owner dan akan segera di proses :)
    
• *Nomor :* 081289694906 ( Dana, Gopay )`,m)
    }
    
    handler.help = ['buy']
    handler.tags = ['info']
    handler.command = ['buy']
    module.exports = handler
    