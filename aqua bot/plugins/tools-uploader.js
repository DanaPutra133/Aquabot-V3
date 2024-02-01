const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let fileSizeLimit = 5 * 1024 * 1024 
  if (media.length > fileSizeLimit) {
    throw 'Ukuran media tidak boleh melebihi 5MB'
  }
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Expired 24 hours)'}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
handler.group = true
handler.limit = 1

module.exports = handler
