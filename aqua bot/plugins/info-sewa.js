
// let fs = require('fs')
// let handler = async (m, { conn }) => {
// let teks = 'donasi'
// let dana = global.dana
// let pulsa = global.pulsa
// let gopay = global.gopay
// let numberowner = global.numberowner
// let anu = `Hai 👋
// Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
// ┌〔 Donasi • Emoney 〕
// ├ Dana : 081289694906
// ├ gopay : 081289694906
// └────
// Berapapun donasi kalian akan sangat berarti 👍

// Terimakasih =D

// Contact person Owner:
// wa.me/${numberowner} (Owner)

// *Kirim bukti ke .owner nanti dapat hadiahxp + limit :)*`
//   m.reply(anu)
// }
// handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
// handler.tags = ['main']

// handler.group = false

// module.exports = handler


// let fs = require('fs')
// let handler = async (m, { conn }) => {

// let qris = global.qris
// let anu = 
// {qris}

// `Hai 👋
// Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
// ┌〔 Donasi • Emoney 〕
// ├ Dana : 081289694906
// ├ gopay : 081289694906
// └────
// Berapapun donasi kalian akan sangat berarti 👍

// Terimakasih =D

// Contact person Owner:
// wa.me/${numberowner} (Owner)

// *Kirim bukti ke .owner nanti dapat hadiahxp + limit :)*`
//    conn.sendFile(m.chat, qris, anu, m)
// }
// handler.help = ['donasi', 'donate']
// handler.tags = ['xp', 'info']
// handler.command = /^(donasi|donate)$/i
// handler.group = true

// module.exports = handler

let fetch = require('node-fetch')
let numberowner = global.numberowner

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://cdn.btch.bz/file/fd7714ee03f6970d8fb30.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika telah melakukan pembayaran silahkan kirimkan bukti pembayaran ke WhatsApp ${numberowner}.*\nBerapapun donasi kalian akan sangat berarti 👍*`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler