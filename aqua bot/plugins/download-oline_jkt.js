let handler = async(m, { conn }) => {
    const jkt = [
      `https://cdn.btch.bz/file/934ca2b43a20781f1a88b.jpg`,
      `https://cdn.btch.bz/file/dd159af9d5222ce14db55.jpg`, 
      `https://cdn.btch.bz/file/73fb236cced21af1ed067.jpg`,
      `https://cdn.btch.bz/file/a856141f9ce5ee0503505.jpg`,
      `https://cdn.btch.bz/file/d6bcaeadcdd182efcc4aa.jpg`,
      `https://cdn.btch.bz/file/a93cb494035c18658dadd.jpg`,
      `https://cdn.btch.bz/file/787a6a5280ed642a9bb48.jpg`,
      `https://cdn.btch.bz/file/70055540142982463a184.jpg`,
      `https://cdn.btch.bz/file/8d61b8d02aae09e2650cc.jpg`,
      `https://cdn.btch.bz/file/2bdb3cd2d94d12437a5f0.jpg`,
      `https://cdn.btch.bz/file/0e74298074c5b7f202af0.jpg`,
      `https://cdn.btch.bz/file/811b70887c5e152b2956c.jpg`,
      `https://cdn.btch.bz/file/aee407b80af1f697c5404.jpg`,
      `https://cdn.btch.bz/file/3ea270e3efe243d9a77c1.jpg`,
      `https://cdn.btch.bz/file/1612dcd0a0ac8653131ca.jpg`,
      `https://cdn.btch.bz/file/9613b467d71bfed07e70a.jpg`,
      `https://cdn.btch.bz/file/9404e60b7c9a8f8fc55ae.jpg`,
      `https://cdn.btch.bz/file/a97c3ec19cb7805489d56.jpg`,
      `https://cdn.btch.bz/file/92ad1479ec91796db6cb5.jpg`,
      `https://cdn.btch.bz/file/7246f2a2c0f60dad445a7.jpg`,
      `https://cdn.btch.bz/file/6057fdfa51e8f7eed7988.jpg`,
      `https://cdn.btch.bz/file/f846aa879d07eb6940921.jpg`,
      `https://cdn.btch.bz/file/56a660053d384ecc48884.jpg`,
      `https://cdn.btch.bz/file/1ae701f57e37ac729d602.jpg`,
      `https://cdn.btch.bz/file/4152087bf57c3656cb08f.jpg`,
      `https://cdn.btch.bz/file/5b7f10c6149a075a55776.jpg`,
      `https://cdn.btch.bz/file/92f8975206eb58041468a.jpg`,
      `https://cdn.btch.bz/file/1c2175eb322812ed23f8a.jpg`,
      `https://cdn.btch.bz/file/20ad45ad5e682776a58c5.jpg`,
      `https://cdn.btch.bz/file/06a1643c9495c2157319f.jpg`,
      `https://cdn.btch.bz/file/8ddb03ee62be1f831d139.jpg`,
      `https://cdn.btch.bz/file/115a3e6bc3930fbeb89f0.jpg`,
      `https://cdn.btch.bz/file/6a7e0cf80aa04de213834.jpg`,
      `https://cdn.btch.bz/file/612b5f991628ff6349d6f.jpg`,
      `https://cdn.btch.bz/file/4a69cc36aff62104a3c7d.jpg`,
      `https://cdn.btch.bz/file/c8c27ba7f97143fc7d2a8.jpg`,
      `https://cdn.btch.bz/file/859be32df1bffe75d7428.jpg`,
      `https://cdn.btch.bz/file/58e97f0062b00cd63f25b.jpg`,
      `https://cdn.btch.bz/file/533d3ef327a2f0770e004.jpg`,
      `https://cdn.btch.bz/file/d2170eef01293e3bc592b.jpg`,
      `https://cdn.btch.bz/file/7547b5429d85504c4301f.jpg`,
      `https://cdn.btch.bz/file/5852314be23abd4e681ec.jpg`,
      `https://cdn.btch.bz/file/ca542999b6c292b6d6583.jpg`,
      `https://cdn.btch.bz/file/048f1781fe79aa2c81cb3.jpg`,
      `https://cdn.btch.bz/file/4cb86f18acc2cab95a1a2.jpg`,
      `https://cdn.btch.bz/file/a61ec61c048ce4ed41e60.jpg`,
      `https://cdn.btch.bz/file/b810a6cef5c3b5008bed8.jpg`,
      `https://cdn.btch.bz/file/cf203b13cf1d99c9f3ba6.jpg`,
      `https://cdn.btch.bz/file/591384441930224265925.jpg`,
      `https://cdn.btch.bz/file/53ccde0ab0f9e12253214.jpg`,
      `https://cdn.btch.bz/file/834b2ebad13685b2b9fd4.jpg`,
      `https://cdn.btch.bz/file/cc5a4be733c5bf847fe40.jpg`,
      `https://cdn.btch.bz/file/5032dc9afa9fd17efbc2d.jpg`,
      `https://cdn.btch.bz/file/d707cf15384d69fb1d720.jpg`,
      `https://cdn.btch.bz/file/8c7e950c8f6c6c0d64b1e.jpg`,
      `https://cdn.btch.bz/file/f9606a9b9f05d654e64ab.jpg`,
      `https://cdn.btch.bz/file/d19d2667aa9fcb7c1fbeb.jpg`,
      `https://cdn.btch.bz/file/b60b54cbc5ea8bddd1fe8.jpg`,
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
      m.reply('Maaf, foto oline tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['oline']
  handler.tags = ['downloader']
  handler.command = /^oline$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  