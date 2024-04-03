let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/82041d85a8d1f1a71126f.jpg`,
      `https://btch.pages.dev/file/5c9376637e44cc47196cd.jpg`,
      `https://btch.pages.dev/file/c99ff50d7fe032f46c913.jpg`,
      `https://btch.pages.dev/file/d12d6b522ada66113008d.jpg`,
      `https://btch.pages.dev/file/c132ee4689ab4f443e6d2.jpg`,
      `https://btch.pages.dev/file/b773d2ea8250cf96572dd.jpg`,
      `https://btch.pages.dev/file/17ad650c4c34d90d16a59.jpg`,
      `https://btch.pages.dev/file/dbb3a2838757e5a860d42.jpg`,
      `https://btch.pages.dev/file/9035cae3108933899bdf7.jpg`,
      `https://btch.pages.dev/file/5ebdb990f25efc444c9c2.jpg`,
      `https://btch.pages.dev/file/016e77a8a23d3481b0ac1.jpg`,
      `https://btch.pages.dev/file/4442e3474d456a628e2c3.jpg`,
      `https://btch.pages.dev/file/eae14583bd1b9b74c4f67.jpg`,
      `https://btch.pages.dev/file/0672a8be2f1ecd6a72a2a.jpg`,
      `https://btch.pages.dev/file/2393052e91bccdad7352b.jpg`,
      `https://btch.pages.dev/file/221b9c644265c6099a08d.jpg`,
      `https://btch.pages.dev/file/71bad94cb6b859d7afd08.jpg`,
      `https://btch.pages.dev/file/44debfcb132848c653e2a.jpg`,
      `https://btch.pages.dev/file/2393052e91bccdad7352b.jpg`,
      `https://btch.pages.dev/file/221b9c644265c6099a08d.jpg`,
      `https://btch.pages.dev/file/71bad94cb6b859d7afd08.jpg`,
      `https://btch.pages.dev/file/44debfcb132848c653e2a.jpg`,
      `https://btch.pages.dev/file/e0ecbc17fda386c941528.jpg`,
      `https://btch.pages.dev/file/b568ddc034813afceaeb5.jpg`,
      `https://btch.pages.dev/file/7a8cb0b85b2111a1b14a5.jpg`,
      `https://btch.pages.dev/file/bc682b1207efc5ae4637b.jpg`,
      `https://btch.pages.dev/file/202f09353a8dc8051076c.jpg`,
      `https://btch.pages.dev/file/7810dd8cfcc1672677978.jpg`,
      `https://btch.pages.dev/file/64d3598486693b59229f5.jpg`,
      `https://btch.pages.dev/file/750affd877d7c850fc15b.jpg`,
      `https://btch.pages.dev/file/cd27125175fa34321b866.jpg`,
      `https://btch.pages.dev/file/31329f082c9acedb2f907.jpg`,
      `https://btch.pages.dev/file/cdeee2e77c4226d9e1a42.jpg`,
      `https://btch.pages.dev/file/167109052fb3b96ee542d.jpg`,
      `https://btch.pages.dev/file/1d5004bb5ce22ea3ab3c1.jpg`,
      `https://btch.pages.dev/file/1e9eeb2083662fe84c58b.jpg`,
      `https://btch.pages.dev/file/d3df3df0529bb37a09d89.jpg`,
      `https://btch.pages.dev/file/2df4976b8cef12fcc2134.jpg`,
      `https://btch.pages.dev/file/f63a9549ca591d19a13d5.jpg`,
      `https://btch.pages.dev/file/7c99838e424932e704a0a.jpg`,
      `https://btch.pages.dev/file/145d7e6f7f27d5ac3b3f4.jpg`,
      `https://btch.pages.dev/file/7715c7452c62abb4e515c.jpg`,
      `https://btch.pages.dev/file/0ad7173d1a04f718f9b69.jpg`,
      `https://btch.pages.dev/file/561aa69eb2d84de4392a9.jpg`,
      `https://btch.pages.dev/file/2474e5f289c29f1738915.jpg`,
      `https://btch.pages.dev/file/b5348fcea65d1f57dd5f7.jpg`,
      `https://btch.pages.dev/file/eabbf618a272e15644b22.jpg`,
      `https://btch.pages.dev/file/51cca1a5ef0c75cf7391b.jpg`,
      `https://btch.pages.dev/file/cb823e62abab12e9f9010.jpg`,
      `https://btch.pages.dev/file/bfdab5c8cd94d9c05acf8.jpg`,
      `https://btch.pages.dev/file/13bfd45144def304e039e.jpg`,
      `https://btch.pages.dev/file/be4860236a852cca92368.jpg`,
      `https://btch.pages.dev/file/3ecfd165bf9c2dc87f90a.jpg`,
      `https://btch.pages.dev/file/8ae15ecf798dbb71d29e9.jpg`,
      `https://btch.pages.dev/file/6ac8ca10face0f2d1fcdc.jpg`,
      `https://btch.pages.dev/file/15699a4efb8f855063e49.jpg`,
      `https://btch.pages.dev/file/e808022563294f9fddf5c.jpg`,
      `https://btch.pages.dev/file/ed621313e1a5b4aa65b7b.jpg`,
      `https://btch.pages.dev/file/a15755259d7b89d61f4e2.jpg`,    
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
      m.reply('Maaf, foto marsha tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['marsha']
  handler.tags = ['downloader']
  handler.command = /^marsha$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  