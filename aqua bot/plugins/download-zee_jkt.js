let handler = async(m, { conn }) => {
    const jkt = [
      `https://btch.pages.dev/file/f4da6c8098daa7b387a84.jpg`,
      `https://btch.pages.dev/file/64872a2010f1f151b324f.jpg`,
      `https://btch.pages.dev/file/98ee7b56eb3afdfd392b2.jpg`,
      `https://btch.pages.dev/file/ab15f6ffd9336b1a40349.jpg`,
      `https://btch.pages.dev/file/bc0f8f830747a95ad5f88.jpg`,
      `https://btch.pages.dev/file/67d3d208a1ea161a12734.jpg`,
      `https://btch.pages.dev/file/9893df30924cd0ad50a45.jpg`,
      `https://btch.pages.dev/file/1165bdbb42fc580d47481.jpg`,
      `https://btch.pages.dev/file/8ae665bff9731ac9f3447.jpg`,
      `https://btch.pages.dev/file/80af5e8a845682cd51a67.jpg`,
      `https://btch.pages.dev/file/0558a4ed8f23fc1215298.jpg`,
      `https://btch.pages.dev/file/13e69acbd320d5d3fda04.jpg`,
      `https://btch.pages.dev/file/bf163354675536e217b94.jpg`,
      `https://btch.pages.dev/file/0d99d4687e70883701f00.jpg`,
      `https://btch.pages.dev/file/a16ccf40ae0a3070653ca.jpg`,
      `https://btch.pages.dev/file/ccc8d64ec6818863d87e1.jpg`,
      `https://btch.pages.dev/file/8b5a2669d726165b98d8e.jpg`,
      `https://btch.pages.dev/file/1783984870c87630266d1.jpg`,
      `https://btch.pages.dev/file/9d020afe846d68d555ec9.jpg`,
      `https://btch.pages.dev/file/0c4618c2c452c1d14f214.jpg`,
      `https://btch.pages.dev/file/47a4b07dfe1e80661ac29.jpg`,
      `https://btch.pages.dev/file/aa31566fbbb0ab803be59.jpg`,
      `https://btch.pages.dev/file/173a24b3e83d35477d9a1.jpg`,
      `https://btch.pages.dev/file/bd3f3725c074d648532c5.jpg`,
      `https://btch.pages.dev/file/579ce2338614d348934bd.jpg`,
      `https://btch.pages.dev/file/05f5e924381df758648ff.jpg`,
      `https://btch.pages.dev/file/6603efe5e690bd5a8b075.jpg`,
      `https://btch.pages.dev/file/d1440fbaee6a64e9c38d9.jpg`,
      `https://btch.pages.dev/file/a833ba4bfbfedd8fa7356.jpg`,
      `https://btch.pages.dev/file/4ddece4c59869cdf7304b.jpg`,
      `https://btch.pages.dev/file/e907b5fe6c8823c069fac.jpg`,
      `https://btch.pages.dev/file/96ca5bc9cbd19a89c280c.jpg`,
      `https://btch.pages.dev/file/b7d358fd4e00549eccdca.jpg`,
      `https://btch.pages.dev/file/e57b1fe6c70064b9e926b.jpg`,
      `https://btch.pages.dev/file/04fff1cad7d799555ef04.jpg`,
      `https://btch.pages.dev/file/fdcb53d70a391dfefa0a6.jpg`,
      `https://btch.pages.dev/file/8f0113aeeecd47a5e5d9c.jpg`,
      `https://btch.pages.dev/file/6a3fac10841df5c7bc433.jpg`,
      `https://btch.pages.dev/file/67d27e4978b9bd1052dd3.jpg`,
      `https://btch.pages.dev/file/67d4aadf7d92d48f0fbf7.jpg`,
      `https://btch.pages.dev/file/528a21a38690a9aa1ceff.jpg`,
      `https://btch.pages.dev/file/20e9d0772b3d8099bc154.jpg`,
      `https://btch.pages.dev/file/f5c7a72eadf59cbc2a751.jpg`,
      `https://btch.pages.dev/file/55a98bac870c63ebb8ef5.jpg`,
      `https://btch.pages.dev/file/272a92957f64158f7355b.jpg`,
      `https://btch.pages.dev/file/fff0c1e3f630784768d35.jpg`,
      `https://btch.pages.dev/file/c62f61e14dade067861b8.jpg`,
      `https://btch.pages.dev/file/55cfba5c44174316b933a.jpg`,
      `https://btch.pages.dev/file/934ec49175e6db0cff635.jpg`,
      `https://btch.pages.dev/file/3b8b9c42df7da9eaeeb89.jpg`,
      `https://btch.pages.dev/file/8d219d1cc008ba646d88c.jpg`,
      `https://btch.pages.dev/file/2a06ccb2aae69d84d5df3.jpg`,
      `https://btch.pages.dev/file/9e1ead1cd48df888b232a.jpg`,
      `https://btch.pages.dev/file/44f23f4f6235bf6c58b8f.jpg`,
      `https://btch.pages.dev/file/e94295c466cd853eba2d3.jpg`,
      `https://btch.pages.dev/file/056c014af12d991a72b11.jpg`,
      `https://btch.pages.dev/file/18fc6a1039b107f603dfb.jpg`,
      `https://btch.pages.dev/file/dbe2e168867e677ee592d.jpg`,
      `https://btch.pages.dev/file/e69c1ede79dfaa4d07df9.jpg`,
      `https://btch.pages.dev/file/3383c4918774a463051c7.jpg`,
      `https://btch.pages.dev/file/a7d40a39402a946c34a38.jpg`,
      `https://btch.pages.dev/file/91fdc617d4e026e49160d.jpg`,
      `https://btch.pages.dev/file/49fc6a50c8b0c7ec84eba.jpg`,
      `https://btch.pages.dev/file/288626c93c047d5c98c61.jpg`,
      `https://btch.pages.dev/file/c2af2ca39e03de88169d2.jpg`,
      `https://btch.pages.dev/file/5a055301f8a2292a7702e.jpg`,
      `https://btch.pages.dev/file/a1e34b6d8350693463c6b.jpg`,
      `https://btch.pages.dev/file/3f9cd4aeac4eb558a7641.jpg`,
      `https://btch.pages.dev/file/727008918af36b0d66819.jpg`,
      `https://btch.pages.dev/file/7877483095e69ad5fbec8.jpg`,
      `https://btch.pages.dev/file/448b198b5464da5d926aa.jpg`,
      `https://btch.pages.dev/file/27a19595322d4f0d8790d.jpg`,
      `https://btch.pages.dev/file/2e602a35319e3b94dfbab.jpg`,
      `https://btch.pages.dev/file/1efcc438a3a26ab2c8c03.jpg`,
      `https://btch.pages.dev/file/b242f7654884e5ff9ea7c.jpg`,
      `https://btch.pages.dev/file/ffbf267ba16da270442ed.jpg`,
      `https://btch.pages.dev/file/311ac851a203e2a62e88b.jpg`,
      `https://btch.pages.dev/file/ca76305dd0bd384f98805.jpg`,
      `https://btch.pages.dev/file/33f93e0266991f9e43576.jpg`,
      `https://btch.pages.dev/file/112cfb6469e2afc2cf096.jpg`,
      `https://btch.pages.dev/file/895b7ea14b9e931b1b946.jpg`,
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
      m.reply('Maaf, foto zee tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['zee']
  handler.tags = ['downloader']
  handler.command = /^zee$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  