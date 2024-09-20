let fetch = require("node-fetch");
let uploadImage = require("../lib/uploadImage.js");

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `*• Example :* ${usedPrefix + command} *reply/ kirim gambar untuk di blur*`;
  m.reply(wait);
  let media = await q.download();
  let url = await uploadImage(media);
  let hasil = await (
    await fetch(`https://widipe.com/blur?url=${url}`)
  ).buffer();
  await conn.sendFile(m.chat, hasil, "", 'done', m);
};
handler.help = ["blur"];
handler.tags = ["tools"];
handler.command = ["blur"];
handler.limit = true;

module.exports = handler;