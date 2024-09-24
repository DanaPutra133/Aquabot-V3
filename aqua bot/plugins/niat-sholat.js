let handler = async (m, { conn, command }) => {
if (command == 'subuh' )  {
    let anu = `🕌🕌🕌
solat: *Subuh*

latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
-------------------------------------------------------------------------------------------
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",

id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",`
m.reply(anu)  
  } else if (command == 'dzuhur') 
    {
      let anu = `🕌🕌🕌
solat: *Dzuhur*

latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
-------------------------------------------------------------------------------------------
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",

id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",`
      m.reply(anu)  
  }
  else if (command == 'ashar') 
    {
      let anu = `🕌🕌🕌
solat: *Ashar*

latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
-------------------------------------------------------------------------------------------
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",

id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",`
      m.reply(anu)  
  }
  else if (command == 'magrib') 
    {
      let anu = `🕌🕌🕌
solat: *Maghrib*

latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
-------------------------------------------------------------------------------------------
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",

id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",`
      m.reply(anu)  
  }
  else if (command == 'isha') 
    {
      let anu = `🕌🕌🕌
solat: *Isha*

latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
-------------------------------------------------------------------------------------------
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",

id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",`
      m.reply(anu)  
  }
}       

handler.command = handler.help = ['subuh', 'dzuhur', 'ashar', 'magrib', 'isha'];
handler.tags = ['tools']


module.exports = handler