let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/cad14d8ad642377313e4a.jpg`,
      `https://btch.pages.dev/file/143054a3107abdba039fb.jpg`,
      `https://btch.pages.dev/file/2ef857444f59b225c2565.jpg`,
      `https://btch.pages.dev/file/659abb0a3c7d9ab7c8dfa.jpg`,
      `https://btch.pages.dev/file/9a3dc29643efd038fd6b1.jpg`,
      `https://btch.pages.dev/file/226b1784c788ae81a1dfe.jpg`,
      `https://btch.pages.dev/file/3761372e8fb6fefbc0d5e.jpg`,
      `https://btch.pages.dev/file/bc859b2d48967880e5e69.jpg`,
      `https://btch.pages.dev/file/ff5f0d0d374a65e1345b8.jpg`,
      `https://btch.pages.dev/file/a424430182935630ad41b.jpg`,
      `https://btch.pages.dev/file/e8384a4cc7b0735673400.jpg`,
      `https://btch.pages.dev/file/d97b952cd8e27514c3e34.jpg`,
      `https://btch.pages.dev/file/c9bf41674633f094f35c3.jpg`,
      `https://btch.pages.dev/file/f00fbb509799c4d4ebca7.jpg`,
      `https://btch.pages.dev/file/ecff535572c01e88536f4.jpg`,
      `https://btch.pages.dev/file/8ce662031e83a8ac5f447.jpg`,
      `https://btch.pages.dev/file/4451f31323720beb78d28.jpg`,
      `https://btch.pages.dev/file/8ee1cdbcd9263e0b37f5e.jpg`,
      `https://btch.pages.dev/file/902561813a2e8d8423df2.jpg`,
      `https://btch.pages.dev/file/4809cf6122aae60f5a475.jpg`,
      `https://btch.pages.dev/file/5b2d680d11c449526f092.jpg`,
      `https://btch.pages.dev/file/2fa0ae7d615083de3ce16.jpg`,
      `https://btch.pages.dev/file/1f313b710409696c08fe6.jpg`,
      `https://btch.pages.dev/file/f21a8b422e4e4ba1603f8.jpg`,
      `https://btch.pages.dev/file/d2ab2cffddd3af4411585.jpg`,
      `https://btch.pages.dev/file/8bca28116629588eaf17b.jpg`,
      `https://btch.pages.dev/file/0f6f8084e6ab6689f321a.jpg`,
      `https://btch.pages.dev/file/15fc8ffe020410a1be735.jpg`,
      `https://btch.pages.dev/file/bc1f54fba8d7f6084af47.jpg`,
      `https://btch.pages.dev/file/5573bec9fd916d754114a.jpg`,
      `https://btch.pages.dev/file/53ebe2dad1780dde11a23.jpg`,
      ``,
      ``,
      ``,
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
      m.reply('Maaf, foto flora tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['flora']
  handler.tags = ['downloader']
  handler.command = /^flora$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  