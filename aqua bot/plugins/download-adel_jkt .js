let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/9fe5c1a503ca6a080684c.jpg`,
      `https://btch.pages.dev/file/063c4dd87d5e2caa8afd1.jpg`,
      `https://btch.pages.dev/file/0da9e1d81147c5e697fb2.jpg`,
      `https://btch.pages.dev/file/798a1d287909c20681ed2.jpg`,
      `https://btch.pages.dev/file/42f41a8bbade9d121721c.jpg`,
      `https://btch.pages.dev/file/c761a26c8af955464cabb.jpg`,
      `https://btch.pages.dev/file/2e837dc56ee4d671ad81d.jpg`,
      `https://btch.pages.dev/file/ab192e1d49ba10f4ba71c.jpg`,
      `https://btch.pages.dev/file/2f11af270f55f3e2aafb4.jpg`,
      `https://btch.pages.dev/file/22ba46f57c6f7e091436a.jpg`,
      `https://btch.pages.dev/file/519c726b67e0598b4643d.jpg`,
      `https://btch.pages.dev/file/7dc53b8692ddbf72694e8.jpg`,
      `https://btch.pages.dev/file/a406836e9504b8129634c.jpg`,
      `https://btch.pages.dev/file/2318a49d41434b3ec0d43.jpg`,
      `https://btch.pages.dev/file/17f492719e661f21b8fa2.jpg`,
      `https://btch.pages.dev/file/efe0e841007e649532a73.jpg`,
      `https://btch.pages.dev/file/ed0c916566532a697de1e.jpg`,
      `https://btch.pages.dev/file/ba58eca1bd775ef0a0a75.jpg`,
      `https://btch.pages.dev/file/4ba5e9e7fc4016541ea70.jpg`,
      `https://btch.pages.dev/file/6b574ad40ef14f9d80c2b.jpg`,
      `https://btch.pages.dev/file/2ab099aad82bda8d65fce.jpg`,
      `https://btch.pages.dev/file/b2bd94b55f40dd042f137.jpg`,
      `https://btch.pages.dev/file/6a6729ac2070ee6317021.jpg`,
      `https://btch.pages.dev/file/ef02e9283cd76de9e141a.jpg`,
      `https://btch.pages.dev/file/0a1f610e1393a1573751a.jpg`,
      `https://btch.pages.dev/file/92e56db038f79c602b5d2.jpg`,
      `https://btch.pages.dev/file/fc425675b134899c26944.jpg`,
      `https://btch.pages.dev/file/fbf7cd0f07de4b35b7ade.jpg`,
      `https://btch.pages.dev/file/9d3ad0438335a745759f3.jpg`,
      `https://btch.pages.dev/file/053f07e7b928275020b20.jpg`,
      `https://btch.pages.dev/file/9151cb8c5ff22c2a58b36.jpg`,
      `https://btch.pages.dev/file/1df15ecaef6d0d2606518.jpg`,
      `https://btch.pages.dev/file/07ce5b36f31de4b9c1a37.jpg`,
      `https://btch.pages.dev/file/1ea040cc23d7d1ff436e5.jpg`,
      `https://btch.pages.dev/file/cac1e28c1d9bcb2f0cf90.jpg`,
      `https://btch.pages.dev/file/90847a95b3004e56ccab7.jpg`,
      `https://btch.pages.dev/file/10fa709ceeb6e94c199e0.jpg`,
      `https://btch.pages.dev/file/11d1677836a67c536d24f.jpg`,
      `https://btch.pages.dev/file/15855f6be82d9caed4887.jpg`,
      `https://btch.pages.dev/file/0a6726d4965d6d6cf8fc9.jpg`,
      `https://btch.pages.dev/file/cdf0f373a2a23374838a6.jpg`,
      `https://btch.pages.dev/file/37270f25f18548eac3418.jpg`,    
      `https://btch.pages.dev/file/089cfee62e9c18395a093.jpg`,
      `https://btch.pages.dev/file/e7c6eb20006fbe7839a85.jpg`,
      `https://btch.pages.dev/file/52d9ec9dba246c3358a48.jpg`,
      `https://btch.pages.dev/file/d1fb9364bbe48c123dea7.jpg`,
      `https://btch.pages.dev/file/9867c3053ede39396121d.jpg`,
      `https://btch.pages.dev/file/aa165644c10cd5001d585.jpg`,
      `https://btch.pages.dev/file/d886842a7f30fc0254850.jpg`,
      `https://btch.pages.dev/file/66c6251bc8ef220d64a39.jpg`,
      `https://btch.pages.dev/file/41524e033d76ebe60e08d.jpg`,
      `https://btch.pages.dev/file/927ac632e7c4f3a45b529.jpg`,
      `https://btch.pages.dev/file/6fe039ee53982115feac4.jpg`,     
      `https://btch.pages.dev/file/8b2454062f903f6b52567.jpg`,
      `https://btch.pages.dev/file/fbb0c67fd2eb66e71ec75.jpg`,
      `https://btch.pages.dev/file/5b7ccdf0c041fc9b18497.jpg`,
      `https://btch.pages.dev/file/9acc858f4f62412808c3f.jpg`,
      `https://btch.pages.dev/file/bc78e8f8256d4537cb48a.jpg`,
      `https://btch.pages.dev/file/61776d2ae0ad9e099fbe1.jpg`,
      `https://btch.pages.dev/file/d590c2c7b93e9644adbdd.jpg`,
      `https://btch.pages.dev/file/2a3dc2135d211ac53d309.jpg`,
      `https://btch.pages.dev/file/eca2a55c0ae073f8e1c58.jpg`,
      `https://btch.pages.dev/file/c1c5d39f9608d8348642d.jpg`,
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
      m.reply('Maaf, foto christy tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['adel']
  handler.tags = ['downloader']
  handler.command = /^adel$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  