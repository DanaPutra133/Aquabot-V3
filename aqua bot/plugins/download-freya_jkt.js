let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/9076e60ac09a531989261.jpg`,
      `https://btch.pages.dev/file/bdf5e7cd03a838fc87eff.jpg`,
      `https://btch.pages.dev/file/1f0d7799168d38ec13bc3.jpg`,
      `https://btch.pages.dev/file/157abaff9959f6678fba2.jpg`,
      `https://btch.pages.dev/file/c28cea35c2424d1b8289a.jpg`,
      `https://btch.pages.dev/file/ef3115dba400fff56ed22.jpg`,
      `https://btch.pages.dev/file/20a7c3cb86b5d3e59670b.jpg`,
      `https://btch.pages.dev/file/5544288f3a64845f04c86.jpg`,
      `https://btch.pages.dev/file/7cef67add25d29dbf6f8e.jpg`,
      `https://btch.pages.dev/file/9cd58423b94aa82af03ad.jpg`,
      `https://btch.pages.dev/file/0daba7fad204ae78fad24.jpg`,
      `https://btch.pages.dev/file/7e03b3293984a5b04b9d0.jpg`,
      `https://btch.pages.dev/file/334a28662da55cb5d2df3.jpg`,
      `https://btch.pages.dev/file/459ece0e8dc2e164bfce6.jpg`,
      `https://btch.pages.dev/file/41de9b5362f77986f73c8.jpg`,
      `https://btch.pages.dev/file/f9e6aa4dfe786fc1459ac.jpg`,
      `https://btch.pages.dev/file/4c5e2eebf3fad13cd647c.jpg`,
      `https://btch.pages.dev/file/7a71e0ffdcd8af1382344.jpg`,
      `https://btch.pages.dev/file/35ca169816d3a15a5b38f.jpg`,
      `https://btch.pages.dev/file/179265500990d8af72dfa.jpg`,
      `https://btch.pages.dev/file/02543df9983ab1d8d5cda.jpg`,
      `https://btch.pages.dev/file/afbc8b4c97499f845b662.jpg`,
      `https://btch.pages.dev/file/c98c134702075b9860a4a.jpg`,
      `https://btch.pages.dev/file/6e6985179e0149bcb6602.jpg`,
      `https://btch.pages.dev/file/d400691aedee0acd0fbb4.jpg`,
      `https://btch.pages.dev/file/69bc00d0c50718d616d7e.jpg`,
      `https://btch.pages.dev/file/5341d88571000f8d3e0ac.jpg`,
      `https://btch.pages.dev/file/2562ab23494368cd7315b.jpg`,
      `https://btch.pages.dev/file/33870a3aced160f22af0a.jpg`,
      `https://btch.pages.dev/file/cf5109ab7399e63a7b6b8.jpg`,
      `https://btch.pages.dev/file/01bf7cdd80526faa090ca.jpg`,
      `https://btch.pages.dev/file/a65338a9520be9c8a6383.jpg`,
      `https://btch.pages.dev/file/3f44ce991346ee9481c39.jpg`,
      `https://btch.pages.dev/file/6acd5a5cd9c2a0b87f681.jpg`,
      `https://btch.pages.dev/file/587749e9db842aa0df8d9.jpg`,
      `https://btch.pages.dev/file/3f3b67e0f74fb8f194587.jpg`,
      `https://btch.pages.dev/file/c81fc7bef401b68a03598.jpg`,
      `https://btch.pages.dev/file/d91f2ae4294066f36df8e.jpg`,
      `https://btch.pages.dev/file/165d99124deac2137ed5a.jpg`,
      `https://btch.pages.dev/file/6dd32134d85f7c3c5a595.jpg`,
      `https://btch.pages.dev/file/c4583b32b3f489423b709.jpg`,
      `https://btch.pages.dev/file/22298c9eba607664f82a4.jpg`,
      `https://btch.pages.dev/file/ab1488317191277d2d68e.jpg`,
      `https://btch.pages.dev/file/788b7c4d03e43a65055ff.jpg`,
      `https://btch.pages.dev/file/e1234be684377f180e3a6.jpg`,
      `https://btch.pages.dev/file/ea3b77678beed903ef3e8.jpg`,
      `https://btch.pages.dev/file/4d5731693e29fc315b25f.jpg`,
      `https://btch.pages.dev/file/de38d5e6d36e5a1036014.jpg`,
      `https://btch.pages.dev/file/4ce3941ee6bda07b1ef85.jpg`,
      `https://btch.pages.dev/file/2a8460815a07cb399842d.jpg`,
      `https://btch.pages.dev/file/d8cc37be3c153a9b27c3b.jpg`,
      `https://btch.pages.dev/file/38f7fd463816598cdcc0c.jpg`,
      `https://btch.pages.dev/file/31b9794e3299b3658e9bc.jpg`,
      `https://btch.pages.dev/file/e399a687a648cb3f48384.jpg`,
      `https://btch.pages.dev/file/c65b1802c45aa701169b1.jpg`,
      `https://btch.pages.dev/file/90371bc9c0d50f7d0a5bb.jpg`,
      `https://btch.pages.dev/file/bd22d0f81bc3c133f4ff3.jpg`,
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
      m.reply('Maaf, foto freya tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['freya']
  handler.tags = ['downloader']
  handler.command = /^freya$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  