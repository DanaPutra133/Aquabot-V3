const fetch = require("node-fetch")
const util = require("util")

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contohd dari perintah ${usedPrefix}${command} https://kraken.nswardh.com/k`
    m.reply(wait)
     const url = args[0];
     let re = await fetch(`https://api.betabotz.eu.org/api/download/KrakenDownload?url=${url}&apikey=${lann}`)
     let message = await re.json()  
    try {             
        for (let i of message.message ) {
            conn.sendFile(m.chat, i._url, null, `*Instagram Downloader*`, m)
        }
        // perintah untuk mengambil data url dari kraken yang di anggap benar 
        // jka ingin di hapus silahkan di hapus
        {
            const url = args[0];
            let re = await fetch(`https://api.betabotz.eu.org/api/download/KrakenDownload?url=${url}&apikey=${lann}`)
            let message = await re.json(0) 
            sendurl = message
        }
    } catch(err) {
        m.reply(`${eror}`)
    }
}

handler.help = ['krakendl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(Instagram|ig|igdl|igstory)$/i
handler.group = true
handler.limit = 2



module.exports = handler
