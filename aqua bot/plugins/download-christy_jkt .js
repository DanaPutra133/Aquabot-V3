let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/72ef6bca7bb2b46eac03c.jpg`,
      `https://btch.pages.dev/file/35b43c80ad21dfeec4692.jpg`,
      `https://btch.pages.dev/file/9591b02bd10ced858499c.jpg`,
      `https://btch.pages.dev/file/f219eeec0ff544fb1dbd5.jpg`,
      `https://btch.pages.dev/file/73a7fc3ff1052a9f1c968.jpg`,
      `https://btch.pages.dev/file/a2dcd0810009e4908f7e4.jpg`,
      `https://btch.pages.dev/file/9c62ccf0b1d82e74e596f.jpg`,
      `https://btch.pages.dev/file/887e0fcfad79c2756e531.jpg`,
      `https://btch.pages.dev/file/55e4bdbf2fe54997210ef.jpg`,
      `https://btch.pages.dev/file/cbf5b624bf62cedb00e7e.jpg`,
      `https://btch.pages.dev/file/c8b65a030bca755b7bf06.jpg`,
      `https://btch.pages.dev/file/2353b3b9e70074b2af1df.jpg`,
      `https://btch.pages.dev/file/aa468632ab02763d6c008.jpg`,
      `https://btch.pages.dev/file/20bf6302bec840e277a2a.jpg`,
      `https://btch.pages.dev/file/cc1a89f98ef87017328b5.jpg`,
      `https://btch.pages.dev/file/3d84d1014e88e2dc13b33.jpg`,
      `https://btch.pages.dev/file/b2e147bd7820f977b5d94.jpg`,
      `https://btch.pages.dev/file/c00c23de9e14f6493bef6.jpg`,
      `https://btch.pages.dev/file/edf299d6fc4f6103b0091.jpg`,
      `https://btch.pages.dev/file/bb91436dd59c5a500a2e1.jpg`,
      `https://btch.pages.dev/file/2c5d96287693e5856d3b2.jpg`,
      `https://btch.pages.dev/file/1fe28d2b15101a1f2d303.jpg`,
      `https://btch.pages.dev/file/6fd00eb4327927bac1004.jpg`,
      `https://btch.pages.dev/file/5bc6e5e730e47d0a76274.jpg`,
      `https://btch.pages.dev/file/635f4f3c916df5ea05b28.jpg`,
      `https://btch.pages.dev/file/39cf2764a62db41ee43cb.jpg`,
      `https://btch.pages.dev/file/c5b897b5994283cccf212.jpg`,
      `https://btch.pages.dev/file/ea3d16a1b9b9cb563d9d2.jpg`,
      `https://btch.pages.dev/file/f32296ae18fc30383aa1e.jpg`,
      `https://btch.pages.dev/file/57713cdebd46b4f1ab520.jpg`,
      `https://btch.pages.dev/file/ca98ce063f2d1b5eb3ee5.jpg`,
      `https://btch.pages.dev/file/569b19c00ac1669bacf65.jpg`,
      `https://btch.pages.dev/file/f5c23e057a8d7b35e485d.jpg`,
      `https://btch.pages.dev/file/5c694e0d93f7e8463a462.jpg`,
      `https://btch.pages.dev/file/ef10f3ebb0346c24fc2ef.jpg`,
      `https://btch.pages.dev/file/2eb2e2f3ba16172120a9c.jpg`,
      `https://btch.pages.dev/file/409dd25a473aeef660d82.jpg`,
      `https://btch.pages.dev/file/121d4ddcdfa7ff7b7fc52.jpg`,
      `https://btch.pages.dev/file/f36bfebf2cbe94ad4027e.jpg`,
      `https://btch.pages.dev/file/fab991c515333111bf56f.jpg`,
      `https://btch.pages.dev/file/4287397b847745302b70b.jpg`,
      `https://btch.pages.dev/file/f33fd126bf6b3e5fba0fd.jpg`,
      `https://btch.pages.dev/file/adcc8d1825b3025e59f1f.jpg`,
      `https://btch.pages.dev/file/0ac9d5ed06735dae76879.jpg`,
      `https://btch.pages.dev/file/933f9681d26bb6f58a8b6.jpg`,
      `https://btch.pages.dev/file/bec374f8c5f4143a58adc.jpg`,
      `https://btch.pages.dev/file/14c3c508f9e7d0acba061.jpg`,
      `https://btch.pages.dev/file/eaec2f3232500905eee01.jpg`,
      `https://btch.pages.dev/file/4abe9bebc2fc805be4d1c.jpg`,
      `https://btch.pages.dev/file/474a7c6e9da4f7a0bfd35.jpg`,
      `https://btch.pages.dev/file/50a64cd59051a897d2487.jpg`,
      `https://btch.pages.dev/file/3f291e2c1c9f8cedf5fad.jpg`,
      `https://btch.pages.dev/file/7757ab466465aae141536.jpg`,
      `https://btch.pages.dev/file/1b19a72eb7b4e9d86746c.jpg`,
      ``,
      ``,
      ``,
      ``,
    ]
    let capt = `ini kak foto nya 😍`
    try {
      const url = pickRandom(jkt)
      await conn.reply(m.chat, `cieeeee simp 😁`, m)
      await conn.sendMessage(m.chat, {
        react: {
            text: '🥰',
            key: m.key,
        }
    })
      await conn.sendFile(m.chat, url, null, capt, '', m);
    } catch (e) {
      console.log(e);
      m.reply('Maaf, foto christy tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['christy']
  handler.tags = ['downloader']
  handler.command = /^christy$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  