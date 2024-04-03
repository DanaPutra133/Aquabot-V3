let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/6f2285a3234c96e7d9428.jpg`,
      `https://btch.pages.dev/file/6163da73b855a5df3f172.jpg`,
      `https://btch.pages.dev/file/9ad743a8f80d2a40b39bd.jpg`,
      `https://btch.pages.dev/file/42b4c6dcd89e350c8526f.jpg`,
      `https://btch.pages.dev/file/bad29769c0f1d49ec704d.jpg`,
      `https://btch.pages.dev/file/bf0ef9b4e48ceba8d7623.jpg`,
      `https://btch.pages.dev/file/25bbb1771a92795ed5727.jpg`,
      `https://btch.pages.dev/file/46af244efde988b2b6acb.jpg`,
      `https://btch.pages.dev/file/7a37d8f94f3c34de39372.jpg`,
      `https://btch.pages.dev/file/4676a0f513d82c3fde526.jpg`,
      `https://btch.pages.dev/file/468ef6cf1250bd498bf3d.jpg`,
      `https://btch.pages.dev/file/4fa21e86aa71b151bb922.jpg`,
      `https://btch.pages.dev/file/de9aef39e1412580c559e.jpg`,
      `https://btch.pages.dev/file/6b910694d69ed77187d5a.jpg`,
      `https://btch.pages.dev/file/007c4cff4175fb7eb1a39.jpg`,
      `https://btch.pages.dev/file/5da8943abd5e139e1f843.jpg`,
      `https://btch.pages.dev/file/e1c77362db32240527eac.jpg`,
      `https://btch.pages.dev/file/641a511112ed5289fe1e4.jpg`,
      `https://btch.pages.dev/file/ffef5ab93cf5162740edd.jpg`,
      `https://btch.pages.dev/file/7d6382ee6717e08d87bba.jpg`,
      `https://btch.pages.dev/file/0990ddaf3bf3e2a23d43a.jpg`,
      `https://btch.pages.dev/file/f9b01417decbad5ad82b6.jpg`,
      `https://btch.pages.dev/file/1c9911a5950f8e85b7c7a.jpg`,
      `https://btch.pages.dev/file/f8bc52cd5238b4cb11fe2.jpg`,
      `https://btch.pages.dev/file/6ace9b877b45c7b0526e0.jpg`,
      `https://btch.pages.dev/file/a1c8c28756267fd236448.jpg`,
      `https://btch.pages.dev/file/05f31ac4c0a428029ad36.jpg`,
      `https://btch.pages.dev/file/bfae98bc44e2c3408bb7d.jpg`,
      `https://btch.pages.dev/file/3f6d4d87cc349ab91490c.jpg`,
      `https://btch.pages.dev/file/5b1fbca5fa70b09f282fd.jpg`,
      `https://btch.pages.dev/file/0398dcc22c9718ecee47a.jpg`,
      `https://btch.pages.dev/file/6c01e00839bcc892744a2.jpg`,
      `https://btch.pages.dev/file/049860eb1f94ec9b4e165.jpg`,
      `https://btch.pages.dev/file/0dc5746dc7e464e7f15f9.jpg`,
      `https://btch.pages.dev/file/e8384b39b35a76ea00ef0.jpg`,
      `https://btch.pages.dev/file/f3d21e8e635b0b4ac85b7.jpg`,
      `https://btch.pages.dev/file/b9576270377ddc4da30f2.jpg`,
      `https://btch.pages.dev/file/7e4f10000495e36410065.jpg`,
      `https://btch.pages.dev/file/72eca64166c2335499839.jpg`,
      `https://btch.pages.dev/file/7e345617ad239cc1705c1.jpg`,
      `https://btch.pages.dev/file/790379aa8c7b8da694e6e.jpg`,
      `https://btch.pages.dev/file/b569f53b2a12dc41f1d20.jpg`,
      `https://btch.pages.dev/file/c2b7ea521e26134c93384.jpg`,
      `https://btch.pages.dev/file/86a41cff6f17c8b41061b.jpg`,
      `https://btch.pages.dev/file/ab799693293e30ab6d7a5.jpg`,
      `https://btch.pages.dev/file/89323fdd76c2167ba08f0.jpg`,
      `https://btch.pages.dev/file/ac68d62b47a3637cc1962.jpg`,
      `https://btch.pages.dev/file/27565f9b3aa05192f6fdc.jpg`,
      `https://btch.pages.dev/file/ae97169f741b19e27a3b8.jpg`,
      `https://btch.pages.dev/file/c36bae4da5933f3e9139c.jpg`,
      `https://btch.pages.dev/file/be85a62d0f43fa1cbda1d.jpg`,
      `https://btch.pages.dev/file/893c6f9300c3fb36e560a.jpg`,
      `https://btch.pages.dev/file/d3e8c4053342806209eb0.jpg`,
      `https://btch.pages.dev/file/4116493ac2c2bab7c2480.jpg`,
      `https://btch.pages.dev/file/fdc2255b11c617bbdf42b.jpg`,
      `https://btch.pages.dev/file/3ab33b46e7df3f4f139d2.jpg`,
      `https://btch.pages.dev/file/7af1d3ee98a9180a381f4.jpg`,
      `https://btch.pages.dev/file/7742a7f0b0f58ddc76fdc.jpg`,
      `https://btch.pages.dev/file/fe0be6e00d12f3b428263.jpg`,
      `https://btch.pages.dev/file/8e7faf79cc385aa97d075.jpg`,
      `https://btch.pages.dev/file/0dd6b32587de5d01d7d7d.jpg`,
      `https://btch.pages.dev/file/afa9484924729b220c5d9.jpg`,
      `https://btch.pages.dev/file/647904bc1487bd3b089f5.jpg`,
      `https://btch.pages.dev/file/30acc84b0ddd79f3d8032.jpg`,
      `https://btch.pages.dev/file/b5cd71acc5a5644e20f31.jpg`,
      `https://btch.pages.dev/file/2cc7e5b8e4c666a69f9db.jpg`,
      `https://btch.pages.dev/file/9a3e519692e12c0b977da.jpg`,
      `https://btch.pages.dev/file/8b4127d7f77d0ec023121.jpg`,
      `https://btch.pages.dev/file/988339070e4dde07de417.jpg`,
      `https://btch.pages.dev/file/70da07010bd7b7e342170.jpg`,
      `https://btch.pages.dev/file/2b409205d49045f90d113.jpg`,
      `https://btch.pages.dev/file/d05f12eb58da4d1bc8dc2.jpg`,
      `https://btch.pages.dev/file/c66191b8475fc99259a1f.jpg`,
      `https://btch.pages.dev/file/d61dd4cb3433aa8cf32be.jpg`,
      `https://btch.pages.dev/file/a0d33a24baae88b94cbf9.jpg`,
      `https://btch.pages.dev/file/67781680c1fdb4023ba52.jpg`,
      `https://btch.pages.dev/file/ecf2b2d382876f362056c.jpg`,
      `https://btch.pages.dev/file/f7438d7d3db314e071716.jpg`,
      `https://btch.pages.dev/file/8842a12fcb0ae2ee8013a.jpg`,
      `https://btch.pages.dev/file/c5fed4b6e230bd20ebfe1.jpg`,
      `https://btch.pages.dev/file/9e0b78b52e9d9572b441a.jpg`,
      `https://btch.pages.dev/file/ed7df1089b9b9a1c73ec5.jpg`,
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
      m.reply('Maaf, foto oniel tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['oniel']
  handler.tags = ['downloader']
  handler.command = /^oniel$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  