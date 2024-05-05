let fetch = require('node-fetch')

let handler = async (m, {conn, command}) => {
    let limit = Math.min (26);
    for (let i = 1; i < limit; i++ ) {
        await sleep();
        conn.sendMessage(m.chat, {text: "HELLO :D"}, m)
    }
}

handler.help = handler.command = ['amerika']
module.exports = handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
