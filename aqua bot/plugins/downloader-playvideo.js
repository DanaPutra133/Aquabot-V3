let search = require("yt-search");
let axios = require("axios");

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw 'Enter Title / Link From YouTube!';
    try {
      m.reply('tunggu ya kak\n> musik sedang di cari...');
        const look = await search(text);
        const convert = look.videos[0];
        if (!convert) throw 'Video/Audio Tidak Ditemukan';
        if (convert.seconds >= 3600) {
            return conn.reply(m.chat, 'Video is longer than 1 hour!', m);
        } else {
            let videoUrl;
            try {
                videoUrl = await youtube(convert.url);
            } catch (e) {
                conn.reply(m.chat, 'Please wait...', m);
                videoUrl = await youtube(convert.url);
            }

            let caption = '';
            caption += `∘ Title : ${convert.title}\n`;
            caption += `∘ Ext : Search\n`;
            caption += `∘ ID : ${convert.videoId}\n`;
            caption += `∘ Duration : ${convert.timestamp}\n`;
            caption += `∘ Viewers : ${convert.views}\n`;
            caption += `∘ Upload At : ${convert.ago}\n`;
            caption += `∘ Author : ${convert.author.name}\n`;
            caption += `∘ Channel : ${convert.author.url}\n`;
            caption += `∘ Url : ${convert.url}\n`;
            caption += `∘ Description : ${convert.description}\n`;
            caption += `∘ Thumbnail : ${convert.image}`;

            await conn.relayMessage(m.chat, {
                extendedTextMessage: {
                    text: caption,
                    contextInfo: {
                        externalAdReply: {
                            title: convert.title,
                            mediaType: 1,
                            previewType: 0,
                            renderLargerThumbnail: true,
                            thumbnailUrl: convert.image,
                            sourceUrl: videoUrl.mp4
                        }
                    },
                    mentions: [m.sender]
                }
            }, {});

            await conn.sendMessage(m.chat, {
                video: {
                    url: videoUrl.result.mp4
                },
                mimetype: 'video/mp4',
                contextInfo: {
                    externalAdReply: {
                        title: convert.title,
                        body: "",
                        thumbnailUrl: convert.image,
                        sourceUrl: videoUrl.mp4,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
        }
    } catch (e) {
        conn.reply(m.chat, `*Error:* ` + e, m);
    }
};

handler.command = handler.help = ['playvid'];
handler.tags = ['downloader'];

handler.limit = true;
handler.premium = false;

module.exports = handler;

async function youtube(url) {
   try {
   const { data } = await axios.get("https://api.betabotz.eu.org/api/download/ytmp4?url="+url+"&apikey="+lann)
   return data;
   } catch (e) {
   return e;
   }
}

//Jika mau pake module ytdl pake ini hilangin tag  /* */
/*let ytdl = require('ytdl-core');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let search = require ('yt-search');

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*example*: .play Lathi');
  try {
    let results = await search(text);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;       
    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = './tmp/' + title + '.webm';
    let outputFilePath = './tmp/' + title + '.mp3';
    let viewsFormatted = formatViews(views);
    let infoText = `◦ *Title*: ${title}\n◦ *Duration*: ${durationText}\n◦ *Upload*: ${uploadDate}\n◦ *Views*: ${viewsFormatted}\n◦ *ID*: ${videoId}\n◦ *Description*: ${description}\n◦ *URL*: ${url}
  `;
    const pesan = conn.relayMessage(m.chat, {
                extendedTextMessage:{
                text: infoText, 
                contextInfo: {
                     externalAdReply: {
                        title: wm,
                        body: "",
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: thumbnailUrl,
                        sourceUrl: url
                    }
                }, mentions: [m.sender]
}}, {});

    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let buffer = fs.readFileSync(outputFilePath);                    
          conn.sendMessage(m.chat, {         
                audio: buffer,
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: "",
                        thumbnailUrl: thumbnailUrl,
                        sourceUrl: url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          m.reply(`There was an error converting the audio: ${err.message}`);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });
  } catch (e) {
    console.log(e);
    m.reply(`An error occurred while searching for the song: ${e.message}`);
  }
};

handler.command = handler.help = ['play', 'song', 'ds'];
handler.tags = ['downloader'];
handler.premium = false;
handler.limit = false;

module.exports = handler

function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}
*/