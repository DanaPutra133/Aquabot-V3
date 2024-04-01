const fetch = require('node-fetch');


let handler = async (m,{conn} ) => {
    let runtime = await fetch(`https://api.betabotz.eu.org/main/runtime`)
    .then(Response => Response.text());
    let message = `runtime ${runtime}`
    m.replay(message)
};

handler.help = ['beta3']
handler.tags = ['info']
handler.customPrefix = /^(beta)$/i 
handler.command = new RegExp

module.exports = handler;