const axios = require('axios');
const { generateWAMessageContent, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys');

let handler = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) throw `*🚩 Example:* ${usedPrefix}${command} pohon`;
  m.reply('Please wait...');

  try {
    // Fetch data from Pinterest
    let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${args[0]}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${args[0]}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let res = data.resource_response.data.results.map(v => v.images.orig.url);
   let nem = await conn.getName(m.sender)

    if (res.length < 1) return m.reply("Error, Foto Tidak Ditemukan");

    // Mengacak urutan array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Mengacak hasil dan mengambil hingga 5 gambar
    shuffleArray(res);
    let limit = Math.min(10, res.length);
    let images = res.slice(0, limit);
    let videos = res.slice(0, limit);

    let push = [];
    let i = 1;

    // Fungsi untuk membuat pesan gambar
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, {
        upload: conn.waUploadToServer
      });
      return imageMessage;
    }

    for (let pus of images) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `${pus}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: global.footer
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '',
          hasMediaAttachment: true,
          imageMessage: await createImage(pus)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: `{"display_text":"Lihat Gambar","cta_type":"1","url":"${pus}"}`
            },
            {
                  "name": "quick_reply",
                  "buttonParamsJson": JSON.stringify({
                    "display_text": "SEARCH AGAIN",
                    "id": `${usedPrefix + command}` + command
                  })
                }
          ]
        })
      });
    }
    async function createVideo(url) {
      const { videoMessage } = await generateWAMessageContent({
        video: { url }
      }, {
        upload: conn.waUploadToServer
      });
      return videoMessage;
    }

    for (let pus of videos) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `${pus}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: global.footer
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '',
          hasMediaAttachment: true,
          videoMessage: await createVideo(pus)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: `{"display_text":"Lihat Video","cta_type":"1","url":"${pus}"}`
            },
            {
                  "name": "quick_reply",
                  "buttonParamsJson": JSON.stringify({
                    "display_text": "SEARCH AGAIN",
                    "id": `${usedPrefix + command}` + command
                  })
                }
          ]
        })
      });
    }

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `total result: ${limit}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: `Hai\nDibawah ini Adalah hasil dari Pencarian Dari:\n${nem}`
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [
                ...push
              ]
            })
          })
        }
      }
    }, { quoted: m });

    await conn.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
    //await conn.sendMessage(m.chat, { audio: { url: './mp3/menuu12.mp3' }, viewOnce: false, seconds: fsizedoc, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100,0,100,0,100,0,100] }, { quoted: m })
  } catch (e) {
    throw `Error: ${e.message}`;
  }
};

handler.help = handler.command = ['pinterest2', 'pin2'];
handler.tags = ['internet', 'downloader'];
handler.limit = 5

module.exports = handler;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}