let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/d872a4bf19a6291be9c2e.jpg`,
      `https://btch.pages.dev/file/6aa72c2113bbc5a00bce6.jpg`,
      `https://btch.pages.dev/file/5a148abae01ecb4345695.jpg`,
      `https://btch.pages.dev/file/0e27dcd83a1307c8e85b6.jpg`,
      `https://btch.pages.dev/file/11d136e14b580f6b1d040.jpg`,
      `https://btch.pages.dev/file/5106883bf190b7998a721.jpg`,
      `https://btch.pages.dev/file/bae631b2e78a3afaa1a01.jpg`,
      `https://btch.pages.dev/file/4eb75910e5bb315818ce0.jpg`,
      `https://btch.pages.dev/file/3e45800097d89d21188b7.jpg`,
      `https://btch.pages.dev/file/06a80ba0038827c8cc263.jpg`,
      `https://btch.pages.dev/file/22eddce099aa497eab04d.jpg`,
      `https://btch.pages.dev/file/32b9269c9184288b9a673.jpg`,
      `https://btch.pages.dev/file/a031026a652d2315dfc1e.jpg`,
      `https://btch.pages.dev/file/14124e3cefc8eef78a0fb.jpg`,
      `https://btch.pages.dev/file/d496fb28b63a1b333044a.jpg`,
      `https://btch.pages.dev/file/733ec3909411b43b7e67a.jpg`,
      `https://btch.pages.dev/file/d425652e69b288ae287e5.jpg`,
      `https://btch.pages.dev/file/d4f362c4617bab5f5fc0a.jpg`,
      `https://btch.pages.dev/file/de8912f0e47434714cc95.jpg`,
      `https://btch.pages.dev/file/21fddd3c52418649946d9.jpg`,
      `https://btch.pages.dev/file/1a6ee3952ad84299ab936.jpg`,
      `https://btch.pages.dev/file/410762a4337cff29e70f8.jpg`,
      `https://btch.pages.dev/file/abedd90f59f6319890b63.jpg`,
      `https://btch.pages.dev/file/c667a38ac9498718be722.jpg`,
      `https://btch.pages.dev/file/f1bb787dd0051824db533.jpg`,
      `https://btch.pages.dev/file/968ea01bde142b091d131.jpg`,
      `https://btch.pages.dev/file/f375754a5d77ecf4e919c.jpg`,
      `https://btch.pages.dev/file/5786667453d0b5a8a587d.jpg`,
      `https://btch.pages.dev/file/4824c223ab9f7a06207ef.jpg`,
      `https://btch.pages.dev/file/bb884774b55ae9f728a86.jpg`,
      `https://btch.pages.dev/file/3d1d5602d574e4bbffc8d.jpg`,
      `https://btch.pages.dev/file/990f4bf1c68d5ce496c43.jpg`,
      `https://btch.pages.dev/file/0e2fe55982f82d68be5ef.jpg`,
      `https://btch.pages.dev/file/c0891acfbe5fbf00c9127.jpg`,
      `https://btch.pages.dev/file/ec1a20450c7e73e718692.jpg`,
      `https://btch.pages.dev/file/f356ee7c317c8d10ef003.jpg`,
      `https://btch.pages.dev/file/862b1e3d40c0e70d6082f.jpg`,
      `https://btch.pages.dev/file/75ac2e5f8583d666050f0.jpg`,
      `https://btch.pages.dev/file/34b3570e16c1237b718d7.jpg`,
      `https://btch.pages.dev/file/b4db75ee4a333883931db.jpg`,
      `https://btch.pages.dev/file/ad5cf5e3fff2d7f5e937c.jpg`,
      `https://btch.pages.dev/file/4e4deae23359a1371a77d.jpg`,
      `https://btch.pages.dev/file/4caa08597bea932c15272.jpg`,
      `https://btch.pages.dev/file/2e09129ae5d91a9b04fde.jpg`,
      `https://btch.pages.dev/file/763fbadaa7ea4f8051ab6.jpg`,
      `https://btch.pages.dev/file/f445767c2d611bc522c74.jpg`,
      `https://btch.pages.dev/file/bfe2204af5e33414650d1.jpg`,
      `https://btch.pages.dev/file/2daef1f33bfbee8ab8023.jpg`,
      `https://btch.pages.dev/file/3d73187dab0d6d570a729.jpg`,
      `https://btch.pages.dev/file/97cd417f6ff8527ce166c.jpg`,
      `https://btch.pages.dev/file/b7d6986d3b66a2f6effb4.jpg`,
      `https://btch.pages.dev/file/b1b0c66ac360576a097cf.jpg`,
      `https://btch.pages.dev/file/516979c7fa4ca77af5c22.jpg`,
      `https://btch.pages.dev/file/0da8ec06065bfaee69b51.jpg`,
      `https://btch.pages.dev/file/37c643b5d0c13eb45f123.jpg`,
      `https://btch.pages.dev/file/4537e74e86f1c99326154.jpg`,
      `https://btch.pages.dev/file/843bf6e5e1f444ea9c0b5.jpg`,
      `https://btch.pages.dev/file/f4311d0d3a9140c7342c7.jpg`,
      `https://btch.pages.dev/file/05ec7c2c618bde260ea8c.jpg`,
      `https://btch.pages.dev/file/924467e78466c4e326e0f.jpg`,
      `https://btch.pages.dev/file/cc4ec1d341cc06f52ace4.jpg`,
      `https://btch.pages.dev/file/bd1f943a35ae83963e0c6.jpg`,
      `https://btch.pages.dev/file/ed72406bb02e5ce229b35.jpg`,
      `https://btch.pages.dev/file/c4385b29aee9b3eba375b.jpg`,
      `https://btch.pages.dev/file/121ccc6b1e1f51e0819fd.jpg`,
      `https://btch.pages.dev/file/8f296e5fd0af713f3da0b.jpg`,
      `https://btch.pages.dev/file/f173e4bf5d5620247222a.jpg`,
      `https://btch.pages.dev/file/fa29924a7aa2a5a2fa35e.jpg`,
      `https://btch.pages.dev/file/f0d839b5556c817e75011.jpg`,
      `https://btch.pages.dev/file/bedc02790660bf3e8a36d.jpg`,
      `https://btch.pages.dev/file/afbec0aeed4bc17ae4d8c.jpg`,
      `https://btch.pages.dev/file/77ebcc7db0407f27d8546.jpg`,
      `https://btch.pages.dev/file/e0422f0e8680c9ed15a38.jpg`,
      `https://btch.pages.dev/file/4173c7bceef30e7c2a0ee.jpg`,
      `https://btch.pages.dev/file/5919cc1fa73eca3ce94f8.jpg`,
      `https://btch.pages.dev/file/a4c8d3540b169525eb2a5.jpg`,
      `https://btch.pages.dev/file/af2bc8409a3c476159c34.jpg`,
      `https://btch.pages.dev/file/93f78a827ef2a4515b1a3.jpg`,
      `https://btch.pages.dev/file/2ef9048e82fec4317ebc3.jpg`,
      `https://btch.pages.dev/file/6149c9e6d4aaa8623c406.jpg`,
      `https://btch.pages.dev/file/dc3a76c1577e42d34b8e8.jpg`,
      `https://btch.pages.dev/file/081e7e464a51f0d36b317.jpg`,
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
      m.reply('Maaf, foto muthe tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['muthe']
  handler.tags = ['downloader']
  handler.command = /^muthe$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  