let handler = async(m, { conn }) => {
    const jkt = [
      `https://cdn.btch.bz/file/5f434298bc00fbcfe57df.jpg`,
      `https://cdn.btch.bz/file/d3a2fa3c2f5170072c589.jpg`,
      `https://cdn.btch.bz/file/618ee58ed0ad2d6067ae2.jpg`,
      `https://cdn.btch.bz/file/4807bc048150d53544bd9.jpg`,
      `https://cdn.btch.bz/file/b3527fa1cf8dc5dd70047.jpg`,
      `https://cdn.btch.bz/file/b87eb95c3baff473a4a3d.jpg`,
      `https://cdn.btch.bz/file/9735d00e576ae773bf551.jpg`,
      `https://cdn.btch.bz/file/cef06eff37e1b89015b13.jpg`,
      `https://cdn.btch.bz/file/525d52ef588c7d2c2ffd7.jpg`,
      `https://cdn.btch.bz/file/a84957f2c963846c40f92.jpg`,
      `https://cdn.btch.bz/file/542c0ac9c8a0deee0574d.jpg`,
      `https://cdn.btch.bz/file/7d96119a67e6151f53975.jpg`,
      `https://cdn.btch.bz/file/921382cdeec5a6a818e1a.jpg`,
      `https://cdn.btch.bz/file/88e0ae5de348b35e2787f.jpg`,
      `https://cdn.btch.bz/file/366e5966f2ed323c3d6a8.jpg`,
      `https://cdn.btch.bz/file/dcb77996fb0b21eb28da0.jpg`,
      `https://cdn.btch.bz/file/1e2040b1ae89e8787c346.jpg`,
      `https://cdn.btch.bz/file/badf7a7c144e249545141.jpg`,
      `https://cdn.btch.bz/file/88ff8c26c156ad7057db5.jpg`,
      `https://cdn.btch.bz/file/0f8518f690366a96f2f7a.jpg`,
      `https://cdn.btch.bz/file/84f017298fd0d824d8ae2.jpg`,
      `https://cdn.btch.bz/file/a421bb80fcc7b547a8e7d.jpg`,
      `https://cdn.btch.bz/file/c0c03a0ec33d269cc0bcf.jpg`,
      `https://cdn.btch.bz/file/7b235399498997e7a0228.jpg`,
      `https://cdn.btch.bz/file/36989512b062d3dd6609f.jpg`,
      `https://cdn.btch.bz/file/dcef016409cc77923d749.jpg`,
      `https://cdn.btch.bz/file/4fbea7583e5fc816db99f.jpg`,
      `https://cdn.btch.bz/file/c74ecf66c9c2893deb251.jpg`,
      `https://cdn.btch.bz/file/d61205a836c0fc2714c6a.jpg`,
      `https://cdn.btch.bz/file/50ae0e4d32f360e97a40c.jpg`,
      `https://cdn.btch.bz/file/b8ced97f1030f2a9ad5a6.jpg`,
      `https://cdn.btch.bz/file/0d374397a9e6e9efdbf98.jpg`,
      `https://cdn.btch.bz/file/917dc0c4ea6789734e359.jpg`,
      `https://cdn.btch.bz/file/e7139210e155a5e8414bb.jpg`,
      `https://cdn.btch.bz/file/f0c50c3751d6bafeff19d.jpg`,
      `https://cdn.btch.bz/file/9b7c53ad33b17d93d40ff.jpg`,
      `https://cdn.btch.bz/file/7334f5a541cfa41857dc1.jpg`,
      `https://cdn.btch.bz/file/374c1478292b105754891.jpg`,
      `https://cdn.btch.bz/file/d55bef5ff199295e34bbb.jpg`,
      `https://cdn.btch.bz/file/6c016f0a1afb32d600063.jpg`,
      `https://cdn.btch.bz/file/eb331989e4b3ee58a6ae0.jpg`,
      `https://cdn.btch.bz/file/1eac85d3169062229e61d.jpg`,
      `https://cdn.btch.bz/file/ef4309172db1d90308aa0.jpg`,
      `https://cdn.btch.bz/file/2e91c063180dd7582c5f9.jpg`,
      `https://cdn.btch.bz/file/62838d80672d72ab4fc9e.jpg`,
      `https://cdn.btch.bz/file/72f8bb0dfd1dcc46e4c16.jpg`,
      `https://cdn.btch.bz/file/d937f2c28519d9d3fb7e5.jpg`,
      `https://cdn.btch.bz/file/ab8228f9cafb39eaac95f.jpg`,
      `https://cdn.btch.bz/file/80c11974b1d3785dce2cb.jpg`,
      `https://cdn.btch.bz/file/6f37a45c2d84d3a71e22c.jpg`,
      `https://cdn.btch.bz/file/0219d45f56e2f726c4fda.jpg`,
      `https://cdn.btch.bz/file/6b9be986fdd364c01e1bf.jpg`,
      `https://cdn.btch.bz/file/ca180ec61582ebe6cf526.jpg`,
      `https://cdn.btch.bz/file/52b3cb57846bdab99201e.jpg`,
      `https://cdn.btch.bz/file/d3d22b77c031f68153595.jpg`,
      `https://cdn.btch.bz/file/86dfa8aa538adc0d2af1a.jpg`,
      `https://cdn.btch.bz/file/44d9f87704e53bda248f0.jpg`,
      `https://cdn.btch.bz/file/f08960a7deddc890cc581.jpg`,
      `https://cdn.btch.bz/file/8276502ad6879158cef80.jpg`,
      `https://cdn.btch.bz/file/0a5ffe14f724915967aff.jpg`,
      `https://cdn.btch.bz/file/3749e889f7b250ba3b03f.jpg`,
      `https://cdn.btch.bz/file/904ef3c27729da77b821a.jpg`,
      `https://cdn.btch.bz/file/8dd2bc35b60633fc88efa.jpg`,
      `https://cdn.btch.bz/file/2d151c4f1de276328d17f.jpg`,
      `https://cdn.btch.bz/file/a8b88cd514f783e71b65e.jpg`,
      `https://cdn.btch.bz/file/7d4f26c48046e1de27e72.jpg`,
      `https://cdn.btch.bz/file/f90ec0df1553b96c63b95.jpg`,
      `https://cdn.btch.bz/file/5e8147f78abce1952f886.jpg`,
      `https://cdn.btch.bz/file/3735caa10cd0163408538.jpg`,
      `https://cdn.btch.bz/file/6d5172e36df689d8742ea.jpg`,
      `https://cdn.btch.bz/file/a6e35c25633e98a56e61d.jpg`,
      `https://cdn.btch.bz/file/039a658c499d40b0ba50d.jpg`,


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
      m.reply('Maaf, foto michie tidak ditemukan :b\ncie gagal simp');
      await conn.sendMessage(m.chat, {
        react: {
            text: '😞',
            key: m.key,
        }
    })
    }
  }
  
  handler.help = ['michie']
  handler.tags = ['downloader']
  handler.command = /^michie$/i
  handler.owner = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  module.exports = handler
  