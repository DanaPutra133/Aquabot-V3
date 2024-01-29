global.owner = ['']  
global.mods = [''] 
global.prems = ['']
global.nameowner = ''
global.numberowner = ''
global.mail = '' 
global.gc = '' //link gc bot nya
global.instagram = ''
global.wm = '' //wm buat di stiker sama plugin lain nya
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'nama bot nya'
global.author = 'nama author'
global.maxwarn = '2' // Peringatan maksimum klaau di berikan ke user lebih dari 2x auto kick

//INI WAJIB DI ISI!//
global.lann = '' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = ''
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  '': '', 
  '': ''
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
