const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    try {
    let url = `https://api.betabotz.eu.org/api/anime/${command}?apikey=${lann}`;
    let response = await axios.get(url, { responseType: 'arraybuffer' });
    conn.sendFile(m.chat, response.data, "", "", m);
    } catch (e) {
    conn.reply(m.chat, eror, m)
    }
}
handler.help = ['umaru','kaneki','megumin','yotsuba','shinomiya','yumeko','tejina','chiho','toukachan','akira','itori','kurumi','sagiri','eba','deidara','itachi','madara','asuna','ayuzawa','chitoge','emilia','hestia','inori','ana','miku','kaori','shizuka','doraemon','kaga','kotori','mikasa','akiyama','gremory','isuzu','shina','kagura','shinka','tsunade','sasuke','sakura','rize','nezuko','boruto','naruto','erza','minato','elaina','yuri','shota','waifu','loli','hinata']
handler.command = /^(umaru|keneki|megumin|yotsuba|shinomiya|yumeko|tejina|chiho|toukachan|akira|itori|kurumi|sagiri|eba|deidara|itachi|madara|asuna|ayuzawa|chitoge|emilia|hestia|inori|ana|miku|kaori|shizuka|doraemon|kaga|koturi|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|tsunade|sasuke|sakura|rize|nezuko|boruto|naruto|erza|minato|elaina|yuri|shota|waifu|loli|hinata)$/i
handler.tags = ['image']
handler.limit = true;
module.exports = handler;
