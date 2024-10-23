

let handler = async (m, { conn, command }) => {
    global.anu = [
        `─────〔 *${command}* 〕─────\n "Admin selalu benar, karena kebenaran adalah milik yang berkuasa."`,
        `─────〔 *${command}* 〕─────\n "Ketika admin bicara, aturan tunduk padanya." `, 
        `─────〔 *${command}* 〕─────\n "Admin berkuasa, maka kebenaran ada di tangannya."`, 
        `─────〔 *${command}* 〕─────\n "Apa pun kata admin, itulah yang berlaku."`, 
        `─────〔 *${command}* 〕─────\n "Admin adalah hukum, aturan hanya mengikuti."`, 
        `─────〔 *${command}* 〕─────\n "Kebenaran dan kuasa admin tak bisa dipertanyakan."`, 
        `─────〔 *${command}* 〕─────\n "Jika admin berkata, dunia harus patuh."`, 
        `─────〔 *${command}* 〕─────\n "Admin tak pernah salah, hanya kita yang kurang paham."`, 
        `─────〔 *${command}* 〕─────\n "Kekuatan admin adalah pedoman semua."`, 
        `─────〔 *${command}* 〕─────\n "Di bawah kuasa admin, aturan adalah pilihan."`, 
        `─────〔 *${command}* 〕─────\n "Admin adalah puncak kekuasaan, tak tergoyahkan."`, 
        `─────〔 *${command}* 〕─────\n "Ketika admin berkuasa, kebenaran tak butuh alasan."`, 
        `─────〔 *${command}* 〕─────\n "Admin mengendalikan, kebenaran mengikuti perintahnya."`,
        `─────〔 *${command}* 〕─────\n "salah paul"`,
        `─────〔 *${command}* 〕─────\n "paul salah"`,  
        `─────〔 *${command}* 〕─────\n "paul bersalah"`,  
        `─────〔 *${command}* 〕─────\n "ADMINNNNNNNNNNNNN"`,  
        `─────〔 *${command}* 〕─────\n "admin hytam"`,  
        `─────〔 *${command}* 〕─────\n "dimana ada kegelapan di situ ada cahaya"`,  

     ]
     conn.reply(m.chat,`${pickRandom(global.anu)}`);;
}
handler.help = ['erlan']
handler.tags = ['info']
handler.command = ['erlan']
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
