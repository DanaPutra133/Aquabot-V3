const timeout = 28800000

let handler = async (m, { conn, usedPrefix, text }) => {
  //      let timerand = `${Math.floor(Math.random() * 259200000)}`.trim()
	    let time = global.db.data.users[m.sender].lastnebang + 28800000
  if (new Date - global.db.data.users[m.sender].lastnebang< 28800000) throw `Anda sudah nebang\nMohon tunggu hasil nebang mu\nTunggu selama ${msToTime(time - new Date())} lagi`
   // if (global.db.data.users[m.sender].aqua > 9) {
   // let aquah = `${Math.floor(Math.random() * 5)}`.trim()
    let kayu = `${Math.floor(Math.random() * 45)}`.trim()
    // global.db.data.users[m.sender].aqua -= aquah * 1
    global.db.data.users[m.sender].kayu += kayu * 1
	/*let pisangnye = `${Math.floor(Math.random(global.db.data.users[m.sender].pisang = pisangpoin) * 1)}`.trim()
	let jeruknye = `${Math.floor(Math.random(global.db.data.users[m.sender].jeruk = jerukpoin) * 1)}`.trim()
	let mangganye = `${Math.floor(Math.random(global.db.data.users[m.sender].mangga = manggapoin) * 1)}`.trim()
	let anggurnye = `${Math.floor(Math.random(global.db.data.users[m.sender].anggur = anggurpoin) * 1)}`.trim()
	let apelnye = `${Math.floor(Math.random(global.db.data.users[m.sender].apel = apelpoin) * 10000)}`.trim()*/
	global.db.data.users[m.sender].lastnebang = new Date * 1
  conn.reply(m.chat, `Selamat kamu mendapatkan : \n🪵Kayu\n+sebanyak: ${kayu}`, m)
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)/i
handler.group = true

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}