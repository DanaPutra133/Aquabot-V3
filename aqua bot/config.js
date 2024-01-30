global.owner = ['6281289694906']  
global.mods = ['6281289694906'] 
global.prems = ['6281289694906']
global.nameowner = 'dana'
global.numberowner = ''
global.mail = '' 
global.gc = ''
global.instagram = ''
global.wm = ''
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = ''
global.author = ''
global.maxwarn = '' // Peringatan maksimum

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
  'https://api.betabotz.eu.org': '', 
  'https://api.botcahx.eu.org': ''
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
